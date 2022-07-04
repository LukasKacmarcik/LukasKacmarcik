

export function anagram(string1: string, string2: string) {
  if (string1.length != string2.length) {
    return false;
  }
  let isAnagram: number = 0;
  for (let i = 0; i < string1.length ; i++) {
    if(string1.includes(string2.charAt(i))) {
    isAnagram += 1;
    }
  }
  return isAnagram === string1.length;
}