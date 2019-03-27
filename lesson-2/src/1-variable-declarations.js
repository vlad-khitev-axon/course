/* eslint-disable no-var, prefer-const, vars-on-top, block-scoped-var */

var a = 0
let b = 0
const c = 0

// This is fine
a = '123'

// This is fine too
b = true

// Uncaught TypeError: Assignment to constant variable.
c = 3
