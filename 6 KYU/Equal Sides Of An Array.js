// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
  let n = -1;
  
  for (let i = 0; i < arr.length; i++)
  {
    let l = 0;
    let r = 0;
    
    for (let a = 0; a < i; a++)
    {
      l += arr[a];
    }
    
    for (let b = i + 1; b < arr.length; b++)
    {
      r += arr[b];
    }
    
    if (l == r)
    {
      n = i;
    }
  }
  
  return n;
}