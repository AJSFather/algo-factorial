function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *=i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(4032));



module.exports = factorial;
