// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  
  let answer = [];
  
  for (let i = a; i <= b; i++)
    {
      let temp = i.toString().split("").map(e => Number(e))
      
      console.log(temp)
      
      let eureka = 0;
      
      for (let i = 0; i < temp.length; i++)
      {
        eureka += temp[i]**(i+1)
      }
      
      console.log(eureka)  
      
      if (temp.join("") == eureka)
      {   
        answer.push(eureka)
      }
    }
  
  console.log(answer)
  return answer
}