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

function makeBuffer(xstart,ystart,bufferSize,w,h) {
    for(let i=0;i<bufferSize;i++){
        let tr = new Konva.Rect({
            x: xstart+i*w,
            y: ystart,
            id:"buf_"+i,
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

// representing the queue
makeBuffer(900,240,7,100,100); // a buffer whose size is 9, the array has 8 elements, and we need a space for '\0'.
makeBuffer(1200,440,1,100,100); // a buffer whose size is 9, the array has 8 elements, and we need a space for '\0'.
makeText(1100,460,"current",'cur');
makeText(1220,460,"",'cur_val');

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

var console_box = new Konva.Rect({
    x: 1450,
    y: 0,
    id:"console_box",
    stroke: '#ffa07a',
    strokeWidth: 5,
    fill: '#ddd',
    width: 100,
    height: 200,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var console_msg=["$",
    "",
    "",
    "",
    "",
    "",
    "",
    ""];

function updateConsoleMsg(msg,i) {
        stage.find('#text_console_msg'+i).text(msg);
}

function makeConsoleText(x,y,str,id) {
    let text = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'text_'+id,
        fontSize: 16,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 400,
        padding: 20,
        // align: 'center',
    });
        layer.add(text);
}

var msg_box = new Konva.Rect({
    x: 900,
    y: 0,
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

var message=["push 5 into the queue.",
    "",
    "",
    ""];

function updateMessage(msg,i) {
        stage.find('#text_msg'+i).text(msg);
}

function clearMessage() {
        updateMessage("",0);
        updateMessage("",1);
        updateMessage("",2);
        updateMessage("",3);
}

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

makeText(920,260,"",1);
makeText(1020,260,"",2);
makeText(1120,260,"",3);
makeText(1220,260,"",4);
makeText(1320,260,"",5);
makeText(1420,260,"",6);
makeText(1520,260,"",7);

//console.log("start");

var pc=1;
function nextstep() {
	if(pc == 1){
		/* draw the message box */
		layer.add(msg_box);
		layer.add(console_box);
		makeConsoleText(1450,0,console_msg[0],'console_msg0');
		makeConsoleText(1450,20,console_msg[1],'console_msg1');
		makeConsoleText(1450,40,console_msg[2],'console_msg2');
		makeConsoleText(1450,60,console_msg[3],'console_msg3');
		makeConsoleText(1450,80,console_msg[4],'console_msg4');
		makeConsoleText(1450,100,console_msg[5],'console_msg5');
		makeConsoleText(1450,120,console_msg[6],'console_msg6');
		makeConsoleText(1450,140,console_msg[7],'console_msg7');

		makeText(900,0,message[0],'msg0');
		makeText(900,50,message[1],'msg1');
		makeText(900,100,message[2],'msg2');
		makeText(900,150,message[3],'msg3');
		layer.draw();
		pc = pc + 1;
	}else if(pc == 2){
		// push 5 into queue
		stage.find('#node_'+5).fill('#FF5733');
		stage.find('#text_'+1).text('5');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 3){
		updateMessage("if queue is not empty,",0);
		updateMessage("starting from the front,",1);
		updateMessage("pop all current elements from the queue,",2);
		updateMessage("and print each of them.",3);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 4){
		// pop 5 out of queue
		// update current to 5
		stage.find('#text_cur_val').text('5');
		// mark 5 as current
		stage.find('#node_'+5).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 5){
		stage.find('#text_'+1).text('');
		// print 5
		updateConsoleMsg("$ 5",0);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 6){
		clearMessage();
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 7){
		// push 3 into queue
		stage.find('#node_'+3).fill('#FF5733');
		stage.find('#text_'+1).text('3');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 8){
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 9){
		// push 6 into queue
		stage.find('#node_'+6).fill('#FF5733');
		stage.find('#text_'+1).text('6');
		stage.find('#text_'+2).text('3');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 10){
		// mark as printed, and also, children in queue already
		stage.find('#node_'+5).fill('#900C3F');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 11){
		updateMessage("if queue is not empty,",0);
		updateMessage("starting from the front,",1);
		updateMessage("pop all current elements from the queue,",2);
		updateMessage("and print each of them.",3);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 12){
		// pop 3 out of queue
		// update current to 3
		stage.find('#text_'+2).text('');
		stage.find('#text_cur_val').text('3');
		// mark 3 as current
		stage.find('#node_'+3).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 13){
		// print 3
		updateConsoleMsg("$ 3",1);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 14){
		clearMessage();
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 15){
		// push 2 into queue
		stage.find('#node_'+2).fill('#FF5733');
		stage.find('#text_'+1).text('2');
		stage.find('#text_'+2).text('6');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 16){
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 17){
		// push 4 into queue
		stage.find('#node_'+4).fill('#FF5733');
		stage.find('#text_'+1).text('4');
		stage.find('#text_'+2).text('2');
		stage.find('#text_'+3).text('6');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 18){
		// mark 3 as printed, and also, children in queue already
		stage.find('#node_'+3).fill('#900C3F');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 19){
		// pop 6 out of queue
		// update current to 6
		stage.find('#text_'+3).text('');
		stage.find('#text_cur_val').text('6');
		// mark 6 as current
		stage.find('#node_'+6).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 20){
		// print 6
		updateConsoleMsg("$ 6",2);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 21){
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 22){
		// push 7 into queue
		stage.find('#node_'+7).fill('#FF5733');
		stage.find('#text_'+1).text('7');
		stage.find('#text_'+2).text('4');
		stage.find('#text_'+3).text('2');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 23){
		// current node, 6, doesn't have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 24){
		// mark 6 as printed, and also, children in queue already
		stage.find('#node_'+6).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 25){
		updateMessage("if queue is not empty,",0);
		updateMessage("starting from the front,",1);
		updateMessage("pop all current elements from the queue,",2);
		updateMessage("and print each of them.",3);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 26){
		// pop 2 out of queue
		// update current to 2
		stage.find('#text_'+3).text('');
		stage.find('#text_cur_val').text('2');
		// mark 2 as current
		stage.find('#node_'+2).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 27){
		// print 2
		updateConsoleMsg("$ 2",3);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 28){
		clearMessage();
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 29){
		// push 1 into queue
		stage.find('#node_'+1).fill('#FF5733');
		stage.find('#text_'+1).text('1');
		stage.find('#text_'+2).text('7');
		stage.find('#text_'+3).text('4');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 30){
		// current node, 2, doesn't have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 31){
		// mark 2 as printed, and also, children in queue already
		stage.find('#node_'+2).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 32){
		// pop 4 out of queue
		// update current to 4
		stage.find('#text_'+3).text('');
		stage.find('#text_cur_val').text('4');
		// mark 4 as current
		stage.find('#node_'+4).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 33){
		// print 4
		updateConsoleMsg("$ 4",4);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 34){
		// current node, 4, doesn't have a left child.
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 35){
		// current node, 4, doesn't have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 36){
		// mark 4 as printed, and also, children in queue already
		stage.find('#node_'+4).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 37){
		// pop 7 out of queue
		// update current to 7
		stage.find('#text_'+2).text('');
		stage.find('#text_cur_val').text('7');
		// mark 7 as current
		stage.find('#node_'+7).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 38){
		// print 7
		updateConsoleMsg("$ 7",5);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 39){
		// current node, 7, doesn't have a left child.
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 40){
		// current node, 7, does have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 41){
		// push 8 into queue
		stage.find('#node_'+8).fill('#FF5733');
		stage.find('#text_'+1).text('8');
		stage.find('#text_'+2).text('1');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 42){
		// mark 7 as printed, and also, children in queue already
		stage.find('#node_'+7).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 43){
		updateMessage("if queue is not empty,",0);
		updateMessage("starting from the front,",1);
		updateMessage("pop all current elements from the queue,",2);
		updateMessage("and print each of them.",3);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 44){
		// pop 1 out of queue
		// update current to 1
		stage.find('#text_'+2).text('');
		stage.find('#text_cur_val').text('1');
		// mark 1 as current
		stage.find('#node_'+1).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 45){
		// print 1
		updateConsoleMsg("$ 1",6);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 46){
		clearMessage();
		// current node, 1, doesn't have a left child.
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 47){
		// current node, 1, doesn't have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 48){
		// mark 1 as printed, and also, children in queue already
		stage.find('#node_'+1).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 49){
		// pop 8 out of queue
		// update current to 8
		stage.find('#text_'+1).text('');
		stage.find('#text_cur_val').text('8');
		// mark 8 as current
		stage.find('#node_'+8).fill('#FFC300');
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 50){
		// print 8
		updateConsoleMsg("$ 8",7);
               	layer.draw();
		pc = pc + 1;
	}else if(pc == 51){
		// current node, 8, doesn't have a left child.
		updateMessage("push current's left child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 52){
		// current node, 8, doesn't have a right child.
		updateMessage("push current's right child (if exists) into queue.",0);
                layer.draw();
		pc = pc + 1;
	}else if(pc == 53){
		// mark 8 as printed, and also, children in queue already
		stage.find('#node_'+8).fill('#900C3F');
                layer.draw();
		pc = pc + 1;
	}else if(pc == 54){
		clearMessage();
		updateMessage("queue is empty, job done!",0);
                layer.draw();
		pc = pc + 1;
	}
}
	//alert("End of animation! Refresh the page if you want to re-run the animation.");
