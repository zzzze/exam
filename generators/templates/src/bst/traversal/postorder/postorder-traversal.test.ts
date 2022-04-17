import { buildTree } from "@/bst/utils"
import postorder from './postorder-traversal'

const testCases = [{
  input: [1, null, 2, 3],
  output: [3, 2, 1],
}, {
  input: [3, 9, 20, null, null, 15, 7],
  output: [9, 15, 7, 20, 3],
}]

describe('btree - postorder traversal', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = postorder(buildTree(testCases[i].input))
      expect(result).toEqual(testCases[i].output)
    })
  }
})
