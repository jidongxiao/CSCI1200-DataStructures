// Author: Jidong Xiao 
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 2000,
    height: 1000
});

// then create layer
var layer = new Konva.Layer();

// add the layer to the stage
stage.add(layer);

// the rectangle which contains the list, which is also the heap rectangle.
var rect3 = new Konva.Rect({
    x: 1350,
    y: 220,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 300,
    height: 535,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect3);

// create a function to draw stack nodes
function drawStackNode(x, y, label, id, value){
	// the rectangle represents list nodes.
	let rect1 = new Konva.Rect({
		x: x,
		y: y,
		id:"node_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 100,
		height: 50,
		shadowColor: 'black',
		shadowBlur: 10,
		shadowOffsetX: 10,
		shadowOffsetY: 10,
		shadowOpacity: 0.2,
		cornerRadius: 10,
	});
	layer.add(rect1);
    
	// name of the pointer
	var text1 = new Konva.Text({
		x: x - 50,
		y: y + 20,
		text: label,
		id: "node_index_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text1);

	// content
	var text2 = new Konva.Text({
		x: x + 25,
		y: y + 20,
		text: value,
		id: "node_content_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text2);
}

// create a function to draw list nodes
function drawListNode(x, y, label, id){
	// the rectangle represents list nodes.
	let rect1 = new Konva.Rect({
		x: x,
		y: y,
		id:"list_node_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 20,
		height: 30,
	});
	layer.add(rect1);
    
	let rect2 = new Konva.Rect({
		x: x + 20,
		y: y,
		id:"list_node_pointer_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 40,
		height: 30,
	});
	layer.add(rect2);

	var text = new Konva.Text({
		x: x + 5,
		y: y + 5,
		text: label,
		id: "list_node_text_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text);

	var arrow = new Konva.Arrow({
		points: [x+40, y+15, x+80, y+15],
		tension: 0.5,
		pointerLength: 10,
		pointerWidth: 10,
		id: "list_arrow_" + id,
		fill: 'green',
		stroke: 'green',
		strokeWidth: 5,
		visible: false,
	});
	layer.add(arrow);
}

drawListNode(1360, 230, '7', 1);
drawListNode(1450, 280, '5', 2);
drawListNode(1400, 330, '8', 3);
drawListNode(1450, 380, '1', 4);
stage.find('#list_arrow_1').visible('true');
stage.find('#list_arrow_2').visible('true');
stage.find('#list_arrow_3').visible('true');
stage.find('#list_arrow_4').visible('true');

var targetPts = [1400, 245, 1420, 255, 1450, 295];
stage.find('#list_arrow_1').points(targetPts);
targetPts = [1490, 295, 1450, 318, 1370, 326, 1400, 345];
stage.find('#list_arrow_2').points(targetPts);
targetPts = [1440, 345, 1420, 378, 1450, 395];
stage.find('#list_arrow_3').points(targetPts);
targetPts = [1490, 395, 1475, 420, 1450, 558, 1682, 600];
stage.find('#list_arrow_4').points(targetPts);

var text_null = new Konva.Text({
	x: 1685,
	y: 575,
	text: "NULL",
	id: "node_text_null",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
//layer.add(text_null);

var text_stack = new Konva.Text({
	x: 295,
	y: 380,
	text: "Stack",
	id: "node_text_stack",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_stack);

var text_heap = new Konva.Text({
	x: 855,
	y: 380,
	text: "Heap",
	id: "node_text_heap",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_heap);

var arrow_p = new Konva.Arrow({
	points: [1100, 605, 1100, 535],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'arrow_p',
	fill: 'yellow',
	stroke: 'yellow',
	strokeWidth: 5,
});

// the node code rectangle.
var rect1 = new Konva.Rect({
    x: 10,
    y: 30,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 220,
    height: 160,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var nodeLabel = new Konva.Text({
    x: 25,
    y: 235,
    id:"node_label",
    text: "Node Definition",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

layer.add(nodeLabel);
layer.add(rect1);

function makeCodeBox(x, y){
	// the main code rectangle.
	var rect_list = new Konva.Rect({
		x: x,
		y: y,
		id:"code_rec_list",
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 500,
		height: 230,
		shadowColor: 'black',
		shadowBlur: 10,
		shadowOffsetX: 10,
		shadowOffsetY: 10,
		shadowOpacity: 0.2,
		cornerRadius: 10,
	});
	layer.add(rect_list);
}
makeCodeBox(280, 30);
makeCodeBox(280, 280);
makeCodeBox(280, 530);
makeCodeBox(800, 30);
makeCodeBox(800, 280);
makeCodeBox(800, 530);

function makeCode(x,y,str,id) {
    return new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'line'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 480,
        padding: 20,
    });
}

var code=[
        "0.  template <class T>",
        "1.  class Node {",
        "2.  public:",
        "3.  \t\t\t T value;",
        "4.  \t\t\t Node* next;",
	"5.  }",
];

// write the code fragment into the code box.
for (let i=0;i<code.length;i++){
       	// the array starts from index 0, but we want ids to be counted from index 1.
       	let t=makeCode(10,30+(i*20),code[i],i+1);
       	layer.add(t);
}

var code_list=[
        "0.  void push_back(Node<T>* & head, const T& value) {",
	"1.  \t\t\t if(head == NULL) {",
	"2.  \t\t\t \t\t\t Node<T>* tmp = new Node<T>;",
        "3.  \t\t\t \t\t\t tmp->value = value;",
	"4.  \t\t\t \t\t\t tmp->next = NULL;",
	"5.  \t\t\t \t\t\t head = tmp;",
	"6.  \t\t\t } else {",
	"7.  \t\t\t \t\t\t push_back(head->next, value);",
	"8.  \t\t\t }",
	"9.  }",
];

function makeBold_list(id, box){
        for(let i=1; i<=code_list.length; i++){
                if(i!=id){
			// regarding the parentheses, we must add the two numbers first.
                        stage.find('#line'+(i+100*box)).fontStyle('normal');
                }else{
                        stage.find('#line'+(i+100*box)).fontStyle('bold');
                }
        }
}

function makeCodeinBox(x,y,box){
	// write the code fragment into the code box.
	for (let i=0;i<code_list.length;i++){
        	// the array starts from index 0, but we want ids to be counted from index 1.
		// here we add 100 so as to differentiate from the code array.
        	let t=makeCode(x,y+(i*20),code_list[i],i+1+100*box);
        	layer.add(t);
	}
}
makeCodeinBox(290,30,1);
makeCodeinBox(290,280,2);
makeCodeinBox(290,530,3);
makeCodeinBox(810,30,4);
makeCodeinBox(810,280,5);
makeCodeinBox(810,530,6);

// draw the image
drawStackNode(1685, 575, '', 0, 'NULL');
drawStackNode(1370, 50, 'head', 1, ' ');
var arrow1 = new Konva.Arrow({
	points: [1420, 75, 1320, 135, 1355, 245],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow_1",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

var arrow2 = new Konva.Arrow({
	points: [1450, 145, 1335, 190, 1340, 455, 1485, 494],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow_2",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

// arrow 1 represents head
layer.add(arrow1);

layer.draw();

var pc=1;
// creating the list.
function nextstep() {
        if(pc == 1){
		makeBold_list(pc, 1);
		stage.find('#node_rec_1').fill('plum');
		//drawStackNode(270, 550, 'value', 2, '4');
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		makeBold_list(pc, 1);
		// the node we push front is called node 0.
		//drawListNode(600, 560, '?', 0);
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		makeBold_list(7, 1);
		//stage.find('#list_node_text_0').text('4');
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		makeBold_list(8, 1);
		//targetPts = [680, 585, 565, 645, 460, 545, 495, 485];
		//stage.find('#list_arrow_0').points(targetPts);
		//stage.find('#list_arrow_0').visible('true');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		makeBold_list(1, 2);
		//targetPts = [1420, 75, 1320, 135, 1450, 295];
		//stage.find('#arrow_1').points(targetPts);
		stage.find('#list_node_rec_1').fill('yellow');
		stage.find('#list_node_pointer_rec_1').fill('yellow');
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		makeBold_list(2, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		makeBold_list(7, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 8){
		makeBold_list(8, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 9){
		makeBold_list(1, 3);
		stage.find('#list_node_rec_2').fill('orange');
		stage.find('#list_node_pointer_rec_2').fill('orange');
                layer.draw();
                pc=pc+1;
        }else if(pc == 10){
		makeBold_list(2, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 11){
		makeBold_list(7, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 12){
		makeBold_list(8, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 13){
		makeBold_list(1, 4);
		stage.find('#list_node_rec_3').fill('aqua');
		stage.find('#list_node_pointer_rec_3').fill('aqua');
                layer.draw();
                pc=pc+1;
        }else if(pc == 14){
		makeBold_list(2, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 15){
		makeBold_list(7, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 16){
		makeBold_list(8, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 17){
		makeBold_list(1, 5);
		stage.find('#list_node_rec_4').fill('pink');
		stage.find('#list_node_pointer_rec_4').fill('pink');
                layer.draw();
                pc=pc+1;
        }else if(pc == 18){
		makeBold_list(2, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 19){
		makeBold_list(7, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 20){
		makeBold_list(8, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 21){
		makeBold_list(1, 6);
		stage.find('#node_rec_0').fill('yellowgreen');
		//stage.find('#list_node_pointer_rec_5').fill('yellowgreen');
                layer.draw();
                pc=pc+1;
        }else if(pc == 22){
		makeBold_list(2, 6);
                layer.draw();
                pc=pc+1;
        }else if(pc == 23){
		makeBold_list(3, 6);
		drawStackNode(1400, 120, 'tmp', 2, ' ');
		// arrow 2 represents tmp
		layer.add(arrow2);
		drawListNode(1490, 480, '?', 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 24){
		makeBold_list(4, 6);
		// setting tmp's value
		stage.find('#list_node_text_5').text('4');
                layer.draw();
                pc=pc+1;
        }else if(pc == 25){
		makeBold_list(5, 6);
		targetPts = [1530, 495, 1540, 530, 1682, 600];
		// setting tmp's next to NULL
		stage.find('#list_arrow_5').points(targetPts);
		stage.find('#list_arrow_5').visible('true');
                layer.draw();
                pc=pc+1;
        }else if(pc == 26){
		makeBold_list(6, 6);
		// let current head point to the same location as tmp points to.
		targetPts = [1490, 395, 1475, 420, 1450, 458, 1492, 495];
		stage.find('#list_arrow_4').points(targetPts);
                layer.draw();
                pc=pc+1;
        }else if(pc == 27){
		makeBold_list(7, 6);
                layer.draw();
                pc=pc+1;
        }else if(pc == 28){
		// tmp goes out of scope
                var shape = stage.find('#arrow_2');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
                shape = stage.find('#node_rec_2');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
                shape = stage.find('#node_index_2');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
		makeBold_list(10, 6);
                layer.draw();
                pc=pc+1;
        }else if(pc == 29){
		makeBold_list(-1, 6);
                layer.draw();
                pc=pc+1;
        }else if(pc == 30){
		makeBold_list(9, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 31){
		makeBold_list(10, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 32){
		makeBold_list(-1, 5);
                layer.draw();
                pc=pc+1;
        }else if(pc == 33){
		makeBold_list(9, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 34){
		makeBold_list(10, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 35){
		makeBold_list(-1, 4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 36){
		makeBold_list(9, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 37){
		makeBold_list(10, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 38){
		makeBold_list(-1, 3);
                layer.draw();
                pc=pc+1;
        }else if(pc == 39){
		makeBold_list(9, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 40){
		makeBold_list(10, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 41){
		makeBold_list(-1, 2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 42){
		makeBold_list(9, 1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 43){
		makeBold_list(10, 1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 44){
		makeBold_list(-1, 1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 45){
		makeBold_list(2, 3);
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc=pc+1;
	}
}

/* vim: set ts=4: */
