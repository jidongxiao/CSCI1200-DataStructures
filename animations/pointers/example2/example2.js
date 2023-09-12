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
makeText(800+250, -20, "0x1000", "addr0");
makeText(800+250, 80, "0x1008", "addr2");
makeText(800+250, 180, "0x1010", "addr3");
makeText(800+250, 280, "0x1018", "addr4");
makeText(800+250, 380, "0x1020", "addr5");
makeText(800+250, 480, "0x1028", "addr6");

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
    points: [920, 250, 1100, 200, 1005, 150],
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

// hard code here, we assume we only have 3 lines of code.
function makeBold(id){
	for(let i=1;i<=3;i++){
		if(i!=id){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+id).fontStyle('bold');
		}
	}
}

var code=["1. int * p, q;",
    "2. float *s, *t;",
    "3. *p = 15;"];

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

var pc=1;

function nextstep() {
	if(pc == 1){
		makeBold(pc);
		t=makeText(650,120,"int *p",'p');
		// this has to be after makeMemory so that the memory doesn't overwrite this.
		makeContent(870,120,"?",'value1');
		makeText(650,220,"int q",'q');
		makeContent(870,220,"?",'value2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
		makeText(650,320,"float *s",'s');
		// at first, it's just garbage.
		makeContent(870,320,"?",'value3');
		makeText(650,420,"float *t",'t');
		// at first, it's just garbage.
		makeContent(870,420,"?",'value4');
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		alert("p is not initialized!");
		pc=pc+1;
	}
}

/* vim: set ts=4: */
