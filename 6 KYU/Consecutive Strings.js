// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


function longestConsec(strarr, k) {

  let strings = [];
  
  if (strarr.length == 0 || k > strarr.length || k <= 0)
  {
    return "";
  }
  
  for (let i = 0; i < strarr.length; i++)
  {
    let newString = [];
    
    if (i <= strarr.length - k)
    {
      for (let a = i; a < i + k; a ++)
      {
        newString.push(strarr[a]);
      }
      
      strings.push(newString.join(""))
    }     
    
    
  }
  
  
  let longest = strings.reduce(
    function (a, b) {
      if (a.length > b.length)
      {
        return a;
      }
      else if (a.length == b.length)
      {
        return a;
      }
        return b;
    }
    );

}