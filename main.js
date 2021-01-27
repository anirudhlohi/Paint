var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var new_width = screen.width - 70;
var new_height = screen.height - 200;

color="black";
width_line=1;
var mouseEvent="up";

if (screen.width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
}

document.body.style.overflow = "hidden";

canvas.addEventListener("touchstart" , myTouchstart)

function myTouchstart(e) {
    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    width_line = document.getElementById("width").value;
    
}

canvas.addEventListener("touchmove" , myTouchmove);
function myTouchmove(e) {
    curr_position_X = e.touches[0].clientX - canvas.offsetLeft
    curr_position_Y = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath();
    ctx.lineWidth = width_line;
    ctx.strokeStyle = color;
    ctx.moveTo(last_position_x , last_position_y);
    ctx.lineTo(curr_position_X , curr_position_Y);
    ctx.stroke()
}
canvas.addEventListener("mousedown" , myMousedown)

function myMousedown(e) {
     last_position_x = e.clientX - canvas.offsetLeft;
     last_position_y = e.clientY - canvas.offsetTop;

     color = document.getElementById("color").value;
     width_line = document.getElementById("width").value;

    mouseEvent = "down";
}

canvas.addEventListener("mousemove" , myMouseMove)

function myMouseMove(e) { 
    curr_position_X = e.clientX - canvas.offsetLeft;
    curr_position_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "down") {
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_position_x , last_position_y)
        ctx.lineTo(curr_position_X , curr_position_Y)
        ctx.stroke()
    }
    last_position_x = curr_position_X;
    last_position_y = curr_position_Y;
}

canvas.addEventListener("mouseup" , myMouseUp)
function myMouseUp() {
mouseEvent = "up";
}


function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}


