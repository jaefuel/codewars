// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count (string) {  
  
  let arr = string.split("");
  let obj = {};
  
  
  if (string == "")
  {
    return {};
  }
  
  for (let i = 0; i < arr.length; i++)
  {
    console.log(arr[i])
    if (Object.keys(obj).includes(arr[i]))
    {
        obj[arr[i]] ++;
    }
    else
    {
      obj[arr[i]] = 1;
    }
  }
  
  return obj;
   
}