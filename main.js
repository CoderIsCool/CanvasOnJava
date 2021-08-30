canvas = document.getElementById("Draw");
ctx=canvas.getContext('2d');

color = "lightpink";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("write").value;
    console.log(color);

    ax = e.clientX - canvas.offsetLeft;
    ay = e.clientY - canvas.offsetTop;

    console.log("X = "+ax+" and Y = "+ay);
    circle(ax,ay);
}
function circle(ax,ay)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(ax, ay, 40,0,2*Math.PI);
    ctx.stroke();   
}
function press()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}