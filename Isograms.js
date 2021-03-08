/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
  let map = new Map();
  for(let i = 0; i < str.length; i++){
    if(map.has(str[i].toLowerCase())) return false;
    map.set(str[i].toLowerCase(), i);
  }
  return true;
}
