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

    if (Rules.movementIsAllowed(newMove, movement)) {
        movement = newMove;
        e.preventDefault(); //Prevent the default action (scroll)
    }
});

/*-------------HANDLERS-------------------*/
function handleOrientationChange() {
    location.reload();
}

function handleArrowButton(newMove) {
    if (Rules.movementIsAllowed(newMove, movement))
        movement = newMove;
}

function handleAButton() {
    if (!screen.isDisplayingAnimation && !playerOnGame)
        continueGame();
}

/*-------------HASHNAKE------------------*/
function initializeGame() {
    restartScore();
    setLastRecord();
    movement = Rules.RIGHT;
    screen = new Screen($('#screen'), window);
    food = new Food(screen.bounds);
    snake = new Snake(screen.snakeBeginPosition);
    soundplayer = new SoundPlayer(document);
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
            soundplayer.playGrowSound();
        }
        screen.drawSnake(snake);
        if (Rules.snakeIsAlive(snake, screen))
            continueGame();
        else {
            soundplayer.playDeathSound();
            restartGame();
        }
    }, REFRESH_TIME);
}

function increaseScore() {
    let score = snake.getSize() - INITIAL_SNAKE_SIZE;
    _setScoreValue(score);
    if (score > _getRecord())
        _setRecordValue(score);
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

function _getRecord() {
    let record = sessionStorage.getItem('record');
    return (record) ? record : 0;
}

function _setRecordValue(value) {
    sessionStorage.setItem('record', value);
    $('.record').text('record: ' + value);
}