// Author: Jidong Xiao 
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 2000,
    height: 1000
});

var count=0;

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
    width: 560,
    height: 250,
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
    height: 250,
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

var text_index = new Konva.Text({
	x: 220,
	y: 550,
	text: "index",
	id: "vec_index",
	fontSize: 26,
	fontFamily: 'Calibri',
	fill: '#17202a'
});

// the code rectangle.
var rect1 = new Konva.Rect({
    x: 70,
    y: 60,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 550,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(rect1)

function makeCode(x,y,str,id) {
    return new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'line'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 550,
        padding: 20,
    });
}

var code=[
        "0.  void erase_from_vector(unsigned int i,  vector<int>& v) {",
        "1.  \t\t\t for (int index = i; index < v.size()-1; index++) {",
        "2.  \t\t\t \t\t\t v[index] = v[index+1];",
        "3.  \t\t\t }",
        "4.  \t\t\t v.pop_back();",
        "5.  }",
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

// draw the image
layer.draw();
stage.add(layer);

var pc=1;
// erase 5 from this vector.
function vec_erase_nextstep() {
        if(pc == 1){
		makeBold(pc);
                layer.draw();
                pc=pc+1;
        }else if(pc == 2){
		makeBold(pc);
		layer.add(text_index);
                layer.draw();
                pc=pc+1;
        }else if(pc == 3){
		makeBold(pc);
		// highlight the one we are going to erase.
		stage.find('#node_rec_2').fill('#f4d03f');
                layer.draw();
                pc=pc+1;
        }else if(pc == 4){
		stage.find('#node_text_2').text('8');
                layer.draw();
                pc=pc+1;
        }else if(pc == 5){
		makeBold(4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 6){
		makeBold(2);
		// increment x by 100.
		text_index.x(text_index.getX()+100);
                layer.draw();
                pc=pc+1;
        }else if(pc == 7){
		makeBold(3);
		// highlight the one we are going to update.
		stage.find('#node_rec_3').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_2').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 8){
		stage.find('#node_text_3').text('1');
                layer.draw();
                pc=pc+1;
        }else if(pc == 9){
		makeBold(4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 10){
		makeBold(2);
		// increment x by 100.
		text_index.x(text_index.getX()+100);
                layer.draw();
                pc=pc+1;
        }else if(pc == 11){
		makeBold(3);
		// highlight the one we are going to update.
		stage.find('#node_rec_4').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_3').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 12){
		stage.find('#node_text_4').text('9');
                layer.draw();
                pc=pc+1;
        }else if(pc == 13){
		makeBold(4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 14){
		makeBold(2);
		// increment x by 100.
		text_index.x(text_index.getX()+100);
                layer.draw();
                pc=pc+1;
        }else if(pc == 15){
		makeBold(4);
                layer.draw();
                pc=pc+1;
        }else if(pc == 16){
		makeBold(5);
		text_index.destroy();
		// highlight the one we are going to update.
		stage.find('#node_rec_5').fill('#f4d03f');
		// and restore the previous one.
		stage.find('#node_rec_4').fill('#ddd');
                layer.draw();
                pc=pc+1;
        }else if(pc == 17){
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
        }else if(pc == 18){
		makeBold(6);
                layer.draw();
                pc=pc+1;
        }else if(pc == 19){
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

var pc2=1;
// erase 5 from this list.
function list_erase_nextstep() {
        if(pc2 == 1){
		stage.find('#list_arrow_1').destroy();
		// start the animation
		tween.play();
		//layer.add(arrow1);
                layer.draw();
                pc2=pc2+1;
        }else if(pc2 == 2){
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
        }else if(pc2 == 3){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
                layer.draw();
                pc2=pc2+1;
	}
}

/* vim: set ts=4: */
