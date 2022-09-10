// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

function solution(number)
{  
  let n = number;
  
  let r = [];
  
  let nums = {
    
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1                    
  }
  
  
  while (n > 0)
  {    
    for (const [key, value] of Object.entries(nums)) 
    {      
      while (n >= value)
      {       
        r.push(key);
        n -= value;
      }
    }  
  }
  
  return r.join("")
}