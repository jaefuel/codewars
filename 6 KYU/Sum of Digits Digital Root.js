// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
  
  let toSum = n;
  let toSumS;
  let sum = 0;
  

  do
    {
      toSumS = toSum.toString().split("");
      sum = toSumS.reduce((a,c) => a + Number(c),0);
      toSum = sum;
    }
  while(sum >= 10)

  
  return sum;

}