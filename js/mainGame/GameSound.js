function GameSound() {
  var coin;
  var powerUpAppear;
  var powerUp;
  var marioDie;
  var killEnemy;
  var stageClear;
  var bullet;
  var powerDown;
  var jump;

  var that = this;

  this.init = function() {
    coin = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144639/coin.wav');
    powerUpAppear = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144640/power-up-appear.wav');
    powerUp = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144640/power-up.wav');
    marioDie = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144639/mario-die.wav');
    killEnemy = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144639/kill-enemy.wav');
    stageClear = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144640/stage-clear.wav');
    bullet = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144638/bullet.wav');
    powerDown = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144639/power-down.wav');
    jump = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20240327144639/jump.wav');
  };

  this.play = function(element) {
    if (element == 'coin') {
      coin.pause();
      coin.currentTime = 0;
      coin.play();
    } else if (element == 'powerUpAppear') {
      powerUpAppear.pause();
      powerUpAppear.currentTime = 0;
      powerUpAppear.play();
    } else if (element == 'powerUp') {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
    } else if (element == 'marioDie') {
      marioDie.pause();
      marioDie.currentTime = 0;
      marioDie.play();
    } else if (element == 'killEnemy') {
      killEnemy.pause();
      killEnemy.currentTime = 0;
      killEnemy.play();
    } else if (element == 'stageClear') {
      stageClear.pause();
      stageClear.currentTime = 0;
      stageClear.play();
    } else if (element == 'bullet') {
      bullet.pause();
      bullet.currentTime = 0;
      bullet.play();
    } else if (element == 'powerDown') {
      powerDown.pause();
      powerDown.currentTime = 0;
      powerDown.play();
    } else if (element == 'jump') {
      jump.pause();
      jump.currentTime = 0;
      jump.play();
    }
  };
}
