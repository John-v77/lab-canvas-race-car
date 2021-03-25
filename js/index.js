window.onload = () => {

  const startBtn = document.getElementById('start-button');
  startBtn.onclick = () => {
    startGame();
  };

  function startGame() {

    const canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // canvas.width = 500
    // canvas.height = 700
    const ctx = canvas.getContext('2d')
    let x = 0
    let y = 0
    let id = null
    let score = 0

    // -----------Image Road Bg--------------
    // defines the road as a Image class
    let roadImg = new Image();
    // assign the road a certain image from folder
    roadImg.src = "./images/road.png";
  // draws the car
    let carPic = new Image();
    carPic.src ='./images/car.png'
  }
};




// Changes the values of the road based on the class properties
// let road = {x:0, y:0, w:500, h:700}
// ----------------------------------
// image.onload = function (){
//   ctx.drawImage(roadImg, 0, 0, 500, 700);
// }

// let car ={x:0, y:0, w:50, h:100, img:carImg}


// Class Car --------------------------------------
class Car{

  constructor(x,y,w,h,img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;

  }

  draw(){
    ctx.fillStyle = this.color
    ctx.drawImage(this.x, this.y, this.w, this.h, this.img)

  }
}
//   end of class car ---------------------------


// Class Obstacle --------------------------------
  class Obstacle{
    constructor(x,y,w,h, color){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
    }

    draw(){
      ctx.fillRect (this.x, this.y, this.w, this.h)
    }
  }
// end of class obstacle ---------------------------

//Class Bullet -------------------------------------
  class bullet{
    constructor(x,y,w,h,img){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = h;
    }

    draw(){
      this.y--;
      ctx.drawImage (this.img,this.x, this.y, this.w, this.h)
      for(box of boxes){
        bulletDetection(rect1, recrt2, i)
        {
          if(rea)
        }
      }
    }
    
  }

//Class Bullet -------------------------------------

let porche = new Car(canvas.width/2+50,canvas.height - 100, 50,100, carImg)
let boxObstacle = new Obstacle(100, 100, 200, 300)


window.onload = function (){
  ctx.drawImage(roadImg, 0, 0, 500, 800);
    ctx.drawImage(carImg, 70, 400, 50, 100);
}





let boxObstacle2 = new Obstacle(50,50,50,50,"gold")
let toyota = new Car(canvas.width/2+50,canvas.height - 100, 50,100, carImg)

// list for the boxes
let boxes =[]




// - set interval
setInterval(() =>{
    let box = new Obstacle(canvas.width*Math.random(), 0, 50, 50, "green");
    speedMultiplier = Math.min(speedMultiplier +=0.15, 3);
    // insert box into list boxes
    boxes.push(box);
}, 1000)
// - set interval


window.onkeydown = function(key) {
  switch (key.key) {
    case "ArrowLeft":
      car.x -5;
      break;
    case "ArrowRight":
      car.x += 5;
      break;
    case "ArrowUp":
      car.y -=5;
      break;
    case "ArrowDown":
      car.y +=30;
      break;
  }

}




// Screen is been drawn with instructions
function animate(){

  let gameLoop = requestAnimationFrame(animate)
  console.log('animate1') 
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
  toyota.draw()
  boxObstacle.draw()
}


for(box of boxes){
  box.draw();
}

for(bullet of bullets){

}

// if (rect1.x < rect2.x + rect2.width &&
//   rect1.x + rect1.width > rect2.x &&
//   rect1.y < rect2.y + rect2.height &&
//   rect1.y + rect1.height > rect2.y)