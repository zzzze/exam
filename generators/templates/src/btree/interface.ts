export type INode<T> = {
  val: T
  left: INode<T>
  right: INode<T>
} | null
