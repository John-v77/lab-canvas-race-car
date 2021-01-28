let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")


// -----------Road Bg--------------
// defines the road as a Image class
let roadImg = new Image();

// assign the road a certain image from folder
roadImg.src = "./images/road.png";

// Changes the values of the road based on the class properties
let road = {x:0, y:0, w:500, h:700}
// ----------------------------------
// image.onload = function (){
//   ctx.drawImage(roadImg, 0, 0, 500, 700);
// }


// draws the car
let carImg = new Image();
carImg.src = "./images/car.png";
let car ={x:0, y:0, w:100, h:200, img:carImg}




window.onload = function (){
  ctx.drawImage(roadImg, 0, 0, 500, 800);
    ctx.drawImage(carImg, 0, 0, 50, 100);
}


// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };



// let roadImg = new Image();
// roadImg.src = "./images/road.png";
// let road = {x:0, y:0, w:450,h:600, img:roadImg};



function animate(){
  console.log('animate1')
  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)

  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)

}

// ctx.clearRect(0,0,canvas.width,canvas.)


// let canvas = document.querySelector('canvas');

// canvas.width =window.innerWidth;
// canvas.height=window.innerHeight;

// let ctx = canvas.getContext('2d');

// //    x,   y,   w,    h

// ctx.fillStyle = "green";
// ctx.fillRect(100, 0, 50, 200)