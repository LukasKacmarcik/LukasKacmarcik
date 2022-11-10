const contentFilter = require("./exam");

describe("tests for contentFilter()", () => {
  test("contentFilter([1, 2, 0, 3, 4, 5, 6]) should return [1,2] because there is no finishing zero", () => {
    expect(contentFilter([1, 2, 0, 3, 4, 5, 6])).toEqual([1, 2]);
  });
});
