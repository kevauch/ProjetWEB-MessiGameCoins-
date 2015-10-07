var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext('2d');
var keys=[];
var width,height,speed;
width=500;
height=500;
speed=10;
var score = 5;
var gameState="menu";


var messiAnime = new Image();	
messiAnime.src='img/messiAnime.png';

var ballAnime = new Image();
ballAnime.src="img/ball.png"

var bombAnime = new Image();
bombAnime.src ="img/bomb.png"

var bombIcon = new Image();
bombIcon.src="img/bombIcon.png"


var touches = new Image();
touches.src="img/touches.png"

var coeurIcon = new Image();
coeurIcon.src="img/coeur.png"



var player = {


	x:10,
	y:10,
	width:80,
	height:80
	
	
};


var ball ={

	x:Math.random()*(width-20),
	y:Math.random()*(width-20),
	width:30,
	height:30
};

/*7 Bombes dans le jeu*/

var bomb={

	x:Math.random()*(width-40),
	y:Math.random()*(width-40),
	width:30,
	height:30


}

var bomb1={

	x:150,
	y:150,
	width:30,
	height:30

}

var bomb2={

	x:200,
	y:350,
	width:30,
	height:30

}

var bomb3={

	x:400,
	y:350,
	width:30,
	height:30

}

var bomb4={

	x:440,
	y:190,
	width:30,
	height:30

}

var bomb5={

	x:100,
	y:350,
	width:30,
	height:30

}

var bomb6={

	x:80,
	y:120,
	width:30,
	height:30

}

var bomb7={

	x:130,
	y:240,
	width:30,
	height:30

}

var bomb8={

	x:60,
	y:150,
	width:30,
	height:30

}

var bomb9={

	x:300,
	y:200,
	width:30,
	height:30

}

var bomb10={

	x:80,
	y:150,
	width:30,
	height:30

}

window.addEventListener("keydown",function(e){

	keys[e.keyCode]=true;
},false);

window.addEventListener("keyup",function(e){

	delete keys[e.keyCode];
},false);


function game(){

	update();
	render();
	
	

}

function render(){


	if(gameState === "play"){
	
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle="red";
	
	/*ctx.fillRect(player.x,player.y,player.width,player.height);*/
	ctx.drawImage(messiAnime,player.x,player.y,player.width,player.height);
	

	/*ctx.fillStyle="yellow";*/
	/*ctx.fillRect(ball.x,ball.y,ball.width,ball.height);*/
	ctx.drawImage(ballAnime,ball.x,ball.y,ball.width,ball.height);

	ctx.drawImage(bombAnime,bomb.x,bomb.y,bomb.width,bomb.height);


	ctx.drawImage(bombAnime,bomb1.x,bomb1.y,bomb1.width,bomb1.height);
	ctx.drawImage(bombAnime,bomb2.x,bomb2.y,bomb2.width,bomb2.height);
	ctx.drawImage(bombAnime,bomb3.x,bomb3.y,bomb3.width,bomb3.height);
	ctx.drawImage(bombAnime,bomb4.x,bomb4.y,bomb4.width,bomb4.height);
	ctx.drawImage(bombAnime,bomb5.x,bomb5.y,bomb5.width,bomb5.height);
	ctx.drawImage(bombAnime,bomb6.x,bomb6.y,bomb6.width,bomb6.height);
	ctx.drawImage(bombAnime,bomb7.x,bomb7.y,bomb7.width,bomb7.height);
	ctx.drawImage(bombAnime,bomb8.x,bomb8.y,bomb8.width,bomb8.height);
	ctx.drawImage(bombAnime,bomb9.x,bomb9.y,bomb9.width,bomb9.height);
	ctx.drawImage(bombAnime,bomb10.x,bomb10.y,bomb10.width,bomb10.height);

	ctx.fillStyle="white";
	ctx.font="bold 20px helvetica";
	ctx.fillText("Vies: "+score,200,23);

	}


	if(gameState === "menu"){

		ctx.save();
		ctx.clearRect(0,0,width,height);
		clearInterval(game);
	  	ctx.font = "bold 50px consolas";
        ctx.fillStyle = "black";
        ctx.drawImage(messiAnime,10,198);
        ctx.fillText("Messi Ball", 115,250);
        
        ctx.font = "bold 20px Segoe UI";
        ctx.fillText("Appuyez sur Espace pour commencer", 110,290);

        ctx.drawImage(touches,10,340);
        ctx.font = "bold 12px Segoe UI";
        ctx.fillText("Dirigez Leo Messi avec les touches directionnelles", 90,360);


        ctx.drawImage(ballAnime,20,377);
        ctx.font = "bold 12px Segoe UI";
        ctx.fillText("Gagnez des vies en collectant les ballons", 90,400);

        ctx.drawImage(bombIcon,20,417);
        ctx.font = "bold 12px Segoe UI";
        ctx.fillText("Attention ! Une vie en moins si vous touchez une bombe", 90,434);

          ctx.drawImage(coeurIcon,25,460);
        ctx.font = "bold 12px Segoe UI";
        ctx.fillText("Disposez de 5 vies pour commencer", 90,470);
        
        
        if(keys[32]) gameState = "play";

	}

   if (score<=0) {

		ctx.save();
		ctx.clearRect(0,0,width,height);
		clearInterval(game);
	  	ctx.font = "bold 50px consolas";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over", 115, 250);
        ctx.font = "bold 30px consolas";
       
        
        if(keys[32]) gameState = "play";
        }




}

function processBall(){

	score++;

	ball.x=Math.random()*(width-20);
	ball.y=Math.random()*(width-20);
	var audioCoin = new Audio('audio/coin.mp3');
	audioCoin.play();
}

function processBomb(){

	score --;
	
	bomb.x=Math.random()*(width-20);
	bomb.y=Math.random()*(width-20);

	bomb1.x=Math.random()*(width+20);
	bomb1.y=Math.random()*(width+20);

	bomb2.x=Math.random()*(width+20);
	bomb2.y=Math.random()*(width+20);

	bomb3.x=Math.random()*(width+20);
	bomb3.y=Math.random()*(width+20);

	bomb4.x=Math.random()*(width+20);
	bomb4.y=Math.random()*(width+20);

	bomb5.x=Math.random()*(width+20);
	bomb5.y=Math.random()*(width+20);


	bomb6.x=Math.random()*(width+20);
	bomb6.y=Math.random()*(width+20);

	bomb7.x=Math.random()*(width+20);
	bomb7.y=Math.random()*(width+20);


	bomb8.x=Math.random()*(width+20);
	bomb8.y=Math.random()*(width+20);

	bomb9.x=Math.random()*(width+20);
	bomb9.y=Math.random()*(width+20);

	bomb10.x=Math.random()*(width+20);
	bomb10.y=Math.random()*(width+20);

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

	if(collision(player,ball)) processBall();
	
	if(collision(player,bomb)) processBomb();
	if(collision(player,bomb1)) processBomb();
	if(collision(player,bomb2)) processBomb();
	if(collision(player,bomb3)) processBomb();
	if(collision(player,bomb4)) processBomb();
	if(collision(player,bomb5)) processBomb();
	if(collision(player,bomb6)) processBomb();
	if(collision(player,bomb7)) processBomb();
	if(collision(player,bomb8)) processBomb();
	if(collision(player,bomb9)) processBomb();
	if(collision(player,bomb10)) processBomb();


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





