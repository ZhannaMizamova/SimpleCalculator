function sum () {
    let num1, num2, result;

    num1=document.getElementById("number1").value;
    num1=parseInt(num1);

    num2=document.getElementById("number2").value;
    num2=parseInt(num2);

    if(num2==0){
        alert("На нуль делить нельзя")
    }
    else{  
        result = num1 + num2;
        document.getElementById("answer").innerHTML = result;
    }
}

function sub () {
    let num1, num2, result;

    num1=document.getElementById('number1').value;
    num1=parseInt(num1);

    num2=document.getElementById('number2').value;
    num2=parseInt(num2);

    result = num1 - num2;
    document.getElementById('answer').innerHTML = result;

    if(num2==0){
        alert("На нуль делить нельзя")
    }
}

function multi () {
    let num1, num2, result;

    num1=document.getElementById('number1').value;
    num1=parseInt(num1);

    num2=document.getElementById('number2').value;
    num2=parseInt(num2);

    result = num1 * num2;
    document.getElementById('answer').innerHTML = result;

    if(num2==0){
        alert("На нуль делить нельзя")
    }
}

function divide () {
    let num1, num2, result;

    num1=document.getElementById('number1').value;
    num1=parseInt(num1);

    num2=document.getElementById('number2').value;
    num2=parseInt(num2);

    result = num1 / num2;
    document.getElementById('answer').innerHTML = result;

    if(num2==0){
        alert("На нуль делить нельзя")
    }
}

