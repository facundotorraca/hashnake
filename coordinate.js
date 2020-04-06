function Coordinate(x, y) {
    this.x = x;
    this.y = y;

    this.roundValues = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }

    this.move = function (direction, steps) {
        this.x += direction.dx * steps;
        this.y += direction.dy * steps;
    }
}

export {Coordinate};