export const listGifts = (letter) => {
  if (typeof letter !== 'string') throw new Error()

  const listOfGifts = letter.split(/(\s+)/).sort()
  const listOfGiftsFiltered = listOfGifts.filter(g => /\S/.test(g) && !g.startsWith('_'))

  const gifts = listOfGiftsFiltered.reduce((allGifts, g) => {
    const currCount = allGifts[g] ?? 0

    if (typeof allGifts === 'string') {
      return {
        [g]: currCount + 1,
        [allGifts]: currCount + 1
      }
    }

    return {
      ...allGifts,
      [g]: currCount + 1
    }
  })

  return gifts
}
