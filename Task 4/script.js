let outputScreen = document.getElementById("input");

//============DISPLAY FUNCTION=============
function display(num){
    outputScreen.value += num;
}
//============CALCULATION FUNCTION=============
function Calculate(){
        outputScreen.value = eval(outputScreen.value);
}
//============CLEAR FUNCTION===============
function Clear(){
    outputScreen.value = "";
}
//============DELETE FUNCTION=============
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}