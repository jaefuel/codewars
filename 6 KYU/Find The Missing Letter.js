// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

function findMissingLetter(array)
{
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  let index;
  
  
  if (array[0] == array[0].toUpperCase())
  {
    alphabet = alphabet.toUpperCase();
  }
  
  index = alphabet.indexOf(array[0]);
  
  console.log(alphabet)
  console.log(index)
  
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] != alphabet[index + i])
    {
      return alphabet[index + i];
    }
  }
  
  
  return ' ';
}