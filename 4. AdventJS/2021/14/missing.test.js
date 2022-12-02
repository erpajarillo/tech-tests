import { describe, it, expect } from 'vitest'
import { missingReindeer } from '.'

const testData1 = [0, 2, 3] // 1
const testData2 = [5, 6, 1, 2, 3, 7, 0] // 4
const testData3 = [0, 1] // 2
const testData4 = [3, 0, 1] // 2
const testData5 = [9, 2, 3, 5, 6, 4, 7, 0, 1] // 8
const testData6 = [0] // 1

describe('Missing Reindeer', () => {
  it('It should be a function', () => {
    expect(missingReindeer).toBeTypeOf('function')
  })

  it('It should receive an array of numbers (max value 100)', () => {
    expect(() => missingReindeer()).toThrow()
    expect(() => missingReindeer([101])).toThrow()
    expect(() => missingReindeer([-1])).toThrow()
  })

  it('It should return a number', () => {
    expect(missingReindeer([])).toBeTypeOf('number')
  })

  it('It should return 0 if array is empty', () => {
    expect(missingReindeer([])).toStrictEqual(0)
  })

  it('It should return 0 if array has only 1', () => {
    expect(missingReindeer([1])).toStrictEqual(0)
  })

  it('It should return 1 with Test Data 1', () => {
    expect(missingReindeer(testData1)).toStrictEqual(1)
  })

  it('It should return 4 with Test Data 2', () => {
    expect(missingReindeer(testData2)).toStrictEqual(4)
  })

  it('It should return 2 with Test Data 3 (Last Item)', () => {
    expect(missingReindeer(testData3)).toStrictEqual(2)
  })

  it('It should return 2 with Test Data 4', () => {
    expect(missingReindeer(testData4)).toStrictEqual(2)
  })

  it('It should return 8 with Test Data 5', () => {
    expect(missingReindeer(testData5)).toStrictEqual(8)
  })

  it('It should return 1 with Test Data 6 (Last Item)', () => {
    expect(missingReindeer(testData6)).toStrictEqual(1)
  })
})
