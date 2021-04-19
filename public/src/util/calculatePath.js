export default function calculatePath (point1, point2) {
  return (
    Math.pow(
      Math.pow(( point1.x - point2.x ), 2) + Math.pow(( point1.y - point2.y ), 2),
      1/2
    )
)
}