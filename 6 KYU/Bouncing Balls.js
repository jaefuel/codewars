// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

function bouncingBall(h,  bounce,  window) {
  let totalBounce = 0;
  
  if (bounce >= 1 || bounce <= 0 || window >= h)
  {
    return -1;
  }
  
  total = 1;
  
  h *= bounce;
  
  while(h > window)
  {
    h *= bounce;
    
    total+=2;
    
    console.log(h)
  }
    
  return total
}