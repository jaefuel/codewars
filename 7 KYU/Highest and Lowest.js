// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let numsS = numbers.split(" ");
  
  let nums = numsS.map(e => Number(e));
  
  let numsSorted = nums.sort( (a,b) => a-b);
  
  console.log(numsSorted)
  
  return numsSorted[numsSorted.length-1] + " " + numsSorted[0];
}