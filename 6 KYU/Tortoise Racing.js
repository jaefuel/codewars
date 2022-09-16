// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

function race(v1, v2, g) {
  
  let vs1 = v1 / 360000;
  let vs2 = v2 / 360000;
  
  let time = 0;
  
  let d1 = g;
  let d2 = 0;
  
  if (v1 > v2)
  {
    return null;
  }
  
  while (d1 >= d2)
  {
    d1 += vs1;
    d2 += vs2;
    time += .01;
  }
  
  let h = Math.floor(time / 3600)
  
  
  
  let m = Math.floor(time % 3600 / 60);
  
  
  let s = Math.floor(time % 3600 % 60) ;   
  

  return [h,m,s]
}