import { countLetters } from "./count-letters";

describe('count-letter function()', () => {
  it('should create object with a:3', () => {
    expect(countLetters('aaa')).toEqual({"a": 3});
  })

  it('should create object with {"A": 1, "a": 2}', () => {
    expect(countLetters('Aaa')).toEqual({"A": 1, 'a': 2});
  })

  it('should create object with {"+": 1}', () => {
    expect(countLetters('+')).toEqual({"+": 1});
  })
})