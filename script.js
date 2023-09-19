const ans = document.getElementById('realAns');
const result = document.getElementById('result-box');

function calcNum() {
    var inputNum = Number(document.querySelector('input').value);
    if(inputNum===undefined){ result.innerHTML='Please enter a number'}
    num = Math.round(Math.random() * 10);
    if (inputNum == num) {
        result.innerHTML= "You guessed correctly"
    } else if (inputNum > num) {
        result.innerHTML="You guessed "+ (inputNum-num) + " more"
    } else if (inputNum < num) {
        result.innerHTML="You guessed "+ (num-inputNum) + " less" 
    } else{}
    return ans.innerHTML=num;
}