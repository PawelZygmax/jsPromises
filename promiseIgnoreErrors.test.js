import promiseIgnoreErrors from "./promiseIgnoreErrors";
import testData from "./testData";

describe("promise ignore errors tests", () => {
  test("test with null input", () => {
    expect.assertions(1);
    let inputData = null;
    return promiseIgnoreErrors(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with int input", () => {
    expect.assertions(1);
    let inputData = testData.intValue();
    return promiseIgnoreErrors(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with empty array", () => {
    expect.assertions(1);
    let inputData = testData.emptyArray();
    return promiseIgnoreErrors(inputData).then((data) => {
      expect(data).toStrictEqual(inputData);
    });
  });

  test("test with array of random object", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfRandomObject();
    return promiseIgnoreErrors(inputData).then((data) => {
      expect(data).toStrictEqual(inputData);
    });
  });

  test("test with mixed array", () => {
    expect.assertions(1);
    let inputData = testData.mixedArray();
    return promiseIgnoreErrors(inputData).then((output) => {
      Promise.all(inputData).then((oryginalOutput) =>
        expect(output).toStrictEqual(oryginalOutput)
      );
    });
  });

  test("test with array of promises", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromises();
    return promiseIgnoreErrors(inputData).then((output) => {
      Promise.all(inputData).then((oryginalOutput) =>
        expect(output).toStrictEqual(oryginalOutput)
      );
    });
  });

  test("test with array of promises 1 rejected as first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedAsFirst();
    return promiseIgnoreErrors(inputData).then((output) => {
      expect(output).toStrictEqual([2, 1]);
    });
  });

  test("test with array of promises 1 rejected not first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedPromiseNotFirst();
    return promiseIgnoreErrors(inputData).then((output) => {
      expect(output).toStrictEqual([2, 1]);
    });
  });

  test("test with array of different promises rejected", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithDifferentPromisesRejected();
    return promiseIgnoreErrors(inputData).then((output) => {
      expect(output).toStrictEqual([2, 1, 100, { a: 1 }]);
    });
  });
});
