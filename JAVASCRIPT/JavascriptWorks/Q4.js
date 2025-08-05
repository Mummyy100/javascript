const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number to print its multiplication table: ', (input) => {
    let number = parseInt(input);

    if (isNaN(number)) {
        console.log("That's not a valid number.");
    } else {
        console.log('Multiplication Table of ${number}:');
        for (let i = 1; i <= 10; i++) {
            console.log('${number} x ${i} = ${number * i}');
        }
    }
    
    rl.close();
});