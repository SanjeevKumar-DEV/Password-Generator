// Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "";
var upperCase = "";
var numeric = "";
var specialCharaters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~}";
var numberOfCharacters;
var lowercaseOption = true;
var uppercaseOption = true;
var numericOption = true;
var specialCharactersOption = true;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword() {
    // Record first user input for passord length and evaluate the input 
    numberOfCharacters = window.prompt("Please enter length of the desired password between 8 and 128 characters long");
    while (!evaluateLengthOfPasswordWithinAcceptedRange()) {
      numberOfCharacters = window.prompt("Please enter length of the desired password between 8 and 128 characters long");
    }
    lowercaseOption = window.confirm("Press OK to accept atleast one lowercase character in the desired password or Press Cancel if not required.");
    uppercaseOption = window.confirm("Press OK to accept atleast one uppercase character in the desired password or Press Cancel if not required.");
    numericOption = window.confirm("Press OK to accept atleast one numeric in the desired password or Press Cancel if not required.");
    numericOption = window.confirm("Press OK to accept atleast one special character in the desired password or Press Cancel if not required.");
    var generatedPassword = "iAmTempPassword";
    generatedPassword = generatePasswordAfterAllCriteriaSubmittedByUser();
    return generatedPassword;
  }

}
// Function to evaluate whether 8 to 128 charaters have been chosen or not
function evaluateLengthOfPasswordWithinAcceptedRange() {
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    return true;
  }
  else {
    var proceedToChange = window.confirm("Your selected password length is not in acceptable range, Press OK to re-enter again or Cancel to abort.");
    if (proceedToChange) {
      return false;
    }
    else {
      window.alert("Thank you for choosing password generator.");
      return true;
    }
  }
}

// Function to generate password as per user supplied criteria
function generatePasswordAfterAllCriteriaSubmittedByUser () {
  var generatedPassword = "iAmJustTempPassword";
  for (var i = 0; i < numberOfCharacters.length; i++)
  {
    //Math.floor(Math.random() * options.length)

  }
  
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
