// <!--write a node js program to replace 2 or more occurances of a letter with single occurance on a given string. -->
function compressRepeatedLetters(str) {
    const regex = /(.)\1+/g;
    return str.replace(regex, (match) => match[0]);
  }
  const inputString = "aaabcccddaaab";
  const compressedString = compressRepeatedLetters(inputString);
  console.log("Original String:", inputString);
  console.log("Compressed String:", compressedString);
  