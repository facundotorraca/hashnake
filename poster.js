import {AnimatedH, AnimatedA, AnimatedS, AnimatedN, AnimatedK, AnimatedE,
        AnimatedG, AnimatedM, AnimatedO, AnimatedV, AnimatedR,
        UPDATE_TIME, LETTER_WIDTH, LETTER_HEIGHT} from './letter.js';

/*------AUXILIARY-LOADING_FUNCTIONS-------*/
function _loadIntroLandscape(poster, cellSide, posterHeight) {
    poster.push(new AnimatedH(cellSide, 1,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6,  posterHeight));
    poster.push(new AnimatedS(cellSide, 11, posterHeight));
    poster.push(new AnimatedH(cellSide, 16, posterHeight));
    poster.push(new AnimatedN(cellSide, 21, posterHeight));
    poster.push(new AnimatedA(cellSide, 26, posterHeight));
    poster.push(new AnimatedK(cellSide, 31, posterHeight));
    poster.push(new AnimatedE(cellSide, 36, posterHeight));
}

function _loadIntroPortrait(poster, cellSide, posterHeight, xOffset) {
    poster.push(new AnimatedH(cellSide, 1 + xOffset,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6 + xOffset,  posterHeight));
    poster.push(new AnimatedS(cellSide, 11 + xOffset, posterHeight));
    poster.push(new AnimatedH(cellSide, 16 + xOffset, posterHeight));
    poster.push(new AnimatedN(cellSide, 1 + xOffset, posterHeight + LETTER_HEIGHT + 1));
    poster.push(new AnimatedA(cellSide, 6 + xOffset, posterHeight + LETTER_HEIGHT +1));
    poster.push(new AnimatedK(cellSide, 11 + xOffset, posterHeight + LETTER_HEIGHT + 1));
    poster.push(new AnimatedE(cellSide, 16 + xOffset, posterHeight + LETTER_HEIGHT +1));
}

function _loadGameOverLandscape(poster, cellSide, posterHeight) {
    poster.push(new AnimatedG(cellSide, 1,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6,  posterHeight));
    poster.push(new AnimatedM(cellSide, 11, posterHeight));
    poster.push(new AnimatedE(cellSide, 16, posterHeight));
    poster.push(new AnimatedO(cellSide, 21, posterHeight));
    poster.push(new AnimatedV(cellSide, 26, posterHeight));
    poster.push(new AnimatedE(cellSide, 31, posterHeight));
    poster.push(new AnimatedR(cellSide, 36, posterHeight));
}

function _loadGameOverPortrait(poster, cellSide, posterHeight, xOffset) {
    poster.push(new AnimatedG(cellSide, 1 + xOffset,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6 + xOffset,  posterHeight));
    poster.push(new AnimatedM(cellSide, 11 + xOffset, posterHeight));
    poster.push(new AnimatedE(cellSide, 16 + xOffset, posterHeight));
    poster.push(new AnimatedO(cellSide, 1 + xOffset, posterHeight + LETTER_HEIGHT + 1));
    poster.push(new AnimatedV(cellSide, 6 + xOffset, posterHeight + LETTER_HEIGHT + 1));
    poster.push(new AnimatedE(cellSide, 11 + xOffset, posterHeight + LETTER_HEIGHT + 1));
    poster.push(new AnimatedR(cellSide, 16 + xOffset, posterHeight + LETTER_HEIGHT + 1));
}

/*----------AUXILIARY-FUNCTIONS-----------*/
function _getPosterDrawingTime(poster) {
    let maxDrawingTime = 0;
    for (const letter of poster) {
        if (letter.getDrawingTime() > maxDrawingTime)
            maxDrawingTime = letter.getDrawingTime();
    }
    //Add a piece of time to make the intro message
    //appear correctly
    return maxDrawingTime + 2 * UPDATE_TIME;
}

function _getScreenOrientation(screenSize) {
    return (screenSize.height > screenSize.width) ? 'portrait' : 'landscape';
}

/*-----------------POSTER-----------------*/
function Poster(totalLetters) {
    this._poster = [];
    this._totalLetters = totalLetters;

    this.draw = function (screenContext, color) {
        let drawingTime = _getPosterDrawingTime(this._poster);

        for (const letter of this._poster)
            letter.draw(screenContext, color);
        //Dont know if is the best way. I wait some suggestions to correct
        return new Promise(resolve => setTimeout(resolve, drawingTime));
    }
}

export function Intro(cellSide, posterHeight, screenSize) {
    Poster.call(this, 8);

    let screenOrientation = _getScreenOrientation(screenSize);

    if (screenOrientation === 'portrait') {
        let lineCells = screenSize.width / cellSide;
        let portraitLineLetters = Math.floor(this._totalLetters / 2);
        let lineLength = (portraitLineLetters * LETTER_WIDTH) + 3;/*spaces*/
        let xOffset = Math.floor((lineCells % lineLength)/2 - 1);
        _loadIntroPortrait(this._poster, cellSide, posterHeight, xOffset);
    } else {
        _loadIntroLandscape(this._poster, cellSide, posterHeight);
    }
}

export function GameOver(cellSide, posterHeight, screenSize) {
    Poster.call(this, 8);

    let screenOrientation = _getScreenOrientation(screenSize);

    if (screenOrientation === 'portrait') {
        let lineCells = screenSize.width / cellSide;
        let portraitLineLetters = Math.floor(this._totalLetters / 2);
        let lineLength = (portraitLineLetters * LETTER_WIDTH) + 3;/*spaces*/
        let xOffset = Math.floor((lineCells % lineLength)/2 - 1);
        _loadGameOverPortrait(this._poster, cellSide, posterHeight, xOffset);
    } else {
        _loadGameOverLandscape(this._poster, cellSide, posterHeight);
    }
}