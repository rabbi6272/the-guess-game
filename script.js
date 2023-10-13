const ans = document.getElementById('realAns');
const result = document.getElementById('result-box');
const score = document.getElementById('score');
const button = document.querySelector('button');




let s = 0;
button.addEventListener('click', function () {
    var inputNum = Number(document.querySelector('input').value);
    if(!inputNum){
    result.innerHTML = "Please enter a number"
    } else{
        num = Math.trunc(Math.random() * 10 +1);
        if (inputNum == num) {
            s++;
            score.textContent=s;
            result.innerHTML= "You guessed correctly";
        } else if (inputNum > num) {
            result.innerHTML="You guessed "+ (inputNum-num) + " more"
        } else if (inputNum < num) {
            result.innerHTML="You guessed "+ (num-inputNum) + " less" 
        } 
        return ans.innerHTML=num;
    }
   
});
