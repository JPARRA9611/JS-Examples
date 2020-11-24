const addTen = (n) => (n + 10);

const memoizedAdd = (func) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = func(n);
      cache[n] = result;
      return result;
    }
  }
}

const newAdd = memoizedAdd(addTen);
console.log(newAdd(9));
console.log(newAdd(9));
console.log(newAdd(10));
console.log(newAdd(10));
