import {Coordinate} from "./coordinate.js";

const XL_SCREEN = 1200;
const LG_SCREEN = 992;
const MD_SCREEN = 768;

const XL_SNAKE_BOX = 20;
const LG_SNAKE_BOX = 16;
const MD_SNAKE_BOX = 14;
const SM_SNAKE_BOX = 12;

function _getCanvasContext($screen) {
    return $screen[0].getContext('2d');
}

export function getScreenSize($screen) {
    let HTML_DOM_screen = $screen[0]; //A HTML DOM Object
    let width = HTML_DOM_screen.getBoundingClientRect().width;
    let height = HTML_DOM_screen.getBoundingClientRect().height;
    return {height: height, width: width};
}

export function getScreenCenter($screen) {
    let screenSize = getScreenSize($screen);
    let screenCenter = new Coordinate(screenSize.width/2, screenSize.height/2);
    screenCenter.roundValues(); //Makes values integer
    return screenCenter;
}

export function roundScreenSize($screen) {
    let context = _getCanvasContext($screen);
    let currentScreenSize = getScreenSize($screen);

    let newHeight = Math.floor(currentScreenSize.height);
    let newWidth = Math.floor(currentScreenSize.width);

    let HTML_DOM_screen = $screen[0]; //A HTML DOM Object



    var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = context.webkitBackingStorePixelRatio ||
                                context.mozBackingStorePixelRatio ||
                                context.msBackingStorePixelRatio ||
                                context.oBackingStorePixelRatio ||
                                context.backingStorePixelRatio || 1,
            ratio = devicePixelRatio / backingStoreRatio;

    if (devicePixelRatio !== backingStoreRatio) {

        HTML_DOM_screen.width = newWidth * ratio;
        HTML_DOM_screen.height = newHeight * ratio;
        $screen.css('width', newWidth + 'px');
        $screen.css('height',newHeight + 'px');

            context.scale(ratio, ratio);

    } else {
        HTML_DOM_screen.width = newWidth;
        HTML_DOM_screen.height = newHeight;
        $screen.css('width', newWidth + 'px');
        $screen.css('height',newHeight + 'px');
    }


}

export function clearScreen($screen) {
    let context = _getCanvasContext($screen);
    let HTML_DOM_screen = $screen[0]; //A HTML DOM Object
    context.clearRect(0, 0, HTML_DOM_screen.width, HTML_DOM_screen.height);
}

export function getSnakeBoxSize(window) {
    let windowsWidth = window.innerWidth;
    switch (windowsWidth) {
        case (windowsWidth >= XL_SCREEN):
            return XL_SNAKE_BOX;
        case (windowsWidth >= LG_SCREEN):
            return LG_SNAKE_BOX;
        case (windowsWidth >= MD_SCREEN):
            return MD_SNAKE_BOX;
        default: //SM_SCREEN
            return SM_SNAKE_BOX;
    }
}

export function drawSnake(snake, $screen, cellWidth) {
    let context = _getCanvasContext($screen);
    console.log(cellWidth);
    let head = snake.head.position;

    context.fillStyle = 'red';
    context.fillRect(head.x - (cellWidth/2) , head.y - (cellWidth/2), cellWidth, cellWidth);

    context.lineWidth   = 1;
    context.strokeRect(head.x - (cellWidth/2), head.y - (cellWidth/2), cellWidth, cellWidth);

}