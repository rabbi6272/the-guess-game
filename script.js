const ans = document.getElementById('realAns');
const result = document.getElementById('result-box');
const score = document.getElementById('score');
const button = document.querySelector('button');
const chances = document.getElementById('chances');





    
num = Math.trunc(Math.random() * 10 +1);
    let s = 0;
    let c = 4;
button.addEventListener('click', function () {
    if(c>=0){
        var inputNum = Number(document.querySelector('input').value);
        if(!inputNum){
        result.innerHTML = "Please enter a number"
        } else{
            chances.innerHTML=c--;
            if (inputNum == num) {
                s++;
                score.textContent=s;
                result.innerHTML= "You guessed correctly";
            } else if (inputNum > num) {
                result.innerHTML="Too high"
            } else if (inputNum < num) {
                result.innerHTML="Too low" 
            } 
        }
    } else{return ans.innerHTML=num;}
})
