/**
 * 前序遍历
 */

import Node from "../../node";

const preorder = (root: Node<number> | null): number[] => {
  // write the code below #region <%#
  const result: number[] = []
  let p = root
  let stack: Node<number>[] = []
  while (p || stack.length) {
    if (!p) {
      p = stack.pop() ?? null
    }
    if (!p) {
      break
    }
    result.push(p.val)
    if (p.right) {
      stack.push(p.right)
    }
    p = p.left
  }
  return result
  // %>

  // #endregion
}

export default preorder
