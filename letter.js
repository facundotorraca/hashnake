import {Coordinate} from "./coordinate.js";

function _loadFirstH(array, cellSide) {
    array.push(new Coordinate(1*cellSide, 3*cellSide));
    array.push(new Coordinate(1*cellSide, 4*cellSide));
    array.push(new Coordinate(1*cellSide, 5*cellSide));
    array.push(new Coordinate(1*cellSide, 6*cellSide));
    array.push(new Coordinate(1*cellSide, 7*cellSide));
    array.push(new Coordinate(1*cellSide, 8*cellSide));
    array.push(new Coordinate(1*cellSide, 9*cellSide));
    array.push(new Coordinate(2*cellSide, 6*cellSide));
    array.push(new Coordinate(3*cellSide, 6*cellSide));
    array.push(new Coordinate(4*cellSide, 6*cellSide));
    array.push([new Coordinate(4*cellSide, 5*cellSide),
                new Coordinate(4*cellSide, 7*cellSide)]);
    array.push([new Coordinate(4*cellSide, 4*cellSide),
                new Coordinate(4*cellSide, 8*cellSide)]);
    array.push([new Coordinate(4*cellSide, 3*cellSide),
                new Coordinate(4*cellSide, 9*cellSide)]);
}

function _loadFirstA(array, cellSide) {
    array.push(new Coordinate(6*cellSide, 9*cellSide));
    array.push(new Coordinate(6*cellSide, 8*cellSide));
    array.push(new Coordinate(6*cellSide, 7*cellSide));
    array.push(new Coordinate(6*cellSide, 6*cellSide));
    array.push(new Coordinate(6*cellSide, 5*cellSide));
    array.push(new Coordinate(6*cellSide, 4*cellSide));
    array.push(new Coordinate(6*cellSide, 3*cellSide));
    array.push(new Coordinate(7*cellSide, 3*cellSide));
    array.push(new Coordinate(8*cellSide, 3*cellSide));
    array.push(new Coordinate(9*cellSide, 3*cellSide));
    array.push(new Coordinate(9*cellSide, 4*cellSide));
    array.push(new Coordinate(9*cellSide, 5*cellSide));
    array.push(new Coordinate(9*cellSide, 6*cellSide));
    array.push(new Coordinate(9*cellSide, 7*cellSide));
    array.push(new Coordinate(9*cellSide, 8*cellSide));
    array.push(new Coordinate(9*cellSide, 9*cellSide));
    array.push(new Coordinate(7*cellSide, 6*cellSide));
    array.push(new Coordinate(8*cellSide, 6*cellSide));
}

function _loadS(array, cellSide) {
    array.push(new Coordinate(14*cellSide, 3*cellSide));
    array.push(new Coordinate(13*cellSide, 3*cellSide));
    array.push(new Coordinate(12*cellSide, 3*cellSide));
    array.push(new Coordinate(11*cellSide, 3*cellSide));
    array.push(new Coordinate(11*cellSide, 4*cellSide));
    array.push(new Coordinate(11*cellSide, 5*cellSide));
    array.push(new Coordinate(11*cellSide, 6*cellSide));
    array.push(new Coordinate(12*cellSide, 6*cellSide));
    array.push(new Coordinate(13*cellSide, 6*cellSide));
    array.push(new Coordinate(14*cellSide, 6*cellSide));
    array.push(new Coordinate(14*cellSide, 7*cellSide));
    array.push(new Coordinate(14*cellSide, 8*cellSide));
    array.push(new Coordinate(14*cellSide, 9*cellSide));
    array.push(new Coordinate(13*cellSide, 9*cellSide));
    array.push(new Coordinate(12*cellSide, 9*cellSide));
    array.push(new Coordinate(11*cellSide, 9*cellSide));
}

function _loadSecondH(array, cellSide) {
    array.push(new Coordinate(16*cellSide, 3*cellSide));
    array.push(new Coordinate(16*cellSide, 4*cellSide));
    array.push(new Coordinate(16*cellSide, 5*cellSide));
    array.push(new Coordinate(16*cellSide, 6*cellSide));
    array.push(new Coordinate(16*cellSide, 7*cellSide));
    array.push(new Coordinate(16*cellSide, 8*cellSide));
    array.push(new Coordinate(16*cellSide, 9*cellSide));
    array.push(new Coordinate(17*cellSide, 6*cellSide));
    array.push(new Coordinate(18*cellSide, 6*cellSide));
    array.push(new Coordinate(19*cellSide, 6*cellSide));
    array.push([new Coordinate(19*cellSide, 5*cellSide),
                new Coordinate(19*cellSide, 7*cellSide)]);
    array.push([new Coordinate(19*cellSide, 4*cellSide),
                new Coordinate(19*cellSide, 8*cellSide)]);
    array.push([new Coordinate(19*cellSide, 3*cellSide),
                new Coordinate(19*cellSide, 9*cellSide)]);
}

function _loadN(array, cellSide) {
    array.push(new Coordinate(21*cellSide, 3*cellSide));
    array.push(new Coordinate(21*cellSide, 4*cellSide));
    array.push(new Coordinate(21*cellSide, 5*cellSide));
    array.push(new Coordinate(21*cellSide, 6*cellSide));
    array.push(new Coordinate(21*cellSide, 7*cellSide));
    array.push(new Coordinate(21*cellSide, 8*cellSide));
    array.push(new Coordinate(21*cellSide, 9*cellSide));
    array.push(new Coordinate(22*cellSide, 5*cellSide));
    array.push(new Coordinate(23*cellSide, 6*cellSide));
    array.push(new Coordinate(24*cellSide, 6*cellSide));
    array.push([new Coordinate(24*cellSide, 5*cellSide),
                new Coordinate(24*cellSide, 7*cellSide)]);
    array.push([new Coordinate(24*cellSide, 4*cellSide),
                new Coordinate(24*cellSide, 8*cellSide)]);
    array.push([new Coordinate(24*cellSide, 3*cellSide),
                new Coordinate(24*cellSide, 9*cellSide)]);
}

function _loadSecondA(array, cellSide) {
    array.push(new Coordinate(26*cellSide, 9*cellSide));
    array.push(new Coordinate(26*cellSide, 8*cellSide));
    array.push(new Coordinate(26*cellSide, 7*cellSide));
    array.push(new Coordinate(26*cellSide, 6*cellSide));
    array.push(new Coordinate(26*cellSide, 5*cellSide));
    array.push(new Coordinate(26*cellSide, 4*cellSide));
    array.push(new Coordinate(26*cellSide, 3*cellSide));
    array.push(new Coordinate(27*cellSide, 3*cellSide));
    array.push(new Coordinate(28*cellSide, 3*cellSide));
    array.push(new Coordinate(29*cellSide, 3*cellSide));
    array.push(new Coordinate(29*cellSide, 4*cellSide));
    array.push(new Coordinate(29*cellSide, 5*cellSide));
    array.push(new Coordinate(29*cellSide, 6*cellSide));
    array.push(new Coordinate(29*cellSide, 7*cellSide));
    array.push(new Coordinate(29*cellSide, 8*cellSide));
    array.push(new Coordinate(29*cellSide, 9*cellSide));
    array.push(new Coordinate(27*cellSide, 6*cellSide));
    array.push(new Coordinate(28*cellSide, 6*cellSide));
}

function _loadK(array, cellSide) {
    array.push(new Coordinate(31*cellSide, 3*cellSide));
    array.push(new Coordinate(31*cellSide, 4*cellSide));
    array.push(new Coordinate(31*cellSide, 5*cellSide));
    array.push(new Coordinate(31*cellSide, 6*cellSide));
    array.push(new Coordinate(31*cellSide, 7*cellSide));
    array.push(new Coordinate(31*cellSide, 8*cellSide));
    array.push(new Coordinate(31*cellSide, 9*cellSide));
    array.push(new Coordinate(32*cellSide, 6*cellSide));
    array.push([new Coordinate(33*cellSide, 5*cellSide),
                new Coordinate(33*cellSide, 7*cellSide)]);
    array.push([new Coordinate(34*cellSide, 4*cellSide),
                new Coordinate(34*cellSide, 8*cellSide)]);
    array.push([new Coordinate(34*cellSide, 3*cellSide),
                new Coordinate(34*cellSide, 9*cellSide)]);
}

function _loadE(array, cellSide) {
    array.push(new Coordinate(39*cellSide, 3*cellSide));
    array.push(new Coordinate(38*cellSide, 3*cellSide));
    array.push(new Coordinate(37*cellSide, 3*cellSide));
    array.push(new Coordinate(36*cellSide, 3*cellSide));
    array.push(new Coordinate(36*cellSide, 4*cellSide));
    array.push(new Coordinate(36*cellSide, 5*cellSide));
    array.push(new Coordinate(36*cellSide, 6*cellSide));
    array.push(new Coordinate(36*cellSide, 7*cellSide));
    array.push(new Coordinate(36*cellSide, 8*cellSide));
    array.push(new Coordinate(36*cellSide, 9*cellSide));
    array.push(new Coordinate(37*cellSide, 9*cellSide));
    array.push(new Coordinate(38*cellSide, 9*cellSide));
    array.push(new Coordinate(39*cellSide, 9*cellSide));
    array.push(new Coordinate(37*cellSide, 6*cellSide));
    array.push(new Coordinate(38*cellSide, 6*cellSide));
    array.push(new Coordinate(39*cellSide, 6*cellSide));
}

export function FirstH(cellSide) {
    this.h = [];
    this.cs = cellSide;

    _loadFirstH(this.h, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.h.length; i++) {
            if (this.h[i].length === 2) {
                screenContext.fillText('#', this.h[i][0].x, this.h[i][0].y + this.cs);
                screenContext.fillText('#', this.h[i][1].x, this.h[i][1].y + this.cs);
            } else {
                screenContext.fillText('#', this.h[i].x, this.h[i].y + this.cs);
            }
        }
    }
}

export function FirstA(cellSide) {
    this.a = [];
    this.cs = cellSide;

    _loadFirstA(this.a, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.a.length; i++) {
                screenContext.fillText('#', this.a[i].x, this.a[i].y + this.cs);
        }
    }
}

export function S(cellSide) {
    this.s = [];
    this.cs = cellSide;

    _loadS(this.s, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.s.length; i++) {
                screenContext.fillText('#', this.s[i].x, this.s[i].y + this.cs);
        }
    }
}

export function SecondH(cellSide) {
    this.h = [];
    this.cs = cellSide;

    _loadSecondH(this.h, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.h.length; i++) {
            if (this.h[i].length === 2) {
                screenContext.fillText('#', this.h[i][0].x, this.h[i][0].y + this.cs);
                screenContext.fillText('#', this.h[i][1].x, this.h[i][1].y + this.cs);
            } else {
                screenContext.fillText('#', this.h[i].x, this.h[i].y + this.cs);
            }
        }
    }
}

export function N(cellSide) {
    this.n = [];
    this.cs = cellSide;

    _loadN(this.n, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.n.length; i++) {
            if (this.n[i].length === 2) {
                screenContext.fillText('#', this.n[i][0].x, this.n[i][0].y + this.cs);
                screenContext.fillText('#', this.n[i][1].x, this.n[i][1].y + this.cs);
            } else {
                screenContext.fillText('#', this.n[i].x, this.n[i].y + this.cs);
            }
        }
    }
}

export function SecondA(cellSide) {
    this.a = [];
    this.cs = cellSide;

    _loadSecondA(this.a, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.a.length; i++) {
                screenContext.fillText('#', this.a[i].x, this.a[i].y + this.cs);
        }
    }
}

export function K(cellSide) {
    this.k = [];
    this.cs = cellSide;

    _loadK(this.k, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.k.length; i++) {
            if (this.k[i].length === 2) {
                screenContext.fillText('#', this.k[i][0].x, this.k[i][0].y + this.cs);
                screenContext.fillText('#', this.k[i][1].x, this.k[i][1].y + this.cs);
            } else {
                screenContext.fillText('#', this.k[i].x, this.k[i].y + this.cs);
            }
        }
    }
}

export function E(cellSide) {
    this.e = [];
    this.cs = cellSide;

    _loadE(this.e, cellSide);

    this.draw = function (screenContext) {
        screenContext.fillStyle = 'gold';
        for (let i = 0; i < this.e.length; i++) {
                screenContext.fillText('#', this.e[i].x, this.e[i].y + this.cs);
        }
    }
}