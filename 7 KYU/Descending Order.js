// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let nums = String(n).split("");
    
    for (let i = 0; i < nums.length; i++)
      {
        while (nums[i] < nums[i+1])
        {
          let temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i+1] = temp; 
          i--;  
        }


      }
    
    return Number(nums.join(""));
  }

