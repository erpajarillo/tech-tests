import { describe, it, expect } from 'vitest'
import distributeGifts from '.'

describe('Distribute Gifts', () => {
  it('It should be a function', () => {
    expect(distributeGifts).toBeTypeOf('function')
  })

  it('It should receive two array of strings', () => {
    expect(distributeGifts).toHaveLength(2)
    expect(() => distributeGifts([], [])).not.toThrow()
    expect(() => distributeGifts(1, 1)).toThrow()
  })

  it('It should recieve arrays with elements lenght greater than 0', () => {
    expect(() => distributeGifts(['regalo'], ['renp'])).not.toThrow()
    expect(() => distributeGifts([''], [''])).toThrow()
  })

  it('It should return a number', () => {
    expect(distributeGifts([], [])).toBeTypeOf('number')
  })

  it('It should return 2', () => {
    expect(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])).toStrictEqual(2)
  })
})
