import {AnimatedH, AnimatedA, AnimatedS, AnimatedN, AnimatedK, AnimatedE, AnimatedG, AnimatedM, AnimatedO, AnimatedV, AnimatedR, UPDATE_TIME} from './letter.js';

function _loadIntroPoster(poster, cellSide, posterHeight) {
    poster.push(new AnimatedH(cellSide, 1,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6,  posterHeight));
    poster.push(new AnimatedS(cellSide, 11, posterHeight));
    poster.push(new AnimatedH(cellSide, 16, posterHeight));
    poster.push(new AnimatedN(cellSide, 21, posterHeight));
    poster.push(new AnimatedA(cellSide, 26, posterHeight));
    poster.push(new AnimatedK(cellSide, 31, posterHeight));
    poster.push(new AnimatedE(cellSide, 36, posterHeight));
}

function _loadGameOverPoster(poster, cellSide, posterHeight) {
    poster.push(new AnimatedG(cellSide, 1,  posterHeight));
    poster.push(new AnimatedA(cellSide, 6,  posterHeight));
    poster.push(new AnimatedM(cellSide, 11, posterHeight));
    poster.push(new AnimatedE(cellSide, 16, posterHeight));
    poster.push(new AnimatedO(cellSide, 21, posterHeight));
    poster.push(new AnimatedV(cellSide, 26, posterHeight));
    poster.push(new AnimatedE(cellSide, 31, posterHeight));
    poster.push(new AnimatedR(cellSide, 36, posterHeight));
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

function Poster(cellSide, posterHeight, loadingFunction)  {
    this.poster = [];

    loadingFunction(this.poster, cellSide, posterHeight);

    this.drawingTime = _getPosterDrawingTime(this.poster);

    this.draw = function (screenContext, color) {
        for (const letter of this.poster)
            letter.draw(screenContext, color);
        //Dont know if is the best way. I wait some suggestions to correct
        return new Promise(resolve => setTimeout(resolve, this.drawingTime));
    }
}

export function Intro(cellSide, posterHeight) {
    Poster.call(this, cellSide, posterHeight, _loadIntroPoster);
}

export function GameOver(cellSide, posterHeight) {
    Poster.call(this, cellSide, posterHeight, _loadGameOverPoster);
}