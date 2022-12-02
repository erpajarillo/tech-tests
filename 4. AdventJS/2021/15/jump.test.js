import { describe, it, expect } from 'vitest'
import checkSledJump from '.'

const testTrue1 = [1, 2, 3, 2, 1]
const testTrue2 = [0, 1, 0]
const testTrue3 = [0, 3, 2, 1]
const testTrue4 = [0, 1000, 1]

const testFalse1 = [2, 4, 4, 6, 2]
const testFalse2 = [1, 2, 3]
const testFalse3 = [1, 2, 3, 2, 1, 2, 3]

describe('Check Sled Jump', () => {
  it('It should be a function', () => {
    expect(checkSledJump).toBeTypeOf('function')
  })

  it('It should receive an array of min 3 elements', () => {
    expect(() => checkSledJump()).toThrow()
    expect(() => checkSledJump([])).toThrow()
    expect(() => checkSledJump([1])).toThrow()
    expect(() => checkSledJump([1, 2])).toThrow()
    expect(() => checkSledJump([1, 2, 3])).not.toThrow()
  })

  it('It should receive an array of numbers', () => {
    expect(() => checkSledJump([1, 2, '3'])).toThrow()
    expect(() => checkSledJump([1, 2, 3])).not.toThrow()
  })

  it('It should return a boolean', () => {
    expect(checkSledJump([1, 2, 3])).toBeTypeOf('boolean')
  })

  it('It should return true if the jumps are valid', () => {
    expect(checkSledJump(testTrue1)).toBeTruthy()
    expect(checkSledJump(testTrue2)).toBeTruthy()
    expect(checkSledJump(testTrue3)).toBeTruthy()
    expect(checkSledJump(testTrue4)).toBeTruthy()
  })

  it('It should return false if the jumps are not valid', () => {
    expect(checkSledJump(testFalse1)).toBe(false)
    expect(checkSledJump(testFalse2)).toBe(false)
    expect(checkSledJump(testFalse3)).toBe(false)
  })
})
