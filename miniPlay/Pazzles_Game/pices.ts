import { canvasPuzzles, ctx } from "./canvas.js";

interface Piece {
    name: string;
    sx: number; 
    sy: number; 
    dx: number; 
    dy: number;
    flag: boolean;
}

const rows = 2;
const columns = 2;

const pazzleImg = ["SP_pazzle_1.jpg", "SP_pazzle_2.jpg", "SP_pazzle_3.jpg", "SP_pazzle_4.jpg"]

const image = new Image();
image.src = `./miniPlay/Pazzles_Game/img/${pazzleImg[Math.floor(Math.random() * pazzleImg.length)]}`;

let myImg = document.querySelector('#myImage') as HTMLImageElement | null;
myImg?.setAttribute('src', image.src);

const pieceWidth = canvasPuzzles.width / columns;
const pieceHeight = canvasPuzzles.height / rows;
const original: Piece[] = [];
  
export let pieces: Piece[] = [];
  
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const piece:  Piece = {} as Piece;
    piece.name = `piece_${i}_${j}`;
    piece.sx = j * pieceWidth; 
    piece.sy = i * pieceHeight; 
    piece.dx = j * pieceWidth; 
    piece.dy = i * pieceHeight; 
    piece.flag = false;
    pieces.push(piece);
    
  }
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const piece:  Piece = {} as Piece;
    piece.name = `piece_${i}_${j}`;
    piece.sx = j * pieceWidth; 
    piece.sy = i * pieceHeight; 
    piece.dx = j * pieceWidth; 
    piece.dy = i * pieceHeight; 
    piece.flag = true;
    
    original.push(piece);
  }
}

pieces = shuffle(pieces);

function shuffle(array: Piece[]) {
  let randomIndex: number;
  let currentIndex: number = array.length;

  let test: Piece[] = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const piece = {} as Piece;
        piece.sx = j * pieceWidth;
        piece.sy = i * pieceHeight;
        piece.dx = j * pieceWidth;
        piece.dy = i * pieceHeight;
        test.push(piece);
    }
  }


  while (0 < currentIndex) {
    randomIndex = Math.floor(Math.random()*currentIndex)
    currentIndex--;
    array[currentIndex].dx = test[randomIndex].dx;
    array[currentIndex].dy = test[randomIndex].dy;
    test.splice(randomIndex,1)
  }

  return array;
}

let selectedPiece: Piece | null = null;

canvasPuzzles.addEventListener('mousedown', function (event: MouseEvent) {
  const x = event.offsetX;
  const y = event.offsetY;

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    if (
      x > piece.dx &&
      x < piece.dx + pieceWidth &&
      y > piece.dy &&
      y < piece.dy + pieceHeight
      && !piece.flag
    ){
      selectedPiece = piece;
      break;
    }  
  }
});

canvasPuzzles.addEventListener('mousemove', function (event: MouseEvent) {
  if (selectedPiece !== null) {
    selectedPiece.dx = event.offsetX - pieceWidth / 2;
    selectedPiece.dy = event.offsetY - pieceHeight / 2;
    draw();
  }
});

canvasPuzzles.addEventListener('mouseup', function (event: MouseEvent) {
  if (selectedPiece !== null) {
    const x = event.offsetX;
    const y = event.offsetY;

    let targetPiece: Piece | null = null;
    let targetIndex: number | null = null;

    mark: for (let i = 0; i < pieces.length; i++) {
      if (pieces[i].flag) {
        continue mark;
      }
      const piece = pieces[i];

      if (
        x > piece.dx &&
        x < piece.dx + pieceWidth &&
        y > piece.dy &&
        y < piece.dy + pieceHeight
      ) {
        targetPiece = piece;
        targetIndex = i;
        break;
      }
    }

    if (targetPiece !== null) {
      const temp = {
        dx: selectedPiece.dx,
        dy: selectedPiece.dy,
      };

      selectedPiece.dx = targetPiece.dx;
      selectedPiece.dy = targetPiece.dy;

      targetPiece.dx = temp.dx;
      targetPiece.dy = temp.dy;
    }

    if (targetIndex !== null && selectedPiece.name === original[targetIndex].name) {
      let track_1: boolean = selectedPiece.dx >= original[targetIndex].dx - 10 && selectedPiece.dx <= original[targetIndex].dx + 10;
      let track_2: boolean = selectedPiece.dy >= original[targetIndex].dy - 10 && selectedPiece.dy <= original[targetIndex].dy + 10;
    if(track_1 && track_2){
      selectedPiece.flag = true;
      selectedPiece.dx = original[targetIndex].dx;
      selectedPiece.dy = original[targetIndex].dy;
      draw();
    }
    }
    selectedPiece = null;
    (window as any).loop();
  }
});

  image.addEventListener('load', function (): void {
    draw();
  });

export function draw(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];

    ctx.drawImage(
        image,
        piece.sx,
        piece.sy,
        pieceWidth,
        pieceHeight,
        piece.dx,
        piece.dy,
        pieceWidth,
        pieceHeight
    );
  }
    
}