// console.log(String.fromCharCode(97)); //a
// console.log(String.fromCharCode(65)); //A
// console.log(String.fromCharCode(98)); //b
// console.log(String.fromCharCode(66)); //B


function titleCase(input) {
  arrayInput = input.split('');

  for (let i = 0; i < arrayInput.length; i++) {
    let unicodeI = arrayInput[i].charCodeAt(0);
    if (i === 0) {
      if (unicodeI >= 97 && unicodeI <= 122) {

        arrayInput[0] = String.fromCharCode(unicodeI - 32);

      }
    }
    if (arrayInput[i] === ' ') {
      let unicode = arrayInput[i + 1].charCodeAt(0);
      if (unicode >= 97 && unicode <= 122) {
        arrayInput[i + 1] = String.fromCharCode(unicode - 32);
      }
    }

  }
  return arrayInput.join('');
}

console.log(titleCase('Hi, my name is alan'));
// console.log(String.fromCharCode(104- 27));