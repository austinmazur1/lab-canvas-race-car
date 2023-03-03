window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(200, 200, 100, 100)

  const rectangle = {
    x: canvas.width,
    y: canvas.height,
    width: 50,
    height: 50,
    color: "green",
  };

  function startGame() {
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "grey"
    ctx.fillRect(50, 0, 400, canvas.height)


    ctx.fillStyle = "white"
    ctx.fillRect(60, 0, 12,  canvas.height)

  
    ctx.fillRect(430, 0, 12,  canvas.height)

  
    ctx.fillRect(250, 0, 12,  canvas.height/20);

    // road markings
    ctx.fillRect(250, 60, 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 2), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 3), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 4), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 5), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 6), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 7), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 8), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 9), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 10), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 11), 12,  canvas.height/20);
    ctx.fillRect(250, (60 * 12), 12,  canvas.height/20);

 

        carImg = new Image();
        carImg.src = "/images/car.png"
        carImg.onload = () => {
          ctx.drawImage(carImg, 225, 550, 60, 120)
        }
      
  }
};
