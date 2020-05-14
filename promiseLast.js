const promiseLast = (arrayOfPromise) => {
  //prettier-ignore
  //prettier-ignore
  const isInputArray = Array.isArray(arrayOfPromise);
  //prettier-ignore
  const isArrayEmpty = Array.isArray(arrayOfPromise) && arrayOfPromise.length === 0;

  return new Promise((resolve, reject) => {
    //prettier-ignore
    if (!isInputArray) reject(new TypeError(`input data is not iterable`));
    if (isArrayEmpty) resolve([]);

    let resolved = [];
    let completedCounter = 0;
    let error = null;

    arrayOfPromise.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise
          .then((data) => {
            completedCounter += 1;
            resolved.push(data);

            if (completedCounter === arrayOfPromise.length) {
              if (error !== null) reject(error);
              resolve(resolved[resolved.length - 1]);
            }
          })
          .catch((data) => {
            completedCounter += 1;
            if (completedCounter === arrayOfPromise.length) reject(error);

            if (error === null) {
              error = data;
            }
          });
      } else {
        completedCounter += 1;
        resolved.push(promise);
        if (completedCounter === arrayOfPromise.length) {
          if (error !== null) reject(error);
          resolve(resolved[resolved.length - 1]);
        }
      }
    });
  });
};

export default promiseLast;
