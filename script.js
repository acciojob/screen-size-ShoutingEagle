//your JS code here. If required.
const sizeInfo = document.createElement("div");
sizeInfo.id = "sizeInfo";
// sizeInfo.style.height = "100vh";
// sizeInfo.style.width = "100vw";
document.body.appendChild(sizeInfo);
const h1 = document.createElement("h1");
sizeInfo.appendChild(h1);




var refresh = setInterval(resolution,0);

function resolution (){
    // var screenSize = window.screen;
    h1.textContent = `Width: ${window.screen.width} and Height: ${window.screen.height}`
}
