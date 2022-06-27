// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  
  if (num <= 1)
  {
    return false;
  }
  
  if (num == 2)
  {
    return true;
  }
  
  if (num % 2 == 0)
  {
    return false;
  }
  
  for( let i = 3; i <= Math.sqrt(num); i+=2)
  {
    if (num % i == 0)
    {
      return false;
    }
  }
  
  return true;
  
}