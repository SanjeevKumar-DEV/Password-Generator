// Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numeric = "0123456789".split('');
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~}".split('');
var numberOfCharacters;
var lowerCaseOption = true;
var upperCaseOption = true;
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
    lowerCaseOption = window.confirm("Press OK to accept atleast one lowercase character in the desired password or Press Cancel if not required.");
    upperCaseOption = window.confirm("Press OK to accept atleast one uppercase character in the desired password or Press Cancel if not required.");
    numericOption = window.confirm("Press OK to accept atleast one numeric in the desired password or Press Cancel if not required.");
    specialCharactersOption = window.confirm("Press OK to accept atleast one special character in the desired password or Press Cancel if not required.");
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
  var generatedPassword = "";
  var lowerCaseCharIndex = 0;
  var upperCaseCharIndex = 0;
  var numericCharIndex = 0;
  var specialCharacterCharIndex = 0;
  var whenOptionsNotSelected  = {
    lowerCaseOpt : true,
    upperCaseOpt : true,
    numericOpt : true,
    specialCharactersOpt : true
  };
  // for the case where user did not select any option atleast one option is selected
  if (!lowerCaseOption && !upperCaseOption && !numericOption && !specialCharactersOption)
  {
    atleatOneDefaultOptionSelectedIndex = Math.floor(Math.random() * 4);
    if (atleatOneDefaultOptionSelectedIndex === 0) 
    {
      lowerCaseOption = whenOptionsNotSelected.lowerCaseOpt;
    }
    else if (atleatOneDefaultOptionSelectedIndex === 1) 
    {
      upperCaseOption = whenOptionsNotSelected.upperCaseOpt;
    }
    else if (atleatOneDefaultOptionSelectedIndex === 2) 
    {
      numericOption = whenOptionsNotSelected.numericOpt;
    }
    else 
    {
      specialCharactersOption = whenOptionsNotSelected.specialCharactersOpt;
    }

  }
  for (var i = 0; i < numberOfCharacters;)
  {
    if(lowerCaseOption)
    {
      lowerCaseCharIndex = Math.floor(Math.random() * lowerCase.length);
      generatedPassword = generatedPassword + lowerCase[lowerCaseCharIndex];
      i++;
    }
    if(upperCaseOption)
    {
      upperCaseCharIndex = Math.floor(Math.random() * upperCase.length);
      generatedPassword = generatedPassword + upperCase[upperCaseCharIndex];
      i++;
    }
    if(numericOption)
    {
      numericCharIndex = Math.floor(Math.random() * numeric.length);
      generatedPassword = generatedPassword + numeric[numericCharIndex];
      i++;
    }
    if(specialCharactersOption)
    {
      specialCharacterCharIndex = Math.floor(Math.random() * specialCharacters.length);
      generatedPassword = generatedPassword + specialCharacters[specialCharacterCharIndex];
      i++;
    }
  }
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
