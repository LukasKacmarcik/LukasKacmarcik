import { Sharpie } from "./sharpie";

describe('Sharpie', () => {
  let sharpie1: Sharpie = new Sharpie('red', 2, 80);
  it('inkamount should drop by 10 to 70', () => {
    sharpie1.use();
    expect(sharpie1.inkAmount).toEqual(70);
  })
})