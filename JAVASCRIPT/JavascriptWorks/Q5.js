const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number N: ', (input) => {
    let N = parseInt(input);
    let sum = 0;

    if (isNaN(N)) {
        console.log("That's not a valid number.");
    } else {
        for (let i = 1; i <= N; i++) {
            sum += i;
        }
        console.log('The sum of numbers from 1 to ${N} is: ${sum}');
    }

    rl.close();
});