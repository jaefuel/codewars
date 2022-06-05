// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

function tribonacci(signature,n){
  console.log(signature)
  let newArr = [];
  
  if (n == 0)
  {
    return []
  }
  while(signature.length < n)
  {
    let sum = signature[signature.length -1] + signature[signature.length -2] + signature[signature.length -3];
    signature.push(sum);
  }
  
  for (let i = 0; i < n; i++)
  {
    newArr.push(signature[i])
  }
  
  return newArr
}