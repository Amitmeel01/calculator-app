let inputTxt=document.getElementById("text-content");

function clearInput(){
    inputTxt.value='';
}
function deleteLast(){
    inputTxt.value=inputTxt.value.slice(0,-1);
}
function appendSymbol(symbol){
    inputTxt.value += symbol;
}

function appendOperator(operator){
    inputTxt.value += operator;
}

function appendNumber(number){
    inputTxt.value += number;
}

function calculateResult(){
    try{inputTxt.value = eval(inputTxt.value);
    }catch(error){
        inputTxt.value="ERROR";
    }
}

