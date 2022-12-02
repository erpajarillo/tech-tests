export const maxProfit = (prices) => {
  if (!Array.isArray(prices)) throw new Error()

  let maxProfitAmount = 0
  prices.forEach((p, index) => {
    if (typeof p !== 'number') throw new Error()

    const arrayFromElementSelected = prices.filter((p, i) => i > index)
    const maxValue = Math.max(...arrayFromElementSelected)
    const possibleMaxProfit = maxValue - p

    maxProfitAmount = (possibleMaxProfit > maxProfitAmount) ? possibleMaxProfit : maxProfitAmount
  })

  return maxProfitAmount || -1
}
