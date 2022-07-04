import { anagram } from "./anagram";

describe ('anagram function', () => {
  it('skuska mala by prejst', () => {
    expect(anagram('ano','ano')).toBe(true);
  })
  
  it('not anagram should be false', () => {
    expect(anagram('ano','ank')).toBe(false);
  })
  
  it('not anagram should be false', () => {
    expect(anagram('ano','ansk')).toBe(false);
  })
})