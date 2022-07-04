// Given a string of words, you need to find the highest scoring word.

function high(x){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let words = x.split(" ");
  
  let wordsMapped = words.map(e =>{
    
    let total = 0;
    
    for (let i = 0; i < e.length; i++)
    {
      let num = alphabet.indexOf(e.charAt(i)) + 1;
      total+= num;

    }
    
    return [e,total]
    
  })
  
  
  wordsMapped.sort((a,b)=>{
    
    if (a[1] > b[1])
    {
      return -1;
    }
    else if (a[1] < b[1])
    {
      return 1;
    }
    else
    {
      return 1;
    }
  })
  
  console.log(wordsMapped)
  
  return wordsMapped[0][0]

}