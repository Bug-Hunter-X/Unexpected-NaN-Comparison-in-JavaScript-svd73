function foo(a, b) {
  // Use Number.isNaN to correctly check for NaN
  return Number.isNaN(a) && Number.isNaN(b) || a === b; 
}

console.log(foo(NaN, NaN)); // true
console.log(foo(1, 1)); // true
console.log(foo(1, 2)); // false