class Calculator {
    constructor() {
    }

    addNumbers(num1, num2, num3){
        if(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
            let sum = num1 + num2 + num3;
            return sum;
        }
        else{
            throw new Error(`There is a parameter that is not a number!`);
        }
    }

    multiplyNumbers(num1, num2, num3){
        if(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
            return num1 * num2 * num3;
        }
        else{
            throw new Error(`There is a parameter that is not a number!`);
        }
    }
}

module.exports = Calculator;