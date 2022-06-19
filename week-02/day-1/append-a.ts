//append-a.ts

let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];
animals = animals.map(function(value) {
    return value + 'a';
});
console.log(animals);
