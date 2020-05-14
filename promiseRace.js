const promiseRace = (arrayOfPromise) => {
  //prettier-ignore
  const isInputArray = Array.isArray(arrayOfPromise);
  //prettier-ignore
  const isArrayEmpty = Array.isArray(arrayOfPromise) && arrayOfPromise.length === 0;

  return new Promise((resolve, reject) => {
    //prettier-ignore
    if (!isInputArray) reject(new TypeError(`input data is not iterable`));
    if (isArrayEmpty) resolve([]);

    arrayOfPromise.forEach((promise) => {
      if (promise instanceof Promise) {
        promise.then((data) => resolve(data)).catch((error) => reject(error));
      } else {
        resolve(promise);
      }
    });
  });
};

export default promiseRace;
