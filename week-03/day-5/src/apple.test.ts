import { Apple } from "./apple";

describe('Apple', () => {
  let apple = new Apple;
  it('function should return apple', () => {
    expect(apple.getApple()).toBe('apple');
  })
})