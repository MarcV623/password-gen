// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password
function generatePassword() {
  return "gooddogs35"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
