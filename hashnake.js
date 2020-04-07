import {Food} from './food.js';
import {Snake} from './snake.js';
import {Screen} from './screen.js';
import * as Rules  from './rules.js';

const REFRESH_TIME = 100; //15 FPS
const INITIAL_SNAKE_SIZE = 1;

let food = undefined;
let snake = undefined;
let screen = undefined;
let movement = undefined;

$(document).ready(() => {
    playGame();
    window.addEventListener("orientationchange", () => handleOrientationChange());
});

$(document).keydown((e) => {
    let newMove = e.key;
    if (Rules.movementIsAllowed(newMove, movement)) {
        movement = newMove;
        e.preventDefault(); //Prevent the default action (scroll)
    }
});

function initializeGame() {
    movement = Rules.RIGHT;
    screen = new Screen($('#screen'), window);
    food = new Food(screen.bounds);
    snake = new Snake(INITIAL_SNAKE_SIZE, screen.snakeBeginPosition);
}

function playGame() {
     initializeGame();
     continueGame();
}

function continueGame() {

   // screen.drawFood(food);
    //screen.drawSnake(snake);

    setTimeout(() => {
        screen.clear();
        screen.drawFood(food);
        snake.move(movement, screen.cellSide);
        if (snake.ate(food)) {
            food = new Food(screen.bounds);
        }
        screen.drawSnake(snake);
        if (Rules.snakeIsAlive(snake, screen))
            continueGame();
        else
            handleDeath();

    }, REFRESH_TIME);
}

function handleDeath() {
    playGame();
}

function handleOrientationChange() {
    location.reload();
}