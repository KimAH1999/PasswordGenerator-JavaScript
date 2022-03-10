//Variables for (Symbols/Numbers/Letters^+v)
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//functions for Password Options/Console log sayings to display
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be 8 characters to proceed');
    return null;
  }

  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return null;
  }

  var hasSpecialChar = confirm(
    'Click OK to confirm using special characters or CANCEL to not include.'
  );

  var hasNumberChar = confirm(
    'Click OK to confirm using numeric characters or CANCEL to not include.'
  );

  var hasLowerCasedChar = confirm(
    'Click OK to confirm using lowercase characters or CANCEL to not include.'
  );

  var hasUpperCasedChar = confirm(
    'Click OK to confirm using uppercase characters or CANCEL to not include.'
  );

  //If user says Not to include anything, this alert will be given
  if (
    hasSpecialChar === false &&
    hasNumberChar === false &&
    hasLowerCasedChar === false &&
    hasUpperCasedChar === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasNumberChar: hasNumberChar,
    hasLowerCasedChar: hasLowerCasedChar,
    hasUpperCasedChar: hasUpperCasedChar,
  };
  return passwordOptions;
}

//function for random array grabber for variables
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

//function to generate random variable with user input needs/wants chosen
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (!options) return null;

  if (options.hasSpecialChar) {
    possibleChar = possibleChar.concat(specialChar);
    guaranteedChar.push(getRandom(specialChar));
  }

  if (options.hasNumberChar) {
    possibleChar = possibleChar.concat(numberChar);
    guaranteedChar.push(getRandom(numberChar));
  }

  if (options.hasLowerCasedChar) {
    possibleChar = possibleChar.concat(lowerCasedChar);
    guaranteedChar.push(getRandom(lowerCasedChar));
  }

  if (options.hasUpperCasedChar) {
    possibleChar = possibleChar.concat(upperCasedChar);
    guaranteedChar.push(getRandom(upperCasedChar));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChar);

    result.push(possibleChar);
  }

  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

//function to write the generated password in container(#password input)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

//Event listener for generting button
generateBtn.addEventListener('click', writePassword);
