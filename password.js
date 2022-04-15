const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the Password Validator!\nPlease enter a password at least 10 characters long\n", function(input){
    userPassword = input

    if (input.length >= 10){
        console.log('10 characters, good!')
    }else if (input.length < 10){
        console.log('I said 10!')
    }

    const space = ' '

    if (userPassword.includes(space)){
        console.log('No spaces please!')
    }

    // console.log(userPassword)



    reader.close()

});