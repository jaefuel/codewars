// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
  let words = [];
  
  for(let i = 0; i < str.length; i++)
  {
    
    if(str.charAt(i) == "-")
    {

      words = str.split("-");
    }
    else if(str.charAt(i) == "_")
    {

      words = str.split("_");
    }
  }
  
  if (words.length == 0)
  {
    return "";
  }

    
  for (let i = 1; i < words.length; i++)
  {
   
    
   words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());
  }
  
  
  return words.join("")
}