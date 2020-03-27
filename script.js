    // Assignment Code
    var generateBtn = document.getElementById("generate");
    var passwordBox = document.getElementById("password");
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'.split('');
    var alphaSpec = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'.split('');
    var alphaNumSpec = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()-_=+'.split('');
    var passwordText = document.querySelector("#password");
    var numResults = []; 
    
    // Write password to the #password input
    function generatePassword() {
      var passwordLength = prompt("How long does your password need to be? (Enter a number between 8-128)"); // stored as a num in the string passwordLength

        if(passwordLength >= 8 && passwordLength<=128){
          numResults = [];
          //Confirm pop up to ask if the user wants special chars 
          var specialChars = confirm("Do you want Special Characters in your password?") //okay = true
          //Confirm pop up to ask if the user wants numbers
          var numberChars = confirm("Do you want Numbers in your password?") //okay = true
          
          if (specialChars && numberChars){
            for (i = 0; i < passwordLength; i++) {
              var randomNumber = Math.floor(Math.random()*alphaNumSpec.length); // selects a random number
              var hold = alphaNumSpec[randomNumber];//This is selecting the string of random number x1
              numResults.push(hold);//pushes the random char into an array
              passwordThisIs = numResults.join(''); //squishes the array into a string How to no commas?
              
            }} else if (specialChars !== true && numberChars){
              for (i = 0; i < passwordLength; i++) {
                var randomNumber = Math.floor(Math.random()*alphaNum.length); // selects a random number
                var hold = alphaNum[randomNumber];//This is selecting the string of random number x1
                numResults.push(hold);//pushes the random char into an array
                passwordThisIs = numResults.join(''); //squishes the array into a string How to no commas?
              }} //throws a goof
              
              else if (specialChars && numberChars !== true) {
                for (i = 0; i < passwordLength; i++) {
                  var randomNumber = Math.floor(Math.random()*alphaSpec.length); // selects a random number
                  var hold = alphaSpec[randomNumber];//This is selecting the string of random number x1
                  numResults.push(hold);//pushes the random char into an array
                  passwordThisIs = numResults.join(''); //squishes the array into a string How to no commas?
                }}  //throws a goof
                
                else {
                  for (i = 0; i < passwordLength; i++) {
                    var randomNumber = Math.floor(Math.random()*alphabet.length); // selects a random number
                    var hold = alphabet[randomNumber];//This is selecting the string of random number x1
                    numResults.push(hold);//pushes the random char into an array
                    passwordThisIs = numResults.join(''); //squishes the array into a string How to no commas?
                  }}
                    passwordText.value = passwordThisIs; //injects the password into the password box
      }else{
        alert ('enter a number between 8-128 please')
      }
    }
    generateBtn.addEventListener("click", generatePassword);

    //notes:
    //Is there a way to use just one for loop for all of the random nums?