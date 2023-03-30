export function moveImg() {
    let img = document.getElementById("myImage");
    if (img !== null) {
        img.addEventListener("mousedown", startDrag);
        img.addEventListener("mouseup", endDrag);
        img.addEventListener("mousemove", drag);
        img.ondragstart = () => false;
    }
    let startX, startY, imgX, imgY;
    function startDrag(e) {
        startX = e.clientX;
        startY = e.clientY;
        imgX = img.offsetLeft;
        imgY = img.offsetTop;
    }
    function endDrag(e) {
        startX = null;
        startY = null;
    }
    function drag(e) {
        if (startX && startY) {
            let dx = e.clientX - startX;
            let dy = e.clientY - startY;
            img.style.left = (imgX + dx) + "px";
            img.style.top = (imgY + dy) + "px";
        }
    }
}
