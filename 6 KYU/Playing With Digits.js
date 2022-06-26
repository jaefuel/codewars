// Find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

function digPow(n, p){

  
  let temp = n.toString().split("")
  
  let num = [];
  
  let sum = 0;

  temp.forEach(e => {
    num.push(Number(e))
  })

  
  num.forEach(e => {
    sum += Math.pow(e,p); 
    p++;
  })

  if (Math.floor(sum / n) == sum / n)
  {
    return sum / n;
  }

  
  
  return -1;
  
}