var canvas = document.getElementById("canvas");

let canvasLayout

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

function mouseMoveHandler (e) {
    console.log(e)
}

canvas.addEventListener(
    'mousemove', 
    mouseMoveHandler,
    true
)

document.getElementById('image-input').addEventListener(
    'change',
    setCanvasLayout,
    true
)

function render (HTMLcanvas) {
    context = HTMLcanvas.getContext("2d");
    console.log(canvasLayout)
    HTMLcanvas.style.width = `100%`
    HTMLcanvas.style.height = `100%`
    if(canvasLayout){
        canvasLayout.onload = function() {
            console.log(canvasLayout.width)
            HTMLcanvas.width = canvasLayout.width
            HTMLcanvas.height = canvasLayout.height
            context.drawImage(canvasLayout,10,10);
        };
    }
}

render(canvas)