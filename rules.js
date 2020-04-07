export const UP = 'ArrowUp';
export const LEFT = 'ArrowLeft';
export const DOWN  = 'ArrowDown';
export const RIGHT = 'ArrowRight';

export function movementIsAllowed(currentMove, previousMove) {
    //Second condition avoid reverse gear
    switch (currentMove) {
        case UP:
            return previousMove !== DOWN;
        case DOWN:
            return previousMove !== UP;
        case LEFT:
            return previousMove !== RIGHT;
        case RIGHT:
            return previousMove !== LEFT;
        default:
            return false; //Not a valid movement
    }
}

export function snakeIsAlive(snake, screen) {
    if (snake.head.position.x < 0 || snake.head.position.x > (screen.size.width - screen.cellSide))
        return false;
    if (snake.head.position.y < 0 || snake.head.position.y > (screen.size.height - screen.cellSide))
        return false;
    return true;
}