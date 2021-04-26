import calculatePath from './src/util/calculatePath';
import pixelToMillimeters from './src/util/pixelToMillimeters.js';
import calculateDistanceToObject from './src/util/calculateDistanceToObject.js';

var canvas = document.getElementById("canvas");
var focusInput = document.getElementById("focus-length")

const context = canvas.getContext("2d");

let poitIsDown = false

let canvasLayout

let imageWidth

const rivet = {x: null, y: null}

document.getElementById('image-input').addEventListener(
    'change',
    setCanvasLayout,
    true
)

//__constants___________________
const WIDTH = 800
const HEIGHT = 800
const DPI_WIDTH = WIDTH * 2
const DPI_HEIGHT = HEIGHT *2
//______________________________

function setCanvasLayout (e) {
    let image = new Image()
    image.src = window.URL.createObjectURL(e.target.files[0])
    canvasLayout = image
    render()
}

function clear () {
    if(canvasLayout){
        context.clearRect(0,0,canvasLayout.width,canvasLayout.height)
    }
}

function mouseMoveHandler (e) {
    if(poitIsDown){
      render()
      context.beginPath();
      context.moveTo(rivet.x, rivet.y)
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke();
      context.closePath()
    }
}

function mouseDownHandler (e) {
    rivet.x = e.offsetX
    rivet.y = e.offsetY
    poitIsDown = true
}

function mouseUpHandler (e) {
    imageWidth = calculatePath( rivet, { x: e.offsetX, y: e.offsetY } )
    console.log( calculatePath( rivet, { x: e.offsetX, y: e.offsetY } ) )
    poitIsDown = false
}

function defineLayout () {
    canvas.width = canvasLayout.width
    canvas.height = canvasLayout.height
    context.drawImage(canvasLayout,10,10);
}

function showRealLength (pxLength, focusLength) {
    document.getElementById("result").innerHTML = calculateDistanceToObject(pixelToMillimeters(pxLength), 1000, focusLength)
}

focusInput.addEventListener(
    'change',
    (e) => {
        showRealLength(imageWidth, e.target.value)
    }
)

canvas.addEventListener(
    'mousedown', 
    (e) => mouseDownHandler(e),
    true
)

canvas.addEventListener(
    'mousemove', 
    (e) => mouseMoveHandler(e),
    true
)

canvas.addEventListener(
    'mouseup',
    (e) => mouseUpHandler(e),
    true
)

function render () {
    clear()
    if(canvasLayout){
        canvasLayout.onload = () => defineLayout()
        defineLayout()
    }
}



render()