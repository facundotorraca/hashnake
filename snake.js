import {RIGHT, LEFT, DOWN, UP} from "./rules.js";

const STEPS = 8; //Number of blocks to add when moving

function _getMovementDirection(movement) {
    switch (movement) {
        case RIGHT:
            return {dx:1, dy:0};
        case LEFT:
            return {dx:-1, dy:0};
        case UP:
            return {dx:0, dy:-1};
        case DOWN:
            return {dx:0, dy:1};
    }
}

function SnakeHead(position) {
    this.position = position;

    this.move = function (direction) {
        this.position.move(direction, STEPS);
    }
}

function SnakeBody() {
    this.positions = [];

    this.move = function(direction, previousHeadPos) {
        //nothing for all
    }
}

function Snake(size, startPosition) {
    this.size = size;
    this.startPosition = startPosition;

    this.head = new SnakeHead(startPosition);
    this.body = new SnakeBody();

    this.move = function (movement) {
        let direction = _getMovementDirection(movement);
        this.head.move(direction);
    }
}

export {Snake};