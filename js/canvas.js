var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext('2d');
var keys=[];
var width,height,speed;
width=500;
height=500;
speed=3;
var score = 0;
var gameState="menu";

var messiAnime = new Image();	
messiAnime.src='img/messiAnime.png';

var ball = new Image();
ball.src="img/ball.png"


var player = {


	x:10,
	y:10,
	width:80,
	height:80
	
	
};


var cube ={

	x:Math.random()*(width-20),
	y:Math.random()*(width-20),
	width:30,
	height:30
};

window.addEventListener("keydown",function(e){

	keys[e.keyCode]=true;
},false);

window.addEventListener("keyup",function(e){

	delete keys[e.keyCode];
},false);


function game(){

	update();
	render();
	gameOver();
	

}

function render(){


	if(gameState === "play"){
	
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle="red";
	
	/*ctx.fillRect(player.x,player.y,player.width,player.height);*/
	ctx.drawImage(messiAnime,player.x,player.y,player.width,player.height);
	

	ctx.fillStyle="yellow";
	/*ctx.fillRect(cube.x,cube.y,cube.width,cube.height);*/
	ctx.drawImage(ball,cube.x,cube.y,cube.width,cube.height);

	ctx.fillStyle="white";
	ctx.font="bold 20px helvetica";
	ctx.fillText("Score : "+score,200,23);

	}


	if(gameState === "menu"){

		
		ctx.clearRect(0,0,width,height);
	  	ctx.font = "bold 50px consolas";
        ctx.fillStyle = "white";
        ctx.fillText("Collect Coins", width/2-180, height/2);
        ctx.font = "bold 30px consolas";
        ctx.fillText("Press Space", width/2-90, height/2+30);
        
        if(keys[32]) gameState = "play";
	}



}

function process(){

	score++;
	cube.x=Math.random()*(width-20);
	cube.y=Math.random()*(width-20);
	var audioCoin = new Audio('audio/coin.mp3');
	audioCoin.play();
}

function collision(first,second){



	return !(first.x>second.x+second.width ||
		first.x+first.width<second.x||
		first.y>second.y+second.height||
		first.y+first.height<second.y);
}

function update(){


	if(keys[38]) 
	player.y-=speed;
	
	if(keys[40]) player.y+=speed;
	if(keys[37]) player.x-=speed;
	if(keys[39]) player.x+=speed;

	if (player.x<0)player.x=0;
	if (player.x>1280)player.x=1280;
	if (player.y<0)player.x=0;
	if (player.y>580)player.x=580;

	if(collision(player,cube)) process();


}

 var startTime;

 function gameOver(){
    var elapsed = parseInt((new Date() - startTime) / 1000);
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.font="20px Verdana"
        // draw the running time at half opacity
       // ctx.globalAlpha= 0.50;
        ctx.fillText(elapsed+" secs",canvas.width-90,21);
        ctx.restore();

        if (elapsed> 30){
        	 /* ctx.save();*/
ctx.clearRect(0, 0, canvas.width, canvas.height);
     	  
ctx.font = "20px Arial";
        ctx.fillStyle = "Black";
        ctx.fillText("Your score is"+ score,20,100);
       //alert("Your score is"+score);
       /*clearInterval(render);*/



        }

         if (elapsed> 30 && score<=18){
        	 /* ctx.save();*/
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
     	ctx.font = "20px Arial";
        ctx.fillStyle = "Black";
        ctx.fillText("Score de "+ score+" Niveau amateur",50,100);
       /*clearInterval(render);*/
      /* document.getElementById('song').stop();*/




        }

        if (elapsed> 30 && score>18){
        	 /* ctx.save();*/

	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    ctx.fillStyle = "White";
    ctx.fillText("Score de " + score+" Niveau professionnel",20,100);
       /*clearInterval(render);*/



        }


        		/*var audioPlay = new Audio('audio/musicGame.mp3');
				audioPlay.play();*/
 
    }

  /*function drawFinalScore() {
        // set the final score just once
        if (new Date() == 5) {
            score = score;

           ctx.clearRect(0,0,width,height);
        }
       
    }*/
  
setInterval(function(){

	game();
},1000/60)

 startTime = new Date();




