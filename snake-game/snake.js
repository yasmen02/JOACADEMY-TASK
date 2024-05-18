const playboard =document.querySelector(".playboard");
const scoreElement =document.querySelector(".score");
const highScoreElement =document.querySelector(".high-score");



let gameOver =false;
let foodX ,foodY;
let snakeX=5, snakeY=10;
let snakeBody=[];
let velocityX =0;velocityY =0;
let setIntervalid;
let score=0;
let highScore =localStorage.getItem("high-score") || 0;
highScoreElement.innerText=`Hight Score: ${highScore}`;

 const changeFoodPosition = () =>{
    foodX= Math.floor(Math.random() *30) +1;
    foodY= Math.floor(Math.random() *30) +1;
    

 }
 const handleGameOver = () =>{
    //clearing the timer and reloading the page on game over
    clearInterval(setIntervalid);
    alert("Game over ! press OK to replay ...!");
    location.reload();
 }
 const changeDirction = (e) =>{
 if(e.key === "ArrowUp" && velocityX != 1){
    velocityX=-1;
    velocityY=-0;
 }else if(e.key === "ArrowDown" && velocityX != -1){
    velocityX=1;
    velocityY=0;
 }else if(e.key === "ArrowRight" && velocityY != -1){
    velocityX=0;
    velocityY=1;
 }else if(e.key === "ArrowLeft" && velocityY != 1){
    velocityX=-0;
    velocityY=-1;
 }
 initGame();
 }
const initGame = () => {
    if(gameOver) return handleGameOver();

    let htmlMarkup= `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(snakeX === foodY && snakeY === foodX){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);//pushing food position to snake body array
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText= ` Score: ${score}`;
        highScoreElement.innerText=`Hight Score: ${highScore}`;
    }

    for (let i = snakeBody.length -1; i > 0; i--) {
        snakeBody[i] =snakeBody[i-1];
    }

    snakeBody[0] = [snakeX,snakeY];// setting first element of snake body to current snake position
    //updating the snake head position
    snakeX += velocityX;
    snakeY += velocityY;

    if(snakeX <= 0 || snakeX >30 ||snakeY <= 0 || snakeY >30 ){
        gameOver= true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        //addind div for each part of snake body 
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}"></div>`;
       //checking if the snake head hit the body , if so set gameOver to true
        if( i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    

    playboard.innerHTML = htmlMarkup;
   
}
setIntervalid = setInterval(initGame , 125);
changeFoodPosition();
document.addEventListener("keydown", changeDirction);




