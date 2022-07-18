// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start,end)
{
  let nums = [];

  for (let i = start ; i <= end; i++)
  {
    nums.push(i);
  }

  return nums
}



function sum(arr)
{
  let sum = arr.reduce((a,c) => {
    return a + c
  },0)

  return sum
}
