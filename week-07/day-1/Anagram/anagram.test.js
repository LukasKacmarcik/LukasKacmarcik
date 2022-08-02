import { anagram } from "./anagram";

describe("Anagram", () => {
  let s1;
  let s2;
  it("function has to be defined", () => {
    expect(anagram).toBeDefined();
  });

  it("if same strings are provided should return true", () => {
    s1 = "jozo";
    s2 = "jozo";
    expect(anagram(s1, s2)).toEqual(true);
  });
  it("diferent strings provided should return false", () => {
    s1 = "jozo";
    s2 = "fero";
    expect(anagram(s1, s2)).toEqual(false);
  });

  it("diferent strings provided with diferent lenght should return false", () => {
    s1 = "jozo";
    s2 = "jozova krava";
    expect(anagram(s1, s2)).toEqual(false);
  });

  it("same word, different letter order should return true", () => {
    s1 = "jozo";
    s2 = "jooz";
    expect(anagram(s1, s2)).toEqual(true);
  });

  it("no arguments should return undefined", () => {
    s1 = "jozo";
    s2 = "jooz";
    expect(anagram()).toBeUndefined();
  });

  it("if some argument is not string return false", () => {
    s1 = "jozo";
    s2 = 8;
    expect(anagram(s1, s2)).toEqual(false);
  });

  it("if some input is 'octopus' return error with 'no place for octopus here'", () => {
    s1 = "octopus";
    s2 = "jozo";
    expect(() => {
      anagram(s1, s2);
    }).toThrowError("no place for octopus here");
  });
});
