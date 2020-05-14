import promiseLast from "./promiseLast";
import testData from "./testData";

jest.setTimeout(90000);

describe("promiseLast tests", () => {
  test("test array with null input", () => {
    expect.assertions(1);
    let inputData = null;
    return promiseLast(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with int input", () => {
    expect.assertions(1);
    let inputData = testData.intValue();
    return promiseLast(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test empty array", () => {
    expect.assertions(1);
    let inputData = testData.emptyArray();
    return promiseLast(inputData).then((data) => {
      expect(data).toStrictEqual(inputData);
    });
  });

  test("test mixed array", () => {
    expect.assertions(1);
    let inputData = testData.mixedArray();
    return promiseLast(inputData).then((data) => {
      expect(data).toStrictEqual(1);
    });
  });

  //prettier-ignore
  test("test array of promises with the same delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesWithTheSameDelay()
    return promiseLast(inputData).then((data) => {
      expect(data).toStrictEqual(3);
    });
  });

  test("test array of promises descending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesDescendingDelay();
    return promiseLast(inputData).then((data) => {
      expect(data).toStrictEqual(1);
    });
  });

  //prettier-ignore
  test("test array of promises ascending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesAscendingDelay();
    return promiseLast(inputData).then((data) => {
      expect(data).toStrictEqual(3);
    });
  });

  //Jak sprawdzić czy ten bład był akurat zwrócony po ukończeniu ostatniej promisy?
  //prettier-ignore
  test("test array of promises rejected as first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedAsFirst();
    return promiseLast(inputData).catch((error) => {
      expect(error).toStrictEqual(new Error("oops"));
    });
  });
});
