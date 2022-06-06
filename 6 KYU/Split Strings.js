// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  
  let newArr = [];
  
  console.log(Math.ceil(str.length/2));
  for (let i = 0; i < str.length; i+=2)
  {
    
    let newE = [];
    
    newE.push(str[i]);
    if (str[i+1] == undefined)
    {
      newE.push("_");
    }
    else
    {
      newE.push(str[i+1]);
    }
    
    
    newArr.push(newE.join(""));
  }
  
  console.log(newArr)
  
  return newArr
}