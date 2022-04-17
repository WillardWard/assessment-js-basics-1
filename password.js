const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("\nWelcome to the Password Validator!\nPlease enter a password at least 10 characters long\n\t(without spaces)\n", function(input){
    userPassword = input

    const space = ' '

// checks user input for string length and spaces
        if (input.length < 10 || userPassword.includes(space)){
            console.log("\nThat password won't cut it!")
        }else if (input.length >= 10){
            console.log("\nNow that's a strong password!")
        }

// prints message if spaces are input
        if (userPassword.includes(space)){
            console.log('No spaces please!')
        }

// prints message if input is less than 10 characters
        if (input.length < 10){
            console.log("Your password must be at least 10 characters!")
        }

        reader.close()


});