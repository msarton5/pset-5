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
}

// exercise 1

const sayHello = function() {
  var text = canvas.prompt("Message:");
  while (text.length > 50) {
    alert("Your message is too long. Keep it under 50 characters.");
  }
  var canvas = document.getElementById("student-canvas-1");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.font = "48px sans-serif";
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.strokeText(30 , 70 , text)

};

// exercise 2

const drawRectangle = function() {

    let canvas = document.getElementById("student-canvas-2");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 100, 200);
    ctx.stroke();
    //max width is 1024, max height is 512

    const width = Number(readlineSync.question("Width: "));
};

// exercise 3

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

// exercise 4

const drawTriangle = function() {
    // write your exercise 4 code here
};

// exercise 5

const drawFace = function() {
    // write your exercise 4 code here
};

// exercise 6

const drawPyramid = function() {
    // write your exercise 5 code here
};
