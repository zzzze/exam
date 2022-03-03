import { buildTree } from "../utils"
import inorder from './inorder-traversal'

const testCases = [{
  input: [1, null, 2, 3],
  output: [1, 2, 3],
}, {
  input: [3, 9, 20, null, null, 15, 7],
  output: [9, 3, 15, 20, 7],
}]

describe('btree - inorder traversal', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`test - ${i}`, () => {
      const result = inorder(buildTree(testCases[i].input))
      expect(result).toEqual(testCases[i].output)
    })
  }
})
