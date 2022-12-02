import { describe, it, expect } from 'vitest'
import { contains } from '.'

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta'
    }
  }
}

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

describe('Contais', () => {
  it('It should be a function', () => {
    expect(contains).toBeTypeOf('function')
  })

  it('It should receive an object and a string', () => {
    expect(() => contains()).toThrow()
    expect(() => contains([], 'algo')).toThrow()
  })

  it('It should return a boolean', () => {
    expect(contains({}, 'camiseta')).toBeTypeOf('boolean')
  })

  it('It should return true if the object is in the store', () => {
    expect(contains(almacen, 'camiseta')).toBeTruthy()
    expect(contains(almacen, 'coca-cola')).toBeTruthy()
    expect(contains(otroAlmacen, 'mando')).toBeTruthy()
    expect(contains(otroAlmacen, 'cd-rom')).toBeTruthy()
  })

  it('It should return false if the object is not in the store', () => {
    expect(contains(almacen, 'mando')).toBeFalsy()
    expect(contains(almacen, 'ordenador')).toBeFalsy()
    expect(contains(otroAlmacen, 'gameboy')).toBeFalsy()
    expect(contains(otroAlmacen, 'PS2')).toBeFalsy()
  })
})
