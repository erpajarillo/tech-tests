const decodeNumber = (symbols) => {
  if (typeof symbols !== 'string') throw new Error('Symbols must be a string')
  if (symbols.length === 0) throw new Error('Symbols must not be empty')
  if (!(/^[.|,|:|;|!]+$/g).test(symbols)) return NaN

  const symbolsMap = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  const symbolsArr = symbols.split('').reverse()
  let result = 0
  symbolsArr.forEach((symbol, index) => {
    const previousSymbol = symbolsArr[index - 1]

    if (previousSymbol && symbolsMap[symbol] < symbolsMap[previousSymbol]) {
      result -= symbolsMap[symbol]
    } else {
      result += symbolsMap[symbol]
    }
  })

  return result
}

export default decodeNumber
