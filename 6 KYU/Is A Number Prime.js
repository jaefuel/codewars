// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  
  let n = Math.abs(num);

  
  
  let prime = true;
  
  if (num < 1)
  {
    return false;
  }
  if (n == 0 || n == 1)
  {
    return false;
  }
  
  for (let i = 1; i <= n; i++)
  {
    if(n % i == 0 && i != 1 && i != n)
    {
      prime = false;
    }
  }
  
  return prime;
}