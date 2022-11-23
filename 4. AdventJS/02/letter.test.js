import { describe, it, expect } from 'vitest'
import { listGifts } from '.'

const carta = 'bici coche balón  _playstation     bici coche peluche'

describe('Count Presents', () => {
  it('It should be a function', () => {
    expect(listGifts).toBeTypeOf('function')
  })

  it('It should receive a string', () => {
    expect(() => listGifts()).toThrow()
  })

  it('It should return an object', () => {
    expect(listGifts(carta)).toBeTypeOf('object')
  })

  it('It should return a list of gifts', () => {
    const result = listGifts(carta)
    const giftsCount = Object.keys(result).length

    expect(giftsCount).toBeGreaterThan(0)
  })

  it('It should return the gifts aggregated', () => {
    const listOfGifts = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    }

    const result = listGifts(carta)

    expect(result).toStrictEqual(listOfGifts)
  })
})
