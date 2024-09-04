const displayValue = document.querySelector('.text-dummy')
const calc = document.querySelector('.calculator');
let value;
let firstNumber = null;
let secondNumber = null;
let op = null;
let result = null;
let number = '';
const p = document.createElement('p');


 

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
    console.log('The value of a is', a);
    console.log('The value of b is', b);

    if (b !== 0) {
        return a/b;
    } else {
        const displayChild = document.querySelector('.display');
        p.innerHTML = 'Go home and take elementary class!'
        p.setAttribute('style','color:lightgreen; font-size: 36px; font-weight: bold; text-align:end; box-sizing: border-box;');
        displayChild.appendChild(p);
        console.log(displayChild);
        console.log("Cannot divide by zero");
        return null;
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


calc.addEventListener('click',(btn) => {
    if(btn.target.className === 'button' || btn.target.className === 'btn-zero')
    {
        console.log(btn.target.textContent);
        number += btn.target.textContent;
        displayValue.innerHTML = number;
        if(!op)
        {
            firstNumber = Number(number);
        }
        else{
            secondNumber = Number(number);
        }        
       
    }



    if (btn.target.className === 'operator' && firstNumber !== null) {
        if (secondNumber !== null) {
            result = operate(op, firstNumber, secondNumber);
            displayValue.innerHTML = result;
            firstNumber = result;
            secondNumber = null;
        }
        op = btn.target.textContent;
        number = '';
    }
    
    if (btn.target.className === 'btn-equals' && op && secondNumber !== null) {
        result = operate(op, firstNumber, secondNumber);
        displayValue.innerHTML = result;
        firstNumber = result;
        secondNumber = null;
        op = null;
        number = '';
    }

    if(result && btn.target.className === 'operator')
    {
        displayValue.innerHTML = result;
        firstNumber = result;
        secondNumber = null;
    }

    if(btn.target.className === 'btn-AC'){
        displayValue.innerHTML = '0';
        result = null;
        op = null;
        number = '';
        firstNumber = null;
        secondNumber = null;
        p.remove();
    }

    if(btn.target.className === 'btn-pm'){
        if(firstNumber)
        {
            firstNumber = -firstNumber;
            displayValue.innerHTML = firstNumber;
        }
        if(secondNumber){
            secondNumber = -secondNumber;
            displayValue.innerHTML = secondNumber;
        }
        if(result)
        {
            result = -result;
            displayValue.innerHTML = result;
        }
    }


    if(btn.target.className === 'btn-percentage')
    {
        if(firstNumber){ 
            firstNumber = firstNumber/100;
            displayValue.innerHTML = firstNumber; 
        }
        if(secondNumber){
            secondNumber = secondNumber/100;
            displayValue.innerHTML = secondNumber;
        }
        if(result)
        {
            result = result/100;
            displayValue.innerHTML = result;
        }
    }
})


