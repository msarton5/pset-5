window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colered-rectangle").onclick = drawColoredRectangle
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

  while (text.length > 50) {
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
    let length = prompt("Height:");
    let x = prompt("X:");
    let y = prompt("Y:");

    ctx.strokeRect(x , y , width , length);
    //max width is 1024, max height is 512

    if (x === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (y === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (width === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (length === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }
};

// exercise 3

const drawColoredRectangle = function() {

    // let canvas = document.getElementById("student-canvas-3");
    // let ctx = canvas.getContext("2d");
    //
    // let color = prompt("Color:");
    //
    // // if (color === null) {
    // //   ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    // // }
    // //
    // // if (color == "black") {
    //     ctx.fillStyle = #000000
    //     ctx.fillRect(10 , 10 , 100 , 50);
    // // }


};

// exercise 4

const drawTriangle = function() {
    // 3:4:5 proportion rule; triangle must fit these proportions
    // use a case loop? all needs to apply
    let side1 = prompt("Side 1:");

    if (side1 % 3 == 0 || side1 % 4 == 0 || side1 % 5 == 0 && side2 % 3 == 0 || side2 % 4 == 0 || side2 % 5 == 0 && side3 % 3 == 0 || side3 % 4 == 0 || side3 % 5 == 0) {
      ctx.
    }
};

// exercise 5

const drawFace = function() {
    // write your exercise 5 code here
};

// exercise 6

const drawPyramid = function() {
    // write your exercise 6 code here
};
