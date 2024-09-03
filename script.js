function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a, b) {
    if (b !== 0) {
        return a/b;
    } else {
        console.log("Cannot divide by zero");
    }
}


function operate(operator, numOne, numTwo){
    // console.log('the value of operator is', operator);
    let result;
    switch (operator){
        case '+': result =  add(numOne,numTwo); break;
        case '-': result = subtract(numOne,numTwo); break;
        case '*': result = multiply(numOne,numTwo); break;
        case '/': result = divide(numOne,numTwo); break;
        default: console.log("Invalid operator"); return;
    }
    return result;
}


const calc = document.querySelector('.calculator');
const displayValue = document.querySelector('.text-dummy')
let value;
let firstNumber;
let secondNumber;
let op = null;
let result = null;
let number = '';
 

// let number = 0;

calc.addEventListener('click',(btn) => {
    // console.log((btn.target.className));
    if(btn.target.className === 'button')
    {
        
        if(firstNumber && op)
        {
            number += btn.target.textContent
            number = Number(number);
            console.log('hi',number);   
            secondNumber = number;
            displayValue.innerHTML = secondNumber;
            console.log(op);
            console.log('the value of operator is',op);

            // number = 0;
        }
        else if(!op){
            number += btn.target.textContent
            number = Number(number);
            console.log('hello',number);    
            firstNumber = number;
            displayValue.innerHTML = firstNumber;
            console.log('the value of operator is',op);
        }        
       
    }
    
    // console.log(btn.target.className);
    if(btn.target.className === 'operator'){
        op = btn.target.textContent;
        console.log(op);
    }
    
    if(op && firstNumber && secondNumber){
        result = operate(op,firstNumber,secondNumber);
        firstNumber = result;
        secondNumber = null;
        number = '';
        op = null;
    }

    if(result && btn.target.className === 'operator')
    {
        displayValue.innerHTML = result;
        firstNumber = result;
        secondNumber = null;
    }

    if((op === '=') && result)
    {
        displayValue.innerHTML = result;
    }
})


