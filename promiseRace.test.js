import promiseRace from "./promiseRace";
import testData from "./testData";

jest.setTimeout(90000);

describe("promiseRace tests", () => {
  test("test with null input", () => {
    expect.assertions(1);
    let inputData = null;
    return promiseRace(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  test("test with int input", () => {
    expect.assertions(1);
    let inputData = testData.intValue();
    return promiseRace(inputData).catch((error) => {
      expect(error).toStrictEqual(new TypeError("input data is not iterable"));
    });
  });

  // test("test empty array", () => {
  //   expect.assertions(1);
  //   let inputData = testData.emptyArray();
  //   return promiseRace(inputData).then((data) => {
  //     Promise.race(inputData).then((oryginalData) =>
  //       expect(data).toStrictEqual(oryginalData)
  //     );
  //   });
  // });

  test("test array of random object", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfRandomObject();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test array of promises", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromises();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test mixed array", () => {
    expect.assertions(1);
    let inputData = testData.mixedArray();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test array with rejected promise (not first)", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedPromiseNotFirst();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test array with rejected promise as first", () => {
    expect.assertions(1);
    let inputData = testData.arrayWithRejectedAsFirst();
    return promiseRace(inputData).catch((error) => {
      Promise.race(inputData).catch((oryginalError) =>
        expect(error).toStrictEqual(oryginalError)
      );
    });
  });

  test("test array with the same delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesWithTheSameDelay();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test array with ascending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesAscendingDelay();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });

  test("test array with descending delay", () => {
    expect.assertions(1);
    let inputData = testData.arrayOfPromisesDescendingDelay();
    return promiseRace(inputData).then((data) => {
      Promise.race(inputData).then((oryginalData) =>
        expect(data).toStrictEqual(oryginalData)
      );
    });
  });
});
