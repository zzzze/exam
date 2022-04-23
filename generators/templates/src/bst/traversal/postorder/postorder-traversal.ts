/**
 * 后序遍历
 */

import Node from "../../node";

const postorder = (root: Node<number> | null): number[] => {
  // write the code below #region <%#
  const result: number[] = []
  let p = root
  const stack: Node<number>[] = []
  while(p || stack.length) {
    if (!p) {
      p = stack.pop() ?? null
    }
    if (!p) {
      break
    }
    result.unshift(p.val)
    if (p.left) {
      stack.push(p.left)
    }
    p = p.right
  }
  return result
  // %>

  // #endregion
}

export default postorder
