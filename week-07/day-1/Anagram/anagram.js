export function anagram(stringOne, stringTwo) {
  if (stringOne == "octopus" || stringTwo == "octupus") {
    throw Error("no place for octopus here");
  }
  if (stringOne == undefined || stringTwo == undefined) {
    return undefined;
  } else {
    let sortedOne;
    let sortedTwo;
    if (stringOne.length > 1 && isNaN(stringOne)) {
      sortedOne = stringOne.split("").sort().join("");
    } else {
      sortedOne = stringOne;
    }
    if (stringTwo.length > 1 && isNaN(stringTwo)) {
      sortedTwo = stringTwo.split("").sort().join("");
    } else {
      sortedTwo = stringTwo;
    }
    if (sortedOne == sortedTwo) {
      return true;
    } else {
      return false;
    }
  }
}
