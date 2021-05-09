export default function pixelToMillimeters (px) {
    const pxAsNum = Number(px)
    if (typeof pxAsNum !== 'number') {
        throw new Error('px value is not correct!')
    }
    // посчитать пиксели в зависимости от матрицы!
    return pxAsNum / 3.793627
}