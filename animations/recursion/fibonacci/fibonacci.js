// Author: Jidong Xiao 
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 2000,
    height: 1000
});

// Create a layer
var layer = new Konva.Layer();
stage.add(layer);

function makeText(x,y,str,id) {
    let text = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'text_'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 400,
        padding: 20,
    });
        layer.add(text);
}

// Create a function to draw nodes
function drawNode(x, y, label) {
	var circle = new Konva.Circle({
		x: x,
		y: y,
		radius: 40,
		fill: 'lightgray',
		stroke: 'black',
		strokeWidth: 1
    });
    layer.add(circle);

    var text = new Konva.Text({
      x: x - 20,
      y: y - 10,
      text: label,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black'
    });
    layer.add(text);
}

// Draw lines connecting nodes
var line = new Konva.Line({
    points: [650, 100, 450, 200, 650, 100, 850, 200],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var arrow1 = new Konva.Arrow({
    points: [925, 200, 1150, 200],
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var line1 = new Konva.Line({
    points: [450, 200, 350, 300, 450, 200, 550, 300],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line2 = new Konva.Line({
    points: [850, 200, 750, 300, 850, 200, 950, 300],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var arrow2 = new Konva.Arrow({
    points: [1000, 300, 1150, 300],
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow2",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var line3 = new Konva.Line({
    points: [350, 300, 300, 400, 350, 300, 400, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line4 = new Konva.Line({
    points: [550, 300, 500, 400, 550, 300, 600, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line5 = new Konva.Line({
    points: [750, 300, 700, 400, 750, 300, 800, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line6 = new Konva.Line({
    points: [950, 300, 900, 400, 950, 300, 1000, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var arrow3 = new Konva.Arrow({
    points: [1050, 400, 1150, 400],
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow3",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

// Create a dotted line
var dottedLine = new Konva.Line({
    points: [300, 400, 200, 600],
    stroke: 'black',
    strokeWidth: 2,
    dash: [5, 5]
});
var dottedLine2 = new Konva.Line({
    points: [1000, 400, 1050, 600],
    stroke: 'black',
    strokeWidth: 2,
    dash: [5, 5]
});

var arrow4 = new Konva.Arrow({
    points: [1070, 600, 1150, 600],
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow4",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var messageBox = new Konva.Rect({
  x: 150,
  y: 650,
  width: 800,
  height: 60,
  fill: 'lightblue',
  stroke: 'black',
  strokeWidth: 4
});

var arrow = new Konva.Arrow({
  x: messageBox.x() + messageBox.width() / 2,
  y: messageBox.y(),
  points: [0, 0, 0, -150],
  pointerLength: 20,
  pointerWidth: 20,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 4
});

var messageText = new Konva.Text({
  x: messageBox.x() + 10,
  y: messageBox.y() + 20,
  text: 'In summary, T(n) = (2^0+2^1+2^2+2^3+...+2^(n-2)) * C = O(2^(n-1)) = O((2^n)/2) = O(2^n)',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black'
});

var pc=1;
function nextstep() {
        if(pc == 1){
		// Draw nodes
		drawNode(650, 100, 'T(n)');
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		layer.add(line);
		drawNode(450, 200, 'T(n-1)');
		drawNode(850, 200, 'T(n-2)');
		layer.add(arrow1);
		makeText(1150,170,"T(n-1)+T(n-2), 1 add operation, and we know 1 is 2^0, thus, time taken: (2^0 * C)",'L1');
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		layer.add(line1);
		layer.add(line2);
		drawNode(350, 300, 'T(n-2)');
		drawNode(550, 300, 'T(n-3)');
		drawNode(750, 300, 'T(n-3)');
		drawNode(950, 300, 'T(n-4)');
		layer.add(arrow2);
		makeText(1150,270,"T(n-2)+T(n-3) and T(n-3)+T(n-4), 2 add operations, and we know 2 is 2^1, thus, time taken: (2^1 * C)",'L2');
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		layer.add(line3);
		layer.add(line4);
		layer.add(line5);
		layer.add(line6);
		layer.add(arrow3);
		drawNode(300, 400, 'T(n-3)');
		drawNode(400, 400, 'T(n-4)');
		drawNode(500, 400, 'T(n-4)');
		drawNode(600, 400, 'T(n-5)');
		drawNode(700, 400, 'T(n-4)');
		drawNode(800, 400, 'T(n-5)');
		drawNode(900, 400, 'T(n-5)');
		drawNode(1000, 400, 'T(n-6)');
		makeText(1150,370,"T(n-3)+T(n-4), T(n-4)+T(n-5), T(n-4)+T(n-5) and T(n-5)+T(n-6), 4 add operations, and we know 4 is 2^2, thus, time taken: (2^2 * C)",'L3');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		layer.add(dottedLine);
		layer.add(dottedLine2);
		drawNode(200, 600, 'T(1)');
		layer.add(arrow4);
		makeText(1150,570,"2^(n-2) add operations, time taken: (2^(n-2) * C)",'L4');
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		layer.add(messageBox);
		layer.add(messageText);
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc=pc+1;
	}
}
