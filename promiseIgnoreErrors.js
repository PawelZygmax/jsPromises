import promiseLast from "./promiseLast";

const promiseIgnoreErrors = (arrayOfPromise) => {
  //prettier-ignore
  const isInputArray = Array.isArray(arrayOfPromise);
  const isArrayEmpty =
    Array.isArray(arrayOfPromise) && arrayOfPromise.length === 0;

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
            if (resolvedCounter === resolved.length) {
              resolve(resolved.filter((el) => el !== null));
            }
          })
          .catch(() => {
            resolvedCounter += 1;
            if (resolvedCounter === resolved.length) {
              resolve(resolved.filter((el) => el !== null));
            }
          });
      } else {
        resolved[index] = promise;
        resolvedCounter += 1;
        if (resolvedCounter === resolved.length) {
          resolve(resolved.filter((el) => el !== null));
        }
      }
    });
  });
};

export default promiseIgnoreErrors;
