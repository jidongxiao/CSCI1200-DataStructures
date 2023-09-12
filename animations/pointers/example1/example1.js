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

function makeText(x,y,str,id) {
    let text = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'prog'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 400,
        padding: 20,
        // align: 'center',
    });
	layer.add(text);
}

function makeContent(x,y,str,id) {
    let text = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'cont_'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#900C3F',
        width: 400,
        padding: 20,
    });
	layer.add(text);
}

function makeMemory(xstart,ystart,bufferSize,w,h) {
    for(let i=0;i<bufferSize;i++){
        let tr = new Konva.Rect({
            x: xstart,
            y: ystart+i*h,
            id:"brec"+i,
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
    }	// end of for loop
}

makeMemory(800,0,6,200,100);
makeText(800+350, -20, "0x1000", "addr0");
makeText(800+350, 80, "0x1008", "addr2");
makeText(800+350, 180, "0x1010", "addr3");
makeText(800+350, 280, "0x1018", "addr4");
makeText(800+350, 380, "0x1020", "addr5");
makeText(800+350, 480, "0x1028", "addr6");

var rect1 = new Konva.Rect({
    x: 20,
    y: 60,
    id:"prec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 220,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var rect2 = new Konva.Rect({
    x: 20,
    y: 370,
    id:"console",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 220,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var memoryText = new Konva.Text({
    x: 830,
    y: 635,
    id:"memory",
    text: "Memory",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var codeLabel = new Konva.Text({
    x: 150,
    y: 305,
    id:"code",
    text: "Code",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var consoleLabel = new Konva.Text({
    x: 130,
    y: 635,
    id:"console",
    text: "Console",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var consoleText = new Konva.Text({
    x: 60,
    y: 400,
    id:"console_text",
    text: "$",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#581845',
});

var arrowLeft1 = new Konva.Arrow({
    points: [925, 250, 1100, 200, 1005, 150],
        tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrowright1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

// box for code
layer.add(rect1);
// box for console
layer.add(rect2);

layer.add(memoryText);
layer.add(consoleLabel);
layer.add(codeLabel);
layer.add(consoleText);

function makeCode(x,y,str,id) {
    return new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'line'+id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 400,
        padding: 20,
    });
}

// hard code here, we assume we only have 8 lines of code.
function makeBold(id){
	for(let i=1;i<=8;i++){
		if(i!=id){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+id).fontStyle('bold');
		}
	}
}

var code=["1. float x = 15.5;",
    "2. float *p;",
    "3. p = &x;",
    "4. *p = 72; ",
    "5. if (x > 20 )",
    "6. \t\t cout << \"Bigger\\n\";",
    "7. else",
    "8. \t\t cout << \"Smaller\\n\"; "];

for (let i=0;i<code.length;i++){
	// the array starts from index 0, but we want ids to be counted from index 1.
	let t=makeCode(20,80+(i*20),code[i],i+1);
	layer.add(t);
}

// defining the message box
var msg_box = new Konva.Rect({
    x: 900,
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

// layer.add(msg_box);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

//t=makeContent(850,220,"0x8",'value2');
//layer.add(t);

var pc=1;

function nextstep() {
	if(pc == 1){
		makeBold(pc);
		makeText(650,120,"float x",'x');
		// this has to be after makeMemory so that the memory doesn't overwrite this.
		makeContent(850,120,"15.5",'value1');
               /* update last occurrence of c */
        //        stage.find('#text_c').text("0");
        /* highlight the box for c */
        //stage.find('#lastseenbuf_2').fill("#5f9ea0");
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
		makeText(650,220,"float *p",'p');
		// at first, it's just garbage.
		makeContent(850,220,"\ \ \ ?",'value2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
		// p takes the address of x.
		stage.find('#cont_value2').text('0x1008');
		// add the arrow here.
		layer.add(arrowLeft1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(pc);
		stage.find('#cont_value1').text('72.0');
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(pc);
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		makeBold(pc);
		stage.find('#console_text').text('$ Bigger');
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
	}
}

/* vim: set ts=4: */
