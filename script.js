const ans = document.getElementById('realAns');
const result = document.getElementById('result-box');
const button = document.querySelector('button');
const chances = document.getElementById('chances');




num = Math.trunc(Math.random() * 10 +1);
console.log(num);
    let c = 2;
function guessfunction(){
    if(c!=-1){
        var inputNum = Number(document.querySelector('input').value);
        if(!inputNum){
        result.innerHTML = "Please enter a number"
        } else{
            chances.innerHTML=c--;
            if (inputNum == num) {
                result.innerHTML= "You guessed correctly";
                ans.innerHTML=num;
                document.getElementById('gif').classList.remove('hidden');
                setTimeout(closeImage, 2000);
            } else if (inputNum > num) {
                result.innerHTML="Too high"
            } else if (inputNum < num) {
                result.innerHTML="Too low" 
            } 
        }
    } else{
        document.getElementById('gif2').classList.remove('hidden2');
        setTimeout(closeImage, 2000);
        return ans.innerHTML=num;}
};

button.addEventListener('click', guessfunction);
function closeImage(){
    document.getElementById('gif').style.display='none';
    document.getElementById('gif2').style.display='none';
}
document.addEventListener('keydown', function(e){
    if(e.key==='Enter') guessfunction()
});
