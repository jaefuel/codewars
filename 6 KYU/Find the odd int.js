// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  
  let nums = {};
  
  for (let i = 0; i< A.length; i++)
    {
      if (nums[A[i]] >= 1)
        {
          nums[A[i]]++;
        }
      else
        {
          nums[A[i]] = 1;
        }     
    }

    console.log(nums);


  let val = 0;
  
  for (let num in nums)
    {

      if (nums[num] % 2 == 1)
        {
          val = num;
        }  
          
    }

    console.log("Its " + val);
  
  return Number(val);
}

findOdd([1,1,2,2,3,3,4,4,5,5,9]);