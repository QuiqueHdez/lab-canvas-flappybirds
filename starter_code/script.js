window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

    var canvas = document.getElementById('campo');
    var ctx = canvas.getContext('2d');
    var canvasSize = {
      w: canvas.width, h: canvas.height}
      var pajaro =new Flappy(ctx,canvasSize)
      Flappy.gravity =  0.1;

    
 
    var fondo = new Image();

    fondo.onload = function() {
      var x = 0;
      var width = fondo.width;
      var min = 0-width;
      var step = 1;
  
      var loop = function() {
        ctx.drawImage(fondo, x, 0);
        ctx.drawImage(fondo, x + width, 0);
        ctx.drawImage(perico, 190, 400+pajaro.y, 60, 60);
       
        x -= step;
        if (x < min) {
          x = 0;
        }
      };
      setInterval(loop, 1000 / 60);
    };
    
    fondo.src = './images/fondo.png';
 
    
    var perico = new Image();
   
    perico.src = './images/flappy.png'

    pajaro.mover();

   
    function update() {
      ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
      Flappy.update();
 
  
 
  }
}
}