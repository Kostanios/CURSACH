import calculatePath from './src/util/calculatePath';
import pixelToMillimeters from './src/util/pixelToMillimeters.js';
import calculateDistanceToObject from './src/util/calculateDistanceToObject.js';
import { mouseMoveHandler } from './src/contextHandlers/MouseMoveHandler'
import { mouseDownHandler } from './src/contextHandlers/MouseDownHandler'
import { mouseUpHandler } from './src/contextHandlers/MouseUpHandler'

const canvas = document.getElementById("canvas");
const focusLengthInput = document.getElementById("focus-length");
const objLengthInput = document.getElementById("obj-length");
const pixelSizeInput = document.getElementById("pixel-size")

let focusLength = focusLengthInput.value
let objLength = objLengthInput.value
let pixelSize = pixelSizeInput.value

const context = canvas.getContext("2d");

let canvasLayout

let pixelWidth

const rivet = {x: null, y: null, poitIsDown: false, pixelWidth: 0}

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

function defineLayout () {
    canvas.width = canvasLayout.width
    canvas.height = canvasLayout.height
    context.drawImage(canvasLayout,10,10);
}


focusLengthInput.addEventListener(
    'change',
    (e) => {
        focusLength = e.target.value
    },
    true
)

objLengthInput.addEventListener(
    'change',
    (e) => {
        objLength = e.target.value
    },
    true
)

pixelSizeInput.addEventListener(
    'change',
    (e) => {
        pixelSize = e.target.value
    },
    true
)

canvas.addEventListener(
    'mousedown', 
    (e) => mouseDownHandler(e, rivet),
    true
)

canvas.addEventListener(
    'mousemove', 
    (e) => mouseMoveHandler(e, context, render, rivet),
    true
)

canvas.addEventListener(
    'mouseup',
    (e) => {
        mouseUpHandler(e, calculatePath, rivet)
        document.getElementById("result").innerHTML = calculateDistanceToObject(
            pixelToMillimeters(rivet.pixelWidth, pixelSize),
            objLength,
            focusLength
        )
    },
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