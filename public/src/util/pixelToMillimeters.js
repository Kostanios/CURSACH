export default function pixelToMillimeters (px, pixelSize ) {
    const pxAsNum = Number(px)
    if (typeof pxAsNum !== 'number') {
        throw new Error('px value is not correct!')
    }
    // посчитать пиксели в зависимости от матрицы!
    return pxAsNum * pixelSize
}