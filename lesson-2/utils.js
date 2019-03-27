exports.trace = fn => {
  console.log(`${fn.name} [start]`)
  fn()
  console.log(`${fn.name} [end]\n`)
}
