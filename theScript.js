let BloodBank = document.getElementById('BloodBank');
let Chemistry = document.getElementById('Chemistry');
let Micro = document.getElementById('Micro');
let Phleb = document.getElementById('Phleb');
let Heme = document.getElementById('Heme');

function hoverChange(event){
    event.target.style.backgroundColor = 'white';
}
function revertToNormal(event){
    event.target.style.backgroundColor = '';
}

BloodBank.addEventListener('mouseover',hoverChange);
BloodBank.addEventListener('mouseout',revertToNormal);
Chemistry.addEventListener('mouseover',hoverChange);
Chemistry.addEventListener('mouseout',revertToNormal);
Micro.addEventListener('mouseover',hoverChange);
Micro.addEventListener('mouseout',revertToNormal);
Phleb.addEventListener('mouseover',hoverChange);
Phleb.addEventListener('mouseout',revertToNormal);
Heme.addEventListener('mouseover',hoverChange);
Heme.addEventListener('mouseout',revertToNormal);