let BloodBank = document.getElementById('BloodBank');
let Chemistry = document.getElementById('Chemistry');
let Micro = document.getElementById('Micro');
let Phleb = document.getElementById('Phleb');
let Heme = document.getElementById('Heme');

function hoverChangeBB(){
    BloodBank.style.backgroundColor = 'white';
}
function revertToNormalBB(){
    BloodBank.style.backgroundColor = 'darkred';
}
function hoverChangeC(){
    Chemistry.style.backgroundColor = 'white';
}
function revertToNormalC(){
    Chemistry.style.backgroundColor = 'goldenrod';
}
function hoverChangeM(){
    Micro.style.backgroundColor = 'white';
}
function revertToNormalM(){
    Micro.style.backgroundColor = 'darkgreen';
}
function hoverChangeP(){
    Phleb.style.backgroundColor = 'white';
}
function revertToNormalP(){
    Phleb.style.backgroundColor = 'purple';
}
function hoverChangeH(){
    Heme.style.backgroundColor = 'white';
}
function revertToNormalH(){
    Heme.style.backgroundColor = 'lightcoral'
}
BloodBank.addEventListener('mouseover',hoverChangeBB);
BloodBank.addEventListener('mouseout',revertToNormalBB);
Chemistry.addEventListener('mouseover',hoverChangeC);
Chemistry.addEventListener('mouseout',revertToNormalC);
Micro.addEventListener('mouseover',hoverChangeM);
Micro.addEventListener('mouseout',revertToNormalM);
Phleb.addEventListener('mouseover',hoverChangeP);
Phleb.addEventListener('mouseout',revertToNormalP);
Heme.addEventListener('mouseover',hoverChangeH);
Heme.addEventListener('mouseout',revertToNormalH);