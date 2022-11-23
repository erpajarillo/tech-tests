import { describe, it, expect } from 'vitest'
import { maxProfit } from '.'

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]

describe('Max Profit', () => {
  it('It should be a function', () => {
    expect(maxProfit).toBeTypeOf('function')
  })

  it('It should receive an array of numbers', () => {
    expect(() => maxProfit()).toThrow()
    expect(() => maxProfit(['a', 10])).toThrow()
    expect(() => maxProfit(undefined)).toThrow()
    expect(() => maxProfit(null)).toThrow()
  })

  it('It should return a number', () => {
    expect(maxProfit(pricesBtc)).toBeTypeOf('number')
  })

  it('It should return 16 to BTC', () => {
    expect(maxProfit(pricesBtc)).toStrictEqual(16)
  })

  it('It should return 60 to ETH', () => {
    expect(maxProfit(pricesEth)).toStrictEqual(60)
  })

  it('It should return -1 to DOGE', () => {
    expect(maxProfit(pricesDoge)).toStrictEqual(-1)
  })

  it('It should return -1 to ADA', () => {
    expect(maxProfit(pricesAda)).toStrictEqual(-1)
  })
})
