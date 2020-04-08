/*---------------COORDINATE---------------*/
export function Coordinate(x, y) {
    this.x = x;
    this.y = y;

    this.roundValues = function () {
        let roundedX = Math.round(this.x);
        let roundedY = Math.round(this.y);
        return new Coordinate(roundedX, roundedY);
    };

    this.clone = function() {
        return new Coordinate(this.x, this.y);
    };

    this.move = function (direction, steps) {
        this.x += direction.dx * steps;
        this.y += direction.dy * steps;
    };

    this.moveX = function (steps) {
        this.x += steps;
    };

    this.moveY = function (steps) {
        this.y += steps;
    };

    this.isEqualTo = function(otherCoordinate) {
        return otherCoordinate.x === this.x && otherCoordinate.y === this.y;
    };

    this.xIsBetween = function (minX, maxX) {
        return this.x >= minX && this.x <= maxX;
    };

    this.yIsBetween = function (minY, maxY) {
        return this.y >= minY && this.y <= maxY;
    };
}