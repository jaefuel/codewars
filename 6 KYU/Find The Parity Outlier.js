// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  let oddNums = 0;
  let evenNums = 0;
  
  let odd;
  let even;
  
  
  for (let i = 0; i < integers.length; i++)
  {
    if (integers[i] % 2 == 0)
    {
      evenNums ++;
      even = integers[i];
    }
    else
    {
      oddNums ++;
      odd = integers[i];
    }
  }
  
  if (oddNums > 1)
  {
    return even;
  }
  else
  {
    return odd;
  }
}