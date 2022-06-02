// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  
  let times = 0;
  let arr = num.toString().split("").map(e => Number(e));
  
  
  
  while (arr.length > 1)
  {
    times++;
    arr = arr.reduce((a,c) => a * c).toString().split("").map(e => Number(e));
    console.log(arr);
  }
  
  return times;
}