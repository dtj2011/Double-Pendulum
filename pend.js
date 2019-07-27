const ctx = document.getElementById("canvas").getContext('2d');
const ctx1 = document.getElementById("canvas1").getContext('2d');
document.getElementById("gravText").innerHTML = document.getElementById("gravity").value;
ctx1.translate(400,200);
ctx.translate(400,200);

var x1;  
var y1;  
var x2;  
var y2;  
var r1 = 100;  
var r2 = 100;  
var a1;
var a2; 
var m1 = 10;  
var m2 = 10;  

var prevx2; 
var prevy2; 
var a1_v;
var a2_v;

var gravity;
var framecounter;
var animationID;

document.getElementById("gravity").addEventListener('mousemove', () =>{

    document.getElementById("gravText").innerHTML = document.getElementById("gravity").value;
});
document.getElementById("button").addEventListener('click', () => {
    a1 = ((document.getElementById("angle1").value) / 180) * Math.PI;
    a2 = ((document.getElementById("angle2").value) / 180) * Math.PI;
    gravity = document.getElementById("gravity").value;

    framecounter = 0;
    a1_v = 0;
    a2_v = 0;
    ctx.clearRect(-400,-200,800,600);
    ctx1.clearRect(-400,-200,800,600);
    if(document.getElementById("button").innerHTML == "Animate")
    {
        document.getElementById("button").innerHTML = "Re-Animate";

        animationID = requestAnimationFrame(animate);

    }
    else
    {
        cancelAnimationFrame(animationID);
        return;
    }
  
});


function animate()
{

    requestAnimationFrame(animate);

    ctx.clearRect(-400,-200,800,600);

    animateUpper();

    animateLower();

    drawLines();

    framecounter++;
    console.log(framecounter);

}
function animateUpper(){
    x1 = r1 * Math.sin(a1);
    y1 = r1 * Math.cos(a1);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(0,0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x1,y1,m1,0,2 * Math.PI, false);
    ctx.closePath();  
    ctx.fill();

    let num1 = -gravity * (2 * m1 + m2) * Math.sin(a1);
    let num2 =  -m2 * gravity * Math.sin(a1 - 2 * a2);
    let num3 = -2 * Math.sin(a1 - a2);
    let num4 = m2*(a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2));
    let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));

    let a1_a = (num1 + num2 + num3 * num4) / den; 

    a1_v += a1_a; 

    a1 += a1_v;
    

}
function animateLower()
{
    prevx2 = x2;
    prevy2 = y2;
    x2 =x1 + r2 * Math.sin(a2);
    y2 =y1 + r2 * Math.cos(a2);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.beginPath();
     ctx.fillStyle = "black";
     ctx.arc(x2,y2,m2,0,2 * Math.PI, false);
     ctx.closePath();  
     ctx.fill();

     let num1 = 2 * Math.sin(a1 - a2);

     let num2 = a1_v * a1_v * r1 * (m1 + m2);

     let num3 = gravity * (m1 + m2) * Math.cos(a1);

     let num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);

     let den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));

     let a2_a = (num1 * (num2 + num3 + num4)) / den; 

     a2_v += a2_a; 

     a2 += a2_v;
}

function drawLines(){
    ctx1.beginPath();
    var r;
     var g;
    var b;
    if(framecounter % 30 == 0)
    {
        
         r = Math.random() * 230;
        g =  Math.random() * 230;
        b = Math.random() * 230;
    }
    ctx1.strokeStyle = `rgb(${r},${g},${b})`;
    ctx1.lineWidth = 3;
    ctx1.moveTo(prevx2,prevy2);
    ctx1.lineTo(x2,y2);
    ctx1.stroke();
}
