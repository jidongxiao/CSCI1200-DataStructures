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

// the rectangle which contains the vector.
var rect2 = new Konva.Rect({
    x: 70,
    y: 360,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 650,
    height: 350,
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
    x: 850,
    y: 360,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 900,
    height: 300,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect3);

// Create a function to draw vector nodes
function drawVecNode(x, y, label, id){
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
    
	var text = new Konva.Text({
		x: x + 45,
		y: y + 20,
		text: label,
		id: "node_text_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text);
	var text1 = new Konva.Text({
		x: x + 45,
		y: y + 60,
		text: id - 1,
		id: "node_index_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text1);
}

drawVecNode(100, 460, '7', 1);
drawVecNode(200, 460, '5', 2);
drawVecNode(300, 460, '8', 3);
drawVecNode(400, 460, '1', 4);
drawVecNode(500, 460, '9', 5);

// Create a function to draw list nodes
function drawListNode(x, y, label, id){
	// the rectangle represents list nodes.
	let rect1 = new Konva.Rect({
		x: x,
		y: y,
		id:"list_node_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 100,
		height: 50,
	});
	layer.add(rect1);
    
	let rect2 = new Konva.Rect({
		x: x+100,
		y: y,
		id:"list_node_pointer_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 20,
		height: 50,
	});
	layer.add(rect2);

	var text = new Konva.Text({
		x: x + 45,
		y: y + 20,
		text: label,
		id: "list_node_text_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text);

	var arrow = new Konva.Arrow({
		points: [x+110, y+25, x+150, y+25],
		tension: 0.5,
		pointerLength: 10,
		pointerWidth: 10,
		id: "list_arrow_" + id,
		fill: 'green',
		stroke: 'green',
		strokeWidth: 5,
	});
	layer.add(arrow);
}

drawListNode(900, 460, '7', 1);
drawListNode(1050, 460, '5', 2);
drawListNode(1200, 460, '8', 3);
drawListNode(1350, 460, '1', 4);
drawListNode(1500, 460, '9', 4);

var text_null = new Konva.Text({
	x: 1655,
	y: 475,
	text: "NULL",
	id: "node_text_null",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_null);

var text_itr = new Konva.Text({
	x: 235,
	y: 640,
	text: "itr",
	id: 'vec_itr_1',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

var itr_arrow = new Konva.Arrow({
	points: [250, 625, 250, 555],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'itr_arrow_1',
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});
var pts = itr_arrow.points();

var text_itr2 = new Konva.Text({
	x: 235,
	y: 640,
	text: "itr2",
	id: 'vec_itr_2',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

var itr2_arrow = new Konva.Arrow({
	points: [250, 625, 250, 555],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'itr_arrow_2',
	fill: 'yellow',
	stroke: 'yellow',
	strokeWidth: 5,
});
var pts2 = itr2_arrow.points();

var text_p = new Konva.Text({
	x: 1100,
	y: 610,
	text: "p",
	id: 'list_itr_p',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

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

// the code rectangle.
var rect1 = new Konva.Rect({
    x: 70,
    y: 60,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 650,
    height: 250,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect1);

// the code rectangle.
var rect_list = new Konva.Rect({
    x: 850,
    y: 60,
    id:"code_rec_list",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 650,
    height: 250,
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
        "0.  void erase_from_vector(vector<int>::iterator itr, vector<int>& v) {",
        "1.  \t\t\t vector<int>::iterator itr2 = itr;",
        "2.  \t\t\t itr2++;",
        "3.  \t\t\t while (itr2 != v.end()) {",
        "4.  \t\t\t \t\t\t *itr = *itr2;",
	"5.  \t\t\t \t\t\t itr++;",
	"6.  \t\t\t \t\t\t itr2++;",
        "7.  \t\t\t }",
	"8.  \t\t\t v.pop_back();",
	"9.  }",
];

function makeBold(id){
        for(let i=1; i<=code.length; i++){
                if(i!=id){
                        stage.find('#line'+i).fontStyle('normal');
                }else{
                        stage.find('#line'+id).fontStyle('bold');
                }
        }
}

// write the code fragment into the code box.
for (let i=0;i<code.length;i++){
        // the array starts from index 0, but we want ids to be counted from index 1.
        let t=makeCode(80,60+(i*20),code[i],i+1);
        layer.add(t);
}

var code_list=[
        "0.  std::list<int> s;",
	"1.  std::list<int>::iterator p; // code initializing p is omitted",
        "2.  p = s.erase(p);",
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
        let t=makeCode(860,60+(i*20),code_list[i],i+1+100);
        layer.add(t);
}

function increment_itr1() {
	text_itr.x(text_itr.getX()+100);
	pts[0] = pts[0] + 100;
	pts[2] = pts[2] + 100;
	itr_arrow.points(pts);
}

function increment_itr2() {
	text_itr2.x(text_itr2.getX()+100);
	pts2[0] = pts2[0] + 100;
	pts2[2] = pts2[2] + 100;
	itr2_arrow.points(pts2);
}

// draw the image
layer.draw();
stage.add(layer);

var pc=1;
// erase 5 from this vector.
function vec_erase_nextstep() {
        if(pc == 1){
		makeBold(pc);
		layer.add(text_itr);
		layer.add(itr_arrow);
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		makeBold(pc);
		layer.add(text_itr2);
		layer.add(itr2_arrow);
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		makeBold(pc);
		increment_itr2();
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		makeBold(4);
		// highlight the one we are going to erase.
		stage.find('#node_rec_2').fill('#f4d03f');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		makeBold(5);
		stage.find('#node_text_2').text('8');
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		makeBold(6);
		increment_itr1();
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		makeBold(7);
		increment_itr2();
                layer.draw();
                pc=pc+1;
        }else if(pc == 8){
		makeBold(8);
                layer.draw();
                pc=pc+1;
        }else if(pc == 9){
		makeBold(4);
		// highlight the one we are going to update.
		stage.find('#node_rec_3').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_2').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 10){
		makeBold(5);
		stage.find('#node_text_3').text('1');
                layer.draw();
                pc=pc+1;
        }else if(pc == 11){
		makeBold(6);
		increment_itr1();
                layer.draw();
                pc=pc+1;
        }else if(pc == 12){
		makeBold(7);
		increment_itr2();
                layer.draw();
                pc=pc+1;
        }else if(pc == 13){
		makeBold(8);
                layer.draw();
                pc=pc+1;
        }else if(pc == 14){
		makeBold(4);
		// highlight the one we are going to update.
		stage.find('#node_rec_4').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_3').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 15){
		makeBold(5);
		stage.find('#node_text_4').text('9');
                layer.draw();
                pc=pc+1;
        }else if(pc == 16){
		makeBold(6);
		increment_itr1();
                layer.draw();
                pc=pc+1;
        }else if(pc == 17){
		makeBold(7);
		increment_itr2();
                layer.draw();
                pc=pc+1;
        }else if(pc == 18){
		makeBold(8);
                layer.draw();
                pc=pc+1;
        }else if(pc == 19){
		makeBold(4);
		// highlight the one we are going to update.
		stage.find('#node_rec_5').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_4').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 20){
		makeBold(8);
                layer.draw();
                pc=pc+1;
        }else if(pc == 21){
		makeBold(9);
                layer.draw();
                pc=pc+1;
        }else if(pc == 22){
		var shape = stage.find('#node_rec_5');
		// let this object disappear in 2 seconds.
		shape.to({
			opacity: 0,
			duration: 2,
		});
		//stage.find('#node_rec_5').destroy();
		shape = stage.find('#node_text_5');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		//stage.find('#node_text_5').destroy();
		shape = stage.find('#node_index_5');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		//stage.find('#node_index_5').destroy();
                layer.draw();
                pc=pc+1;
        }else if(pc == 23){
		makeBold(10);
                layer.draw();
                pc=pc+1;
        }else if(pc == 24){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc=pc+1;
	}
}

var targetPoints = [1010, 485, 1100, 585, 1200, 485];
var arrow1 = new Konva.Arrow({
	points: [1010, 485, 1030, 485, 1050, 485],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: "arrow1",
	fill: 'green',
	stroke: 'green',
	strokeWidth: 5,
});

layer.add(arrow1);
layer.draw();
var arrow2 = stage.find('#arrow1');

// Create the animation
var tween = new Konva.Tween({
  node: arrow2,
  points: targetPoints,
  duration: 2, // animation duration in seconds
  easing: Konva.Easings.Linear
});

var pts_p = arrow_p.points();
function increment_p() {
	text_p.x(text_p.getX()+160);
	pts_p[0] = pts_p[0] + 160;
	pts_p[2] = pts_p[2] + 160;
	itr2_arrow.points(pts_p);
}

var pc2=1;
// erase 5 from this list.
function list_erase_nextstep() {
        if(pc2 == 1){
		makeBold_list(1);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 2){
		makeBold_list(2);
		layer.add(text_p);
		layer.add(arrow_p);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 3){
		makeBold_list(3);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 4){
		stage.find('#list_arrow_1').destroy();
		// start the animation
		tween.play();
		//layer.add(arrow1);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 5){
		makeBold_list(-1);
		var shape = stage.find('#list_arrow_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#list_node_rec_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#list_node_pointer_rec_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#list_node_text_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
                layer.draw();
                pc2=pc2+1;
		increment_p();
                layer.draw();
        }else if(pc2 == 6){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc2=pc2+1;
	}
}

/* vim: set ts=4: */
