let divEl=document.getElementsByClassName("div1")
let addEl=document.getElementById("add")
let div2El=document.querySelector(".div")
let addcolorEl=document.getElementById("ADDCOLOR")
let letters="0123456789ABCDEF"
var color="#"
function random(){
for( var i=0;i<divEl.length;i++){
for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}

divEl[i].innerText=color
divEl[i].style.backgroundColor=color
 color="#"
}}
addEl.addEventListener("click",function(){
    const newDiv=document.createElement("div2")
    newDiv.classList.add("div1")
    div2El.appendChild(newDiv)
    newDiv.innerText=color
    newDiv.style.backgroundColor=color
    random()
})
random()