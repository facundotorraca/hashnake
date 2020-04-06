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