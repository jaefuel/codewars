// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

function validBraces(braces)
{
  let b = braces.split("");
  
  let match = [["{","}"],["[","]"],["(",")"]]  
  
  let v = true;
  
  for (let i = 0; i < b.length; i++)
  {
    let fb = b[i];
    let lb = "";
    let cut = false;
    
    console.log(b)
  
    
    match.forEach((e) =>{
      if (e[0] == fb)
      {
        lb = e[1];
        
        for (let a = i + 1; a < b.length; a+=2)
        {
          if (!cut && b[a] == lb)
          {
          b.splice(a, 1);
          b.splice(i, 1);  
          cut = true;
          i--;
          } 
          else if (!cut && b[b.length - 1 - i] == lb)
          {
          b.splice(i, 1);
          
          b.splice(b.length - 1 - i, 1);
          cut = true;
          i--;
          }   
        }
      }
    })  
    
    if (!cut)
    {
      v = false;
    }
  }  
  console.log(v)
  return v;
  
}