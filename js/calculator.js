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

function result(digitToMathOperation, digitToMathOperation2, pushedOperator, pushedOperatorClone) {

   if ((pushedOperator === '+') && (digitToMathOperation2 > 1) ) {
      resultOfOperation = digitToMathOperation + digitToMathOperation2;
      resultOfOperation2 = resultOfOperation;
   }
   
}

function dependingOf(pushedOperator, resultOfOperation2, pushedOperatorClone) {

   if (basicOperatorsArr.includes(pushedOperator)) {
      concatenateStrs(currentPushedNrClone3, pushedOperator)
   }

}

function concatenateStrs(currentPushedNrClone3, pushedOperator) {
   concatenatedStrs = currentPushedNrClone3 + pushedOperator;
}

function dataTypeConversion(currentPushedNrClone, currentPushedNrClone2, resultOfOperation2, nrTab) {
    
   if(nrTab.length > 1){
      digitToMathOperation = Number(nrTab[0]);
      digitToMathOperation2 = Number(nrTab[1]);
      nrTab.length = 0;
   }

   if((nrTab.length < 2 ) && (resultOfOperation2 !== 0)){
      digitToMathOperation = Number(resultOfOperation2);
      digitToMathOperation2 = Number(nrTab[0])
      nrTab.length = 0;
   }
      
}

function charactersAllocation(currentValueBtn) {
   const signsArr = ['%', 'CE', 'C', 'X', 'f', 'x^', '√', '/', 'x', '*', '-', '+', '+/-', '.', '='];

   if (!signsArr.includes(currentValueBtn)) {

      if (pushedOperator.length === 0) {

         currentPushedNr += currentValueBtn; 
         currentPushedNrClone = currentPushedNr;
         currentPushedNrClone3 = currentPushedNrClone;
      }

      if (pushedOperator.length !== 0) {
         currentPushedNr = '';
         currentPushedNr = currentValueBtn;
         currentPushedNrClone2 += currentPushedNr;
         pushedOperatorClone = pushedOperator;
         pushedOperatorClone2 = pushedOperator;
         pushedOperator = '';
      }

   }

   if (basicOperatorsArr.includes(currentValueBtn)) {

         nrTab.push(currentPushedNr);
         pushedOperator += currentValueBtn;
         pushedOperatorClone = pushedOperator;

   }
}

function init(e) {
   currentValueBtn = e.target.value;
   charactersAllocation(currentValueBtn);
   dataTypeConversion(currentPushedNrClone, currentPushedNrClone2, resultOfOperation2, nrTab);
   result(digitToMathOperation, digitToMathOperation2, pushedOperator, pushedOperatorClone)
   displayNr(currentPushedNr, resultOfOperation, pushedOperator);
   dependingOf(pushedOperator, concatenatedStrs, resultOfOperation2, pushedOperatorClone);
   displayLastBtns(concatenatedStrs);
}


btns.addEventListener('click', init, true);