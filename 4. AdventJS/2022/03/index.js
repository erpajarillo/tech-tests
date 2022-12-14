const distributeGifts = (packOfGifts, reindeers) => {
  if (!Array.isArray(packOfGifts) || !Array.isArray(reindeers)) {
    throw new Error('Invalid arguments')
  }
  if (packOfGifts.some((gift) => gift.split('').length === 0)) {
    throw new Error('Invalid arguments')
  }
  if (reindeers.some((reindeer) => reindeer.split('').length === 0)) {
    throw new Error('Invalid arguments')
  }

  const giftsWeigth = packOfGifts.reduce((acc, gift) => {
    return acc + gift.split('').length
  }, 0)
  const reindeersStrength = reindeers.reduce((acc, reindeer) => {
    return acc + (reindeer.split('').length * 2)
  }, 0)

  return Math.floor(reindeersStrength / giftsWeigth)
}

export default distributeGifts
