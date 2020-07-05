function getNumber(num){
    var inputBox=document.getElementById('inputBox');
    inputBox.value+=num;
}

function clearResult(num){
    var inputBox=document.getElementById('inputBox');
    inputBox.value="";
}

function getResult(){
    var inputBox=document.getElementById('inputBox');
    inputBox.value=eval(inputBox.value);
}