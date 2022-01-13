// Assignment code here

var generateBtn = document.querySelector("#generate");


var generatePassword = function(promptLength, promptCase, promptNumeric, promptCharacter){
     
    // empty string declaration for future password string characters
    var passString = "";
    // empty string declaration for password and local function scope
    var password = "";

   if (promptCase == "lowercase"){
       // assigned lowercase letters if "lowercase" was selected
       passString = "abcdefghijklmnopqrstuvwxyz";
   } else if (promptCase == "uppercase"){
       // assigned lowercase letters if "uppercase" was selected
       passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   } else {
       // assigned both cases if "both" was selected
       passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYz";
   }

   // numbers assigned to itself if "yes" was selected for Numerics
   if (promptNumeric == "yes"){
       passString += "0123456789";
   }

   // special characters assigned to itself if "yes" was selected for characters
   if (promptCharacter == "yes"){
       passString += '!@#$%^&*()';
   }

   // for loop that uses the promptLength answer for loop length
   for (var i = 0; i < promptLength; i++) {
       // Using Math.floor and Math.random to randomize character number
       var ranNum = Math.floor(Math.random() * passString.length);
       // password using ranNum
       password += passString.substring(ranNum, ranNum +1);
   }
   return password;
};

// password length function
var passLength = function () {
    var promptLength = prompt('How long would you like your password to be? Enter from "8" to "128" characters to choose!');
    if (promptLength >=8 && promptLength <=128) {
        return promptLength;
        } 
        else {
            alert("choose a number between 8 and 128 to continue");
            passLength(); 
        }
    };

// password case function (lower,upper,both)    
var passCase = function () {
    var promptCase = window.prompt('Would you like to use lowercase, uppercase or both? Enter "lowercase", "uppercase" or "both" to choose!');
    promptCase = promptCase.toLowerCase();
    if(promptCase === "lowercase" || promptCase === "uppercase" || promptCase === "both") {
        return promptCase;
        }
        else {
            alert("choose either lowercase, uppercase or both to continue");
            passCase();
        }
    };

// password Numeric data function (use numbers or no?)
var passNumeric = function () {
    var promptNumeric = window.prompt('Would you like to use Numerics? Enter "yes" or "no" to choose!');
    promptNumeric = promptNumeric.toLowerCase();
    if (promptNumeric === "yes" || promptNumeric === "no") {
        return promptNumeric;
        }
        else {
            alert("choose either yes or no to continue!");
            passNumeric();
        }
    };

// password special character function
var passCharacter = function () {
    var promptCharacter = window.prompt('Would you like to use special characters? Enter "yes" or "no" to choose!');
    promptCharacter = promptCharacter.toLowerCase();
    if (promptCharacter === "yes" || promptCharacter === "no") {
        return promptCharacter;
        }
        else {
            alert("choose either yes or no to continue!");
            passCharacter();
        }
    };

// Write password to the #password input
function writePassword() {
    var promptLength = passLength();
    var promptCase = passCase();
    var promptNumeric = passNumeric();
    var promptCharacter = passCharacter();

    
  var password = generatePassword(promptLength, promptCase, promptNumeric, promptCharacter) 
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;     
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


   
