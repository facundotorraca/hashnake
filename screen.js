import {Coordinate} from "./coordinate.js";

let TOTAL_LINE_CELLS = 40;

/*-------AUXILIARY-FUNCTIONS-----------*/
function _getCanvasSize($canvas) {
    let HTML_DOM_canvas = $canvas[0]; //A HTML DOM Object
    let width = HTML_DOM_canvas.getBoundingClientRect().width;
    let height = HTML_DOM_canvas.getBoundingClientRect().height;
    return {height: height, width: width};
}

function _getCanvasCenter($canvas) {
    let canvasSize = _getCanvasSize($canvas);
    return new Coordinate(canvasSize.width / 2, canvasSize.height / 2);
}

function _getBiggerCanvasSide($canvas) {
    let canvasSize = _getCanvasSize($canvas);
    return canvasSize.height > canvasSize.width ? canvasSize.height : canvasSize.width;
}

function _getCanvasCellSide($canvas) {
    //Depend on device orientation
    let biggerSide = _getBiggerCanvasSide($canvas);
    let cellSide = biggerSide / TOTAL_LINE_CELLS;

    //A cell side should e an integer, so we use Math.floor;
    return Math.floor(cellSide);
}

function _getCanvas2DContext($canvas) {
    return $canvas[0].getContext('2d');
}

function _getSnakeBeginPosition(canvasCenter, canvasCellSide) {
    /* This function adjust canvas center coordinates to match the
     * top-left corner of the begin position with the top-left
     * corner of a cell */

    let snakeBeginPosition = canvasCenter.roundValues();

    // Adjust X axis
    while (snakeBeginPosition.x % canvasCellSide !== 0)
        snakeBeginPosition.moveX(1);

    // Adjust Y axis
    while (snakeBeginPosition.y % canvasCellSide !== 0)
        snakeBeginPosition.moveY(1);

    return snakeBeginPosition;
}

/*-------CANVAS-CONFIGS-FUNCTION---------*/
function __getDevicePixelRatio(deviceWindow) {
    return deviceWindow.devicePixelRatio || 1;
}

function __getBackingStoreRatio($canvas) {
    let context = _getCanvas2DContext($canvas);
    return  context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
}

function __getPixelCorrectionRatio($canvas, deviceWindow) {
    /*  This function returns a ratio which scales both the
     *  canvas and the context in such a way that everything
     *  you draw will be as sharp as possible for the device.
     *
     *  Adapted from Paul Lewis's code here:
     *  http://www.html5rocks.com/en/tutorials/canvas/hidpi/ */

    let devicePixelRatio = __getDevicePixelRatio(deviceWindow);
    let backingStoreRatio = __getBackingStoreRatio($canvas);
    return devicePixelRatio / backingStoreRatio;
}

function _configureCanvasOnDevice($canvas, deviceWindow) {
    let canvasSize = _getCanvasSize($canvas);
    let cellSide = _getCanvasCellSide($canvas);

    let surplusWidth = canvasSize.width % cellSide;
    let surplusHeight = canvasSize.height % cellSide;

    let correctedWidth = canvasSize.width - surplusWidth;
    let correctedHeight = canvasSize.height - surplusHeight;

    let correctionRatio = __getPixelCorrectionRatio($canvas, deviceWindow);

    let HTML_DOM_canvas = $canvas[0]; //A HTML DOM Object
    HTML_DOM_canvas.width = correctedWidth * correctionRatio;
    HTML_DOM_canvas.height = correctedHeight * correctionRatio;

    $canvas.css('width', correctedWidth + 'px');
    $canvas.css('height', correctedHeight + 'px');

    if (correctionRatio !== 1)
        _getCanvas2DContext($canvas).scale(correctionRatio, correctionRatio);
}


/*-------------SCREEN-BOUNDS-------------*/
function ScreenBound(height, width, cellSide) {
    //Use the convention from canvas: (0,0) top-left corner
    this.bottom = height - cellSide;
    this.right = width - cellSide;
    this.left = 0;
    this.top = 0;
}

/*----------------SCREEN-----------------*/
export function Screen($screen, deviceWindow) {
    this.screen = $screen;
    this.cellSide = _getCanvasCellSide($screen);

    _configureCanvasOnDevice($screen, deviceWindow);

    //Screen is initialized with configured values
    this.size = _getCanvasSize($screen);
    this.center = _getCanvasCenter($screen);
    this.snakeBeginPosition = _getSnakeBeginPosition(this.center, this.cellSide);

    //Screen limits available for the snake
    this.bounds = new ScreenBound(this.size.height, this.size.width, this.cellSide);

    this.clear = function() {
        let context = _getCanvas2DContext(this.screen);
        let HTML_DOM_screen = this.screen[0]; //A HTML DOM Object
        context.clearRect(0, 0, HTML_DOM_screen.width, HTML_DOM_screen.height);
    };

    this.drawSnake = function(snake) {
        let context = _getCanvas2DContext(this.screen);
        let head = snake.head.position;
        let body = snake.body.positions;
        let tail = snake.tail.position;

        context.fillStyle = 'white'; context.lineWidth = 1;
        context.fillRect(head.x, head.y, this.cellSide, this.cellSide);
        context.fillRect(tail.x, tail.y, this.cellSide, this.cellSide);

        for (let i = 0; i < body.length; i++) {
            context.fillRect(body[i].x, body[i].y, this.cellSide, this.cellSide);
            context.strokeRect(body[i].x, body[i].y, this.cellSide, this.cellSide);
        }

        context.strokeRect(head.x, head.y, this.cellSide, this.cellSide);
        context.strokeRect(tail.x, tail.y, this.cellSide, this.cellSide);
    };

    this.drawFood = function(food) {
        let context = _getCanvas2DContext(this.screen);

        while (food.position.x % this.cellSide !== 0)
            food.position.moveX(1);

        while (food.position.y % this.cellSide !== 0)
            food.position.moveY(1);

        context.fillStyle = 'gold';
        context.fillRect(food.position.x, food.position.y, this.cellSide, this.cellSide);

        context.lineWidth = 1;
        context.strokeRect(food.position.x, food.position.y, this.cellSide, this.cellSide);
    }
}

function drawGrid(canvas, cellSide) {

    let ctx = _getCanvas2DContext(canvas);
    let size = _getCanvasSize(canvas);

    let w = size.width;
    let h = size.height;

    for (let x=0;x<=w;x+=cellSide) {
        for (let y=0;y<=h;y+=cellSide) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }
}
