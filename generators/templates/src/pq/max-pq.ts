/**
 * 优先队列
 */

interface IMaxPQ {
  isEmpty(): boolean
  size(): number
  insert(val: number): void
  max(): number
  delMax(): number
}

export default class MaxPQ implements IMaxPQ {
  // write the code below #region <%#
  protected data: number[] = [0]
  private N = 0

  constructor(data?: number[]) {
    if (data) {
      this.data = [0, ...data]
      this.N = data.length
      for (let k = this.N / 2 << 0; k > 0; k--) {
        this.sink(k)
      }
    }
  }

  private sink(k: number) {
    while (2 * k <= this.N) {
      let j = 2 * k
      if (j < this.N && this.data[j] < this.data[j + 1]) {
        j++
      }
      if (this.data[k] >= this.data[j]) {
        break
      }
      this.swap(k, j)
      k = j
    }
  }

  private swim(k: number) {
    while (k > 1) {
      let j = k / 2 << 0
      if (this.data[j] > this.data[k]) {
        break
      }
      this.swap(k, j)
      k = j
    }
  }

  private swap(i: number, j: number) {
    const t = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = t
  }

  insert(val: number) {
    this.data.push(val)
    this.N++
    this.swim(this.N)
  }

  max(): number {
    return this.data[1]
  }

  delMax(): number {
    const max = this.max()
    this.data[1] = this.data[this.N]
    this.data.splice(this.N, 1)
    this.N--
    this.sink(1)
    return max
  }

  size() {
    return this.N
  }

  isEmpty() {
    return this.N === 0
  }
  // %>

  // #endregion
}

