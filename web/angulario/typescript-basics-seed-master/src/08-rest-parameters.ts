(() => {
  function sumAll(arr) {
    return arr.reduce((prev, next) => prev + next);
  }

  function sumAll2(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
  }

  function sumAll3(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
  }

  sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]);

  const sum2 = sumAll2("Hello!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10);
  console.log(sum2);

  const sum3 = sumAll3("Hello!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10);
  console.log(sum3);

})();