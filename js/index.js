window.onload = () => {
  document.getElementById('game-board' ).style.backgroundImage = "url('./images/road.png')";
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};



// let canvas = document.querySelector('canvas');

// canvas.width =window.innerWidth;
// canvas.height=window.innerHeight;

// let ctx = canvas.getContext('2d');

// //    x,   y,   w,    h

// ctx.fillStyle = "green";
// ctx.fillRect(100, 0, 50, 200)