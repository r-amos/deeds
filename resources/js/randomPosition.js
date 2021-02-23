import getRandomIntInclusive from "./random";

let position = {
    above: "translate(0,-100%)",
    right: "translate(100%, 0)",
    below: "translate(0,100%)",
    left: "translate(-100%,0)",
};

let outro = {
    above: "translate(0,100%)",
    right: "translate(-100%,0)",
    below: "translate(0,-100%)",
    left: "translate(100%, 0)",
};

export default () => {
    const randomAnimation = Object.keys(position)[getRandomIntInclusive(0, 3)];
    return {
        position: position[randomAnimation],
        outro: outro[randomAnimation],
    };
};
