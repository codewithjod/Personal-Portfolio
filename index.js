let button = document.querySelector(".submission");
let submit = document.getElementById("button");
let cut = document.querySelector(".second");

submit.addEventListener("click", FUNCBUTTON);

function FUNCBUTTON(){

 button.style.visibility ='visible';



}
cut.addEventListener("click", cutfunc);


function cutfunc(){

    button.style.visibility ='hidden';
}