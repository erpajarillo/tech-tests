import { describe, it, expect } from 'vitest'
import { isValid } from '.'

const validLetter = 'bici coche (balón) bici coche peluche'
const validLetter2 = '(muñeca) consola bici'
const invalidLetter = '(peluche {) bici'
const invalidLetter2 = 'peluche (bici [coche) bici coche balón'
const invalidLetter3 = '() bici'
const invalidLetter4 = 'bici coche (balón bici coche'
const invalidLetter5 = 'bici coche balón bici coche)'
const invalidLetter6 = 'bici coche balón )bici( coche'

describe('Valid Letter', () => {
  it('It should be a function', () => {
    expect(isValid).toBeTypeOf('function')
  })

  it('It should receive a string', () => {
    expect(() => isValid()).toThrow()
  })

  it('It should return a boolean', () => {
    expect(isValid(validLetter)).toBeTypeOf('boolean')
  })

  it('It should return true with a valid letter', () => {
    expect(isValid(validLetter)).toBe(true)
    expect(isValid(validLetter2)).toBe(true)
  })

  it('It should return false with an invalid letter with {', () => {
    expect(isValid(invalidLetter)).toBe(false)
  })

  it('It should return false with an invalid letter with [', () => {
    expect(isValid(invalidLetter2)).toBe(false)
  })

  it('It should return false with an empty ()', () => {
    expect(isValid(invalidLetter3)).toBe(false)
  })

  it('It should return false if includes ( but no )', () => {
    expect(isValid(invalidLetter4)).toBe(false)
  })

  it('It should return false if includes ) but no (', () => {
    expect(isValid(invalidLetter5)).toBe(false)
  })

  it('It should return false if ) is before than (', () => {
    expect(isValid(invalidLetter6)).toBe(false)
  })
})
