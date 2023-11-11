const btns = document.querySelector('.btns__cnt');
const displayPushedNr = document.querySelector('.last__pushed__nr');
const displayLastPushedBtns = document.querySelector('.last__pushed__btns');

let currentValueBtn = '';
let currentPushedNr = '';
let currentPushedNrClone = '';
let currentPushedNrClone2 = '';
let currentPushedNrClone3 = '';
let pushedOperator = '';
let pushedOperatorClone = '';
let pushedOperatorClone2 = '';
let concatenatedStrs = '';

const nrTab = [];

let digitToMathOperation = 0;
let digitToMathOperation2 = 0;

let resultOfOperation = 0;
let resultOfOperation2 = 0;
let resultOfOperation3 = 0;

const basicOperatorsArr = ['x', '-', '+', '/', '='];

function resetAfterResult() {
   currentPushedNrClone = '';
   currentPushedNrClone2 = '';
}

function displayNr(currentPushedNr, resultOfOperation, pushedOperator) {
   
   if ((resultOfOperation < 1) || (pushedOperator.length < 1)) {
      displayPushedNr.innerHTML = currentPushedNr;
   } 

   if (resultOfOperation > 1 && pushedOperator.length > 0) {
      displayPushedNr.innerHTML = resultOfOperation;
      resetAfterResult();
   }

}

function displayLastBtns(concatenatedStrs) {

   if ((resultOfOperation < 1) || (pushedOperator.length < 1)) {
      displayLastPushedBtns.innerHTML = concatenatedStrs;
   }

   if ((resultOfOperation > 1) && (pushedOperator.length < 1)) {
      displayLastPushedBtns.innerHTML = resultOfOperation2 + pushedOperatorClone2;
   }
   
   if ((resultOfOperation > 1) && (pushedOperator.length > 0)) {
      displayLastPushedBtns.innerHTML = resultOfOperation + pushedOperator;
   }
   
}

function result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone) {

   if (pushedOperatorClone === '+' && digitToMathOperation2 !== 0 ) {
      resultOfOperation = digitToMathOperation + digitToMathOperation2; 
      resultOfOperation2 = resultOfOperation;
   }

   if (pushedOperatorClone === '+' && digitToMathOperation2 === 0) {
      resultOfOperation = resultOfOperation2 + digitToMathOperation;
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

function charactersAllocation(currentValueBtn, resultOfOperation, pushedOperatorClone2) {
   const signsArr = ['%', 'CE', 'C', 'X', 'f', 'x^', '√', '/', 'x', '*', '-', '+', '+/-', '.', '='];
   const basicOperatorsArr = ['x', '-', '+', '/', '='];

   if (!signsArr.includes(currentValueBtn)) {

      if (pushedOperator.length === 0) {

         if (count > 4) {
            currentPushedNr = '';
            concatenatedStrs = '';
            concatenatedStrs = resultOfOperation + pushedOperatorClone;
            currentPushedNrClone = '';
            currentPushedNrClone2 = '';

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
   count++; 
   charactersAllocation(currentValueBtn, resultOfOperation, pushedOperatorClone2);
   dataTypeConversion(currentPushedNrClone, currentPushedNrClone2);
   result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone);
   displayNr(currentPushedNr);
   displayLastBtns(concatenatedStrs);
   displayResult(resultOfOperation, pushedOperatorClone);
}

btns.addEventListener('click', init, true);