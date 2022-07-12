// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

decodeMorse = function(morseCode){
  console.log(MORSE_CODE['.--'])
  
  let codes = morseCode.trim().split("   ")
  
  let sentence = [];
  
  console.log(codes)
  
  codes.forEach(e=> {
    let code = e.split(" ");
    
    
    
    let word = code.map(e=>{
      return MORSE_CODE[e]
    })
    
    console.log(word)
    
    sentence.push(word.join(""))
    
  })
  
  let a = sentence.join(" ")
  
  return a
  
  console.log(a)
    
    
}