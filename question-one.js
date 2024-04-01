//  a function that accepts a string as input and swaps the case of each character

 const changeCaseChar = (char) => { // function to check and change the case of a character
  if(char === ' ') return ' '
  if(char === char.toUpperCase()) {
    return char.toLowerCase() // to change the case of the character
  } else if (char === char.toLowerCase()) {
    return char.toUpperCase()
  }
}

const changeCaseStr = (str) => { // function to change the case of each character in a string
  return str
    .split('')
    .map((char) => changeCaseChar(char))
    .join('')
}

console.log(changeCaseStr('The Quick Brown Fox')) // to change the case of each character in a string
