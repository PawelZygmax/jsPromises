import promiseAll from "./promiseAll";
import testData from "./testData";

jest.setTimeout(90000);

describe("promiseAll tests", () => {
  test("test with null input", () => {
    expect.assertions(1);
    let inputData = null;
    return promiseAll(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with int input", () => {
    expect.assertions(1);
    let inputData = testData.intValue();
    return promiseAll(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with empty array", () => {
    expect.assertions(1);
    let inputData = testData.emptyArray();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with array of random object", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfRandomObject();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with array of promises", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromises();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with mixed array", () => {
    expect.assertions(1);
    let inputData = testData.mixedArray();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with array with rejected promise not first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedPromiseNotFirst();
    return promiseAll(inputData).catch((error) => {
      Promise.all(inputData).catch((oryginalError) =>
        expect(error).toStrictEqual(oryginalError)
      );
    });
  });

  test("test with array with rejected promise as first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedAsFirst();
    return promiseAll(inputData).catch((error) => {
      Promise.all(inputData).catch((oryginalError) =>
        expect(error).toStrictEqual(oryginalError)
      );
    });
  });

  test("test with array with the same delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesWithTheSameDelay();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with array with ascending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesAscendingDelay();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test with array with descending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesDescendingDelay();
    return promiseAll(inputData).then((data) => {
      Promise.all(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });
});
