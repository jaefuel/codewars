// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  
  let s = string.split("");
  
  console.log(s)
  
    for (let i = 1; i < s.length; i++)
    {
      if (s[i] == s[i].toUpperCase())
      {
        
        s.splice(i,0," ");
        i++
      }
    }
  
  return s.join("")

}
