export class Quotes {
    constructor() {}
    static build({ index, quote, img, colour }) {
        this.index = index;
        this.author = quote.author;
        this.text = quote.text;
        this.img = img;
        this.colour = colour;
        this.template = quote.template;
    }
}
