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
    x: 870,
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
    x: 1050,
    y: 420,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 500,
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
function drawStackNode(x, y, label, id){
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

var text_null = new Konva.Text({
	x: 1605,
	y: 475,
	text: "NULL",
	id: "node_text_null",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_null);

var text_stack = new Konva.Text({
	x: 895,
	y: 380,
	text: "Stack",
	id: "node_text_stack",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_stack);

var text_heap = new Konva.Text({
	x: 1255,
	y: 380,
	text: "Heap",
	id: "node_text_heap",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_heap);

var rect_console = new Konva.Rect({
    x: 150,
    y: 400,
    id:"console_rect",
    stroke: '#555',
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
layer.add(rect_console);

var consoleLabel = new Konva.Text({
    x: 280,
    y: 635,
    id:"console_label",
    text: "Console",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var consoleText = new Konva.Text({
    x: 140,
    y: 400,
    id:"console_text",
    text: "",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#581845',
});
layer.add(consoleLabel);
layer.add(consoleText);

var message=["$",
    "",
    "",
    "",
    ""];

function updateMessage(msg,i) {
        stage.find('#text_msg'+i).text(msg);
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

// draw that $ sign, which is a command line prompt.
makeText(155,420,message[0],'msg0');

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
    width: 650,
    height: 300,
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
        "0.  int main() {",
	"1.  \t\t\t Node<int>* head;",
        "2.  \t\t\t head = new Node<int>;",
	"3.  \t\t\t head->value = 6;",
	"4.  \t\t\t head->next = NULL;",
	"5.  \t\t\t Node<int>* q = new Node<int>;",
	"6.  \t\t\t q->value = 8;",
	"7.  \t\t\t q->next = NULL;",
	"8.  \t\t\t head->next = q;",
	"9.  \t\t\t cout << \"1st value: \" << head->value << endl;",
	"10. \t\t\tcout << \"2nd value: \" << head->next->value << endl;",
	"11. }",
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
stage.add(layer);

var arrow1 = new Konva.Arrow({
	points: [910, 535, 1030, 485, 1075, 485],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow1",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

var arrow2 = new Konva.Arrow({
	points: [910, 585, 1030, 635, 1235, 585],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow2",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

layer.draw();

var targetPts = [1160, 485, 1200, 435, 1600, 485];
// create the animation
var tween = new Konva.Tween({
  node: arrow2,
  points: targetPts,
  duration: 2, // animation duration in seconds
  easing: Konva.Easings.Linear
});


var pc=1;
// creating the list.
function nextstep() {
        if(pc == 1){
		makeBold_list(pc);
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		makeBold_list(pc);
		drawStackNode(870, 500, 'head', 1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		makeBold_list(pc);
		drawListNode(1080, 460, '?', 1);
		layer.add(arrow1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		makeBold_list(pc);
		stage.find('#list_node_text_1').text('6');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		makeBold_list(pc);
		stage.find('#list_arrow_1').points(targetPts);
		stage.find('#list_arrow_1').visible('true');
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		makeBold_list(pc);
		drawStackNode(870, 550, 'q', 2);
		drawListNode(1240, 560, '?', 2);
		layer.add(arrow2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		makeBold_list(pc);
		stage.find('#list_node_text_2').text('8');
                layer.draw();
                pc=pc+1;
        }else if(pc == 8){
		makeBold_list(pc);
		targetPts = [1310, 585, 1350, 600, 1600, 485];
		stage.find('#list_arrow_2').points(targetPts);
		stage.find('#list_arrow_2').visible('true');
                layer.draw();
                pc=pc+1;
        }else if(pc == 9){
		makeBold_list(pc);
		targetPts = [1160, 485, 1200, 555, 1240, 585];
		stage.find('#list_arrow_1').points(targetPts);
                layer.draw();
                pc=pc+1;
        }else if(pc == 10){
		makeBold_list(pc);
		updateMessage("$ 1st value: 6",0);
		makeText(155,440,message[1],'msg1');
		updateMessage("$",1);
                layer.draw();
                pc=pc+1;
        }else if(pc == 11){
		makeBold_list(pc);
		updateMessage("$ 2nd value: 8",1);
		makeText(155,460,message[2],'msg2');
		updateMessage("$",2);
                layer.draw();
                pc=pc+1;
        }else if(pc == 12){
		makeBold_list(pc);
                layer.draw();
                pc=pc+1;
        }else if(pc == 13){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc=pc+1;
	}
}

/* vim: set ts=4: */
