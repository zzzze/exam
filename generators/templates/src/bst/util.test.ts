import { buildTree, printTree } from "./utils"

test('buildTree + printTree', () => {
  expect(printTree(buildTree([1, 2]))).toBe('[1,2]')
  expect(printTree(buildTree([1, null, 2]))).toBe('[1,null,2]')
  expect(printTree(buildTree([1, null, 2, 3]))).toBe('[1,null,2,3]')
  expect(printTree(buildTree([1, null, 2, null, 3]))).toBe('[1,null,2,null,3]')
  expect(printTree(buildTree([3, 9, 20, null, null, 15, 7]))).toBe('[3,9,20,null,null,15,7]')
})
