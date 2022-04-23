/**
 * 快速排序
 */

import { ISort } from "../interface"

// <%#
function partition(arr: number[], lo: number, hi: number) {
  const temp = arr[lo]
  let i = lo
  let j = hi
  while (j > i) {
    while (arr[j] >= temp && j > i) {
      j--
    }
    while (arr[i] <= temp && j > i) {
      i++
    }
    if (j != i) {
      let t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
    }
  }
  arr[lo] = arr[i]
  arr[i] = temp
  return i
}

function sort(arr: number[], lo: number, hi: number) {
  if (hi <= lo) {
    return
  }
  const i = partition(arr, lo, hi)
  sort(arr, lo, i - 1)
  sort(arr, i + 1, hi)
}
// %>quickSort

const quickSort: ISort = input => {
  // write the code below #region <%#
  sort(input, 0, input.length - 1)
  return input
  // %>

  // #endregion
}

export default quickSort
