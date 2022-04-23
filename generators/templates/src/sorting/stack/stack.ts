/**
 * 堆排序
 */

import { ISort } from "../interface"

// <%#
function sink(arr: number[], k: number, N: number) {
  while (2 * k <= N) {
    let j = 2 * k
    if (j < N && arr[j] < arr[j + 1]) {
      j++
    }
    if (arr[k] > arr[j]) {
      break
    }
    let t = arr[k]
    arr[k] = arr[j]
    arr[j] = t
    k = j
  }
}
// %>stackSort

const stackSort: ISort = input => {
  // write the code below #region <%#
  let N = input.length
  const arr = [0, ...input]
  for (let i = N / 2 << 0; i > 0; i--) {
    sink(arr, i, N)
  }
  while (N > 1) {
    let t = arr[1]
    arr[1] = arr[N]
    arr[N] = t
    N--
    sink(arr, 1, N)
  }
  return arr.slice(1)
  // %>

  // #endregion
}

export default stackSort
