	/*Fichier game.js*/

	/*Déclaration et positionnment du Joueur*/

	var player = {


		x:20,
		y:20,
		width:50,
		height:50
	};




	/* 1 ballon dans le jeu*/
	var ball ={x:Math.random()*(width-20),y:Math.random()*(width-20),width:30,height:30};
	/*var ball1 ={x:Math.random()*(width-20),y:Math.random()*(width-20),width:30,height:30};*/

	/*4 defenseurs dans le jeu*/

	var defender={x:Math.random()*(width-80),y:Math.random()*(width-80),width:100,height:100}

	var defender1={x:150,y:150,width:60,height:60}

	var defender2={x:200,y:350,width:70,height:70}

	var defender3={x:400,y:350,width:80,height:80}

	var defender4={x:440,y:190,width:50,height:50}

	var defender5={x:480,y:150,width:60,height:60}

	window.addEventListener("keydown",function(e){

		keys[e.keyCode]=true;
	},false);

	window.addEventListener("keyup",function(e){

		delete keys[e.keyCode];
	},false);


	function renderGame(){


		
		if(gameState === "play"){


			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle="red";

			/*ctx.fillRect(player.x,player.y,player.width,player.height);*/
			ctx.drawImage(messiAnime,player.x,player.y,player.width,player.height);


			/*Dessin des images si le gameState = play*/
			ctx.drawImage(ballAnime,ball.x,ball.y,ball.width,ball.height);

			ctx.drawImage(defenderAnime1,defender1.x,defender1.y,defender1.width,defender1.height);

			ctx.drawImage(defenderAnime2,defender2.x,defender2.y,defender2.width,defender2.height);

			ctx.drawImage(defenderAnime3,defender3.x,defender3.y,defender3.width,defender3.height);

			ctx.drawImage(defenderAnime4,defender4.x,defender4.y,defender4.width,defender4.height);

			ctx.drawImage(defenderAnime5,defender5.x,defender5.y,defender5.width,defender5.height);



			/*Tableau de score*/

			ctx.fillStyle="white";
			ctx.font="bold 20px helvetica";
			ctx.fillText("Vies: "+score,200,23);


		}


		if(gameState === "menu"){

			ctx.save();
			ctx.clearRect(0,0,width,height);
			clearInterval(game);

			ctx.font = "bold 12px Segoe UI";
			ctx.fillStyle = "white";
			ctx.fillText("Made by K.AUCHOYBUR et W.EL HADI", 140,20);

			ctx.font = "bold 12px Segoe UI";
			ctx.fillStyle = "white";
			ctx.fillText("MIAGE TEAM", 210,40);

			ctx.font = "bold 50px consolas";
			ctx.fillStyle = "black";
			ctx.drawImage(messiAnime,10,198);
			ctx.fillText("Messi Game", 115,250);

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
			ctx.fillText("Attention ! Une vie en moins si vous touchez un défenseur", 90,434);

			ctx.drawImage(coeurIcon,25,460);
			ctx.font = "bold 12px Segoe UI";
			ctx.fillText("Disposez de 5 vies pour commencer", 90,470);



			if(keys[32]) gameState = "play";

		}

	/*Game Over Function*/
		if (score<=0) {

			ctx.save();
			ctx.clearRect(0,0,width,height);
			clearInterval(game);
			ctx.font = "bold 50px consolas";
			ctx.fillStyle = "black";
			ctx.fillText("Game Over", 115, 250);
			ctx.font = "bold 30px consolas";


			if(keys[32]) gameState = "play";
			/* console.log('pressSpace');*/

		}




	}



	 /*Chargement des images du canvas*/

	    /*Image de Messi*/
	    var messiAnime = new Image();	
	    messiAnime.src='img/messiAnime.png'

	    /*Image du ballon*/
	    var ballAnime = new Image();
	    ballAnime.src="img/ball.png"

	    /*Image des 5 defenseurs*/
	    var defenderAnime1 = new Image();
	    defenderAnime1.src ="img/mertasac.png"

	    var defenderAnime2 = new Image();
	    defenderAnime2.src ="img/vanbuyten.png"

	    var defenderAnime3 = new Image();
	    defenderAnime3.src ="img/marcelo.png"

	    var defenderAnime4 = new Image();
	    defenderAnime4.src ="img/ramos.png"

	    var defenderAnime5 = new Image();
	    defenderAnime5.src ="img/dluiz.png"

	    /*Image icon menu*/
	    var bombIcon = new Image();
	    bombIcon.src="img/bombIcon.png"


	    var touches = new Image();
	    touches.src="img/touches.png"

	    var coeurIcon = new Image();
	    coeurIcon.src="img/coeur.png"


	    /*Init Canvas*/
	    var canvas = document.getElementById('canvasGame');/*Recup du canvas*/
	    var ctx = canvas.getContext('2d');
	    var keys=[]; /*Keys pour direction du joueur*/
		var width,height,speed;//Taille Canvas
		width=500;
		height=500;
		speed=5;/*Vitesse du joueur principal*/
		var score = 7;/*Score initial*/
		var gameState="menu";/*Etat du jeu par defaut*/







