<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style/cssGame.css">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <title></title>
</head>
<body>
	<nav class="header-nav">
    <center><div class="logo clickable"><i class="fa fa-futbol-o"></i> Messi Game</div></center>
  </nav>

  <center><canvas id="canvasGame" height="500" width="500"></canvas></center><!--Declaration Canvas-->
  <script src="js/game.js"></script>
  <script src="js/collision.js"></script>
  <script src="js/main.js"></script>
  <audio id="song"  autoplay loop>

    <source src="audio/mario.mp3" controls>
    </source>

  </audio>

  <center><div id ="footer">K.AUCHOYBUR/W.EL HADI.M2 MIAGE NTDP.2015/2016</div></center>
</body>
</html>