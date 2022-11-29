const StringChallenge = (str) => {

  let finalString = ''

  const strSplit = str.split('*')
  const firstPart = strSplit[0]
  const secondPart = strSplit[1]
  const stringLength = firstPart.length

  let i = 0
  while(i < stringLength) {
    finalString = finalString + firstPart[i] + secondPart[i]
    i++
  }

  finalString = finalString.replace(/[l2gojz7e94]/gi, '')

  return (finalString === '') ? 'EMPTY' : finalString
}

console.log(StringChallenge('aswt*eder'))