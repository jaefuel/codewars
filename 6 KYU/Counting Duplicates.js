// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text)
{
  
    let count = 0;
      
    let dupes = [];
      
    let str = text.toLowerCase().split("");
    console.log(str)
      
    for (let i = 0; i < str.length; i++)
    {
        for (let y = 0; y < str.length; y++)
        {
          if (str[i] == str[y] && i != y && dupes.indexOf(str[i]) == -1)
          {
            count++;
            dupes.push(str[i]);
            console.log("d " + dupes)
          }
        }
    }
    
      
    return count;
}