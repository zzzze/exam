export default new Array(20).fill(0).map((_, i) => {
  const output =  new Array(i + 1).fill(0).map((_, j) => j + 1)
  const input = output.slice().sort(() => 0.5 - Math.random())
  return {input, output}
})
