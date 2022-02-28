import testCases from '../test-cases'
import insertionSort from './insertion'

describe('sorting - insertion', () => {
  for(let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = insertionSort(testCases[i].input)
      expect(result).toEqual(testCases[i].output)
    })
  }
})
