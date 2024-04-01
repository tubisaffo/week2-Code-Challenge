//function to swap two numbers
const generateArray = (num1, num2) => {
  if(num2 < num1) return 'num1 should be less than num2' // to check if num1 is less than num2
  let arr = []
  for(let i = num1; i <= num2; i++) {  //to generate an array of numbers from num1 to num2
    arr.push(i)
  }
  return arr //returning the array
}

console.log(generateArray(1, 10))

