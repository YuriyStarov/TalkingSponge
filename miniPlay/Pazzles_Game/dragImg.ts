
export function moveImg(): void {
    let img: HTMLElement = document.getElementById("myImage") as HTMLElement;
  if (img !== null) {
    img.addEventListener("mousedown", startDrag);
    img.addEventListener("mouseup", endDrag);
    img.addEventListener("mousemove", drag);
    img.ondragstart = () => false;
  }
  
  

  let startX: number | null, startY: number | null, imgX: number, imgY: number;

  function startDrag(e: MouseEvent) {
    startX = e.clientX;
    startY = e.clientY;
    imgX = img.offsetLeft;
    imgY = img.offsetTop;
    
}

function endDrag(e: MouseEvent) {
    startX = null;
    startY = null;
}

function drag(e: MouseEvent) {
    if (startX && startY) {
        let dx = e.clientX - startX;
        let dy = e.clientY - startY;
        img.style.left = (imgX + dx) + "px";
        img.style.top = (imgY + dy) + "px";
    }
}
}

