require("alpinejs");

console.log(quotes[0]);

let currentIndex = 1;

let cover = document.createElement("div");
cover.height = "100%";
cover.width = "100%";
cover.style.position = "absolute";
cover.style.left = 0;
cover.style.top = 0;
cover.style.width = "100%";
cover.style.height = "100%";
cover.style.backgroundColor = "red";
cover.style.zIndex = 1000;
document.body.appendChild(cover);


let quoteIndex = 0;

const  appendNext = () =>  {

    document.getElementById('current').insertAdjacentHTML('beforeEnd', quotes[quoteIndex].template)
    // document.getElementById('newb').classList.add('slider');
    let nw = document.getElementById(`${quotes[quoteIndex].index}`);
    console.log(nw, quotes[quoteIndex]);
    nw.style.position = 'absolute';
    nw.style.top = 0;    
    //.innerHTML = quotes[0].template;
    nw.style.transform = "translate(0,-100%)";
    nw.style.zIndex = 10;
    quoteIndex++;
}

appendNext();



const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

window.onload = function () {
    document.documentElement.style.setProperty("--overlay", overlay);

    let quoteContainer = document.getElementById(`quote-container-${currentIndex}`);
    let paragraph = document.getElementById(`quote-${currentIndex}`);
    paragraph.style.fontSize = "200px";

    let height = quoteContainer.clientHeight;

    let currentSize = 200;

    let whatever = parseFloat(height) - 20;

    while (parseFloat(paragraph.clientHeight) > whatever) {
        currentSize = currentSize - 2;
        paragraph.style.fontSize = currentSize + "px";
    }

    let imagesLoaded = 0;

    quotes = quotes.map((q, i) =>  {
        const img = new Image;
        img.src = q.image;
        q.image = img;

            img.onload =  () => {
                ++imagesLoaded;
                console.log(imagesLoaded);
                if (imagesLoaded === (quotes.length -1)) {
                    document.body.removeChild(cover);
                }
            }
        
        return q;
    });

    console.log(quotes);
};

let onRefresh = (element) => {

        element.addEventListener("click", function (e) {

        console.log(e);

        e.preventDefault();
    
        document.getElementById(`${currentIndex}`).style.transform = "translate(0,100%)";
        document.getElementById(`${currentIndex + 1}`).style.transform = "translate(0,0)";
    
        let quoteContainer = document.getElementById(`quote-container-${currentIndex +1}`);
        let paragraph = document.getElementById(`quote-${currentIndex +1}`);
        paragraph.style.fontSize = "200px";
        let height = quoteContainer.clientHeight;
        let currentSize = 80;
        let whatever = parseFloat(height) - 20;
        while (parseFloat(paragraph.clientHeight) > whatever) {
            currentSize = currentSize - 2;
            paragraph.style.fontSize = currentSize + "px";
        }

        fetch("http://localhost:8000/api/daily")
        .then((x) => x.json())
        .then((x) => {
            console.log(x);
            const img = new Image;
            img.src = x.url;
            quotes.push({
                index : quotes.length + 1,
                author: x.quote.author,
                quote: x.quote.text,
                image: img,
                colour: x.colour,
                overlay: x.overlay,
            });
        });
        currentIndex++;
        appendNext();

        //setTimeout(() =>  document.documentElement.style.setProperty("--overlay", quotes[currentIndex]['overlay']), 250);
    
        setTimeout(() => {

            document.getElementById('current').removeChild(document.getElementById(currentIndex -1));
        }, 500);
    });
};

onRefresh(document.getElementById('current'));


