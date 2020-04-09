import {AnimatedH, AnimatedA, AnimatedS, AnimatedN, AnimatedK, AnimatedE, AnimatedG, AnimatedM, AnimatedO, AnimatedV, AnimatedR, UPDATE_TIME} from './letter.js';

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
    poster.push(new AnimatedN(cellSide, 1 + xOffset, posterHeight + 8));
    poster.push(new AnimatedA(cellSide, 6 + xOffset, posterHeight + 8));
    poster.push(new AnimatedK(cellSide, 11 + xOffset, posterHeight + 8));
    poster.push(new AnimatedE(cellSide, 16 + xOffset, posterHeight + 8));
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
    poster.push(new AnimatedO(cellSide, 1 + xOffset, posterHeight + 8));
    poster.push(new AnimatedV(cellSide, 6 + xOffset, posterHeight + 8));
    poster.push(new AnimatedE(cellSide, 11 + xOffset, posterHeight + 8));
    poster.push(new AnimatedR(cellSide, 16 + xOffset, posterHeight + 8));
}

function _getPosterDrawingTime(poster) {
    let maxDrawingTime = 0;
    for (const letter of poster) {
        if (letter.getDrawingTime() > maxDrawingTime)
            maxDrawingTime = letter.getDrawingTime();
    }
    //Add a piece of time to make the intro message
    //appear correctly
    return maxDrawingTime + UPDATE_TIME;
}

function _getScreenOrientation(screenSize) {
    return (screenSize.height > screenSize.width) ? 'portrait' : 'landscape';
}

function Poster(cellSide, posterHeight, screenSize, portraitLoadingFunction, landscapeLoadingFunction) {
    this.poster = [];

    if (_getScreenOrientation(screenSize) === 'portrait') {
        //It only works for 8 letters posters (19 is half word -> 4*4(sizeLetter) + 3 (spaces)
        let lineCells = screenSize.width / cellSide;
        let xOffset = Math.floor((lineCells % 19)/2 - 1);
        portraitLoadingFunction(this.poster, cellSide, posterHeight, xOffset);
    } else {
        landscapeLoadingFunction(this.poster, cellSide, posterHeight);
    }

    this.drawingTime = _getPosterDrawingTime(this.poster);

    this.draw = function (screenContext, color) {
        for (const letter of this.poster)
            letter.draw(screenContext, color);
        //Dont know if is the best way. I wait some suggestions to correct
        return new Promise(resolve => setTimeout(resolve, this.drawingTime));
    }
}

export function Intro(cellSide, posterHeight, screenSize) {
    Poster.call(this, cellSide, posterHeight, screenSize, _loadIntroPortrait, _loadIntroLandscape);
}

export function GameOver(cellSide, posterHeight, screenSize) {
    Poster.call(this, cellSide, posterHeight, screenSize, _loadGameOverPortrait, _loadGameOverLandscape);
}