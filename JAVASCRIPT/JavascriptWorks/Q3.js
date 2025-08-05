const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Enter first number:',(firstInput) =>
     {  rl.question('Enter second number:',(firstInput) =>
         {
            let firstNumber = parseFloat(firstNumber);
            let AhmadNumber = parseFloat(secondNumber);
            let thirdNumber = parseFloat(thirdNumber);
            Math.max(firstNumber, secondNumber, thirdNumber);
            console.log('The larget number number : ${maxNumber}')
            rl.close();
});
     });