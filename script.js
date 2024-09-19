let inputDir = {x:0 , y:0}
const foodsound = new Audio('food.mp3');
const gameover = new Audio('game_over.mp3');
const movesound =new Audio('snake_music.mp3');
let  speed = 5;
let  score  =0;
let lastpainttime = 0;
let snakearr = [{x:13 , y:15} ]

 let food = {x:6  , y:5}

// gamme functions
function main(ctime){
    window.requestAnimationFrame(main)
    // console.log(ctime)
if((ctime-lastpainttime)/1000 < 1/speed)
return;
lastpainttime = ctime;
gameEngine()
}



function iscollide(snake){
// if  you bumb into yourself 
for(let i =1  ; i <snakearr.length ; i++){
if(snake[i].x  === snake[0].x  && snake[i].y  === snake[0].y ){
    return true;
}
}
// if you bumb into the wall
if(snake[0].x >=18   || snake[0].x <= 0  && snake[0].y >=18    || snake[0].y <= 0){
return true;

}


}
function gameEngine(){
// 1 update the snake array

if(iscollide(snakearr)){
    gameover.play();
    musicsound.pause();
    inputDir = {x:0 , y:0}
    alert('game over press any  key  to play again');
    snakearr = [{x:13 , y:15} ]
    musicsound.play();
    score = 0;


}
// if  you have eaten the food increase the sconre and regenerate thee food 
if(snakearr[0].y === food.y && snakearr[0].x ===food.x){
    snakearr.unshift({x:snakearr[0].x + inputDir.x , y:snakearr[0].y +inputDir.y});
    let a  = 2;
    let b = 16;

    food = {x:Math.round(a + (b-a)* Math.random()) , y:Math.round(a + (b-a)* Math.random())}
    foodsound.play();
}

//  moving the snake 

for(let i = snakearr.length -2  ; i>=0 ; i--){

snakearr[i+1] = {...snakearr[i]};

}

snakearr[0].x  += inputDir.x;
snakearr[0].y  += inputDir.y;

//  display the snake 

board.innerHTML = "";
snakearr.forEach((e,index)=>{
    snakeElement =document.createElement('div');
    snakeElement.style.gridRowStart =    e.y;

snakeElement.style.gridColumnStart = e.x;
if(index  == 0){
    snakeElement.classList.add('head')
}
else
snakeElement.classList.add('snake')
board.appendChild(snakeElement);

})

// displaying the food 

foodElement =document.createElement('div');
foodElement.style.gridRowStart =    food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);


}







window.requestAnimationFrame(main)
window.addEventListener('keydown' , e=>{
    inputDir = {x:0 , y:1}; /// start  the  game;;
    movesound.play();
      switch(e.key){
    case 'ArrowUp':
            inputDir.y = -1;
            inputDir.x = 0;
            break;

    case 'ArrowDown':
            inputDir.y = 1;
            inputDir.x = 0;
            break;    
    case 'ArrowLeft':
         inputDir.y = 0;
         inputDir.x = -1;
          break;    
    
    case 'ArrowRight':
        inputDir.y = 0; 
        inputDir.x = 1;       
         break;    

    default :
         break;


      }











})



















