const array = [1, '2', true, {}, [], function hmm() { }]

array = [1, 2, 3]

array[0] // => 1

array.length // => 3

// Array is a built-in type constructor
new Array(1, 2, 3) // => [1, 2, 3]

Array.of(1, 2, 3) // => [1, 2, 3]

Array.from('foo') // => ['f', 'o', 'o']

Array.isArray(123) // => false

[1, 2, 3]

// Use .forEach to perform side effects.
// This function returns undefined, so it can't be used to transform array elements
array.forEach(el => {
  console.log(el)
  sendToServer(el)
  localStorage.set('el', el)

  el = 12345 // this is useless because el is a local variable
})

// Use .map to perform an action and return a new array.
array.map(el => el + 10) // => [11, 12, 13]

// Use .filter to filter elements depending on the given predicate
array.filter(el => el % 2 !== 0) // => [1, 3]

// Use .reduce to reduce elements to a single value
array.reduce((acc, cur) => acc + cur, 0) // => 6

// Use .includes to check if array contains the given value (comparing with ===)
array.includes(3) // => true

const array2 = [1, 10, 3, 2];
array2.sort((a, b) => a - b);
// => ???

const array1 = [1, 2]
const array2 = [3, 4]

const array3 = [...array1, ...array2, 5]
// => [1, 2, 3, 4, 5]
