// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
  console.log(array1)
  console.log(array2)
  
  console.log("\n")
  
  let found = true;
  
  if (array1 == null || array2 == null)
  {
    return false;
  }
  
  array1.forEach(e =>{
    
    
    if (!array2.includes(e * e))
    {
      console.log(e + "*" + e + " = " + e * e + " Not found ")
      found = false;
    }
    else
    {
      console.log(e + "*" + e + " = " + e * e + " found at " + array2.indexOf(e*e))
      delete array2[array2.indexOf(e*e)]
    }
  })
  
  array2.forEach(e =>{
    if (!array1.includes(Math.sqrt(e)))
    {
      found = false;
    }
  })
  
  return found;
}