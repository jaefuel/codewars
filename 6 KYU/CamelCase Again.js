//  All words must have their first letter capitalized without spaces.

String.prototype.camelCase=function(){
  let str = this.split(" ");
  console.log(str)
  
  let result = [];
  
  str.forEach((e,i) => {
    
    if (e == "")
    {
      str.splice(i,1)
    }
  })
  
  str.forEach((e,i) => {

    let temp = e.split("");
    let x = temp[0].toUpperCase()
    temp.splice(0,1,x)
    result.push(temp.join(""))

  })
  
  //console.log(result.join(""))
  
  return result.join("")
}