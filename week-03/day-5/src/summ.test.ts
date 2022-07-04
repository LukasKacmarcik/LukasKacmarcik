import { Sum } from "./sum";

describe('Sum', () => {
  let summary = new Sum();
  it('testing if it can sum', () => {
    expect(summary.getSum([1,2,3])).toEqual(6);
  })
  
  it('arr with only one element', () => {
    expect(summary.getSum([2])).toEqual(2);
  })
  
  it('empty arr', () => {
    expect(summary.getSum([])).toEqual(0);
  })
})