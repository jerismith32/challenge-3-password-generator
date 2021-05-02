// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Element Variable Assignments
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var specialCharacters = ["!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Variables for information needed from the User
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordSpecials;
var passwordInformation;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Start Function to Generate User Input for desired password
function generatePasswordInformation() {
    //User Input Needed for Password Length
    passwordLength = window.prompt("How many characters do you want your password to be? Please choose between 8 and 128 characters");
    console.log("User Input Password Length " + passwordLength);

    if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
      window.alert("You need to provide a password character length between 8 and 128! Please try again.");
      return generatePasswordLength ();
    }

    else {
      //User Input Needed for Password containting Lowercase Letters
      passwordLowerCase = window.confirm ("Will your password contain lowercase letters? Choose 'OK' for yes and 'Cancel for no.");
      console.log ("Lower Case Preferance " + passwordLowerCase);
      //User Input Needed for Password containting Uppercase Letters
      passwordUpperCase = window.confirm ("Will your password contain uppercase letters? Choose 'OK' for yes and 'Cancel for no.");
      console.log ("Upper Case Preferance " + passwordUpperCase);
      //User Input Needed for Password containting Numbers
      passwordNumbers = window.confirm ("Will your password contain numbers Choose 'OK' for yes and 'Cancel for no.");
      console.log ("Number Preferance " + passwordNumbers);
      //User Input Needed for Password containting Special Characters
      passwordSpecials = window.confirm ("Will your password contain special characters? Choose 'OK' for yes and 'Cancel for no.");
      console.log ("Special Character Preferance " + passwordSpecials);
    };

    //Per Acceptance Criteria Validate at least one character type should be seclected. 
    if (passwordLowerCase === false && passwordUpperCase === false && passwordNumbers === false && passwordSpecials === false ) {
      passwordInformation= window.alert ("You must select at least one of the following criteria to be included in your password: lowercase letter, uppercase letter, number, or special character");
      return generatePasswordInformation ();
    }
    
};





/*

//Start Functions to Generate UpperCase and/or LowerCase
function generateLowerCase () {
  passwordLowerCase = window.prompt ("Will your password contain lower case letters? Please choose Y or N");
  console.log("Lower Case Preferance " + passwordLowerCase);

  if (passwordLowerCase === "Y" || passwordLowerCase === "N" || 
  passwordLowerCase === "y" || passwordLowerCase === "n" ||
  passwordLowerCase === "Yes" || passwordLowerCase === "No" ||
  passwordLowerCase === "YES" || passwordLowerCase === "NO" ||
  passwordLowerCase === "yes" || passwordLowerCase === "no" ) {
    return generateUpperCase (); 
  }

  else if (passwordLowerCase === "" || passwordLowerCase === null) {
      window.alert("You need to provide a choice indicating if you want a Lower Case letter in your password.");
      return generateLowerCase (); 
  }

};

function generateUpperCase () {
  passwordUpperCase = window.prompt ("Will your password contain upper case letters? Please choose Y or N");
  console.log("Upper Case Preferance " + passwordUpperCase);

  if (passwordUpperCase === "Y" || passwordUpperCase === "N" || 
  passwordUpperCase === "y" || passwordUpperCase === "n" ||
  passwordUpperCase === "Yes" || passwordUpperCase === "No" ||
  passwordUpperCase === "YES" || passwordUpperCase === "NO" ||
  passwordUpperCase === "yes" || passwordUpperCase === "no" ) {
    return generateNumbers (); 
  }

  else if (passwordUpperCase === "" || passwordUpperCase === null) {
      window.alert("You need to provide a choice indicating if you want an Upper Case letter in your password.");
      return generateUpperCase (); 
  }
};

//Start Functions to Generate User's Numbers Preferances 
function generateNumbers () {
  passwordNumbers = window.prompt ("Will your password contain numbers? Please choose Y or N");
  console.log("Number Preferance " + passwordNumbers);

  if (passwordNumbers === "Y" || passwordNumbers === "N" || 
  passwordNumbers === "y" || passwordNumbers === "n" ||
  passwordNumbers === "Yes" || passwordNumbers === "No" ||
  passwordNumbers === "YES" || passwordNumbers === "NO" ||
  passwordNumbers === "yes" || passwordNumbers === "no" ) {
    return generateSpecials (); 
  }

  else if (passwordNumbers === "" || passwordNumbers === null) {
      window.alert("You need to provide a choice indicating if you want numbers in your password.");
      return generateNumbers(); 
  }
};

//Start Functions to Generate User's Special Character Preferances 
function generateSpecials () {
  passwordSpecials = window.prompt ("Will your password contain special characters? Please choose Y or N");
  console.log("Special Character Preferance " + passwordSpecials);

  if (passwordSpecials === "Y" || passwordSpecials === "N" || 
  passwordSpecials === "y" || passwordSpecials === "n" ||
  passwordSpecials === "Yes" || passwordSpecials === "No" ||
  passwordSpecials === "YES" || passwordSpecials === "NO" ||
  passwordSpecials === "yes" || passwordSpecials === "no" ) {
  }

  else if (passwordSpecials === "" || passwordSpecials === null) {
      window.alert("You need to provide a choice indicating if you want special characters in your password.");
      return generateSpecials ();
  }
}; */