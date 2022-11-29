import { describe, it, expect } from 'vitest'
import longestMatrixPath from '.'

describe('Longest Matrix Path', () => {
  it('It should be a function', () => {
    expect(longestMatrixPath).toBeTypeOf('function')
  })

  it('It should receive an array of strings', () => {
    expect(() => longestMatrixPath()).toThrow()
    expect(() => longestMatrixPath([])).toThrow()
    expect(() => longestMatrixPath([1, 2, 3])).toThrow()
    expect(() => longestMatrixPath([1, 2, 'a'])).toThrow()
    expect(() => longestMatrixPath(['1', '2', '3'])).not.toThrow()
  })

  it('It should return a number', () => {
    expect(longestMatrixPath(['345', '326', '221'])).toBeTypeOf('number')
  })

  it('It should return 3 with ["345", "326", "221"]', () => {
    expect(longestMatrixPath(['345', '326', '221'])).toStrictEqual(3)
  })

  it('It should return 8 with ["1231434", "2267897", "3458635"]', () => {
    expect(longestMatrixPath(['1231434', '2267897', '3458635'])).toStrictEqual(8)
  })
})
