export const isValid = (letter) => {
  let isValid = true
  if (typeof letter !== 'string') throw new Error()

  const regex = /[{[]/g
  if (letter.match(regex)) isValid = false

  if (letter.includes('()')) isValid = false

  if (letter.includes('(') && !letter.includes(')')) isValid = false

  if (!letter.includes('(') && letter.includes(')')) isValid = false

  if (letter.indexOf('(') > letter.indexOf(')')) isValid = false

  return isValid
}
