const promiseAll = (arrayOfPromise) => {
  //prettier-ignore
  const isInputArray = Array.isArray(arrayOfPromise);
  //prettier-ignore
  const isArrayEmpty = Array.isArray(arrayOfPromise) && arrayOfPromise.length === 0;

  return new Promise((resolve, reject) => {
    //prettier-ignore
    if (!isInputArray) reject(new TypeError(`input data is not iterable`));
    if (isArrayEmpty) resolve([]);

    let resolved = new Array(arrayOfPromise.length);
    let resolvedCounter = 0;

    arrayOfPromise.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise
          .then((data) => {
            resolved[index] = data;
            resolvedCounter += 1;
            if (resolvedCounter === arrayOfPromise.length) resolve(resolved);
          })
          .catch((error) => reject(error));
      } else {
        resolved[index] = arrayOfPromise[index];
        resolvedCounter += 1;
        if (resolvedCounter === arrayOfPromise.length) resolve(resolved);
      }
    });
  });
};

export default promiseAll;
