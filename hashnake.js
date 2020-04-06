import {Snake} from './snake.js';
import * as SnakeRules  from './rules.js';
import * as ScreenUtils from './screenUtils.js';

const REFRESH_TIME = 66; //15 FPS
const INITIAL_SNAKE_SIZE = 1;

let snake = undefined;
let $screen = undefined;
let movement = undefined;
let screenSize = undefined;
let screenCenter = undefined;
let snakeBoxSize = undefined;

$(document).ready(() => {
    playGame();
    window.addEventListener("orientationchange", () => handleOrientationChange());
});

$(document).keydown((e) => {
    let newMove = e.key;
    if (SnakeRules.movementIsAllowed(newMove, movement)) {
        movement = newMove;
        e.preventDefault(); //Prevent the default action (scroll)
    }
});

function initializeGame() {
    $screen = $('#screen');
    movement = SnakeRules.RIGHT;
    ScreenUtils.roundScreenSize($screen);
    screenSize = ScreenUtils.getScreenSize($screen);
    screenCenter = ScreenUtils.getScreenCenter($screen);
    snakeBoxSize = ScreenUtils.getSnakeBoxSize(window);
    snake = new Snake(INITIAL_SNAKE_SIZE, screenCenter);
}

function playGame() {
     initializeGame();
     continueGame();
}

function continueGame() {
    console.log(screenSize);
    console.log(screenCenter);


    setTimeout(() => {
        ScreenUtils.clearScreen($screen);
        //drawFood();
        snake.move(movement);
        ScreenUtils.drawSnake(snake, $screen, snakeBoxSize);
        if (snakeIsAlive())
            continueGame();
        else
            handleDeath();

    }, REFRESH_TIME);
}

function handleDeath() {

}

function snakeIsAlive() {
    return true;
}

function handleOrientationChange() {
    location.reload();
}