export function mouseDownHandler (e, rivet) {
    rivet.x = e.offsetX
    rivet.y = e.offsetY
    rivet.poitIsDown = true
}