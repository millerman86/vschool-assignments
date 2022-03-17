// function product(a, b, c, d, e) {
//   const numbers = [a,b,c,d,e];
//
//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }
//turns into

const multiply = {
  product(...rest) {
    console.log(...rest)
    return this.multiply(...rest)
  },
  multiply(numbers) {
    console.log(numbers.reduce(function(acc, numbers) {
      return acc * numbers
    }))
  }
}

multiply.multiply([1,2,3,4])


const unshift = {
  unshift(...rest) {
    console.log([...rest[0], ...rest.slice(1)])
/////???????

  }
}

unshift.unshift([1,2,3], 1,2,3,4,5)
