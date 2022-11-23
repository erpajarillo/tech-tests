export const wrapGifts = (gifts) => {
  if (!Array.isArray(gifts)) throw new Error()
  if (gifts.length === 0) return []
  if (gifts.find(g => typeof g !== 'string')) throw new Error()

  const boxChar = '*'
  const emojiSize = gifts[0].length
  const arrayLengthPosition = emojiSize + 2
  const boxStartEnd = boxChar.repeat(arrayLengthPosition)
  const result = []

  result.push(boxStartEnd)
  gifts.forEach(g => result.push(boxChar + g + boxChar))
  result.push(boxStartEnd)

  return result
}
