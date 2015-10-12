/*Fichier main.js => Lancement du jeu*/

function game(){

	update();
	renderGame();

}

/*Chargement du jeu*/
setInterval(function(){
game();
},1000/60)
