//The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.


function wave(str){
    let word = str.split("");
    
    let arr = []
    
    for (let i = 0; i < word.length; i++)
    {
      let temp = [...word]
      if(word[i] != " ")
      {
        
        
        
        temp[i] = word[i].toUpperCase();
        
        
        
        arr.push(temp.join(""))
        
      }
      
    }
    
    return arr
  }