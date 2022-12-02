import { describe, it, expect } from 'vitest'
import { sumPairs } from '.'

describe('Sum Pairs', () => {
  it('It should be a function', () => {
    expect(sumPairs).toBeTypeOf('function')
  })

  it('It should receive an array and a number', () => {
    expect(() => sumPairs()).toThrow()
  })

  it('It should return an array with 2 numbers (possible)', () => {
    const functionResult = sumPairs([1, 2, 3], 3)

    const isArray = Array.isArray(functionResult)
    const hasTwoElements = functionResult.length === 2
    let hasTwoNumbers = true
    functionResult.forEach(n => {
      if (typeof n === 'number') return
      hasTwoNumbers = false
    })

    expect(isArray).toBeTruthy()
    expect(hasTwoElements).toBeTruthy()
    expect(hasTwoNumbers).toBeTruthy()
  })

  it('It should return the correspondig pairs', () => {
    expect(sumPairs([1, 2, 3], 3)).toStrictEqual([1, 2])
    expect(sumPairs([1, 2, 3], 4)).toStrictEqual([1, 3])
    expect(sumPairs([1, 2, 3], 5)).toStrictEqual([2, 3])
    expect(sumPairs([3, 5, 7, 2], 10)).toStrictEqual([3, 7])
    expect(sumPairs([2, 2, 3, 1], 4)).toStrictEqual([2, 2])
    expect(sumPairs([6, 7, 1, 2], 8)).toStrictEqual([6, 2])
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toStrictEqual([1, 5])
  })

  it('It should return a null (not possible)', () => {
    expect(sumPairs([1, 2, 3], 100)).toBeNull()
    expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
  })
})
