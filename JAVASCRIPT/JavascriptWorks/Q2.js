const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})
rl.question("Enter first number:",(firstInput)=>{
    rl.question("Enter an operator(+,-,*,/):",(operator =>{
        let firstNumber = parseFloat(firstInput);
        let secondNumber = parseFloat(secondNumber);
        let result;
        if (isNaN(firstNumber)||
    isNaN(secondNumber)){
        console.log("Please enter valid numbers.");
    } else{
        if(operator ==="+"){
            result = firstNumber + secondNumber;
        } else   if(operator ==="-"){
            result = firstNumber - secondNumber;
    } else  if(operator ==="*"){
            result = firstNumber * secondNumber;
    } else if (operator ===("/")){
        result = firstNumber / secondNumber;
    } else {
        console.log("Invalid operator.");
    }
    if (result !== undefined){
        console.log("Result: $ {result}");
    }
    }
    rl.close();
    }));
});