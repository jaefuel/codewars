// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

function countSmileys(arr) {
  
  console.log(arr)
  
  let total = 0;
  
  arr.forEach(e=>{
    
    
    if ((e.indexOf(":") == 0 || e.indexOf(";") == 0) && (e.indexOf("D") == 1 || e.indexOf("D") == 2 || e.indexOf(")") == 1 || e.indexOf(")") == 2))
    {
      if ((e.indexOf("D") == 2 || e.indexOf(")") == 2) && (e.indexOf("-") == 1 || e.indexOf("~") == 1))
      {
        total ++;
      }
      else if (e.indexOf("D") == 1 || e.indexOf(")") == 1)
      {
        total ++;
      }

      
    }
  })
  
  return total
}