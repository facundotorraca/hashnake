$(document).ready(() => {
    let screenSize = _getScreenSize();
    screenSize = _roundUpScreenSize(screenSize);
});

function _getScreenSize() {
    let screen = _getScreen();
    let height = screen.getBoundingClientRect().height;
    let width = screen.getBoundingClientRect().width;
    return {height: height, width: width};
}

function _roundUpScreenSize(currentScreenSize) {
    let $screen = $('#screen');
    let heightCeil = Math.ceil(currentScreenSize.height) + 'px';
    let widthCeil = Math.ceil(currentScreenSize.width) + 'px';

    $screen.css('width', widthCeil);
    $screen.css('height',heightCeil);
    return _getScreenSize();
}

function _getCanvasContext() {
    return $('#screen')[0].getContext('2d');
}

function _getScreen() {
    /*dont know why query selector dont work*/
    return document.getElementById('screen');
}