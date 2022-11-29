import { describe, it, expect } from 'vitest'
import decodeNumber from '.'

describe('Decode Number', () => {
  it('It should be a function', () => {
    expect(typeof decodeNumber).toBe('function')
  })

  it('It should receive a string', () => {
    expect(() => decodeNumber()).toThrow()
    expect(() => decodeNumber(123)).toThrow()
    expect(() => decodeNumber('')).toThrow()
    expect(() => decodeNumber('....')).not.toThrow()
  })

  it('It should return NaN if receive chars that are not . , : ; !', () => {
    expect(decodeNumber('123')).toBeNaN()
    expect(decodeNumber('a..')).toBeNaN()
    expect(decodeNumber('a!!')).toBeNaN()
    expect(decodeNumber('!!!a')).toBeNaN()
    expect(decodeNumber(';.W')).toBeNaN()
    expect(decodeNumber('!!!!')).not.toBeNaN()
  })

  it('It should return a number', () => {
    expect(typeof decodeNumber('....')).toBe('number')
  })

  it('It should return 3 for ...', () => {
    expect(decodeNumber('...')).toBe(3)
  })

  it('It should return 4 for .,', () => {
    expect(decodeNumber('.,')).toBe(4)
  })

  it('It should return 6 for ,.', () => {
    expect(decodeNumber(',.')).toBe(6)
  })

  it('It should return 8 for ,...', () => {
    expect(decodeNumber(',...')).toBe(8)
  })

  it('It should return 107 for .........!', () => {
    expect(decodeNumber('.........!')).toBe(107)
  })

  it('It should return 49 for .;', () => {
    expect(decodeNumber('.;')).toBe(49)
  })

  it('It should return 5 for ..,', () => {
    expect(decodeNumber('..,')).toBe(5)
  })

  it('It should return 95 for ..,!', () => {
    expect(decodeNumber('..,!')).toBe(95)
  })

  it('It should return 49 for .;!', () => {
    expect(decodeNumber('.;!')).toBe(49)
  })

  it('It should return 300 for !!!', () => {
    expect(decodeNumber('!!!')).toBe(300)
  })

  it('It should return 50 for ;!', () => {
    expect(decodeNumber(';!')).toBe(50)
  })
})
