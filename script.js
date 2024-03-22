var timer = 60;
var score =  0;
var hitnum = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}
function makeBubble(){
    var clut="";
    for(var i = 1; i<=102; i++){
        var num = Math.floor(Math.random()*10);
        clut += `<div class="bubble">${num}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clut;
}

function runTimer(){
    var timeint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `
            <h1>Game Over!</h1>
            <h1>Your Score is ${score}</h1>`;
        }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",
function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum===hitnum){
        makeBubble();
        getNewHit();
        increaseScore();
    }
});
runTimer();
makeBubble();
getNewHit();
