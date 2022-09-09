// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.

function toWeirdCase(string)
{
  let sentence = string.split(" ");
  
  let result = [];
  
  sentence.forEach(e => {
    
    let str = e.split("");
    
    str.forEach((e,i) => {
      
      if (i%2 == 0)
      {
        str[i] = str[i].toUpperCase();
      }      
      
    })     
    result.push(str.join(""))
  })   
  return result.join(" ")                     
}