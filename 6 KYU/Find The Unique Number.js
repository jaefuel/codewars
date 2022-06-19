// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) 
{
  
  let u = -1;

  arr.forEach((e,i) => { 
    
    let newArr = [...arr];
    newArr.splice(i,1);
    
    
    if (!newArr.includes(e))
    {
      console.log("Unique:" + e)
      
      u = e;
    }
  })
  
  console.log(arr)
  return u;
  
}
