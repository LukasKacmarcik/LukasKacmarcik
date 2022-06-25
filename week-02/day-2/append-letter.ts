//append-letter.ts

let animals: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill', 'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'];

let out: string[] = [];
function appendA(message: string[]) {
      message.forEach(function(value) {
          out.push(value + 'a');
      })
  
      return console.log(out);
}
appendA(animals);

