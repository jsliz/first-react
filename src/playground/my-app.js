console.log('test');


const multiplier = {
  numbers: [2,6,3],
  num: 2,
  multiply() {
    return this.numbers.map((number) => number * this.num);
  }
};

console.log(multiplier.multiply());
