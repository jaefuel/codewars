// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S.

function encrypt(text, n) {
  
  if (text == "")
  {
    return ""
  }
  else if(text == null)
  {
      return null;
  }
  else
  {
    let str = text;
  
  for (let x = 0; x < n; x++)
  {  
    let odds = [];
    let evens = [];
    
    str = str.split("");
    
    for (let i = 0; i < str.length; i++)
    {
      if (i % 2 == 0)
      {
        evens.push(str[i])     
      }
      else
      {
        odds.push(str[i])
      } 
    }

    odds = odds.join("");
    evens = evens.join("");
    str = odds.concat(evens);
  }

  return str
  }
   
}

function decrypt(encryptedText, n) {

  if (encryptedText == null )
  {
    return null;
  }
  else if (encryptedText == "")
  {
    return ""
  }
  else
  {
    let text = [];
  
  let str = encryptedText;
  
  for (let x = 0; x < n; x++)
  {  
    str = str.split("");
    let o = 1;
    let e = 0;
    
    for (let i = 0; i < Math.floor(str.length / 2); i++)
    {
      text.splice(o,0,str[i]);
      o+=2;
    }
    
    for (let i = Math.floor(str.length / 2); i < str.length; i++)
    {
      text.splice(e,0,str[i]);
      e+=2; 
    }
    
    console.log(text.join(""))
    str = text.join(""); 
    text = []
    
  }
  console.log(str)
  return str
  } 
}