
import { add, maxOfThree, median, isVowel, translate } from './extension';

///
test('add: 2 and 3 is 5', function () {
  expect(add(2, 3)).toEqual(5);
});

test('add: 10 and 5 is 15', function () {
  expect(add(10, 5)).toEqual(15);
});

test('add: 1 and 4 is 5', function () {
  expect(add(1, 4)).toEqual(5);
});
///
test('max of three: first', function () {
  expect(maxOfThree(5, 4, 3)).toEqual(5);
});

test('max of three: first', function () {
  expect(maxOfThree(5, 4, 3)).toEqual(5);
});

test('max of three: third', function () {
  expect(maxOfThree(3, 4, 5)).toEqual(5);
});

test('max of three: fourth', function () {
  expect(maxOfThree(2, 17, 6)).toEqual(17);
});
///
test('median: four', function () {
  expect(median([7, 5, 3, 5])).toEqual(5);
});

test('median: five', function () {
  expect(median([1, 2, 3, 4, 5])).toEqual(3);
});

test('median: mine', function () {
  expect(median([1, 2, 3, 4, 5, 6, 7])).toEqual(4);
});
///
test('is vowel: a', function () {
  expect(isVowel('a')).toBeTruthy();
});

test('is vowel: u', function () {
  expect(isVowel('u')).toBeTruthy();
});

test('is vowel: k', function() {
  expect(isVowel('k')).toBeFalsy();
});

test('is vowel: U', function() {
  expect(isVowel('U')).toBeTruthy();
});
///
test('translate: bemutatkozik', function () {
  expect(translate('bemutatkozik')).toEqual('bevemuvutavatkovozivik');
});

test('translate: lagopus', function () {
  expect(translate('lagopus')).toEqual('lavagovopuvus');
});

test('translate: lagopusmaine', function () {
  expect(() => {
    translate(5468)
  }).toThrow('U wana make me mad bra gimme some proper word!!!')
});