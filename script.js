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

  console.log(pool)

  for (let i = 0; i < length; i++) {
    password = password + pool[Math.floor(Math.random() * pool.length)]
  }

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(16, true, true, true, true);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
