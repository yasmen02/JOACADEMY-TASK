//string
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
  console.log(string1);
  console.log(string2);
  const string4 = new String("A String object");
  console.log(string4);
  //length
  console.log(string1.length)
  console.log(string2.length)
  console.log(string3.length)


//include(searchstring)
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
//touppercase
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());
console.log(string1);
//tolowercase
const str=" A STRING IS LOWERCASE";
console.log(str.toLowerCase());
//concat()
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!"




