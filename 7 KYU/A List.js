// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
// Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
// which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, 
// which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function arrayToList(arr)
{
  let list = {};

  for (let i = arr.length - 1; i >= 0; i--)
  {
    if (Object.keys(list).length === 0)
    {
      list = {value: arr[i], rest:null}
    }
    else
    {
      list = {value: arr[i], rest:list}
    }
  }

  return list
}

function listToArray(list)
{
  let arr = [];
  for (let node = list; node; node = node.rest)
  {
    arr.push(node.value);
  }

  return arr;
}

function prepend(e, list)
{
  list = {value: e, rest:list}

  return list;
}

function nth(list, n)
{
  let x = 0;
  for (let node = list; node; node = node.rest)
  {
    console.log(node)
    if(n == 0)
    {
      x = node.value;
    }
    n--;    
  }

  return x;
}

