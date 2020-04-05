const XL_SCREEN = 1200;
const LG_SCREEN = 992;
const MD_SCREEN = 768;

const XL_SNAKE_BOX = 20;
const LG_SNAKE_BOX = 16;
const MD_SNAKE_BOX = 14;
const SM_SNAKE_BOX = 12;

let screenSize = undefined;
let snakeBoxSize = undefined;

$(document).ready(() => {
    roundScreenSize();
    screenSize = getScreenSize();
    snakeBoxSize = getSnakeBoxSize();

    window.addEventListener("orientationchange", () => handleOrientationChange());
});

function handleOrientationChange() {
    location.reload();
}

function getSnakeBoxSize() {
    // Values from Bootstrap
    if (window.innerWidth >= XL_SCREEN)
        return XL_SNAKE_BOX;
    if (window.innerWidth >= LG_SCREEN)
        return LG_SNAKE_BOX;
    if (window.innerWidth >= MD_SCREEN)
        return MD_SNAKE_BOX;
    //if (window.innerWidth < SM_SCREEN)
    return SM_SNAKE_BOX;
}

function getScreenSize() {
    let screen = getScreen();
    let height = screen.getBoundingClientRect().height;
    let width = screen.getBoundingClientRect().width;
    return {height: height, width: width};
}

function roundScreenSize() {
    let currentScreenSize = getScreenSize();

    let newHeight = Math.floor(currentScreenSize.height);
    let newWidth = Math.floor(currentScreenSize.width);

    $screen = $('#screen');
    $screen.css('width', newWidth);
    $screen.css('height',newHeight);
}

function getCanvasContext() {
    return $('#screen')[0].getContext('2d');
}

function getScreen() {
    /*dont know why query selector dont work*/
    return document.getElementById('screen');
}