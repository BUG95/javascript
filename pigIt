/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let words = str.split(" ");
  for(let i = 0; i < words.length; i++){
    if(words[i] == '.' || words[i] == '!' || words[i] == ',' || words[i] == '?') continue;
    words[i] = words[i].substring(1, words[i].length) + words[i][0];
    words[i] += "ay";
  }
  let newStr = "";
  for(let i = 0; i < words.length; i++){
    if(i < words.length - 1) newStr += words[i] + " ";
    else newStr += words[i];
  }
  return newStr;
}


