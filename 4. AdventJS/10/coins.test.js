import { describe, it, expect } from 'vitest'
import { getCoins } from '.'

describe('Get Coins', () => {
  it('It should be a function', () => {
    expect(getCoins).toBeTypeOf('function')
  })

  it('It should receive a number', () => {
    expect(() => getCoins()).toThrow()
    expect(() => getCoins('dos')).toThrow()
    expect(() => getCoins(null)).toThrow()
  })

  it('It should return an array of numbers', () => {
    const result = getCoins(51)
    const isArray = Array.isArray(result)
    const noNumberElements = result.filter(e => typeof e !== 'number').length

    expect(isArray).toBeTruthy()
    expect(noNumberElements).toBe(0)
  })

  it('It should return the coins for different examples', () => {
    expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1])
    expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0])
    expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0])
    expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0])
    expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1])
    expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2])
  })
})
