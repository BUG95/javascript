/*
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  let l = arr.length;
  let newArray = [];
  for(let i = 0; i < l; i++){
    if(arr[i] !== 0) newArray.push(arr[i]);
  }
  
  for(let i = newArray.length; i < l; i++)
    newArray[i] = 0;
  
  return newArray;
}
