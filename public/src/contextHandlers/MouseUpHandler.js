export function mouseUpHandler (e, calculatePath, imageWidth, rivet, poitIsDown) {
    imageWidth = calculatePath( rivet, { x: e.offsetX, y: e.offsetY } )
    console.log( calculatePath( rivet, { x: e.offsetX, y: e.offsetY } ) )
    poitIsDown = false
}