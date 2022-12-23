// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "1234567890";
var specialchar = '!@#$%^&*()_+?></';
var numbsArr = numbers.split('');
var lowercaseArr = lowercase.split('');
var uppercaseArr = uppercase.split('');
var specialchArr = specialchar.split('');
var passwordString = '';
var passwordCharArr = [];
var passwordLength
// 1. prompt the user for the password criteria
//  a. password length 8-128 char
//  b. lower, upper, numbers, special` char
// 2. Validate the input. 
// 3. Generate password based on criteria. 


// 4. Display generated password on page.
function generatePassword() {

  var password = "";
  var passwordChar = "";
  // first prompt length of password

  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 -128"));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    alert("Please select a number between 8 - 128");
  }

  specialchar = confirm("Select 'OK' if you would like to include special characters");
  numbers = confirm("Select 'OK' if you would like to include numbers");
  uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
  lowercase = confirm("Select 'OK' if you would like to include lowercase letters");

  let passwordArray = []
  if (specialchar)
    passwordArray = passwordArray.concat(specialchArr)
  if (numbers)
  passwordArray = passwordArray.concat(numbsArr)
  if (uppercase)
  passwordArray = passwordArray.concat(uppercaseArr)
  if (lowercase)
  passwordArray = passwordArray.concat(lowercaseArr)
  
    for (var i = 0; i < passwordLength; i++) {
      var password = passwordArray[Math.floor(Math.random() * passwordArray.length)]
      passwordCharArr.push(password)
    //  return (generatePassword);
    }
    console.log(passwordCharArr.join(''));
    return passwordCharArr.join('');
  
  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
