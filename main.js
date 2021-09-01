var mouse_event = "empty";
var last_position_X, last_position_Y;

canvas = document.getElementById("Draw");
ctx = canvas.getContext("2d");

var color = "pink";
width_line = 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("write").value;
width_line = document.getElementById("paint").value;

mouse_event = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    X = e.clientX - canvas.offsetLeft;
    Y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        console.log("last position of X and Y cordinate = ");
        console.log("X = "+last_position_X+" Y = "+last_position_Y);
        ctx.moveTo(last_position_X, last_position_Y);
        console.log("current position of X and Y cordinate = ");
        console.log("X = "+X+" Y = "+Y);
        ctx.lineTo(X, Y);
        ctx.stroke();

    }
    last_position_X = X;
    last_position_Y = Y;
}
function press()
{
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
