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

// Create a function to draw nodes
function drawNode(x, y, label, id) {
	var circle = new Konva.Circle({
		x: x,
		y: y,
		id: 'node_'+id,
		radius: 40,
		fill: 'lightgray',
		stroke: 'black',
		strokeWidth: 1
    });
    layer.add(circle);

    var text = new Konva.Text({
      x: x-5,
      y: y-10,
	id: 'node_text_'+id,
      text: label,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black'
    });
    layer.add(text);
}

// Draw lines connecting nodes
var line1 = new Konva.Line({
    points: [615, 120, 520, 180],
    //points: [650, 100, 450, 200, 650, 100, 850, 200],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line2 = new Konva.Line({
    points: [685, 120, 780, 180],
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
    points: [465, 220, 378, 272],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line4 = new Konva.Line({
    points: [530, 228, 572, 272],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line5 = new Konva.Line({
    // points: [850, 200, 750, 300, 850, 200, 950, 300],
    points: [765, 220, 700, 300],
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
    points: [835, 220, 900, 300],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
});

var line7 = new Konva.Line({
    // points: [350, 300, 300, 400, 350, 300, 400, 400],
    points: [315, 320, 230, 375],
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
        // align: 'center',
    });
        layer.add(text);
}

// make the tree index
makeText(570,80,"0",10);
makeText(420,180,"1",11);
makeText(830,180,"2",12);
makeText(270,280,"3",13);
makeText(520,280,"4",14);
makeText(730,280,"5",15);
makeText(930,280,"6",16);

drawNode(650, 100, '20',0);
layer.add(line1);
layer.add(line2);
drawNode(500, 200, '30',1);
drawNode(800, 200, '60',2);
layer.add(line3);
layer.add(line4);
drawNode(350, 300, '50',3);
drawNode(600, 300, '40',4);
layer.add(line5);
drawNode(700, 300, '70',5);
layer.add(line6);
drawNode(900, 300, '80',6);
layer.add(line8);
line8.hide();

function makeBox(xstart,ystart,bufferSize,w,h) {
    for(let i=0;i<bufferSize;i++){
        let tr = new Konva.Rect({
            x: xstart+i*w,
            y: ystart,
            id:"box_"+i,
            stroke: '#343434',
            strokeWidth: 5,
            fill: '#ddd',
            width: w,
            height: h,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            shadowOpacity: 0.2,
        });
        layer.add(tr);
    }
}

/* this array displays the input string */
makeBox(300,540,8,50,50); // a buffer whose size is 8, the array has 8 elements.
// don't show the last box for now.
stage.find('#box_'+7).hide();

/* for "20, 30, 60, 50, 40, 70, 80" */
makeText(300,540,"20",0);
makeText(350,540,"30",1);
makeText(400,540,"60",2);
makeText(450,540,"50",3);
makeText(500,540,"40",4);
makeText(550,540,"70",5);
makeText(600,540,"80",6);

// make the vector index
makeText(300,600,"0",20);
makeText(350,600,"1",21);
makeText(400,600,"2",22);
makeText(450,600,"3",23);
makeText(500,600,"4",24);
makeText(550,600,"5",25);
makeText(600,600,"6",26);

var msg_box = new Konva.Rect({
    x: 1100,
    y: 100,
    id:"message_box",
    stroke: '#ffa07a',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 200,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var message=["for each subscript i:",
    "the parent, if it exists, is at location ⌊(i − 1)/2⌋.",
    "the left child, if it exists, is at location 2i + 1.",
    "the right child, if it exists, is at location 2i + 2."];

/* draw the message box */
layer.add(msg_box);
makeText(1100,100,message[0],'msg0');
makeText(1100,150,message[1],'msg1');
makeText(1100,200,message[2],'msg2');
makeText(1100,250,message[3],'msg3');

layer.draw();

var pc=1;
function nextstep() {
	if(pc == 1){
		// highlight element 7 and element 3
		stage.find('#box_'+0).fill('#ff5733');
		stage.find('#box_'+6).fill('#ff5733');
		stage.find('#node_'+0).fill('#ff5733');
		stage.find('#node_'+6).fill('#ff5733');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 2){
		// do the numbers swap in the vector
		stage.find('#text_'+0).text('80');
		// do the numbers swap on the treee
		stage.find('#node_text_'+0).text('80');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 3){
		stage.find('#text_'+6).hide();
		// hide the tree index
		stage.find('#text_'+16).hide();
		// hide the vector index
		stage.find('#text_'+26).hide();
		// hide the line
		line6.hide();
		stage.find('#node_text_'+6).hide();
		stage.find('#box_'+6).hide();
		stage.find('#node_'+6).hide();
                layer.draw();
		pc = pc + 1;
	}else if(pc == 4){
		// highlight element 0 and element 1
		stage.find('#box_'+1).fill('#ff5733');
		stage.find('#node_'+1).fill('#ff5733');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 5){
		// again, do the numbers swap in the vector
		stage.find('#text_'+0).text('30');
		stage.find('#text_'+1).text('80');
		// do the numbers swap on the treee
		stage.find('#node_text_'+0).text('30');
		stage.find('#node_text_'+1).text('80');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 6){
		// highlight element 1 and element 4
		stage.find('#box_'+4).fill('#ff5733');
		stage.find('#node_'+4).fill('#ff5733');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 7){
		// again, do the numbers swap in the vector
		stage.find('#text_'+1).text('40');
		stage.find('#text_'+4).text('80');
		// do the numbers swap on the treee
		stage.find('#node_text_'+1).text('40');
		stage.find('#node_text_'+4).text('80');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 8){
		alert("End of animation! Now the heap is in the right shape. Refresh the page if you want to re-run the animation.");
	}
}
