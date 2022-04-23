/**
 * 插入排序
 */

import { ISort } from "../interface"

const insertionSort: ISort = input => {
  // write the code below #region <%#
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0; j--) {
      if (input[j] < input[j - 1]) {
        const t = input[j]
        input[j] = input[j - 1]
        input[j - 1] = t
      }
    }
  }
  return input
  // %>

  // #endregion
}

export default insertionSort
