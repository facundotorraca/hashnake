import {Coordinate} from "./coordinate.js";

export const UPDATE_TIME = 100;
const LETTER_BODY_CHAR = '#';

/*-----------AUXILIARY-_FUNCTIONS---------*/
function __isSimultaneousDraw(coordinates) {
    return coordinates.length === 2;
}

function __drawLetterPart(context, cellSide, position) {
    let x = position.x;
    let y = position.y - cellSide; //Center the letter on the grid
    context.fillText(LETTER_BODY_CHAR, x, y);
}

/*------AUXILIARY-LOADING_FUNCTIONS-------*/
function _loadH(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push([new Coordinate((x+3)*cellSide, (y+2)*cellSide),
                new Coordinate((x+3)*cellSide, (y+4)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y+1)*cellSide),
                new Coordinate((x+3)*cellSide, (y+5)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y)*cellSide),
                new Coordinate((x+3)*cellSide, (y+6)*cellSide)]);
}

function _loadA(array, cellSide, x, y) {
    array.push(new Coordinate(x*cellSide, (y+6)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+5)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+4)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+3)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+2)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+1)*cellSide));
    array.push(new Coordinate(x*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
}

function _loadS(array, cellSide, x, y) {
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
}

function _loadN(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push([new Coordinate((x+3)*cellSide, (y+2)*cellSide),
                new Coordinate((x+3)*cellSide, (y+4)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y+1)*cellSide),
                new Coordinate((x+3)*cellSide, (y+5)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y)*cellSide),
                new Coordinate((x+3)*cellSide, (y+6)*cellSide)]);
}

function _loadK(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push([new Coordinate((x+2)*cellSide, (y+2)*cellSide),
                new Coordinate((x+2)*cellSide, (y+4)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y+1)*cellSide),
                new Coordinate((x+3)*cellSide, (y+5)*cellSide)]);
    array.push([new Coordinate((x+3)*cellSide, (y)*cellSide),
                new Coordinate((x+3)*cellSide, (y+6)*cellSide)]);
}

function _loadE(array, cellSide, x, y) {
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
}

function _loadG(array, cellSide, x, y) {
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
}

function _loadM(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
}

function _loadO(array, cellSide, x, y) {
    array.push(new Coordinate(x*cellSide, (y+6)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+5)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+4)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+3)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+2)*cellSide));
    array.push(new Coordinate(x*cellSide, (y+1)*cellSide));
    array.push(new Coordinate(x*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+6)*cellSide));
}

function _loadV(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y)*cellSide));
}

function _loadR(array, cellSide, x, y) {
    array.push(new Coordinate((x)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x)*cellSide, (y+6)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+1)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+2)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+3)*cellSide));
    array.push(new Coordinate((x+1)*cellSide, (y+4)*cellSide));
    array.push(new Coordinate((x+2)*cellSide, (y+5)*cellSide));
    array.push(new Coordinate((x+3)*cellSide, (y+6)*cellSide));
}

/*-----------------LETTER-----------------*/
function Letter(cellSide) {
    this.position = [];
    this.cellSide = cellSide;

    this._currDrawIndex = 0;
    this._screenContext = undefined;

    this.draw = async function (screenContext, color) {
        this._currDrawIndex = 0;
        this._screenContext = screenContext;
        this._screenContext.fillStyle = color;

        this._drawRemainingLetter();
    };

    this.getDrawingTime = function () {
        return this.position.length * UPDATE_TIME;
    };

    this._drawRemainingLetter = function () {
        setTimeout(() => {
            this._drawCell(this._currDrawIndex);
            this._currDrawIndex++;
            if (!this._drawIsFinished())
                this._drawRemainingLetter(this._currDrawIndex);
        } ,UPDATE_TIME);
    };

    this._drawIsFinished = function () {
        return this._currDrawIndex >= this.position.length;
    };

    this._drawCell = function (i) {
        if (__isSimultaneousDraw(this.position[i])) {
            __drawLetterPart(this._screenContext, this.cellSide, this.position[i][0]);
            __drawLetterPart(this._screenContext, this.cellSide, this.position[i][1]);
        } else {
            __drawLetterPart(this._screenContext, this.cellSide, this.position[i]);
        }
    };
}

export function AnimatedH(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadH(this.position, cellSide, x, y);
}

export function AnimatedA(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadA(this.position, cellSide, x, y);

}

export function AnimatedS(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadS(this.position, cellSide, x, y);

}

export function AnimatedN(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadN(this.position, cellSide, x, y);
}

export function AnimatedK(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadK(this.position, cellSide, x, y);
}

export function AnimatedE(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadE(this.position, cellSide, x, y);
}

export function AnimatedG(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadG(this.position, cellSide, x, y);
}

export function AnimatedM(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadM(this.position, cellSide, x, y);
}

export function AnimatedO(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadO(this.position, cellSide, x, y);
}

export function AnimatedV(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadV(this.position, cellSide, x, y);
}

export function AnimatedR(cellSide, x, y) {
    Letter.call(this, cellSide);
    _loadR(this.position, cellSide, x, y);
}