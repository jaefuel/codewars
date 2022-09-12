// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
  
  let valid = true;
  
  console.log(str)
  
  let octets = str.split(".");  
  
  octets.forEach( (e,i) => {
    console.log("Testing " + Number(e))
    
    if (e.charAt(0) == "0" && e.length > 1)
    {
      valid = false;
      console.log("ERR 0")
    }
    
    if (!(Number(e) >= 0 && Number(e) <= 255))
    {
      valid = false;
      console.log("ERR " + Number(e))      
    }
    
    if(e == " ")
    {
      valid = false;
      console.log("ERR")
    }
  })
  
  if (octets.length != 4)
  {
    valid = false;
    console.log("ERR Length")
  }
  
  if(str.trim() != str)
  {
    valid = false;
    console.log("ERR Trim")
  }
  
  if(str.includes("e"))
  {
    valid = false;
    console.log("ERR E")
  }
  
  if (str.charAt(0) == "." || str.charAt(str.length - 1) == ".")
  {
    valid = false;
    console.log("ERR .")
  }
  
  let temp = str.split("");
  
  temp.forEach((e,i) => {
    if (e == "." && temp[i + 1] == "." )
    {
    valid = false;
    console.log("ERR .")
    }
    
    if (e == " ")
    {
    valid = false;
    console.log("ERR Space")
    }
  }) 
   return valid
  
}