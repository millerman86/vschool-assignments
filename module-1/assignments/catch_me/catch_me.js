const sum = (x, y) => {
  //check data types first and throw error
  try {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error(`Data type is not number`);
    }
  } catch (err) {
    console.log(err.message);
    return;
  }
  console.log(x + y);
};

console.log(sum(3, 2));

function test() {
  return
}

test();