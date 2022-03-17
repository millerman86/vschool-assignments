function arrayOfMultiples(num, length) {
  // Create a function that takes two numbers as arguments and returns an array
  // of multiples of num up to length

  let arrayOfMultiples = [];

  for (let i = 1; i < length + 1; i++) {
    arrayOfMultiples.push(num * i);
  }
  return arrayOfMultiples;
}
