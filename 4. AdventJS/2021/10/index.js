export const getCoins = (change) => {
  if (typeof change !== 'number') throw new Error()

  const coinsToReturn = new Array(6).fill(0)
  const coinsValue = [50, 20, 10, 5, 2, 1]
  const coinValueToArrayIndex = { 1: 0, 2: 1, 5: 2, 10: 3, 20: 4, 50: 5 }

  let remainingAmount = change
  let maxLoops = 1000
  while (remainingAmount !== 0 && maxLoops > 0) {
    const coinToReturn = coinsValue.filter(cv => cv <= remainingAmount)[0]
    const coinIndex = coinValueToArrayIndex[coinToReturn]
    coinsToReturn[coinIndex]++

    remainingAmount -= coinToReturn
    maxLoops--
  }

  return coinsToReturn
}
