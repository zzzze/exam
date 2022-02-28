import testCases from '../test-cases'
import quickSort from './quick'

describe('sorting - quick', () => {
  for(let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = quickSort(testCases[i].input)
      expect(result).toEqual(testCases[i].output)
    })
  }
})
