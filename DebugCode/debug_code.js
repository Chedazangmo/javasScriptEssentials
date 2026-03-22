function performOperation(){
    let num1=parseInt(document.getElementById('input1').value);
    let num2=parseInt(document.getElementById('input2').value);

    if(!isNaN(num1)&& !isNaN(num2)){
        let multiplication=multiply(num1,num2);
        let addition=sum(num1,num2);
        let divisionResult=division(num1,num2);

        displayResult(multiplication,addition,divisionResult);

    }else{
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b){
    debugger;

    return a*b;
}
function sum(a,b){
    debugger;

    return a+b;
}

function division(a,b){
    debugger;

    if (b==0){
        return "Cannot divide by zero";
    }

    return a/b;
}

function displayResult(multiplication,addition,divisionResult){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML=`<p><strong>Results:</strong></p>
    <p>Multiplication:${multiplication}</p>
    <p>Sum :${addition}</p>
    <p>Division:${divisionResult}</p>
    `;
}