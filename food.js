import {Coordinate} from "./coordinate.js";

function _getRandomIntBetween(a, b) {
    //Returns a random number between [a,b]
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function Food(spawnLimit) {
    //Use the convention from canvas: (0,0) top-left corner
    let x = _getRandomIntBetween(spawnLimit.left, spawnLimit.right);
    let y = _getRandomIntBetween(spawnLimit.top, spawnLimit.bottom);

    this.position = new Coordinate(x, y);
}