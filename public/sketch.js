var socket;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);

  var vectors = [];
  var center = createVector();

  var T1 = createVector();
  var T2 = createVector();

}




function newDrawing(data){
  /*
  center.add(T1);
  center.add(T2);
  center.div(2);
  fill(255);
  ellipse(center.x,center.y,30,30);
  */
  fill(100, 102, 153,40);
  noStroke();
  ellipse(data.x, data.y, 30, 30);
  console.log('reciving:'+ data.x+ ','+ data.y);

}

function mouseDragged(){

  var data={
    x: mouseX,
    y: mouseY
  }

 socket.emit('mouse', data);
 fill(0, 102, 153,40);
 noStroke();
 ellipse(mouseX, mouseY, 30, 30);

}

function draw() {


}

function touchMoved() {
  	return false;

}
