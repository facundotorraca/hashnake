/*-----------------IMPORTS----------------*/
import {Food} from './food.js';
import {Snake} from './snake.js';
import {Screen} from './screen.js';
import {SoundPlayer} from "./soundplayer.js";
import * as Rules  from './rules.js';

/*---------------CONSTANTS----------------*/
const INITIAL_SNAKE_SIZE = 3;
const REFRESH_TIME = 100; //15 FPS

/*------------GAME-VARIABLES-------------*/
let food = undefined;
let snake = undefined;
let screen = undefined;
let movement = undefined;
let playerOnGame = false;
let soundplayer = undefined;
let firstTimeNewRecord = undefined;

$(document).ready(() => {
    //Orientation change handler
    window.addEventListener('orientationchange', () => handleOrientationChange());

    //Arrow handlers
    $('.up-arrow').on('click', () => handleArrowButton(Rules.UP));
    $('.down-arrow').on('click', () => handleArrowButton(Rules.DOWN));
    $('.left-arrow').on('click', () => handleArrowButton(Rules.LEFT));
    $('.right-arrow').on('click', () => handleArrowButton(Rules.RIGHT));

    //Button handlers
    $('.a-button').on('click', () => handleAButton());

    playGame(true/*first time*/);
});

$(document).keydown((e) => {
    let newMove = e.code;

    if (newMove === 'Space') {
        handleAButton();
        e.preventDefault(); //Prevent the default action (scroll)
    }

    if (_isArrow(newMove)) {
        handleArrowButton(newMove);
        e.preventDefault(); //Prevent the default action (scroll)
    }
});

/*-------------HANDLERS-------------------*/
function handleOrientationChange() {
    location.reload();
}

function handleArrowButton(newMove) {
    if (Rules.movementIsAllowed(newMove, movement)) {
        soundplayer.moveSound.play();
        movement = newMove;
    }
}

function handleAButton() {
    if (!screen.isDisplayingAnimation && !playerOnGame) {
        soundplayer.replayBackground();
        continueGame();
    }
}

/*-------------HASHNAKE------------------*/
function initializeGame() {
    restartScore();
    setLastRecord();
    movement = Rules.RIGHT;
    soundplayer = new SoundPlayer();
    screen = new Screen($('#screen'), window);
    food = new Food(screen.bounds);
    snake = new Snake(screen.snakeBeginPosition);
    firstTimeNewRecord = true;
}

async function playGame(firstTime) {
    initializeGame();
    if (firstTime)
        await screen.drawIntroPoster();
    else
        await screen.drawGameOverPoster();
}

async function restartGame() {
    playerOnGame = false;
    playGame(false/*first time*/);
}

function continueGame() {
    playerOnGame = true;
    setTimeout(() => {
        screen.clear();
        screen.drawFood(food);
        snake.move(movement, screen.cellSide);
        if (snake.ate(food)) {
            food = new Food(screen.bounds);
            snake.grow();
            increaseScore();
            soundplayer.growSound.play();
        }
        screen.drawSnake(snake);
        if (Rules.snakeIsAlive(snake, screen))
            continueGame();
        else {
            soundplayer.background.pause();
            soundplayer.deathSound.play();
            soundplayer.gameoverSound.play();
            restartGame();
        }
    }, REFRESH_TIME);
}

function increaseScore() {
    let score = _getScore();
    _setScoreValue(score);
    if (score > _getRecord()) {
        _setRecordValue(score);
        if (firstTimeNewRecord) {
            soundplayer.highscoreSound.play();
            firstTimeNewRecord = false;
        }
    }
}

function setLastRecord() {
    let record = _getRecord();
    _setRecordValue(record);
}

function restartScore() {
    _setScoreValue(0);
}

/*-------------AUXILIARY-FUNCTIONS-----------*/
function _setScoreValue(value) {
    $('.score').text('score: ' + value);
}

function _getScore() {
    return snake.getSize() - INITIAL_SNAKE_SIZE;
}

function _setRecordValue(value) {
    sessionStorage.setItem('record', value);
    $('.record').text('record: ' + value);
}

function _getRecord() {
    let record = sessionStorage.getItem('record');
    return (record) ? record : 0;
}

function _isArrow(newMove) {
    if (newMove === 'ArrowUp')
        return true;
    if (newMove === 'ArrowDown')
        return true;
    if (newMove === 'ArrowLeft')
        return true;
    if (newMove === 'ArrowRight')
        return true;
    return false;
}