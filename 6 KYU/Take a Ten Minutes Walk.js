// Create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let long = 0;
  let lad = 0;
  
  for (let i = 0; i < walk.length; i++)
  {
    if(walk[i] == "n")
    {
      long++;
    }
    else if(walk[i] == "s")
    {
      long--;
    }
    else if(walk[i] == "w")
    {
      lad--;
    }
    else if(walk[i] == "e")
    {
      lad++;
    }
  }
  
  if (long == 0 && lad == 0 && walk.length == 10)
    {
      return true;
    }
}