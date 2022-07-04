import { Animal } from "./animals";

describe("Animal", () => {
  let bear;
  beforeEach(() => {
    bear = new Animal();
  });

  it("should create an animal instance with hunger set to 50", () => {
    expect(bear.hunger).toBe(50);
  });
  it("should create an animal instance with thirst set to 50", () => {
    expect(bear.thirst).toBe(50);
  });
  it("should get it's thirst decreased when drinking", () => {
    bear.drink();
    expect(bear.hunger).toBe(50);
    expect(bear.thirst).toBe(49);
  });
  it("should get it's hunger decreased when eating", () => {
    bear.eat();
    expect(bear.hunger).toBe(49);
    expect(bear.thirst).toBe(50);
  });
  it("should increase both hunger and thirst when playing", () => {
    bear.play();
    expect(bear.hunger).toBe(51);
    expect(bear.thirst).toBe(51);
  });
});