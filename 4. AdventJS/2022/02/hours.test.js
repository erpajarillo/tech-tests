import { describe, it, expect } from 'vitest'
import countHours from '.'

describe('Count Hours', () => {
  it('It should be a function', () => {
    expect(countHours).toBeTypeOf('function')
  })

  it('It should receive a number as year', () => {
    expect(() => countHours()).toThrow()
    expect(() => countHours('2021', [])).toThrow()
    expect(() => countHours(2021, [])).not.toThrow()
  })

  it('It should receive a array of strings as holidays', () => {
    expect(() => countHours()).toThrow()
    expect(() => countHours(2021, [1, 2, 3])).toThrow()
    expect(() => countHours(2021, ['01/06', '01/07'])).not.toThrow()
    expect(() => countHours(2021, [])).not.toThrow()
  })

  it('It should return a number value', () => {
    expect(countHours(2021, ['01/06', '01/07'])).toBeTypeOf('number')
  })

  it('It should return result1 using test1', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toStrictEqual(4)
  })
})
