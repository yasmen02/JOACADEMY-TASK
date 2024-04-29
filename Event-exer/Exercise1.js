// Exercise (1)
var div=document.getElementById("demo");

div.onmouseover=function(){
    div.innerHTML="Can I help you?";
}
div.onmouseout=function(){
    div.innerHTML="hello world !";
}
// Exercise (2)(A)

// var color=["blue","red","green"]
// var div2=document.getElementById("box");
// div2.style.background="blue";
//  let index=0;
//  div2.addEventListener("click",function(){
//     div2.style.background=color[index];
//     index = (index + 1) % color.length;

//  });
// Exercise (2)(B)
// const randomIndex = Math.floor(Math.random() * color.length);
// div2.style.backgroundColor = color[randomIndex];
// let currentColorIndex = randomIndex;

// div2.addEventListener('click', function() {
//     currentColorIndex = (currentColorIndex + 1) % color.length;
//    div2.style.backgroundColor = color[currentColorIndex];
// });

// Exercise (3)
// var
// div3=document.getElementById("div3");
// currency =document.getElementById("currency");
// currency.onchange=function(){ 
//     "use strict";
//    if(seleced="one"){
//   document.querySelector("body").style.backgroundImage='url(jordan.jpg)';}
//    else{
//     document.querySelector("body").style.backgroundImage='url(palestine.jpg)';}

//    };
let selectElement = document.getElementById("select");
        let imageElement = document.getElementById("img");
        selectElement.addEventListener("change", function() {
            let selectedOption = selectElement.options[selectElement.selectedIndex];
            if (selectedOption.value !== "") {
                imageElement.src = selectedOption.value;
                imageElement.alt = selectedOption.text;
                imageElement.style.display = "flex";
            } else {
                imageElement.style.display = "none";
            }
        });
        
// Exercise (4)

    let boldCheckbox = document.getElementById('bold-checkbox');
    let underlineCheckbox = document.getElementById('underline-checkbox');
    let italicCheckbox = document.getElementById('italic-checkbox');
    let fontSizeSelect = document.getElementById('font-size-select');
    let fontFamilySelect = document.getElementById('font-family-select');
    let textBox = document.getElementById('text-box');

    boldCheckbox.addEventListener('change', updateText);
    underlineCheckbox.addEventListener('change', updateText);
    italicCheckbox.addEventListener('change', updateText);
    fontSizeSelect.addEventListener('change', updateText);
    fontFamilySelect.addEventListener('change', updateText);

    function updateText() {
        let styles = '';
        //if (boldCheckbox.checked) styles += 'font-weight: bold;';
        if (boldCheckbox.checked) styles += 'font-weight: bold;';
        if (underlineCheckbox.checked) styles += 'text-decoration: underline;';
        if (italicCheckbox.checked) styles += 'font-style: italic;';
        let fontSize = fontSizeSelect.value;
        let fontFamily = fontFamilySelect.value;
        textBox.style.cssText = `${styles} font-size: ${fontSize}; font-family: ${fontFamily}`;
    }
// Exercise (5)
    
