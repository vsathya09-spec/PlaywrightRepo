//NumberType--Creating function with number as paramater
function numberType(num)
 {
  if (num > 0) {
    return "Positive";
    console.log(numberType(num));
  } 
  else if (num < 0) 
    {
    return "Negative";
    console.log(numberType(num));
  } 
  else 
    {
    return "Zero";
    console.log(numberType(num));
    }
}
numberType(0);
console.log(numberType(0));