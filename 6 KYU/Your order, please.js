// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  let arr = words.split(" ");
  
  console.log(arr)
  
  arr.sort((a,b) => {
    let num1;
    let num2;
    
    for (let i = 1; i <= 9; i++)
    {              
      if (a.includes(i.toString()))
      {
        num1 = i;
      }
      
      if (b.includes(i.toString()))
      {
        num2 = i;
      }
    }  
    return num1 - num2;
    
  })
  
  return arr.join(" ");
}