// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  
  console.log(iterable)
  
  let arr;
  
  if (Array.isArray(iterable))
  {
    arr = iterable;
  }
  else
  {
    arr = iterable.split("");
  }
  
  
  let newArr = []; 
  
  
  for (let i = 0; i < arr.length; i++)
  {
    if (newArr[newArr.length -1] != arr[i])
    {
      newArr.push(arr[i])
    }
  }
  
  return(newArr)
  
}