import { addNum, divide, isPrime } from './math'
describe('Math funkcie',() => {
  it('adds 1 + 2 to equal 3', () => {
    expect(addNum(1, 2)).toBe(3);
  })
  
  it("divide 10 by 5",() => {
    expect(divide(10,5)).toBe(2);
  })

  it("divide 10 by 5",() => {
    expect(() => {
      divide(10,0)
    }).toThrow('Unable to divide by 0');
  })

  it('ading prime number 3 sould be true', () => {
    expect(isPrime(3)).toBe(true);
  })

  it('ading non prime number 4 sould be false', () => {
    expect(isPrime(4)).toBe(false);
  })

})