export default function calculateDistanceToObject (imageWidth, realWidth, focalLength) {
    console.log(
        `imageWidth=${imageWidth} realWidth=${realWidth} focalLength=${focalLength}`
    )
    return (realWidth * focalLength) / imageWidth
}