import BST from './bst'
import { buildTree, printTree } from '../utils';
import Node from '../node';

class BSTTest<K, V> extends BST<K, V> {
  getRoot() {
    return this.root
  }
  setRoot(tree: Node<K, V> | null) {
    this.root = tree
    this.recalcSize()
  }
  recalcSize() {
    this._recalcSize(this.root)
  }
  private _recalcSize(x: Node<K, V> | null): number {
    if (!x) { return 0 }
    x.N = this._recalcSize(x.left) + this._recalcSize(x.right) + 1
    return x.N
  }
}

test('put', () => {
  const bst = new BSTTest<string, string>()
  bst.put('S', 'SSS')
  bst.put('E', 'EEE')
  bst.put('A', 'AAA')
  bst.put('C', 'CCC')
  bst.put('X', 'XXX')
  bst.put('R', 'RRR')
  bst.put('H', 'HHH')
  bst.put('M', 'MMM')
  bst.put('P', 'PPP')
  expect(printTree(bst.getRoot())).toBe('[SSS,EEE,XXX,AAA,RRR,null,null,null,CCC,HHH,null,null,null,null,MMM,null,PPP]')
})

test('get', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.get('S')).toBe('S')
  expect(bst.get('E')).toBe('E')
  expect(bst.get('A')).toBe('A')
  expect(bst.get('C')).toBe('C')
  expect(bst.get('X')).toBe('X')
  expect(bst.get('R')).toBe('R')
  expect(bst.get('H')).toBe('H')
  expect(bst.get('M')).toBe('M')
  expect(bst.get('P')).toBe('P')
})

test('size', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.size()).toBe(9)
})

test('size(x)', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.size(tree?.left)).toBe(7)
})

test('max', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.max()).toBe('X')
})

test('mix', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.min()).toBe('A')
})

test('floor', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.floor('I')).toBe('H')
})

test('ceiling', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.ceiling('I')).toBe('M')
})

test('select', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.select(5)?.key).toBe('P')
})

test('rank', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.rank('R')).toBe(6)
})

test('keys', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.keys()).toStrictEqual(['A', 'C', 'E', 'H', 'M', 'P', 'R', 'S', 'X'])
})

test('range', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  expect(bst.range('C', 'M')).toStrictEqual(['C', 'E', 'H', 'M'])
})

test('deleteMin', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  bst.deleteMin()
  expect(printTree(bst.getRoot())).toBe('[S,E,X,C,R,null,null,null,null,H,null,null,M,null,P]')
})

test('deleteMax', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  bst.deleteMax()
  expect(printTree(bst.getRoot())).toBe('[S,E,null,A,R,null,C,H,null,null,null,null,M,null,P]')
})

test('delete', () => {
  const bst = new BSTTest<string, string>()
  const tree = buildTree(['S', 'E', 'X', 'A', 'R', null, null, null, 'C', 'H', null, null, null, null, 'M', null, 'P'])
  bst.setRoot(tree)
  bst.delete('E')
  expect(printTree(bst.getRoot())).toBe('[S,H,X,A,R,null,null,null,C,M,null,null,null,null,P]')
})
