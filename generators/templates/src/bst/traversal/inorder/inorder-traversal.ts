/**
 * 中序遍历
 */

import Node from "../../node";

const inorder = (root: Node<number> | null): number[] => {
  // write the code below #region <%#
  let result: number[] = []
  let p = root
  let stack: Node<number>[] = []
  while (p || stack.length) {
    while (p != null) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop() ?? null
    if (!p) {
      break
    }
    result.push(p.val)
    p = p.right
  }
  return result
  // %>

  // #endregion
}

export default inorder
