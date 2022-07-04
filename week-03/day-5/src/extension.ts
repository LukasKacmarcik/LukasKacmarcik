'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b) {
    if (a > c){
      return a;
    }else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    }else {
      return c;
    }
  }
};

export function median(pool: number[]): number {
  //return pool[Math.floor((pool.length - 1) / 2)];
  let sum = 0;
  for (let i = 0; i < pool.length; i++) {
    sum += pool[i];
  }
  return sum / pool.length;
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  if(typeof hungarian !== typeof 'String') {
    throw new Error('U wana make me mad bra gimme some proper word!!!');
  }
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
//'bemutatkozik'
//'bevemuvutavatkovozivik'