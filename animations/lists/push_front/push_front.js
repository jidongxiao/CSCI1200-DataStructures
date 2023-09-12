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

// the rectangle which contains the stack nodes.
var rect2 = new Konva.Rect({
    x: 270,
    y: 420,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 100,
    height: 310,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect2);

// the rectangle which contains the list.
var rect3 = new Konva.Rect({
    x: 450,
    y: 420,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 900,
    height: 310,
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
		x: x + 45,
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
		width: 40,
		height: 50,
	});
	layer.add(rect1);
    
	let rect2 = new Konva.Rect({
		x: x + 40,
		y: y,
		id:"list_node_pointer_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 80,
		height: 50,
	});
	layer.add(rect2);

	var text = new Konva.Text({
		x: x + 15,
		y: y + 20,
		text: label,
		id: "list_node_text_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text);

	var arrow = new Konva.Arrow({
		points: [x+80, y+25, x+150, y+25],
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

drawListNode(500, 460, '7', 1);
drawListNode(650, 460, '5', 2);
drawListNode(800, 460, '8', 3);
drawListNode(950, 460, '1', 4);
drawListNode(1100, 460, '9', 5);
stage.find('#list_arrow_1').visible('true');
stage.find('#list_arrow_2').visible('true');
stage.find('#list_arrow_3').visible('true');
stage.find('#list_arrow_4').visible('true');
stage.find('#list_arrow_5').visible('true');

var targetPts = [1175, 485, 1250, 535, 1400, 585];

stage.find('#list_arrow_5').points(targetPts);

var text_null = new Konva.Text({
	x: 1405,
	y: 575,
	text: "NULL",
	id: "node_text_null",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_null);

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
    x: 150,
    y: 30,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 160,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var nodeLabel = new Konva.Text({
    x: 280,
    y: 235,
    id:"node_label",
    text: "Node Definition",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

layer.add(nodeLabel);
layer.add(rect1);

// the main code rectangle.
var rect_list = new Konva.Rect({
    x: 850,
    y: 30,
    id:"code_rec_list",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 600,
    height: 160,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect_list);

function makeCode(x,y,str,id) {
    return new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'line'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 650,
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
        let t=makeCode(160,30+(i*20),code[i],i+1);
        layer.add(t);
}

var code_list=[
        "0.  void push_front(Node<T>* & head, const T& value) {",
	"1.  \t\t\t Node<T>* tmp = new Node<T>;",
        "2.  \t\t\t tmp->value = value;",
	"3.  \t\t\t tmp->next = head;",
	"4.  \t\t\t head = tmp;",
	"5.  }",
];

function makeBold_list(id){
        for(let i=1; i<=code_list.length; i++){
                if(i!=id){
			// regarding the parentheses, we must add the two numbers first.
                        stage.find('#line'+(i+100)).fontStyle('normal');
                }else{
                        stage.find('#line'+(i+100)).fontStyle('bold');
                }
        }
}

// write the code fragment into the code box.
for (let i=0;i<code_list.length;i++){
        // the array starts from index 0, but we want ids to be counted from index 1.
	// here we add 100 so as to differentiate from the code array.
        let t=makeCode(860,30+(i*20),code_list[i],i+1+100);
        layer.add(t);
}

// draw the image
layer.draw();

var arrow1 = new Konva.Arrow({
	points: [310, 535, 430, 485, 495, 485],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow_1",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

var arrow2 = new Konva.Arrow({
	points: [310, 630, 430, 655, 595, 585],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow_2",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

var pc=1;
// creating the list.
function nextstep() {
        if(pc == 1){
		makeBold_list(pc);
		drawStackNode(270, 500, 'head', 1, ' ');
		drawStackNode(270, 550, 'value', 2, '4');
		// arrow 1 represents head
		layer.add(arrow1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		makeBold_list(pc);
		drawStackNode(270, 600, 'tmp', 3, ' ');
		// the node we push front is called node 0.
		drawListNode(600, 560, '?', 0);
		// arrow 2 represents tmp
		layer.add(arrow2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		makeBold_list(pc);
		stage.find('#list_node_text_0').text('4');
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		makeBold_list(pc);
		targetPts = [680, 585, 565, 645, 460, 545, 495, 485];
		stage.find('#list_arrow_0').points(targetPts);
		stage.find('#list_arrow_0').visible('true');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		makeBold_list(pc);
		targetPts = [310, 535, 400, 515, 595, 585];
		stage.find('#arrow_1').points(targetPts);
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		makeBold_list(pc);
		var shape = stage.find('#arrow_2');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
                shape = stage.find('#node_rec_3');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
                shape = stage.find('#node_index_3');
                shape.to({
                        opacity: 0,
                        duration: 2,
                });
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		makeBold_list(pc);
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc=pc+1;
	}
}

/* vim: set ts=4: */
