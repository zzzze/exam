import Node from './node'

type QueueItem<T> = {node: Node<T>, hasLeft: boolean}

export function buildTree<T>(data: Array<T | null>): Node<T> | null {
  if (!data.length || !data[0]) {
    return null
  }
  const root = new Node(data[0], data[0])
  const nonEmptyNodeQueue: QueueItem<T>[] = []
  let preNonEmptyNode: QueueItem<T> | undefined = {
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
    const node = new Node(val, val)
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

export function printTree<T>(tree: Node<T> | null): string {
  const queue: Array<Node<T> | null> = [tree]
  const values: Array<T | 'null'> = []
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
