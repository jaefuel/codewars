// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
  let num = 0;
  let next = 1;
  
for (let i = arr.length -1; i >= 0; i--)
{
  if (arr[i] == 1)
  {
    num += next;    
  }
  
  next *= 2;
}
  
  return num;
};