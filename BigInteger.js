/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
  let temp = "", result = "";
  
  if(b.length > a.length){
    let t = a;
    a = b;
    b = t;
  }
  let newb = "";
  
  for(let i = 0; i < a.length - b.length; i++)
    newb += "0";
  newb += b;
  
  b = newb;
  
  let carry = 0;
  let index = a.length - 1;
  let sum = 0;
  
  while(a.length > 0){
    sum = parseInt(a[index]) + parseInt(b[index]) + carry;
    carry = 0;
    index--;
    if(sum > 9) {
      carry = 1;
      temp += sum % 10;
    }
    else temp += sum;
    a = a.substring(0, a.length - 1);
    b = b.substring(0, b.length - 1);
  }

  temp += carry;

  for(let i = temp.length - 1; i >= 0; i--)
    result += temp[i];
  
  //count 0's at the beginning of the result string to get rid of them
 let startPos = 0;
 if(result[startPos++] === '0')
   while(result[startPos++] === '0');
  
  result = result.substring(startPos-1, result.length);
  
  return result;
}
