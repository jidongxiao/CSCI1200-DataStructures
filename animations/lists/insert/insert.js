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

// the rectangle which contains the list.
var rect3 = new Konva.Rect({
    x: 250,
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

	// value
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

drawListNode(300, 460, '7', 1);
drawListNode(450, 460, '5', 2);
drawListNode(600, 460, '8', 3);
drawListNode(750, 460, '1', 4);
drawListNode(900, 460, '9', 4);

var text_null = new Konva.Text({
	x: 1055,
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
	x: 495,
	y: 610,
	text: "p",
	id: 'itr_p',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

var arrow_p = new Konva.Arrow({
	points: [500, 605, 500, 535],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'arrow_p',
	fill: 'yellow',
	stroke: 'yellow',
	strokeWidth: 5,
});
layer.add(text_p);
layer.add(arrow_p);

// for pointer q
var text_q = new Konva.Text({
	x: 645,
	y: 710,
	text: "q",
	id: 'itr_q',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

var arrow_q = new Konva.Arrow({
	points: [650, 705, 650, 635],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'arrow_q',
	fill: 'yellow',
	stroke: 'yellow',
	strokeWidth: 5,
});

// the code rectangle.
var rect_list = new Konva.Rect({
    x: 250,
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
        width: 750,
        padding: 20,
    });
}

var code_list=[
        "0.  Node<T> * q = new Node<T>; \t\t\t \t\t\t // create a new node",
	"1.  q->value = x; \t\t\t \t\t\t \t\t\t \t\t\t // store x in this node",
        "2.  q->next = p->next; \t\t\t \t\t\t // make its successor be the current successor of p",
	"3.  p->next = q; \t\t\t \t\t\t \t\t\t \t\t\t // make p's successor be this new node",
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
        let t=makeCode(260,60+(i*20),code_list[i],i+1+100);
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
function list_insert_nextstep() {
        if(pc2 == 1){
		makeBold_list(1);
		drawListNode(600, 560, '?', 6);
		layer.add(text_q);
		layer.add(arrow_q);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 2){
		makeBold_list(2);
		stage.find('#list_node_text_6').text('4');
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 3){
		makeBold_list(3);
		targetPoints = [720, 585, 700, 550, 600, 485];
		stage.find('#list_arrow_6').points(targetPoints);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 4){
		makeBold_list(4);
		targetPoints = [560, 485, 565, 530, 600, 585];
		stage.find('#list_arrow_2').points(targetPoints);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 5){
		makeBold_list(-1);
		var shape = stage.find('#arrow_p');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#arrow_q');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#itr_p');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#itr_q');
		shape.to({
			opacity: 0,
			duration: 2,
		});
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 6){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc2=pc2+1;
	}
}

/* vim: set ts=4: */
