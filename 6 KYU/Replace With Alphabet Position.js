// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) 
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  let str = text.toLowerCase().split("");
  let newStr = [];
  
  for (ch of str)
    {
      if (chLocation = alphabet.indexOf(ch) + 1 > 0)
      {
        newStr.push(chLocation = alphabet.indexOf(ch) + 1);
      }
      
    }
  console.log(newStr.join(" "));
  
  return newStr.join(" ");
}