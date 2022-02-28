import testCases from '../test-cases'
import mergeSort from './merge'

describe('sorting - merge', () => {
  for(let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = mergeSort(testCases[i].input)
      expect(result).toEqual(testCases[i].output)
    })
  }
})
