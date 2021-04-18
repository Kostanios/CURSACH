var canvas = document.getElementById("canvas");

let previosState

let poitIsDown = false

let canvasLayout

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
    render(canvas)
}

function clear (context) {
    if(canvasLayout){
        context.clearRect(0,0,canvasLayout.width,canvasLayout.height)
    }
}

function mouseMoveHandler (e, context, rivet) {
    if(poitIsDown){
      clear(context)
      defineLayout(canvas, context)
      context.beginPath();
      context.moveTo(rivet.x, rivet.y)
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke();
      context.closePath()
    }
}

function mouseDownHandler (e, context, rivet) {
    rivet.x = e.offsetX
    rivet.y = e.offsetY
    poitIsDown = true
}

function mouseUpHandler (e, context) {
    poitIsDown = false
}

function defineLayout (HTMLcanvas, context) {
    HTMLcanvas.width = canvasLayout.width
    HTMLcanvas.height = canvasLayout.height
    context.drawImage(canvasLayout,10,10);
}

function render (HTMLcanvas) {
    const context = HTMLcanvas.getContext("2d");
    let rivet = {x: null, y: null}
    if(canvasLayout){
        canvasLayout.onload = () => defineLayout(HTMLcanvas, context)
    }
    HTMLcanvas.addEventListener(
        'mousedown', 
        (e) => mouseDownHandler(e, context, rivet),
        true
    )

    HTMLcanvas.addEventListener(
        'mousemove', 
        (e) => mouseMoveHandler(e, context, rivet),
        true
    )

    HTMLcanvas.addEventListener(
        'mouseup',
        (e) => mouseUpHandler(e, context),
        true
    )
}

render(canvas)