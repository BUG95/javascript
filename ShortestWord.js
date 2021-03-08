/*
  Simple, given a string of words, return the length of the shortest word(s).
  String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let arrayOfWords = s.split(" ");
  let min = arrayOfWords[0].length;
  for(let i = 1; i < arrayOfWords.length; i++){
    if(arrayOfWords[i].length < min) min = arrayOfWords[i].length;
  }
  return min;
}
