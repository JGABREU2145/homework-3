/*The user will be prompted to choose from the following password criteria:
Length (must be between 8 and 128 characters)
Special characters 
Numeric characters
Lowercase characters
Uppercase characters*/

//promt for criteria
//link to variables
//variables for special characters, upper and lower case, and numerals, and character length
//a loop that chooses a random character from each array of variables
//an onclick that generates the password when clicked, link by ID
//displaying the returned password in the text area, link by 
//an onclick that copies the password to the clipboard
var passChoice = prompt("Your password must contain to following: Must be between 8-128 characters, contain at least one lower case, upper case letter, as well as one special character and one number.");
console.log(passChoice)

var specChar = ["!", "@", "#", "$", "%", "^", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "`", "{", "|", "}", "~" ];
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "0123456789".split("")


alert(passChoice());
