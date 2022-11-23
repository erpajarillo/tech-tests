import { describe, it, expect } from 'vitest'
import { wrapGifts } from '.'

const giftsTest1 = ['📷', '⚽️']
const resultTest1 = ['****', '*📷*', '*⚽️*', '****']

const giftsTest2 = ['🏈🎸', '🎮🧸']
const resultTest2 = ['******', '*🏈🎸*', '*🎮🧸*', '******']

const giftsTest3 = ['📷']
const resultTest3 = ['****', '*📷*', '****']

describe('Wrap Gifts', () => {
  it('It should be a function', () => {
    expect(wrapGifts).toBeTypeOf('function')
  })

  it('It should receive an array of strings (min lenght 1)', () => {
    expect(() => wrapGifts()).toThrow()
    expect(() => wrapGifts(['📷', '⚽️', 3])).toThrow()
    expect(() => wrapGifts([1, 2, 3])).toThrow()
  })

  it('It should return an array', () => {
    const isArray = Array.isArray(wrapGifts(giftsTest1))
    expect(wrapGifts([])).toStrictEqual([])

    expect(isArray).toBeTruthy()
  })

  it('It should return resultTest1 with giftsTest1', () => {
    expect(wrapGifts(giftsTest1)).toStrictEqual(resultTest1)
  })

  it('It should return resultTest2 with giftsTest2', () => {
    expect(wrapGifts(giftsTest2)).toStrictEqual(resultTest2)
  })

  it('It should return resultTest3 with giftsTest3', () => {
    expect(wrapGifts(giftsTest3)).toStrictEqual(resultTest3)
  })
})
