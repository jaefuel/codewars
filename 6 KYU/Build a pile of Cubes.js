// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

function findNb(m) {
  
  let total = 0;
  
  let n = 0;
  
  while (total < m)
  {
    total = 0;
    
    for (let i = n; i >= 1; i--)
    {
      total += i ** 3;
    }
  
    
    if (total == m)
    {
      return n;
    }
    
    n++; 
  }
    
  
  return (-1);
}