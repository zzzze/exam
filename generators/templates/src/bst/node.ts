export default class Node<K, V = any> {
  public left: Node<K, V> | null = null
  public right: Node<K, V> | null = null
  constructor(public key: K, public val?: V, public N: number = 0) {}
}
