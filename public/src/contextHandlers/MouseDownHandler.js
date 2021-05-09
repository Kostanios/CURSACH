export function mouseDownHandler (e, poitIsDown, rivet) {
    rivet.x = e.offsetX
    rivet.y = e.offsetY
    poitIsDown = true
}