import testCases from '../test-cases'
import stackSort from './stack'

describe('sorting - stack', () => {
  for(let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = stackSort(testCases[i].input)
      expect(result).toEqual(testCases[i].output)
    })
  }
})
