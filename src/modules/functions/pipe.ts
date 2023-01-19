/*
Your job is to recode the pipe function. It should take a variable number of functions as arguments and return a function
that takes a single argument. The returned function should call the first function with the argument, then call the second 
function with the result of the first function, then call the third function with the result of the second function, and so on. 
The returned function should return the value returned by the last function.

For example:

const f = pipe(double, inc, square)
f(5) // (((5 * 2) + 1) * 2) = 42

*/

// this pipe should be call like this pipe(f1, f2, f3)(x)
export const pipe01 = () => {}

// this pipe should be call like this pipe(myValue, fn1, fn2, fn3)
export const pipe02 = () => {}
