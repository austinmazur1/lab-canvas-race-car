const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

class Car {
  constructor(ctx, image) {
    this.x = 225;
    this.y = 550;
    this.width = 60;
    this.height = 120;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = image;
    this.speed = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveRight() {
    const maxRight = canvas.width - 110;
    this.x = Math.min(this.x + 1, maxRight);
    this.speed = 0;
  }

  moveLeft() {
    const maxLeft = 60;
    this.x = Math.max(this.x - 1, maxLeft);
    this.speed = 0;
  }
}

class Obstacle {
  constructor(ctx) {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.width = 200;
    this.height = 20;
    this.ctx = ctx;
    this.color = "red";
  }
  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveDown() {
    this.y += 1;
  }
}

const car = new Car(ctx, "./images/car.png");
console.log(car);
const obstacles = [];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    console.log("hi");
    console.log(car.draw());
  };

  ctx.clearRect(200, 200, 100, 100);
  const rectangle = {
    x: canvas.width,
    y: canvas.height,
    width: 50,
    height: 50,
    color: "green",
  };

  let counter = 0;

  function startGame() {
    intervalId = setInterval(() => {
      clearCanv();

      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //grey ontop
      ctx.fillStyle = "grey";
      ctx.fillRect(50, 0, 400, canvas.height);
      //the two main white lines
      ctx.fillStyle = "white";
      ctx.fillRect(60, 0, 12, canvas.height);
      ctx.fillRect(430, 0, 12, canvas.height);
      // the middle white lines
      ctx.fillRect(250, 0, 12, canvas.height / 20);
      ctx.fillRect(250, 60, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 2, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 3, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 4, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 5, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 6, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 7, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 8, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 9, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 10, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 11, 12, canvas.height / 20);
      ctx.fillRect(250, 60 * 12, 12, canvas.height / 20);

      
      counter++;
      car.draw();
      arrowKeys();

      if (counter % 1000 === 0) {
        const obst = new Obstacle(ctx);
        obstacles.push(obst);
      }

      obstacles.forEach((el) => {
        el.draw();
        el.moveDown();
        if (el.y > canvas.height) {
          obstacles.shift();
        }
        if (el.x < car.x + car.width && 
          el.x + el.width > car.x &&
          el.y < car.y + car.height &&
          el.height + el.y > car.y) {
            console.log("accident");
            endGame();
          }
      });



      // console.log(counter);
      // console.log(speed);
    }, 1000 / 65);

    //background green
  }
};

function arrowKeys() {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowLeft":
        // console.log("left");
        car.moveLeft();
        counter = 0;
        break;
      case "ArrowRight":
        car.moveRight();
        break;
    }
  });
}

function clearCanv() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function endGame() {
  clearInterval(intervalId);
  clearCanv();
  ctx.fillText("Game Over", 10, 50);
}
