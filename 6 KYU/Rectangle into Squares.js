// Return a collection with the size of each of the squares.

function sqInRect(lng, wdth)
{
  let arr = [];
  
  if (lng == wdth)
  {
    return null;
  }  
  let length = lng;
  let width = wdth;
  let min = Math.min(length,width);
  let size = length * width;
  
  
  while (min >= 1)
  {
    arr.push(min); 
    console.log(size + " size")
    console.log(min + " min")   
    console.log(arr)
    size -= min ** 2;
    length = size/min;
    width = min;
    min = Math.min(length, width) 
     
    
  } 
  
  console.log(arr)
  return arr 
}