import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'

const readFileLines = (filename: string) => 
  readFileSync(filename)
    .toString()
    .split('\n')

const dictionaryList: string[] = readFileLines('google-10000-english.txt')

const sTest: string = 'ajsxuytcnhre'
const lTest: string[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

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

describe('Task WordFinder', () => {
    it('It should be a function', () => {
        expect(longestWord).toBeTypeOf('function')
    })

    it('It should receive a string (max length 12)', () => {
        expect(() => longestWord()).toThrow()
        expect(() => longestWord(null)).toThrow()
        expect(() => longestWord(undefined)).toThrow()
        expect(() => longestWord(1)).toThrow()
        expect(() => longestWord('abcdefghijklm')).toThrow()
        expect(() => longestWord('')).toThrow()
    })

    it('It should receive a string made of letters from the classical latin alphabet', () => {
        expect(() => longestWord('123')).toThrow()
        expect(() => longestWord('$%as')).toThrow()
        expect(() => longestWord('abc#1')).toThrow()
        expect(() => longestWord('#abc')).toThrow()
    })

    it('It should return a string', () => {
        expect(longestWord(sTest)).toBeTypeOf('string')
    })

    it('It should return century using string optonoceari', () => {
        expect(longestWord(sTest)).toStrictEqual('century')
    })

    it('It should return cooperation using string optonoceari', () => {
        expect(longestWord('optonoceari')).toStrictEqual('cooperation')
    })

    it('It should return dates using string aesdt', () => {
      expect(longestWord('aesdt')).toStrictEqual('dates')
  })
})