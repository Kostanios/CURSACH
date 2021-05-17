export function mouseUpHandler (e, calculatePath, rivet) {
    rivet.pixelWidth = calculatePath( rivet, { x: e.offsetX, y: e.offsetY } )
    console.log( calculatePath( rivet, { x: e.offsetX, y: e.offsetY } ) )
    rivet.poitIsDown = false
}