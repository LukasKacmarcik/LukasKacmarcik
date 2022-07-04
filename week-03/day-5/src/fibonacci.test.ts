import { fibonacciN } from "./fibonacci";

describe('fibonacciN function', () => {
  it('regulat test of ranfom number', () => {
    expect(fibonacciN(7)).toBe(13);
  })
})