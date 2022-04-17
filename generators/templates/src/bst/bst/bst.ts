/**
 * 二叉搜索树
 */

import Node from '../node'

interface IBST<K, V> {
  size(): number
  size(x: Node<K, V> | null): number
  get(key: K): V | null
  put(key: K, val: V): void
  max(): K | null
  min(): K | null
  floor(key: K): K | null
  ceiling(key: K): K | null
  select(n: number): Node<K, V> | null
  rank(key: K): number
  keys(): K[]
  range(lo: K, hi: K): K[]
  delete(key: K): void
  deleteMin(): void
  deleteMax(): void
}

export default class BST<K, V> implements IBST<K, V> {
  protected root: Node<K, V> | null = null

  // write the code below #region <%#
  public size(x?: Node<K, V> | null) {
    if (x === null) { return 0 }
    x = x ?? this.root
    if (!x) { return 0 }
    return x.N
  }

  public get(key: K) {
    return this._get(this.root, key)
  }

  private _get(x: Node<K, V> | null, key: K): V | null {
    if (x == null) {
      return null
    }
    if (key > x.key) { return this._get(x.right, key) }
    if (key < x.key) { return this._get(x.left, key) }
    return x.val ?? null
  }

  public put(key: K, val: V) {
    this.root = this._put(this.root, key, val)
  }

  private _put(x: Node<K, V> | null, key: K, val: V): Node<K, V> {
    if (!x) {
      return new Node(key, val, 1)
    }
    if (key > x.key) { x.right = this._put(x.right, key, val) }
    else if (key < x.key) { x.left = this._put(x.left, key, val) }
    else { x.val = val }
    x.N = this.size(x.left) + this.size(x.right) + 1
    return x
  }

  public min(): K | null {
    if (!this.root) { return null }
    const x = this._min(this.root)
    if (!x) { return null }
    return x.key
  }

  private _min(x: Node<K, V> | null): Node<K, V> | null {
    if (!x) { return null }
    if (!x.left) { return x }
    return this._min(x.left)
  }

  public max(): K | null {
    if (!this.root) { return null }
    const x = this._max(this.root)
    if (!x) { return null }
    return x.key
  }

  private _max(x: Node<K, V> | null): Node<K, V> | null {
    if (!x) { return null }
    if (!x.right) { return x }
    return this._max(x.right)
  }

  public floor(key: K): K | null {
    const x = this._floor(this.root, key)
    if (!x) { return null }
    return x.key
  }

  private _floor(x: Node<K, V> | null, key: K): Node<K, V> | null {
    if (!x) { return null }
    if (key === x.key) { return x }
    if (key < x.key) { return this._floor(x.left, key) }
    const t = this._floor(x.right, key)
    if (!t) { return x }
    return t
  }

  public ceiling(key: K): K | null {
    const x = this._ceiling(this.root, key)
    if (!x) { return null }
    return x.key
  }

  private _ceiling(x: Node<K, V> | null, key: K): Node<K, V> | null {
    if (!x) { return null }
    if (key === x.key) { return x }
    if (key > x.key) { return this._ceiling(x.right, key) }
    const t = this._ceiling(x.left, key)
    if (!t) { return x }
    return t
  }

  public select(n: number): Node<K, V> | null {
    return this._select(this.root, n)
  }

  private _select(x: Node<K, V> | null, n: number): Node<K, V> | null {
    if (!x) { return null }
    const t = this.size(x.left)
    if (t < n) { return this._select(x.right, n - t - 1) }
    if (t > n) { return this._select(x.left, n) }
    return x
  }

  public rank(k: K): number {
    return this._rank(this.root, k)
  }

  private _rank(x: Node<K, V> | null, key: K): number {
    if (!x) { return 0 }
    if (x.key > key) { return this._rank(x.left, key) }
    if (x.key < key) { return 1 + this.size(x.left) + this._rank(x.right, key) }
    return this.size(x.left)
  }

  public keys(): K[] {
    const min = this.min()
    const max = this.max()
    if (min == null || max == null) { return [] }
    return this.range(min, max)
  }

  public range(lo: K, hi: K): K[] {
    const queue: K[] = []
    this._range(this.root, queue, lo, hi)
    return queue
  }

  private _range(x: Node<K, V> | null, queue: K[], lo: K, hi: K) {
    if (!x) { return }
    if (x.key > lo) { this._range(x.left, queue, lo, hi) }
    if (x.key >= lo && x.key <= hi) { queue.push(x.key) }
    if (x.key < hi) { this._range(x.right, queue, lo, hi) }
  }

  public deleteMin() {
    this.root = this._deleteMin(this.root)
  }

  private _deleteMin(x: Node<K, V> | null): Node<K, V> | null {
    if (!x) { return null }
    if (!x.left) { return x.right }
    x.left = this._deleteMin(x.left)
    x.N = this.size(x.left) + this.size(x.right) + 1
    return x
  }

  public deleteMax() {
    this.root = this._deleteMax(this.root)
  }

  private _deleteMax(x: Node<K, V> | null): Node<K, V> | null {
    if (!x) { return null }
    if (!x.right) { return x.left }
    x.right = this._deleteMax(x.right)
    x.N = this.size(x.left) + this.size(x.right) + 1
    return x
  }

  public delete(key: K) {
    this.root = this._delete(this.root, key)
  }

  private _delete(x: Node<K, V> | null, key: K): Node<K, V> | null {
    if (!x) { return null }
    if (key < x.key) { x.left = this._delete(x.left, key) }
    else if (key > x.key) { x.right = this._delete(x.right, key) }
    else {
      if (!x.left) { return x.right }
      if (!x.right) { return x.left }
      const t = x
      x = this._min(t.right)
      if (!x) { return null }
      x.right = this._deleteMin(t.right)
      x.left = t.left
    }
    x.N = this.size(x.left) + this.size(x.right) + 1
    return x
  }
  // %>

  // #endregion
}
