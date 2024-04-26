// let mybtn=document.getElementById("btn");
// mybtn.onmouseleave=function () {
//     console.log("clicked");
// }
// //onclick
// //oncontextmenu(click right)
// //onmouseenter
// //onmouseleave
// window.onresize=function(){
//     console.log("scroll");
// }
//onscroll
//onresize
// document.links[0].onmouseenter=function(event){
//     console.log(event);
//     event.preventDefault();
// }
// let one =document.querySelector(".one");
// window.onload =function (){
//    document.links[0].click();
// }
// let two =document.querySelector(".two");
// window.onload =function (){
//     two.focus();
// }
// var mydiv= document.getElementById("div");
// mydiv.onmouseout=function(){
//     "use strict";
//     mydiv.innerHTML="you hovered";
// }
//onmouseover
//onmouseout
//onchange
var
myinput=document.getElementById("input");
mydiv=document.getElementById("div");
mycurrency =document.getElementById("currency")
mycurrency.onchange=function(){
    "use strict";
   mydiv.innerHTML = myinput.value*mycurrency.value;
}
//DOM event handlers
document.getElementById('myButton').addEventListener('click', function() { alert('Button clicked'); }); 
//DOM event attribute
document.getElementById('myButton').onclick = function() { alert('Button clicked'); };