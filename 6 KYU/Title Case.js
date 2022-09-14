// Write a function that will convert a string into title case, given an optional list of exceptions (minor words).

function titleCase(title, minorWords) 
{
  
  if (title == "" || minorWords == "" )
  {
    return ""
  }
  
  let str = title.toLowerCase().split(" ");
  
  if (minorWords != undefined)
  {
    let exceptions = minorWords.toLowerCase().split(" ");
    
    str.forEach((e, i) => {
    
      if (!exceptions.includes(e) || i == 0)
      {
        let temp = e.charAt(0).toUpperCase();
      
        let word = e.split("");
      
        word.splice(0,1,temp)
      
        let r = word.join("")
      
        console.log(r)
     
        str[i] = r;
      }   
    }) 
  }
  else 
  {
    str.forEach((e, i) => {

      let temp = e.charAt(0).toUpperCase();
      
      let word = e.split("");
      
      word.splice(0,1,temp)
      
      let r = word.join("")
      
      console.log(r)
     
      str[i] = r; 
    }) 
  }
  
  
  
  
  console.log(str.join(" "))
  return str.join(" ")
  
}