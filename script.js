//buttons for generating password
var genPassBtn = document.querySelector("#gen-pass")
var passDisplay = document.querySelector("#pass-text")
//prompts for slecting criteria
var specCharChoice = confirm("Do you want your password to have a special character?");
var lowercaseCharChoice = confirm("Do you want your password to contain lower case letters?");
var uppercaseCharChoice = confirm("Do you want your password to contain upper case letters?");
var numCharChoice = confirm("Do you want your password to contain a number?");
var lengthChoice = null;
//Function for selecting the length of the password
function getLength() {
    lengthChoice = prompt("How many characters long would you like your password to be?");
    if (!checkLength(lengthChoice)) {
        getLength();
    }
};
//promt for selecting length
function checkLength(passwordLength){
    if (passwordLength < 8){
        alert("Password must be 8 characters or greater");
        return false;
    }
    else if (passwordLength > 128){
        alert("Password cannot be longer than 128 characters");
        return false;
    }
    return true;
};
//function for generating password
function generate(passwordLength) {
    //all possible parrword criteria
    var specChar = "!@#$%^&*()-_=+`~[]{};:'?/..<>|\\";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var password = "";
    var passwordChoices = [];
    //criteria check
    if (specCharChoice === true) {
        passwordChoices.push(specChar);
    }
    if (lowercaseCharChoice === true) {
        passwordChoices.push(lowercaseChar);
    }
    if (uppercaseCharChoice === true) {
        passwordChoices.push(uppercaseChar);
    }
    if (numCharChoice === true) {
        passwordChoices.push(numChar);
    }
    if (passwordChoices.length === 0) {
        alert("Error: No choices provided!");
        return "";
    }
    //Function for randomizing password
    function getRandomInt(min, max) {
        if (min === max){
            return min;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for(var i = 0; i < passwordLength; i++) {
        var choiceIndex = getRandomInt(0, passwordChoices.length - 1);
        var choice = passwordChoices[choiceIndex];
        var passwordCharIndex = getRandomInt(0, choice.length - 1);
        var passwordChar = choice[passwordCharIndex];
        password += passwordChar;
    }    
    return password;
  };

//After criteria are selected, click "Generate Password" to retreive
genPassBtn.addEventListener("click", function() {    
    passDisplay.value = generate(lengthChoice);    
});


getLength();




