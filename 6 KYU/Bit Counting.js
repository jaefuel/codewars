// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
//You can guarantee that input is non-negative.

var countBits = function(n) {
  
  
  let t = n;
  
  let arr = [];
  
  let c = 1;
  
  let b = 0;
  
  while (c < t)
  {
    c*=2;
  }
  
  if (c > t)
  {
    c/=2;
  }
  
  for (let i = c; i >= 1; i/=2)
  {
    if (t - i >= 0)
    {
      t -= i;
      arr.push(1);
      b++;
    }
    else
    {
      arr.push(0);
    }
         
  } 
  
  return b;
  
};

