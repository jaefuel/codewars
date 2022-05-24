// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  let temp = word.toLowerCase().split("");
  let newStr = [];

for (let i = 0; i < temp.length; i++)
{ 
  let dup = false;
  for ( let x = 0; x < temp.length; x++)
  {
    
    
    if (temp[i] == temp[x] && i!= x && dup == false)
    {
      newStr.push(")");
      dup = true;
    }
  }
  
  if (newStr[i] == undefined)
  {
    newStr.push("(");
  }
  
  console.log(word + " - " + newStr);
}


console.log(newStr.join(""));

return newStr.join("");
}
