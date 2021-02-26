import getRandomIntInclusive from "./random";
import preloadQuoteImages from "./preload";
import resizeText from "./resize";
import randomPosition from "./randomPosition";

let interval;
let outroAnimation;

const currentContainer = document.getElementById("current");

function setStyle(element, propertyObject) {
    for (var property in propertyObject)
        element.style[property] = propertyObject[property];
}

const styleNextQuote = (quoteElement) => {
    const { position, outro } = randomPosition();
    outroAnimation = outro;
    setStyle(quoteElement, {
        position: "absolute",
        top: 0,
        transform: position,
        zIndex: 10,
    });
};

const appendNext = () => {
    const nextQuote = quotes.shift();
    currentContainer.insertAdjacentHTML("beforeEnd", nextQuote.template);
    styleNextQuote(document.getElementById(`${nextQuote.index}`));
};

appendNext();

window.onload = () => {
    resizeText(currentContainer.children[0].id);
    preloadQuoteImages(quotes, () => {
        setTimeout(() => {
            interval = setInterval(changeImage, 6000000);
            const cover = document.getElementById("cover");
            cover.style.transform = "translate(0,-100%)";
            setTimeout(() => (cover.style.display = "none"), 500);
        }, 500);
    });
};

const changeImage = () => {
    let [currentQuote, nextQuote] = Array.from(currentContainer.children);
    let nextIndex = nextQuote.id;

    if (getRandomIntInclusive(0, 1) === 1) {
        nextQuote
            .querySelector(`#container-${nextIndex}`)
            .classList.add("xl:flex-row-reverse");
    }

    currentQuote.style.transform = outroAnimation;
    nextQuote.style.transform = "translate(0,0)";
    nextQuote.classList.remove("hidden");

    resizeText(nextIndex);
    if (quotes.length % 5 === 0) {
        fetch(apiUrl)
            .then((x) => x.json())
            .then((newQuotes) => {
                preloadQuoteImages(newQuotes);
                quotes = [...quotes, ...newQuotes];
            });
    }
    appendNext();
    setTimeout(() => {
        currentContainer.removeChild(currentQuote);
    }, 500);
};

let onRefresh = (element) => {
    element.addEventListener("click", (e) => {
        clearInterval(interval);
        interval = setInterval(changeImage, 600000);
        e.preventDefault();
        changeImage();
    });
};

onRefresh(currentContainer);
