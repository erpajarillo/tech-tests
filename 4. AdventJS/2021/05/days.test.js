import { describe, it, expect } from 'vitest'
import { daysToXmas } from '.'

describe('Days To Xmas', () => {
  it('It should be a function', () => {
    expect(daysToXmas).toBeTypeOf('function')
  })

  it('It should receive an instance of Date', () => {
    expect(() => daysToXmas()).toThrow()
    expect(() => daysToXmas(null)).toThrow()
    expect(() => daysToXmas(undefined)).toThrow()
    expect(() => daysToXmas('2021/12/24')).toThrow()
  })

  it('It should return an integer number', () => {
    expect(daysToXmas(new Date())).toBeTypeOf('number')
  })

  it('It should return 0 when date sent is xmas Date', () => {
    expect(daysToXmas(new Date('Dec 25, 2021'))).toBe(0)
  })

  it('It should return positive int when date is before xmas Date', () => {
    expect(daysToXmas(new Date('Dec 20, 2021'))).toBe(5)
    expect(daysToXmas(new Date('Dec 24, 2021'))).toBe(1)
    expect(daysToXmas(new Date('December 23, 2021 03:24:00'))).toBe(2)
  })

  it('It should return negative int when date is after xmas Date', () => {
    expect(daysToXmas(new Date('Dec 27, 2021'))).toBe(-2)
    expect(daysToXmas(new Date('Jan 1, 2022'))).toBe(-7)
  })
})
