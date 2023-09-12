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
var rect_list = new Konva.Rect({
    x: 150,
    y: 280,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 1300,
    height: 520,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect_list);

// Create a function to draw list nodes
function drawListNode(x, y, label, id){
	// the rectangle represents list nodes.
	// for the value.
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
    
	// for the next pointer.
	let rect2 = new Konva.Rect({
		x: x,
		y: y+50,
		id:"next_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 100,
		height: 50,
	});
	layer.add(rect2);

	// for the prev pointer.
	let rect3 = new Konva.Rect({
		x: x,
		y: y+100,
		id:"prev_rec_" + id,
		stroke: '#555',
		strokeWidth: 5,
		fill: '#ddd',
		width: 100,
		height: 50,
	});
	layer.add(rect3);

	// value
	var text = new Konva.Text({
		x: x + 45,
		y: y + 20,
		text: label,
		id: "node_value_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text);

	// the text "next"
	var text_next = new Konva.Text({
		x: x + 30,
		y: y + 70,
		text: "next",
		id: "node_next_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text_next);

	// the text "prev"
	var text_prev = new Konva.Text({
		x: x + 35,
		y: y + 120,
		text: "prev",
		id: "node_prev_" + id,
		fontSize: 20,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	layer.add(text_prev);

	var arrow_next = new Konva.Arrow({
		points: [x+65, y+80, x+120, y+85, x+250, y],
		tension: 0.5,
		pointerLength: 10,
		pointerWidth: 10,
		id: "arrow_next_" + id,
		fill: 'green',
		stroke: 'green',
		strokeWidth: 5,
	});
	layer.add(arrow_next);

	var arrow_prev = new Konva.Arrow({
		points: [x+33, y+130, x-20, y+200, x-300, y+180, x-250, y],
		tension: 0.5,
		pointerLength: 10,
		pointerWidth: 10,
		id: "arrow_prev_" + id,
		fill: 'orange',
		stroke: 'orange',
		strokeWidth: 5,
	});
	layer.add(arrow_prev);
}

drawListNode(300, 460, '13', 1);
drawListNode(550, 460, '1', 2);
drawListNode(800, 460, '3', 3);
drawListNode(1050, 460, '9', 4);
var targetPts = [1050+65, 539, 1050+100, 542, 1552, 462];
stage.find('#arrow_next_4').points(targetPts);
targetPts = [333, 590, 220, 550, 260, 400, 1552, 462];
stage.find('#arrow_prev_1').points(targetPts);
//drawListNode(1300, 460, '9', 4);

var text_null = new Konva.Text({
	x: 1555,
	y: 460,
	text: "NULL",
	id: "node_text_null",
	fontSize: 20,
	fontFamily: 'Calibri',
	fill: 'black'
});
layer.add(text_null);

let rect_stack = new Konva.Rect({
	x: 1500,
	y: 50,
	id:"rec_p",
	stroke: '#555',
	strokeWidth: 5,
	fill: '#ddd',
	width: 100,
	height: 250,
});
layer.add(rect_stack);

let rect_p = new Konva.Rect({
	x: 1500,
	y: 100,
	id:"rec_p",
	stroke: '#555',
	strokeWidth: 5,
	fill: '#ddd',
	width: 100,
	height: 50,
});

var text_p = new Konva.Text({
	x: 1545,
	y: 110,
	text: "p",
	id: 'text_p',
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

var arrow_p = new Konva.Arrow({
	points: [1542, 123, 550, 455],
	tension: 0.5,
	pointerLength: 10,
	pointerWidth: 10,
	id: 'arrow_p',
	fill: 'yellow',
	stroke: 'yellow',
	strokeWidth: 5,
});
layer.add(rect_p);
layer.add(text_p);
layer.add(arrow_p);

// the code rectangle.
var rect_code = new Konva.Rect({
    x: 150,
    y: 80,
    id:"rec_code",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 750,
    height: 100,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect_code);

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
	"0.  p->next->prev = p->prev;",
        "1.  p->prev->next = p->next;",
	"2.  delete p;",
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
        let t=makeCode(160,80+(i*20),code_list[i],i+1+100);
        layer.add(t);
}

// draw the image
layer.draw();
stage.add(layer);

function hide_next() {
	stage.find('#arrow_next_1').hide();
	stage.find('#arrow_next_2').hide();
	stage.find('#arrow_next_3').hide();
	stage.find('#arrow_next_4').hide();
	stage.find('#arrow_next_5').hide();
	layer.draw();
}

function show_next() {
	stage.find('#arrow_next_1').show();
	stage.find('#arrow_next_2').show();
	stage.find('#arrow_next_3').show();
	stage.find('#arrow_next_4').show();
	stage.find('#arrow_next_5').show();
	layer.draw();
}

function hide_prev() {
	stage.find('#arrow_prev_1').hide();
	stage.find('#arrow_prev_2').hide();
	stage.find('#arrow_prev_3').hide();
	stage.find('#arrow_prev_4').hide();
	stage.find('#arrow_prev_5').hide();
	layer.draw();
}

function show_prev() {
	stage.find('#arrow_prev_1').show();
	stage.find('#arrow_prev_2').show();
	stage.find('#arrow_prev_3').show();
	stage.find('#arrow_prev_4').show();
	stage.find('#arrow_prev_5').show();
	layer.draw();
}

var pc2=1;
// remove 1 from this list.
function list_remove_nextstep() {
        if(pc2 == 1){
		makeBold_list(1);
		targetPts = [835, 590, 635, 670, 200, 690, 295, 460];
		stage.find('#arrow_prev_3').points(targetPts);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 2){
		makeBold_list(2);
		targetPts = [367, 540, 500, 420, 800, 460];
		stage.find('#arrow_next_1').points(targetPts);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 3){
		makeBold_list(3);
		var shape = stage.find('#list_node_rec_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#next_rec_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#prev_rec_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#node_value_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#node_next_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#node_prev_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#arrow_prev_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#arrow_next_2');
		shape.to({
			opacity: 0,
			duration: 2,
		});
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 4){
		makeBold_list(-1);
		shape = stage.find('#arrow_p');
		shape.to({
			opacity: 0,
			duration: 2,
		});
		shape = stage.find('#text_p');
		shape.to({
			opacity: 0,
			duration: 2,
		});
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 5){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc2=pc2+1;
	}
}

/* vim: set ts=4: */
