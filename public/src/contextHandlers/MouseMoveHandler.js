export function mouseMoveHandler (e, context, poitIsDown, render, rivet) {
    if(poitIsDown){
      render()
      context.beginPath();
      context.moveTo(rivet.x, rivet.y)
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke();
      context.closePath()
    }
}