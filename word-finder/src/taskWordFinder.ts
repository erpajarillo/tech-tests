import { readFileSync } from 'fs'

const readFileLines = (filename: string) => 
  readFileSync(filename)
    .toString()
    .split('\n')

const dictionaryList: string[] = readFileLines('google-10000-english.txt')


class TaskWordFinder {
  public longest = ''

  public longestWordFinder(stringLetters: string) {
    this.longest = longestWord(stringLetters)
  }
}

const longestWord = (stringLetters: string): string => {
  if (typeof stringLetters !== 'string') throw new Error()
  if (stringLetters.length > 12) throw new Error()
  if (!(/^[a-z]+$/i).test(stringLetters)) throw new Error()

  const dictionaryListFiltered = dictionaryList
    .sort((a, b) => b.length - a.length)
    .filter(w => w.length <= stringLetters.length)

  let longestWord = ''
  dictionaryListFiltered.some((word: string) => {
    const strSplit = stringLetters.split('')
    const wordSplit = word.split('')

    let isValidWord = true
    wordSplit.every((letter: string) => {
      const letterPosition = strSplit.indexOf(letter)
      
      if (letterPosition >= 0) {
        strSplit.splice(letterPosition, 1)
      } else {
        isValidWord = false
      }

      return isValidWord
    })

    if (isValidWord) longestWord = word

    return isValidWord
  })

  return longestWord
}

export default TaskWordFinder
