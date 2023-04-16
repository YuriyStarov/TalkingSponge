import { canvasPuzzles, ctx } from "./canvas.js";
const rows = 3;
const columns = 3;
const pieceWidth = canvasPuzzles.width / columns;
const pieceHeight = canvasPuzzles.height / rows;
const pazzleImg = ["SP_pazzle_1.jpg", "SP_pazzle_2.jpg", "SP_pazzle_3.jpg", "SP_pazzle_4.jpg"];
export const image = new Image();
export let pieces = [];
export function draw() {
    ctx.clearRect(0, 0, canvasPuzzles.width, canvasPuzzles.height);
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        ctx.drawImage(image, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.dx, piece.dy, pieceWidth, pieceHeight);
    }
}
export function setupPices() {
    pieces = [];
    image.src = `./miniPlay/Pazzles_Game/img/${pazzleImg[Math.floor(Math.random() * pazzleImg.length)]}`;
    const original = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const piece = {};
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
            const piece = {};
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
    function shuffle(array) {
        let randomIndex;
        let currentIndex = array.length;
        let test = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const piece = {};
                piece.sx = j * pieceWidth;
                piece.sy = i * pieceHeight;
                piece.dx = j * pieceWidth;
                piece.dy = i * pieceHeight;
                test.push(piece);
            }
        }
        while (0 < currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            array[currentIndex].dx = test[randomIndex].dx;
            array[currentIndex].dy = test[randomIndex].dy;
            test.splice(randomIndex, 1);
        }
        return array;
    }
    let selectedPiece = null;
    canvasPuzzles.addEventListener('mousedown', function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        for (let i = 0; i < pieces.length; i++) {
            const piece = pieces[i];
            if (x > piece.dx &&
                x < piece.dx + pieceWidth &&
                y > piece.dy &&
                y < piece.dy + pieceHeight
                && !piece.flag) {
                selectedPiece = piece;
                break;
            }
        }
    });
    canvasPuzzles.addEventListener('mousemove', function (event) {
        if (selectedPiece !== null) {
            selectedPiece.dx = event.offsetX - pieceWidth / 2;
            selectedPiece.dy = event.offsetY - pieceHeight / 2;
            draw();
        }
    });
    canvasPuzzles.addEventListener('mouseup', function (event) {
        if (selectedPiece !== null) {
            const x = event.offsetX;
            const y = event.offsetY;
            let targetPiece = null;
            let targetIndex = null;
            mark: for (let i = 0; i < pieces.length; i++) {
                if (pieces[i].flag) {
                    continue mark;
                }
                const piece = pieces[i];
                if (x > piece.dx &&
                    x < piece.dx + pieceWidth &&
                    y > piece.dy &&
                    y < piece.dy + pieceHeight) {
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
                let track_1 = selectedPiece.dx >= original[targetIndex].dx - 10 && selectedPiece.dx <= original[targetIndex].dx + 10;
                let track_2 = selectedPiece.dy >= original[targetIndex].dy - 10 && selectedPiece.dy <= original[targetIndex].dy + 10;
                if (track_1 && track_2) {
                    selectedPiece.flag = true;
                    selectedPiece.dx = original[targetIndex].dx;
                    selectedPiece.dy = original[targetIndex].dy;
                    draw();
                }
            }
            selectedPiece = null;
            window.loop();
        }
    });
    image.addEventListener('load', function () {
        draw();
    });
}
