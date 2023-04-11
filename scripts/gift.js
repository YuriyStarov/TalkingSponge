

const counters = {
    countSprite: 0,
    countTime: 0
  };
  
  let canvas = document.getElementById("canvas2");
  
  let ctx = canvas.getContext("2d");
  let widthCtx = canvas.width;
  let heightCtx = canvas.height;
  
  let gift = new Image(2000,200);
  gift.src = "./img/gift_box_sprite.png";
  gift.addEventListener(
    "load",
    ctx.drawImage(gift, 0, 0, 200, 200, 600, 400, 200, 200),
    false
  );
  
  function allGame () {
        if (counters.countTime < 30) {
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        draw();
        counters.countTime += 1;
        requestAnimationFrame(allGame);
      } else {
        cancelAnimationFrame(allPaint);
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        ctx.drawImage(gift, 0, 0, 200, 200, 600, 400, 200, 200);
        counters.countTime = 0;
      }
  };
  
  let allPaint = requestAnimationFrame(allGame);
  
  function draw () {
    ctx.drawImage(gift, counters.countSprite, 0, 200, 200, 600, 400, 200, 200),
    counters.countSprite += 200;
    if (counters.countSprite > 1900) {
        counters.countSprite = 0;
    };
  };
  
    const goSprite = setInterval (() => {
    allGame();
  },2000);