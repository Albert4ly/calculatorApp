const btns = document.querySelector('.btns__cnt');
const displayPushedNr = document.querySelector('.last__pushed__nr');
const displayLastPushedBtns = document.querySelector('.last__pushed__btns');

let currentValueBtn = '';
let currentPushedNr = '';
let currentPushedNrClone = '';
let currentPushedNrClone2 = '';
let pushedOperator = '';
let pushedOperatorClone = '';
let pushedOperatorClone2 = '';
let concatenatedStrs = '';
let counter = 0;

let isBoolean = null;

let digitToMathOperation = null;
let digitToMathOperation2 = null;

let resultOfOperation = null;

function displayNr(currentPushedNr) {
   displayPushedNr.innerHTML = currentPushedNr;
}

function displayResult(resultOfOperation, pushedOperatorClone2) {
   
   if (counter > 3) {
      displayPushedNr.innerHTML = resultOfOperation;
      displayLastPushedBtns.innerHTML = resultOfOperation + pushedOperatorClone2;
   }

}

function displayLastBtns(concatenatedStrs) {
   displayLastPushedBtns.innerHTML = concatenatedStrs;
}

function result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone) {

   if (pushedOperatorClone === '+') {
      resultOfOperation = digitToMathOperation + digitToMathOperation2; 
   }
   
   if (pushedOperatorClone === '-') {
      resultOfOperation = digitToMathOperation - digitToMathOperation2;
   }
   
   if (pushedOperatorClone === 'x') {
      resultOfOperation = digitToMathOperation * digitToMathOperation2;
   }
   
   if (pushedOperatorClone === '/') {
      resultOfOperation = digitToMathOperation / digitToMathOperation2;
   }
   
}

function dataTypeConversion(currentPushedNrClone, currentPushedNrClone2) {

   if (isBoolean === true) {
      digitToMathOperation = Number(currentPushedNrClone);
      digitToMathOperation2 = Number(currentPushedNrClone2);
   }

}

function charactersAllocation(currentValueBtn,) {
   const signsArr = ['%', 'CE', 'C', 'X', 'f', 'x^', '√', '/', 'x', '*', '-', '+', '+/-', '.', '='];
   const basicOperatorsArr = ['x', '-', '+', '/', '='];
   counter++; 
   // counter to reset after four iterations

   if (!signsArr.includes(currentValueBtn)) {

      if (pushedOperator.length === 0) {

         if (counter > 4) {
            currentPushedNr = '';
            pushedOperatorClone = '';
            concatenatedStrs = '';

         }

         currentPushedNr += currentValueBtn; 
         currentPushedNrClone = currentPushedNr;
      }

      if (pushedOperator.length !== 0) {
         currentPushedNr = '';
         currentPushedNr += currentValueBtn;
         currentPushedNrClone2 += currentPushedNr;
         pushedOperator = '';
      }

   }

   if (basicOperatorsArr.includes(currentValueBtn)) {

      if (concatenatedStrs.charAt(concatenatedStrs.length - 1) !== currentValueBtn) {
         pushedOperator += currentValueBtn;
         pushedOperatorClone = pushedOperator;
         pushedOperatorClone2 = pushedOperatorClone;
         concatenatedStrs = currentPushedNr;
         concatenatedStrs += currentValueBtn;
      }

      if (concatenatedStrs.charAt(concatenatedStrs.length - 1) === currentValueBtn) {
         isBoolean = true;
      }
      
   }
}

function init(e) {
   currentValueBtn = e.target.value;
   charactersAllocation(currentValueBtn);
   dataTypeConversion(currentPushedNrClone, currentPushedNrClone2);
   result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone);
   displayNr(currentPushedNr);
   displayLastBtns(concatenatedStrs);
   displayResult(resultOfOperation, pushedOperatorClone);
}

btns.addEventListener('click', init, true);









