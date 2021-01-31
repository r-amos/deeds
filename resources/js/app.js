require("alpinejs");

console.log(quotes[0]);

let cover = document.createElement("div");
cover.height = "100%";
cover.width = "100%";
cover.style.position = "absolute";
cover.style.left = 0;
cover.style.top = 0;
cover.style.width = "100%";
cover.style.height = "100%";
cover.style.backgroundColor = "white";
cover.style.zIndex = 1000;
document.body.appendChild(cover);

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

    let quoteContainer = document.getElementById("quote");
    let paragraph = document.getElementById("quote-1");
    paragraph.style.fontSize = "200px";

    let height = quoteContainer.clientHeight;

    let currentSize = 200;

    let whatever = parseFloat(height) - 20;

    while (parseFloat(paragraph.clientHeight) > whatever) {
        currentSize = currentSize - 10;
        paragraph.style.fontSize = currentSize + "px";
    }

    document.body.removeChild(cover);
};

document.getElementById("refresh").addEventListener("click", function (e) {
    e.preventDefault();

    let c = document.getElementById("container");

    let qc = document.getElementById("quote-container");
    let ic = document.getElementById("image-container");
    ic.classList.add("w-full");
    ic.style.visibility = "hidden";

    // var elementToCover = c;
    // var rect = elementToCover.getBoundingClientRect();
    // var overlayElement = document.createElement("div");
    // overlayElement.style.position = "absolute";
    // overlayElement.style.zIndex = "999";
    // overlayElement.style.width = "100%";
    // overlayElement.style.height = "100%";
    // overlayElement.style.top = 0 + "px";
    // overlayElement.style.left = 0 + "px";
    // // overlayElement.style.width = rect.right - rect.left + "px";
    // // overlayElement.style.height = rect.bottom - rect.top + "px";
    // overlayElement.style.backgroundColor = "red";
    // //overlayElement.classList.add("rotate-in-center");
    // document.body.appendChild(overlayElement);

    if (Math.round(Math.random())) {
        c.classList.add("flex-row-reverse");
    } else {
        c.classList.remove("flex-row-reverse");
    }

    //if (quotes.length) {
    console.log("Do Something");

    let x = quotes.shift();

    console.log("Old Colour is: " + colour);
    console.log("New Colour Is " + x.colour);

    if (colour !== x.colour) {
        [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`].forEach(
            (y) => {
                Array.from(
                    document.getElementsByClassName(`bg-${colour}-${y}`)
                ).forEach((z) => {
                    z.classList.add(`bg-${x.colour}-${y}`);
                    z.classList.remove(`bg-${colour}-${y}`);
                });
            }
        );

        [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`].forEach(
            (y) => {
                Array.from(
                    document.getElementsByClassName(`text-${colour}-${y}`)
                ).forEach((z) => {
                    z.classList.add(`text-${x.colour}-${y}`);
                    z.classList.remove(`text-${colour}-${y}`);
                });
            }
        );
    }

    colour = x.colour;
    document.getElementById("image").src = x.image;
    let img = new Image();
    img.onload = () => {
        setTimeout(() => {
            ic.classList.remove("w-full");
            ic.style.visibility = "visible";
            //document.body.removeChild(overlayElement);
        }, 1000);
    };
    img.src = x.image;
    document.getElementById("quote-1").innerText = x.quote;
    document.getElementById("author").innerText = x.author;
    document.documentElement.style.setProperty("--overlay", x.overlay);

    // Text Size
    let quoteContainer = document.getElementById("quote");
    let paragraph = document.getElementById("quote-1");
    paragraph.style.fontSize = "200px";

    let height = quoteContainer.clientHeight;

    let currentSize = 200;

    let whatever = parseFloat(height) - 20;

    while (parseFloat(paragraph.clientHeight) > whatever) {
        currentSize = currentSize - 10;
        paragraph.style.fontSize = currentSize + "px";
    }
    //} else {
    fetch("http://localhost/api/daily")
        .then((x) => x.json())
        .then((x) => {
            quotes.push({
                author: x.quote.author,
                quote: x.quote.text,
                image: x.url,
                colour: x.colour,
                overlay: x.overlay,
            });
            // [
            //     `100`,
            //     `200`,
            //     `300`,
            //     `400`,
            //     `500`,
            //     `600`,
            //     `700`,
            //     `800`,
            //     `900`,
            // ].forEach((y) => {
            //     Array.from(
            //         document.getElementsByClassName(`bg-${colour}-${y}`)
            //     ).forEach((z) => {
            //         z.classList.add(`bg-${x.colour}-${y}`);
            //         z.classList.remove(`bg-${colour}-${y}`);
            //     });
            // });
            // [
            //     `100`,
            //     `200`,
            //     `300`,
            //     `400`,
            //     `500`,
            //     `600`,
            //     `700`,
            //     `800`,
            //     `900`,
            // ].forEach((y) => {
            //     Array.from(
            //         document.getElementsByClassName(`text-${colour}-${y}`)
            //     ).forEach((z) => {
            //         z.classList.add(`text-${x.colour}-${y}`);
            //         z.classList.remove(`text-${colour}-${y}`);
            //     });
            // });
            // colour = x.colour;
            // document.getElementById("image").src = x.url;
            // let img = new Image();
            // img.onload = () => {
            //     document.body.removeChild(overlayElement);
            // };
            // img.src = x.url;
            // document.getElementById("quote-1").innerText = x.quote.text;
            // document.getElementById("author").innerText = x.quote.author;
            // document.documentElement.style.setProperty(
            //     "--overlay",
            //     x.overlay
            // );
            // // Text Size
            // let quoteContainer = document.getElementById("quote");
            // let paragraph = document.getElementById("quote-1");
            // paragraph.style.fontSize = "200px";
            // let height = quoteContainer.clientHeight;
            // let currentSize = 200;
            // let whatever = parseFloat(height) - 20;
            // while (parseFloat(paragraph.clientHeight) > whatever) {
            //     currentSize = currentSize - 10;
            //     paragraph.style.fontSize = currentSize + "px";
            // }
        });
    //}
});
