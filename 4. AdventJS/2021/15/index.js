const checkSledJump = (heights) => {
  if (!Array.isArray(heights)) throw new Error('heights must be an array')
  if (heights.length < 3) throw new Error('heights must be at least 3')
  if (heights.some((h) => typeof h !== 'number')) throw new Error('heights must be an array of numbers')

  const maxHeight = Math.max(...heights)
  const lastHeight = heights[heights.length - 1]

  let isJumpingProperly = false
  if (lastHeight !== maxHeight) {
    let ismaxHeightReached = false
    isJumpingProperly = heights.every((h, index) => {
      let isHeightCorrect = true
      const nextNumber = heights[index + 1]

      if (h === maxHeight) ismaxHeightReached = true

      if (h === nextNumber) isHeightCorrect = false
      if (!ismaxHeightReached && h > nextNumber) isHeightCorrect = false
      if (ismaxHeightReached && h < nextNumber) isHeightCorrect = false

      return isHeightCorrect
    })
  }

  return isJumpingProperly
}

export default checkSledJump
