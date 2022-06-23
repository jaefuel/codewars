// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  let strings = [];
  
  if (strarr.length == 0)
  {
    return "";
  }
  
  for (let i = 0; i < strarr.length; i++)
  {
    let newString = [];
    
    if (i < strarr.length - k + 1)
    {
      for (let a = i; a < i + k; a ++)
      {
        newString.push(strarr[a]);
      }
    }     
    
    strings.push(newString.join(""))
  }
  

  
  strings.sort((a,b) => {
    if (a.length > b.length)
    {
      return -1;
    }
    else if (a.length < b.length)
    {
      return 1;
    }
    else 
    {
      return 0;
    }
  })
  
  return strings[0]
  
}