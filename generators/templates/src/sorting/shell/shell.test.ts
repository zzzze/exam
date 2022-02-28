import testCases from '../test-cases'
import shellSort from './shell'

describe('sorting - shell', () => {
  for(let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = shellSort(testCases[i].input)
      expect(result).toEqual(testCases[i].output)
    })
  }
})
