// a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array

const isPrimeNo = num => {  // function to check if a number is prime
  if(num <= 1) return false  // to check if the number is less than or equal to 1
  if(num === 2 || num === 3) return true
  if(num % 2 === 0 || num % 3 === 0) return false // to check if the number is divisible by 2 or 3

  for(let i = 5; i < Math.sqrt(num); i += 2) {  // to check if the number is divisible by any number between 5 and the square root of the number
    if(num % i === 0) return false
  }
  return true // if the number is not divisible by any number between 5 and the square root of the number, it is a prime number
}

const arePrime = arr => {
  return arr.filter(isPrimeNo)  // filtering the array to return only the prime numbers
}

