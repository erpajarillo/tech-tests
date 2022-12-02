import { describe, it, expect } from 'vitest'
import wrapping from '.'

const test = ['book', 'game', 'socks']
const testResult = [
  '******\n*book*\n******', 
  '******\n*game*\n******', 
  '*******\n*socks*\n*******'
]

describe('Warpping Gifts', () => {
  it('It should be a function', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('It should receive an array of strings', () => {
    expect(() => wrapping()).toThrow()
    expect(() => wrapping([1, 2, 3])).toThrow()
    expect(() => wrapping([1, 2, 'a'])).toThrow()
    expect(() => wrapping(['c', 'b', 'a'])).not.toThrow()
  })

  it('It should retrieve [] if [] is passed', ()=> {
    expect(wrapping([])).toStrictEqual([])
  })

  it('It should return an array of strings', () => {
    const result = wrapping(['c', 'b', 'a'])

    expect(Array.isArray(result)).toBeTruthy()
    expect(result.length > 0).toBeTruthy()
    expect(result.every((item) => typeof item === 'string')).toBeTruthy()
  })

  it('It should return testResult for wrapping(test)', () => {
    expect(wrapping(test)).toStrictEqual(testResult)
  })
})