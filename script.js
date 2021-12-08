// Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "";
var upperCase = "";
var numeric = "";
var specialCharaters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~}";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var numberOfCharacters;


  passwordText.value = password;
  function generatePassword() {
    var numberOfCharacters = window.prompt("Please enter length of the desired password between 8 and 128 characters long");
    while (!evaluateLengthOfPasswordWithinAcceptedRange(numberOfCharacters)) {
      numberOfCharacters = window.prompt("Please enter length of the desired password between 8 and 128 characters long");
    }
    console.log(numberOfCharacters);
    // console.log(numberOfCharacters);
    function listOfCriteria() {
    }
    return "generatedPassword";
  }

}
// Function to evaluate whether 8 to 128 charaters have been chosen or not
function evaluateLengthOfPasswordWithinAcceptedRange(numberOfCharacters) {
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
