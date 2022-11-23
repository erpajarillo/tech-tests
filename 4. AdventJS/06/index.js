export const sumPairs = (numbers, result) => {
  if (!Array.isArray(numbers)) throw new Error()
  if (typeof result !== 'number') throw new Error()

  let pairs = null
  for (const [index, value] of numbers.entries()) {
    const numberToFind = result - value
    const isNumberExists = numbers.indexOf(numberToFind, index + 1)
    if (isNumberExists >= 0) {
      pairs = [value, numberToFind]
      break
    }
  }

  return pairs
}
