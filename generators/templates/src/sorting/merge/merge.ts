/**
 * 归并排序
 */

import { ISort } from "../interface"

// <%#
function merge(arr: number[], aux: number[], lo: number, mid: number, hi: number) {
  for (let i = 0; i < arr.length; i++) {
    aux[i] = arr[i]
  }
  let i = lo
  let j = mid + 1
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j]
      j++
    } else if (j > hi) {
      arr[k] = aux[i]
      i++
    } else if (aux[i] < aux[j]) {
      arr[k] = aux[i]
      i++
    } else {
      arr[k] = aux[j]
      j++
    }
  }
}

function sort(arr: number[], aux: number[], lo: number, hi: number) {
  if (hi <= lo) {
    return
  }
  const mid = Math.floor((hi - lo) / 2) + lo
  sort(arr, aux, lo, mid)
  sort(arr, aux, mid + 1, hi)
  merge(arr, aux, lo, mid, hi)
}
// %>mergeSort

const mergeSort: ISort = input => {
  // write the code below #region <%#
  sort(input, [], 0, input.length - 1)
  return input
  // %>

  // #endregion
}

export default mergeSort
