import { concat } from '../src/example'
import fc from 'fast-check'

describe('example.test.ts', () => {
  it('concated in any order yields the same length', () => {
    fc.assert(fc.property(
      fc.array(fc.anything(), 0, 10),
      fc.array(fc.anything(), 0, 10),
      (a, b) => {
        const ab = concat(a, b)
        const ba = concat(b, a)
        return ab.length === ba.length
      }
    ))
  })
})
