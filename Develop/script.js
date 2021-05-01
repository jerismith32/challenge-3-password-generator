// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Element Variable Assignments
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
//Should I make each number element a string?
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var specialCharacters = ["!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Variables for information needed from the User
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordSpecialChar;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Start Function to Generate Password Length
function generatePasswordLength() {
    //User Input Needed for Password Length
    passwordLength = window.prompt("How many characters do you want your password to be? Please choose between 8 and 128 characters");
    console.log("User Input Password Length" + passwordLength);

    if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
      window.alert("You need to provide a password character length between 8 and 128! Please try again.");
      return generatePasswordLength ();
    }
};

//Start Function to Generate UpperCase and/or LowerCase
function generateLowerCase () {
  passwordLowerCase = window.prompt ("Will your password contain lower case letters? Please choose Y or N");
  console.log("Lower Case Preferance" + passwordLowerCase);

  if (passwordLowerCase === "" || passwordLowerCase === null) {
    window.alert("You need to provide a choice indicating if you want a Lower Case letter in your password.");
    return generateLowerCase (); 
  }

};

function generateUpperCase () {
  passwordUpperCase = window.prompt ("Will your password contain upper case letters? Please choose Y or N");
  console.log("Upper Case Preferance" + passwordUpperCase);

  if (passwordUpperCase === "" || passwordUpperCase === null) {
    window.alert("You need to provide a choice indicating if you want a Upper Case letter in your password.");
    return generateUpperCase (); 
  }
}
