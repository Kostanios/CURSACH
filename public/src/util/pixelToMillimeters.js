export default function pixelToMillimeters (px) {
    const pxAsNum = Number(px)
    if (typeof pxAsNum !== 'number') {
        throw new Error('px value is not correct!')
    }
    return pxAsNum / 3.793627
}