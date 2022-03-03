import {INode} from "./interface";

type QueueItem = {node: Exclude<INode<number>, null>, hasLeft: boolean}

export function buildTree(data: Array<number | null>): INode<number> {
  if (!data.length || !data[0]) {
    return null
  }
  const root = {
    val: data[0],
    left: null,
    right: null,
  }
  const nonEmptyNodeQueue: QueueItem[] = []
  let preNonEmptyNode: QueueItem | undefined = {
    node: root,
    hasLeft: false,
  }
  for (let i = 1; i < data.length; i++) {
    if (!preNonEmptyNode) {
      break
    }
    const val = data[i]
    if ( val == null) {
      if (!preNonEmptyNode.hasLeft) {
        preNonEmptyNode.hasLeft = true
      } else {
        preNonEmptyNode = nonEmptyNodeQueue.pop()
      }
      continue
    }
    const node = { val, left: null, right: null }
    const item = { node, hasLeft: false }
    if (preNonEmptyNode.hasLeft) {
      nonEmptyNodeQueue.unshift(item)
      preNonEmptyNode.node.right = node
      preNonEmptyNode = nonEmptyNodeQueue.pop()
    } else {
      nonEmptyNodeQueue.unshift(item)
      preNonEmptyNode.node.left = node
      preNonEmptyNode.hasLeft = true
    }
  }
  return root
}

export function printTree(tree: INode<number>): string {
  const queue: INode<number>[] = [tree]
  const values: Array<number | 'null'> = []
  while (queue.length > 0) {
    let node = queue.pop()
    if (!node) {
      values.push('null')
      continue
    }
    values.push(node.val)
    queue.unshift(node.left)
    queue.unshift(node.right)
  }
  let lastNonEmptyNodeIndex = values.length - 1
  for (; lastNonEmptyNodeIndex >= 0 && values[lastNonEmptyNodeIndex] === 'null'; lastNonEmptyNodeIndex--) {}
  return `[${values.slice(0, lastNonEmptyNodeIndex + 1).join(',')}]`
}
