export default (currentIndex) => {
    let quoteContainer = document.getElementById(
        `quote-container-${currentIndex}`
    );
    let paragraph = document.getElementById(`quote-${currentIndex}`);
    paragraph.style.fontSize = "200px";

    let height = quoteContainer.clientHeight;

    let currentSize = 150;

    let whatever = parseFloat(height) - 10;

    while (parseFloat(paragraph.clientHeight) > whatever) {
        currentSize = currentSize - 2;
        paragraph.style.fontSize = currentSize + "px";
    }
};
