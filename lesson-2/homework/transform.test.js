const transform = require('./transform')

const add = a => b => a + b

describe('transform', () => {
  it('1. creates a new object by transforming the `object` according to the `transformation` functions', () => {
    const transf = { elapsed: add(1), remaining: add(-1) }
    const object = { name: 'Tomato', elapsed: 100, remaining: 1400 }
    const expected = { name: 'Tomato', elapsed: 101, remaining: 1399 }
    expect(transform(transf, object)).toEqual(expected)
  })

  it('1. does not invoke function if object does not contain the key', () => {
    const transf = { n: add(1), m: add(1) }
    const object = { m: 3 }
    const expected = { m: 4 }
    expect(transform(transf, object)).toEqual(expected)
  })

  it('1. is not destructive', () => {
    const transf = { elapsed: add(1), remaining: add(-1) }
    const object = { name: 'Tomato', elapsed: 100, remaining: 1400 }
    const expected = { name: 'Tomato', elapsed: 100, remaining: 1400 }
    transform(transf, object)
    expect(object).toEqual(expected)
  })

  it('2. ignores primitive value transformations', () => {
    const transf = { n: 2, m: 'foo' }
    const object = { n: 0, m: 1 }
    const expected = { n: 0, m: 1 }
    expect(transform(transf, object)).toEqual(expected)
  })

  it('2. ignores null transformations', () => {
    const transf = { n: null }
    const object = { n: 0 }
    const expected = { n: 0 }
    expect(transform(transf, object)).toEqual(expected)
  })

  it('3. is recursive', () => {
    const transf = { nested: { second: add(-1), third: add(1) } }
    const object = { first: 1, nested: { second: 2, third: 3 } }
    const expected = { first: 1, nested: { second: 1, third: 4 } }
    expect(transform(transf, object)).toEqual(expected)
  })

  it('4. creates a new array by transforming the `array` according to the `transformation` functions', () => {
    const transf = [add(1), add(-1)]
    const object = [100, 1400]
    const expected = [101, 1399]
    expect(transform(transf, object)).toEqual(expected)
  })
})
