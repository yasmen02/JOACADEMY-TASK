// Exercise (1)
var div=document.getElementById("demo");

div.onmouseover=function(){
    div.innerHTML="Can I help you?";
}
div.onmouseout=function(){
    div.innerHTML="hello world !";
}
