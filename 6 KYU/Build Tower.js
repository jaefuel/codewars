// Build a pyramid-shaped tower given a positive integer number of floors.

function towerBuilder(nFloors) {
  
  let pyramid = [];
  
  for (let i = 1; i <= nFloors; i++)
  {
    let whole = [];
    
    let floor = [];
    
    let trim = [];
    
    floor.push("*")         
    
  
    for (let x = 1; x < i; x++)
    {
      floor.push("**")  
    }
    
    
    let f = floor.join("");
    
    //console.log(floor)
    
    
    for(let y = 1; y <= nFloors - i ; y++)
    {
      trim.push(" ")
    }
    
    let t = trim.join("");
    
    //console.log(trim)
    
    
    
    
    whole.push(t);
    whole.push(f);
    whole.push(t);
    
    
    
    
    
    let joined = whole.join("")
    
    console.log(joined)
    
    
    pyramid.push(joined)
    
    
    
  }
  
  
  
  console.log(pyramid)
  
  return pyramid
}