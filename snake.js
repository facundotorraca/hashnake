import {Coordinate} from "./coordinate.js";
import {RIGHT, LEFT, DOWN, UP} from "./rules.js";

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

    this.move = function (direction, steps) {
        this.position.move(direction, steps);
    }
}

function SnakeBody(position) {
    this.positions = [position];

    this.addPart = function (position) {
        this.positions.push(position);
    };

    this.move = function (previousHeadPos) {
        this.positions.unshift(previousHeadPos);
        this.positions.pop();
    };

    this.getLastPart = function () {
        return this.positions[this.positions.length - 1];
    };
}

function SnakeTail(position) {
    this.position = position;

    this.move = function (position) {
        this.position = position;
    };
}

export function Snake(startPosition, a) {
    //When moving position, dont affect screen
    let headPos = startPosition.clone();
    let bodyPos = startPosition.clone(); bodyPos.moveX(-1);
    let tailPos = startPosition.clone(); tailPos.moveX(-2);

    this.head = new SnakeHead(headPos);
    this.body = new SnakeBody(bodyPos);
    this.tail = new SnakeTail(tailPos);


    this.move = function (movement, steps) {
        let direction = _getMovementDirection(movement);
        let prevHeadPosition = this.head.position.clone();
        let prevBodyPosition = this.body.getLastPart().clone();

        this.head.move(direction, steps);
        this.body.move(prevHeadPosition);
        this.tail.move(prevBodyPosition);
    };

    this.grow = function () {
        let lastBodyPart = this.body.getLastPart();
        let oldTailPosition = this.tail.position.clone();

        if (oldTailPosition.x < lastBodyPart.x)
            this.tail.move(new Coordinate(oldTailPosition.x - 1, oldTailPosition.y));

        if (oldTailPosition.y < lastBodyPart.y)
            this.tail.move(new Coordinate(oldTailPosition.x, oldTailPosition.y - 1));

        if (oldTailPosition.x > lastBodyPart.x)
            this.tail.move(new Coordinate(oldTailPosition.x + 1, oldTailPosition.y));

        if (oldTailPosition.y > lastBodyPart.y)
            this.tail.move(new Coordinate(oldTailPosition.x, oldTailPosition.y + 1));

        this.body.addPart(oldTailPosition);
    };

    this.ate = function (food) {
        return this.head.position.isEqualTo(food.position);
    };
}
