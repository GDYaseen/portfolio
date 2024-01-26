let circle = document.getElementById("mouseFollowerCircle")
let dot = document.getElementById("mouseFollowerDot")
let highlights = document.querySelectorAll(".highlight")

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let speed = 0.1; // Adjust for faster or slower movement

document.addEventListener("mousemove",(e)=>{
    targetX = e.pageX;
    targetY = e.pageY - window.scrollY;

    dot.style.top=  targetY-2+"px";
    dot.style.left= targetX-2+"px";
   
    circle.style.top=  targetY-26+"px";
    circle.style.left= targetX-26+"px";

    for(let highlight of highlights){
        const textRect = highlight.getBoundingClientRect();
        const bgPosX = targetX - textRect.left - (dot.offsetWidth / 2);
        const bgPosY = targetY - textRect.top - (dot.offsetHeight / 2);
        highlight.style.background = `radial-gradient(circle at ${bgPosX}px ${bgPosY}px, white 50px,transparent 100px),#8F9098`;
        highlight.style.backgroundClip="text";
        highlight.style.webkitBackgroundClip="text"
    }
})
function updateCirclePosition() {
    // Interpolate the position
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    // Update circle position
    circle.style.left = currentX -26+ "px";
    circle.style.top = currentY -26+ "px";

    requestAnimationFrame(updateCirclePosition);
}

requestAnimationFrame(updateCirclePosition);

var container = document.getElementById('container');
var container2 = document.getElementById('Experience');
var menuInput = document.getElementById('menuInput');
const menu = document.getElementById('menu');
window.addEventListener('scroll', function() {
    if(window.scrollY>70){
        container.style.transform = "translateY(0px)";
        container.style.opacity=1;
        if(window.scrollY>370){
            container2.style.transform = "translateY(0px)";
            container2.style.opacity=1;
        }else{
            container2.style.transform = "translateY(100px)";
            container2.style.opacity=0;
        }
    }else{
        container.style.transform = "translateY(100px)";
        container.style.opacity=0;
    }
    menuInput.checked?menu.style.transform = 'translateY(' + window.scrollY + 'px)':null;

});