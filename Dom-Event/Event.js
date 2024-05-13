function display(){
    window.alert("hello ");
}
// window.onload= function(){
//     console.log('dom is Ready');
// };
let x=document.getElementById("food");
x.onclick=function(){
    x.innerHTML="pizza";
    x.style.color="red";
    x.style.fontSize="50px";
}
document.getElementById("mybtn").onclick=changeBackground;
document.getElementById("mybtn2").onclick=removeBackground;

function changeBackground(){
    document.querySelector('body').style.backgroundImage='url("yy.jpeg")';
    document.querySelector('body').style.backgroundSize="cover";
    console.log("change background");

}
function removeBackground(){
    document.querySelector('body').style.backgroundImage="none";
    console.log("remove background");

}
function removeLetterFromH1(){
    var h1=document.querySelector('h1')
    h1.textContent=h1.textContent.slice(0,-1);
}
function mOver(obj){
    obj.innerHTML="get of me !"
}
function mOut(obj){
    obj.innerHTML="thank you"
}
function print(){
    var y=document.getElementById("word").Value;
  
    document.getElementById("demo").innerHTML=+y;

}
