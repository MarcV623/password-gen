// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password
function generatePassword(length, lowercase_flag, uppercase_flag, numeric_flag, special_flag) {
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const special = ['*', '$', '#', '%', '&', "#", '!', '^']

  let password = ''
  let pool = []

  if (typeof length !== "number") {
    return "error: length is not a number"
  }

  if (length < 8) {
    return "error: length is less than 8"
  }

  if (length > 128) {
    return "error: length is greater than 128"
  }

  if (typeof lowercase_flag !== "boolean") {
    return "error: lowercase_flag is not a boolean"
  }

  if (typeof uppercase_flag !== "boolean") {
    return "error: uppercase_flag is not a boolean"
  }

  if (typeof numeric_flag !== "boolean") {
    return "error: numeric_flag is not a boolean"
  }

  if (typeof special_flag !== "boolean") {
    return "error: special_flag is not a boolean"
  }

  if (!lowercase_flag && !uppercase_flag && !numeric_flag && !special_flag) {
    return "error: no character sets selected"
  }
    
  if (lowercase_flag) {
    pool = pool.concat(lowercase)
  }

  if (uppercase_flag) {
    pool = pool.concat(uppercase)
  }
  
  if (numeric_flag) {
    pool = pool.concat(numeric)
  }

  if (special_flag) {
    pool = pool.concat(special)
  }

  for (let i = 0; i < length; i++) {
    password = password + pool[Math.floor(Math.random() * pool.length)]
  }

  return password
}

// Write password to the #password input
function writePassword() {
  let passwordlength = parseInt(document.querySelector("#passwordlength").value)
  let lowercase_flag = document.querySelector("#lowercase_flag").checked
  let uppercase_flag = document.querySelector("#uppercase_flag").checked
  let numeric_flag = document.querySelector("#numeric_flag").checked
  let special_flag = document.querySelector("#special_flag").checked
  
  var password = generatePassword(passwordlength, lowercase_flag, uppercase_flag, numeric_flag, special_flag);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
