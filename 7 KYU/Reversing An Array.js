// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.

function reverseArray(arr)
{
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--)
  {
    newArr.push(arr[i])
  }

  return newArr;
}



function reverseArrayInPlace(arr)
{
  arr.sort((a,b) => {
    if (arr.indexOf(a) > arr.indexOf(b))
    {
      return -1;
    }
    else if (arr.indexOf(a) < arr.indexOf(b))
    {
      return 1;
    }
    else
    {
      return 0;
    }
  })

  return arr;
}


console.log(reverseArray([1,2,3,4,5]))
