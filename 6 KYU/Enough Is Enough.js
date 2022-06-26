//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

function deleteNth(arr,n){
  for (let i = 0; i <arr.length;i++)
  {
    let times = 1;
   
    for(let x = 0; x <arr.length;x++)
    {      
      if (arr[i] == arr[x] && i < x)
      {
        times++;
        console.log(arr[i] + " exists " + times + " times")
        
        if (times > n)
        {          
          arr.splice(x,1);
          console.log("delete " + arr[x])
          x--;
        }       
      }         
    }
  }
  return arr
}