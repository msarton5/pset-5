window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

// exercise 1

const sayHello = function() {
  const canvas = document.getElementById("student-canvas-1");
  const ctx = canvas.getContext("2d");

  let text = prompt("Message:");

if (text === null) {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}

  while (text.height > 50) {
    alert("Your message is too long. Keep it under 50 characters.");
    text = prompt("Message:");
  }

  ctx.font = "48px Sans-serif";
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.strokeText(text, 30 , 70, canvas.width - 30);

};

// exercise 2

const drawRectangle = function() {

    let canvas = document.getElementById("student-canvas-2");
    let ctx = canvas.getContext("2d");

    let width = prompt("Width:");
    let height = prompt("Height:");
    let x = prompt("X:");
    let y = prompt("Y:");
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);

    ctx.strokeRect(x , y , width , height);

    if (x === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (y === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (width === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (height === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }
};

// exercise 3

const drawColoredRectangle = function() {

  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext("2d");

  let color = prompt("Color:");

if (color != null) {
    color = color.toLowerCase();
}

  ctx.clearRect(0 , 0 , canvas.width , canvas.height);

  switch (color) {
      case "black":
        ctx.fillStyle = "black";
        ctx.fillRect(10, 10, 100, 50);
          break;
      case "blue":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "blue";
       ctx.fill();
          break;
      case "green":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "green";
       ctx.fill();
          break;
      case "orange":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "orange";
       ctx.fill();
          break;
      case "purple":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "purple";
       ctx.fill();
         break;
      case "red":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "red";
       ctx.fill();
         break;
      case "yellow":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "yellow";
       ctx.fill();
         break;
      case null:
        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
        break;
      default:
        alert(color + " is not a supported color.");
        text = prompt("Color:");
          break;
  }

};

// exercise 4

const drawTriangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext("2d");

  let side1 = prompt("Side 1:");
  let side2 = prompt("Side 2:");
  let side3 = prompt("Side 3:");

  if (Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2)) != Math.sqrt(Math.pow(side3, 2))) {

  }
  // ctx.beginPath();
  // ctx.moveTo(75,50);
  // ctx.lineTo(100, 75);
  // ctx.lineTo(100 , 25);
  // ctx.fill();
};

// exercise 5

const drawFace = function() {
    // write your exercise 5 code here
};

// exercise 6

const drawPyramid = function() {
    // write your exercise 6 code here
};
