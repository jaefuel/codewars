// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  
  let odds = [];
  
  array.forEach((e) => {
    if (e % 2 != 0)
    {
      odds.push(e);
    }
  })
  
  odds.sort((a,b) => {
    if (a > b)
    {   
      return 1;
    }
    else if (a < b)
    {
      return -1;
    }
    else
    {
      return 0;
    }
  })
  
  array.forEach((e,i) => {
    if (e % 2 != 0)
    {
      array.splice(i,1,odds.shift())
    }
  })

  console.log(array)
  
  return array;
}