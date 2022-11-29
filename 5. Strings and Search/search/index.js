const longestMatrixPath = (strArr) => {
  if (!Array.isArray(strArr)) throw new Error()
  if (strArr.length === 0) throw new Error()
  if (strArr.some(str => typeof str !== 'string')) throw new Error()

  const matrix = strArr
    .map(str => str.split(''))
    .map(row => row.map(Number))
  const rows = matrix.length
  const cols = matrix[0].length

  const isOutOfBounds = (row, col) => row < 0 || row >= rows || col < 0 || col >= cols

  const longestPath = (row, col) => {
    if (isOutOfBounds(row, col)) return 0

    const current = matrix[row][col]

    const up = !isOutOfBounds(row - 1, col) && matrix[row - 1][col] > current ? longestPath(row - 1, col) + 1 : 0
    const down = !isOutOfBounds(row + 1, col) && matrix[row + 1][col] > current ? longestPath(row + 1, col) + 1 : 0
    const left = !isOutOfBounds(row, col - 1) && matrix[row][col - 1] > current ? longestPath(row, col - 1) + 1 : 0
    const right = !isOutOfBounds(row, col + 1) && matrix[row][col + 1] > current ? longestPath(row, col + 1) + 1 : 0

    return Math.max(up, down, left, right)
  }

  let max = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const path = longestPath(row, col)
      if (path > max) max = path
    }
  }

  return max
}

export default longestMatrixPath
