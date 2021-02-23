export default (quotes, cb) => {
    let imagesLoaded = 0;
    quotes.forEach((quote) => {
        const img = new Image();
        img.src = quote.image;
        quote.image = img;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === quotes.length - 1) {
                if (typeof cb === "function") {
                    cb();
                }
            }
        };
        return quote;
    });
};
