// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    let newList = [];
    
    for (let x = 0; x < a.length; x++)
      {
        if(b.indexOf(a[x]) == -1)
          {
            newList.push(a[x]);
          }
        
      }
    
    return newList;
  }