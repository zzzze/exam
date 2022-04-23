/**
 * 希尔排序
 */

import { ISort } from "../interface"

const shellSort: ISort = input => {
  // write the code below #region <%#
  let h = 1
  const N = input.length
  while (h < N / 3) {
    h = 3 * h + 1
  }
  while (h > 0) {
    for (let i = h; i < N; i++) {
      for (let j = i; j > h - 1; j -= h) {
        if (input[j] < input[j - h]) {
          const t = input[j]
          input[j] = input[j - h]
          input[j - h] = t
        }
      }
    }
    h = Math.floor(h / 3)
  }
  return input
  // %>

  // #endregion
}

export default shellSort
