class testData {
  static emptyArray = () => [];

  static intValue = () => 4;

  static arrayOfRandomObject = () => [
    { name: "name", surname: "surname" },
    { sex: "male", city: "krakow" },
  ];

  static mixedArray = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
      1,
      {
        hej: "hej",
      },
    ];
  };

  static arrayOfPromises = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    ];
  };

  static arrayOfPromisesWithTheSameDelay = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    ];
  };

  static arrayOfPromisesDescendingDelay = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    ];
  };

  static arrayOfPromisesAscendingDelay = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
    ];
  };

  static arrayWithRejectedPromiseNotFirst = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 500)),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("oops")), 1000)
      ),
    ];
  };

  static arrayWithRejectedAsFirst = () => {
    return [
      new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("oops")), 500)
      ),
    ];
  };

  static arrayWithDifferentPromisesRejected = () => [
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("oops")), 400)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("oops")), 200)
    ),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("oops")), 4000);
    }),
    100,
    {
      a: 1,
    },
  ];
}

export default testData;
