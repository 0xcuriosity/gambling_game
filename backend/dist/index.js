"use strict";
const mapping = {
    0: "R",
    1: "L",
};
const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 2);
};
function numberToDirection(num) {
    if (randomNumberGenerator() == 0) {
        return "R";
    }
    else {
        return "L";
    }
}
function main() {
    const arr = [];
    for (let i = 0; i < 16; i++) {
        arr.push(numberToDirection(randomNumberGenerator()));
    }
    console.log(arr);
}
main();
