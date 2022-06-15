// You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
  
  let nums = num.toString().split("").map(e => Number(e));
  
  let zeros = nums.length - 1;
  
  let arr = [];
  
  for (i = 0; i < nums.length; i++)
  {
    if (nums[i] != 0)
    {
      let next = nums[i] * (10 ** zeros);
      console.log(next)
      arr.push(next);
    }  
    
    zeros--;
    
  }
  
  return arr.join(" + ")
}