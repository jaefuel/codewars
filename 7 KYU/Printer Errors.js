// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

function printerError(s) {
  let arr = s.split("");

let denominator = arr.length;

let numerator = 0;

let badValues = "nopqrstuvwxyz"

for (let i = 0; i < arr.length; i++)
{
  if (badValues.includes(arr[i]))
  {
      numerator++;
  }
}

return numerator.toString() + "/" + denominator.toString();
}