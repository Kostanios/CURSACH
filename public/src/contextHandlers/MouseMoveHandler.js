export function mouseMoveHandler (e, context, render, rivet) {
    if(rivet.poitIsDown){
      render()
      context.beginPath();
      context.moveTo(rivet.x, rivet.y)
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke();
      context.closePath()
    }
}