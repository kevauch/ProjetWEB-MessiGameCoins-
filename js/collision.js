/*Fichier collision.js : Gère la collision entre objets*/

/*Fonction du processBall->Incrementation du score+son+Math.random pr placement aléatoire du ballon*/
function processBall(){

	score++;

	ball.x=Math.random()*(width-100);
	ball.y=Math.random()*(width-100);
	
	/*ball1.x=Math.random()*(width-20);
	ball1.y=Math.random()*(width-20);*/
	var audioCoin = new Audio('audio/coin.wav');
	audioCoin.play();
}

/*Fonction du processDefender->Decrementation du score (--)+son+Math.random pr placement aléatoire du def*/
function processDefender(){

	score=score-3;
	
	defender.x=Math.random()*(width-50);
	defender.y=Math.random()*(width-50);

	defender1.x=Math.random()*(width-50);
	defender1.y=Math.random()*(width-50);

	defender2.x=Math.random()*(width-50);
	defender2.y=Math.random()*(width-50);

	defender3.x=Math.random()*(width-50);
	defender3.y=Math.random()*(width-50);

	defender4.x=Math.random()*(width-50);
	defender4.y=Math.random()*(width-50);

	defender5.x=Math.random()*(width-50);
	defender5.y=Math.random()*(width-50);

	
	var audioBomb = new Audio('audio/bomb.mp3');
	audioBomb.play();
}

function collision(first,second){



	return !(first.x>second.x+second.width ||
		first.x+first.width<second.x||
		first.y>second.y+second.height||
		first.y+first.height<second.y);
}

function update(){

/*Direction du joueur*/

	if(keys[38]) 
	player.y-=speed;
	
	if(keys[40]) player.y+=speed;
	if(keys[37]) player.x-=speed;
	if(keys[39]) player.x+=speed;

	if (player.x<0)player.x=0;
	if (player.x>500)player.x=500;
	if (player.y<0)player.x=0;
	if (player.y>500)player.x=500;

/*Test de collision*/
	if(collision(player,ball)) processBall();

	
	if(collision(player,defender)) processDefender();
	if(collision(player,defender1)) processDefender();
	if(collision(player,defender2)) processDefender();
	if(collision(player,defender3)) processDefender();
	if(collision(player,defender4)) processDefender();

	if(collision(player,defender5)) processDefender();



}
