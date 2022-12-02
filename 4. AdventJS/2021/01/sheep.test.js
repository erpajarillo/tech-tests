import { describe, expect, it } from 'vitest'
import { countSheeps } from '.'

const fakeEntrySheeps = [
  { name: 'Noa' },
  { color: 'rojo' }
]

const entrySheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

describe('countSheeps', () => {
  it('It should be a function', () => {
    expect(countSheeps).toBeTypeOf('function')
  })

  it('It should receive an array of Sheeps', () => {
    expect(() => countSheeps()).toThrow()
  })

  it('It should receive an array of Sheeps with name and color', () => {
    expect(() => countSheeps(fakeEntrySheeps)).toThrow()
  })

  it('It should return an array', () => {
    expect(countSheeps(entrySheeps)).toBeTypeOf('object')
  })

  it('It should return an array of Sheeps with color red', () => {
    const sheepsFiltered = countSheeps(entrySheeps)
    const sheepsNumber = sheepsFiltered.length
    const redSheeps = sheepsFiltered.find(s => s.color !== 'rojo')

    expect(sheepsNumber).toBeGreaterThan(0)
    expect(redSheeps).toBe(undefined)
  })

  it('It shouled return an array of Sheeps with letter a & n', () => {
    const result = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]

    expect(countSheeps(entrySheeps)).toStrictEqual(result)
  })
})
