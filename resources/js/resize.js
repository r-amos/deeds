export default (currentIndex) => {
    // let quoteContainer = document.getElementById(
    //     `quote-container-${currentIndex}`
    // );
    let paragraph = document.getElementById(`quote-${currentIndex}`);
    paragraph.style.fontSize = "200px";

    // let height = quoteContainer.clientHeight;

    let currentSize = 150;

    // let whatever = parseFloat(height) - 90;

    // let counter = 1;

    // while (parseFloat(paragraph.clientHeight) > whatever && counter < 100) {
    //     console.log(parseFloat(paragraph.clientHeight));
    //     console.log(whatever);
    //     counter++;
    //     currentSize = currentSize - 2;
    //     paragraph.style.fontSize = currentSize + "px";
    // }

    let quoteContainer = document.getElementById(`container-${currentIndex}`);

    let width = Math.round(quoteContainer.clientWidth / 2);
    let height = quoteContainer.clientHeight;

    while (
        parseFloat(paragraph.scrollHeight) > height ||
        parseFloat(paragraph.clientWidth) > width
    ) {
        console.log(parseFloat(paragraph.scrollHeight));
        console.log(parseFloat(paragraph.clientWidth));

        currentSize = currentSize - 2;
        paragraph.style.fontSize = currentSize + "px";
    }
};
