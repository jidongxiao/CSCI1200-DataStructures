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

function makeNULL(x,y) {
    let text = new Konva.Text({
        x: x,
        y: y,
        text: 'NULL',
        id: 'nullptr',
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
		id: 'node_'+label,
		radius: 40,
		fill: 'lightgray',
		stroke: 'black',
		strokeWidth: 1
    });
    layer.add(circle);

    var text = new Konva.Text({
      x: x-5,
      y: y-10,
	id: 'node_text_'+label,
      text: label,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black'
    });
    layer.add(text);
}

// Draw lines connecting nodes
var line1 = new Konva.Line({
    points: [645, 100, 520, 180],
    //points: [650, 100, 450, 200, 650, 100, 850, 200],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line2 = new Konva.Line({
    points: [655, 100, 780, 180],
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

var line3 = new Konva.Line({
    //points: [450, 200, 350, 300, 450, 200, 550, 300],
    points: [495, 200, 378, 272],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line4 = new Konva.Line({
    points: [505, 200, 572, 272],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line5 = new Konva.Line({
    // points: [850, 200, 750, 300, 850, 200, 950, 300],
    points: [795, 200, 700, 300],
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

var line6 = new Konva.Line({
    // points: [350, 300, 300, 400, 350, 300, 400, 400],
    points: [345, 300, 200, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line7 = new Konva.Line({
    points: [705, 300, 800, 400],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line8 = new Konva.Line({
    points: [805, 200, 916, 276],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line9 = new Konva.Line({
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

drawNode(650, 100, '5');
layer.add(line1);
layer.add(line2);
drawNode(500, 200, '3');
drawNode(800, 200, '6');
layer.add(line3);
layer.add(line4);
drawNode(350, 300, '2');
drawNode(600, 300, '4');
layer.add(line5);
drawNode(700, 300, '7');
layer.add(line6);
layer.add(line7);
drawNode(200, 400, '1');
drawNode(800, 400, '8');
layer.add(line8);
line8.hide();
layer.draw();

var key;
var old_key = 0;
function start() {
	key = document.getElementById('textIn').value;
	stage.find('#nullptr').hide();
	if(hidden_2==1){
		// show line 6
		line6.show();
		// show 2
		stage.find('#node_'+2).show();
		stage.find('#node_text_'+2).show();
		hidden_2=0;
		// reset 1
		stage.find('#node_'+1).x(200);
		stage.find('#node_'+1).y(400);
		stage.find('#node_text_'+1).x(195);
		stage.find('#node_text_'+1).y(390);
	}
	if(hidden_7==1){
		// show line 7
		line7.show();
		// show 7
		stage.find('#node_'+7).show();
		stage.find('#node_text_'+7).show();
		hidden_7=0;
		// reset 8
		stage.find('#node_'+8).x(800);
		stage.find('#node_'+8).y(400);
		stage.find('#node_text_'+8).x(795);
		stage.find('#node_text_'+8).y(390);
	}
	if(hidden_6==1){
		line5.show();
		stage.find('#node_'+6).show();
		stage.find('#node_text_'+6).show();
		// move 7 and 8 back
		stage.find('#node_'+7).x(700);
		stage.find('#node_'+7).y(300);
		stage.find('#node_text_'+7).x(695);
		stage.find('#node_text_'+7).y(290);
		stage.find('#node_'+8).x(800);
		stage.find('#node_'+8).y(400);
		stage.find('#node_text_'+8).x(795);
		stage.find('#node_text_'+8).y(390);
		line7.show();
		line8.hide();
		hidden_6=0;
	}
	if(deleted_3==1){
		// swap 3 and 4 back
			stage.find('#node_'+3).x(500);
			stage.find('#node_'+3).y(200);
			stage.find('#node_text_'+3).x(495);
			stage.find('#node_text_'+3).y(190);
			stage.find('#node_'+4).x(600);
			stage.find('#node_'+4).y(300);
			stage.find('#node_text_'+4).x(595);
			stage.find('#node_text_'+4).y(290);
			deleted_3=0;
			// reset pc
			pc=1;
	}
	if(old_key == 0){
	}else{
		// un-highlight the old node.
		stage.find('#node_'+old_key).fill("lightgray");
		// show the old node
		stage.find('#node_'+old_key).show();
		stage.find('#node_text_'+old_key).show();
	}
	// highlight this node.
	stage.find('#node_'+key).fill("red");
	layer.draw();
	old_key = key;
	console.log("start");
}

makeNULL(130,390);
var hidden_2=0;
var hidden_6=0;
var hidden_7=0;
var deleted_3=0;
var pc=1;
function nextstep() {
	if(key == 1){
		// hide this node, and show a NULL pointer.
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		stage.find('#nullptr').x(130);
		stage.find('#nullptr').y(390);
		stage.find('#nullptr').show();
                layer.draw();
	}else if(key == 2){
		line6.hide();
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		stage.find('#node_'+1).x(350);
		stage.find('#node_'+1).y(300);
		stage.find('#node_text_'+1).x(345);
		stage.find('#node_text_'+1).y(290);
		hidden_2=1;
                layer.draw();
	}else if(key == 3){
		if(pc==1){
			// swap 3 and 4
			stage.find('#node_'+4).x(500);
			stage.find('#node_'+4).y(200);
			stage.find('#node_text_'+4).x(495);
			stage.find('#node_text_'+4).y(190);
			stage.find('#node_'+3).x(600);
			stage.find('#node_'+3).y(300);
			stage.find('#node_text_'+3).x(595);
			stage.find('#node_text_'+3).y(290);
			deleted_3=1;
                	layer.draw();
			pc = pc + 1;
		}else if(pc==2){
			// hide this node, and show a NULL pointer.
			stage.find('#node_'+key).hide();
			stage.find('#node_text_'+key).hide();
			stage.find('#nullptr').x(535);
			stage.find('#nullptr').y(260);
			stage.find('#nullptr').show();
                	layer.draw();
			pc = pc + 1;
		}
	}else if(key == 4){
		// hide this node, and show a NULL pointer.
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		stage.find('#nullptr').x(535);
		stage.find('#nullptr').y(260);
		stage.find('#nullptr').show();
                layer.draw();
	}else if(key == 5){
	}else if(key == 6){
		line5.hide();
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		// move 7 and 8
		stage.find('#node_'+7).x(800);
		stage.find('#node_'+7).y(200);
		stage.find('#node_text_'+7).x(795);
		stage.find('#node_text_'+7).y(190);
		stage.find('#node_'+8).x(950);
		stage.find('#node_'+8).y(300);
		stage.find('#node_text_'+8).x(945);
		stage.find('#node_text_'+8).y(290);
		line7.hide();
		line8.show();
		hidden_6=1;
               	layer.draw();
	}else if(key == 7){
		line7.hide();
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		stage.find('#node_'+8).x(700);
		stage.find('#node_'+8).y(300);
		stage.find('#node_text_'+8).x(695);
		stage.find('#node_text_'+8).y(290);
		hidden_7=1;
                layer.draw();
	}else if(key == 8){
		// hide this node, and show a NULL pointer.
		stage.find('#node_'+key).hide();
		stage.find('#node_text_'+key).hide();
		stage.find('#nullptr').x(770);
		stage.find('#nullptr').y(390);
		stage.find('#nullptr').show();
                layer.draw();
	//alert("End of animation! Refresh the page if you want to re-run the animation.");
	}
}
