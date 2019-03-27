/* eslint-disable */

// Objects as a way to create a data record
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 45
}

user.firstName // => 'John'

// We can create a function that operates on any object that
// has firstName and lastName fields
function getFullName(user) {
  return user.firstName + user.lastName
}

// --------

// Objects as a way to create a namespace

// In file math.js
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }

export { add, subtract }


// In file main.js
import * as Math from './math'

Math.add(1, 2) // => 3
Math.subtract(1, 2) // => -1

// -------------------

const nameData = {
  name: 'John',
}

const ageData = {
  age: 40
}

const user = {
  ...nameData,
  ...ageData
}
// => { name: 'John', age: 40 }

// We can use it to override some fields
const user2 = {
  ...user,
  age: 100
}
// => { name: 'John', age: 100 }

// ---------------------

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 45,

  setAge(age) {
    this.age = age
  },

  getFullName() {
    return this.firstName + this.lastName
  }
}
