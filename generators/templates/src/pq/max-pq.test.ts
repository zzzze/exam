import MaxPQ from './max-pq'

describe('MaxPQ', () => {
  test('test - create from array', () => {
    const pq = new MaxPQ([6, 3, 9, 7, 1, 4, 5, 8, 2])
    const data = []
    while (!pq.isEmpty()) {
      data.push(pq.delMax())
    }
    expect(data).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
  })

  test('test - insert', () => {
    const pq = new MaxPQ()
    pq.insert(6)
    pq.insert(3)
    pq.insert(9)
    pq.insert(7)
    pq.insert(1)
    pq.insert(4)
    pq.insert(5)
    pq.insert(8)
    pq.insert(2)
    const data = []
    while (!pq.isEmpty()) {
      data.push(pq.delMax())
    }
    expect(data).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
})
