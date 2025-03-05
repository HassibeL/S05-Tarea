console.log ('Hass');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log(canvas);
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// const radiusX = 60;
// const radiusY = 60;

    ctx.beginPath();
    ctx.fillStyle = '#E2DDBD';
    ctx.rect(0, 0, 350, 350);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black'
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(100, 100, 70, 70, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#E2DDBD'
    ctx.ellipse(100, 100, 38, 38, 0, 0, Math.PI*2);
    ctx.fill();
/////////////////////////////////////////////////////////////
    function Circle2(ctx, x, y, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.fill();
}
    Circle2(ctx, 245, 100, 70, 'black');
    Circle2(ctx, 245, 100, 55, '#E2DDBD');
    Circle2(ctx, 245, 100, 35, 'black');
    Circle2(ctx, 245, 100, 18, '#E2DDBD');

/////////////////////////////////////////////////////////////
    function drawCircle(ctx, x, y, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.fill();
}
    drawCircle(ctx, 100, 245, 70, 'black');
    drawCircle(ctx, 100, 245, 67, '#E2DDBD');
    drawCircle(ctx, 100, 245, 60, 'black');
    drawCircle(ctx, 100, 245, 57, '#E2DDBD');
    drawCircle(ctx, 100, 245, 50, 'black');
    drawCircle(ctx, 100, 245, 47, '#E2DDBD');
    drawCircle(ctx, 100, 245, 40, 'black');
    drawCircle(ctx, 100, 245, 37, '#E2DDBD');
    drawCircle(ctx, 100, 245, 30, 'black');
    drawCircle(ctx, 100, 245, 27, '#E2DDBD');
    drawCircle(ctx, 100, 245, 20, 'black');
    drawCircle(ctx, 100, 245, 17, '#E2DDBD');
    drawCircle(ctx, 100, 245, 10, 'black');
    drawCircle(ctx, 100, 245, 7, '#E2DDBD');
    drawCircle(ctx, 100, 245, 4, 'black');
    drawCircle(ctx, 100, 245, 2, '#E2DDBD');
    ///////////////////////////////////////////////

    function Circle3(ctx, x, y, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.fill();
}
    Circle3(ctx, 245, 245, 70, 'black');
    Circle3(ctx, 245, 245, 62, '#E2DDBD');
    Circle3(ctx, 245, 245, 52, 'black');
    Circle3(ctx, 245, 245, 42, '#E2DDBD');
    Circle3(ctx, 245, 245, 32, 'black');
    Circle3(ctx, 245, 245, 22, '#E2DDBD');
    Circle3(ctx, 245, 245, 12, 'black');
    Circle3(ctx, 245, 245, 5, '#E2DDBD');

//////////////// SEGUNDO EJERCICIO/////////////////////////
   
//#847B71


/////Fondo/////

ctx.beginPath();
ctx.fillStyle = '#847B71';
ctx.rect(0, 370, 410, 410);
ctx.fill();
////////////////////
ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(55, 475, 41, 41, 0, 0, Math.PI*2);
    ctx.stroke();

    function blackLine1(x, y1, y2, color) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.stroke();
    }
    
    const startX = 14;
    const startY = 382;
    const offsets = [0, 9, 18, 28, 38, 48, 58, 68, 78];
    const endYs = [470, 449, 439, 435, 435, 435, 436, 445, 457];
    
    offsets.forEach((offset, index) => {
        blackLine1(startX + offset, startY, endYs[index], "black");
    });
//////////////////////////////////////////////////
function drawMultipleLines0(xPositions, yStart, yEndValues) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    xPositions.forEach((x, index) => {
        ctx.beginPath();
        ctx.moveTo(x, yStart);
        ctx.lineTo(x, yEndValues[index]);
        ctx.stroke();
    });
}

drawMultipleLines0([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(53, 570, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(53, 725, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

//////////////Columna 02//////////////////
    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(155, 384, 43, 43, 0, 0, Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(155, 477, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(155, 620, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

    function drawMultipleLines1(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x+102, yStart-100);
            ctx.lineTo(x+102, yEndValues[index]-90);
            ctx.stroke();
        });
    }
    
    drawMultipleLines1([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(155, 712, 41, 41, 0, 0, Math.PI*2);
    ctx.stroke();

    function drawMultipleLines2(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x+102, yStart);
            ctx.lineTo(x+102, yEndValues[index]);
            ctx.stroke();
        });
    }

    drawMultipleLines2([14, 23, 32, 42, 52, 62, 72, 82, 92], 770, [724, 740, 747, 750, 752, 752, 748, 742, 725]);


    //////////////////////TERCERA COLUMNA/////////////

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(257, 425, 41, 41, 0, 0, Math.PI*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(257, 678, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

    function drawMultipleLines(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x+205, yStart-50);
            ctx.lineTo(x+205, yEndValues[index]-50);
            ctx.stroke();
        });
    }
    
    drawMultipleLines([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [490, 505, 509, 515, 515, 513, 512, 503, 485]);

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(257, 771, 43, 43, Math.PI, 0, Math.PI);
    ctx.fill();

////////////////CUARTA COLUMNA////////////
 ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(359, 382, 43, 43, 0, 0, Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5;
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(359, 520, 41, 41, 0, 0, Math.PI*2);
    ctx.stroke();

    function blackLine(x, y1, y2, color) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.moveTo(x+305, y1+10);
        ctx.lineTo(x+305, y2+45);
        ctx.stroke();
    }
    
    const startX1 = 14;
    const startY1 = 382;
    const offsets1 = [0, 9, 18, 28, 38, 48, 58, 68, 78];
    const endYs1 = [470, 449, 439, 435, 435, 435, 436, 445, 457];
    
    offsets.forEach((offset, index) => {
        blackLine(startX + offset, startY, endYs[index], "black");
    });

    function drawMultipleLinesmil(xPositions, yStart, yEndValues) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        xPositions.forEach((x, index) => {
            ctx.beginPath();
            ctx.moveTo(x+305, yStart+40);
            ctx.lineTo(x+305, yEndValues[index]+40);
            ctx.stroke();
        });
    }
    
    drawMultipleLinesmil([14, 23, 32, 42, 52, 62, 72, 82, 92], 720, [570, 549, 539, 535, 535, 535, 536, 545, 557]);

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(359, 610, 43, 43, 0, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.lineWidth = 5;
    ctx.ellipse(359, 770, 43, 43, Math.PI, 0, Math.PI);
    ctx.fill();


    ////////LINEAS APARTE//////

function lineasAparte(x) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.moveTo(x, 382);
    ctx.lineTo(x, 770);
    ctx.stroke();
}

lineasAparte(105);
lineasAparte(205);
lineasAparte(308);
