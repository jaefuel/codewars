// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

function queueTime(customers, n) {
  
  
  let tills = [];
  let newTills = [];

  for ( let i = 0; i < n; i++)
  {
    tills.push(customers.shift())
  }
  
  for (let i = 0; i < customers.length; i++)
  {
    
   tills[tills.indexOf(Math.min(...tills))] += customers.shift();
    i--;
  }
  
  for (let i = 0; i < tills.length;i++)
  {
    console.log(typeof tills[i]);
    
    if (typeof tills[i] === "number")
    {
      newTills.push(tills[i]);
    }
  }
  
  console.log(newTills)
  
  if (newTills.length > 0)
  {
    return Math.max(...newTills)
  }
  
  return 0;
}