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

function makeContent(x,y,str,id) {
    let content = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#900C3F',
        width: 400,
        padding: 20,
    });
	layer.add(content);
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
    text: "",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#581845',
});

var arrowLeft1 = new Konva.Arrow({
    points: [945, 350, 1100, 200, 1005, 150],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrowrleft1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var arrowLeft2 = new Konva.Arrow({
    points: [945, 450, 1100, 300, 1005, 250],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrowleft2",
    fill: 'yellow',
    stroke: 'yellow',
    strokeWidth: 5,
});

var arrowLeft3 = new Konva.Arrow({
    points: [945, 550, 1100, 400, 1005, 250],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrowleft2",
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
});

/* for the arrow */
var arrowarray1 = [945, 450, 1100, 300, 1005, 250];

function moveArrow(){
    arrowarray1[5] = arrowarray1[5] - 100;
    arrowarray1[3] = arrowarray1[3] - 100;
    stage.find('#arrowleft2').points(arrowarray1);
}

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

// hard code here, we assume we only have 9 lines of code.
function makeBold(id){
	for(let i=1;i<=9;i++){
		if(i!=id){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+id).fontStyle('bold');
		}
	}
}

var code=["1. int x = 10, y = 15;",
    "2. int *a = &x;",
    "3. cout << x << \" \" << y << endl;",
    "4. int *b = &y;",
    "5. *a = x * *b;",
    "6. cout << x << \" \" << y << endl;",
    "7. int *c = b;",
    "8. *c = 25;",
    "9. cout << x << \" \" << y << endl;",
];


for (let i=0;i<code.length;i++){
	// the array starts from index 0, but we want ids to be counted from index 1.
	let t=makeCode(20,60+(i*20),code[i],i+1);
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

var message=["$",
    "",
    "",
    ""];

function updateMessage(msg,i) {
        stage.find('#text_msg'+i).text(msg);
}

// draw that $ sign, which is a command line prompt.
makeText(60,400,message[0],'msg0');

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

var pc=1;
function nextstep() {
	if(pc == 1){
		makeBold(pc);
		makeText(650,120,"int x",'x');
		// this has to be after makeMemory so that the memory doesn't overwrite this.
		makeContent(870,120,"10",'x_value');
		makeText(650,220,"int y",'y');
		makeContent(870,220,"15",'y_value');
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
		makeText(650,320,"int *a",'a');
		makeContent(870,320,"0x1008",'a_value');
		// add the arrow here.
                layer.add(arrowLeft1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
		updateMessage("$ 10 15",0);
                makeText(60,420,message[1],'msg1');
		updateMessage("$ ",1);
                makeText(60,440,message[2],'msg2');
                makeText(60,460,message[3],'msg3');
		// stage.find('#console_text').text('$ 10 15');
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(pc);
		makeText(650,420,"int *b",'b');
		makeContent(870,420,"0x1010",'b_value');
		// add the second arrow here.
                layer.add(arrowLeft2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(pc);
		// following pointer a to the address which is pointed to by a, and store 150 to that address.
		// why 150? because it's x * *b, and *b is y, which is 15, whereas x is 10, and 10*15=150.
                stage.find('#x_value').text('150');
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		makeBold(pc);
		updateMessage("$ 150 15",1);
		updateMessage("$ ",2);
		// stage.find('#console_text').text('$ 150 15');
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){
		makeBold(pc);
		makeText(650,520,"int *c",'c');
		makeContent(870,520,"0x1010",'c_value');
		// add the 3rd arrow here.
                layer.add(arrowLeft3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 8){
		makeBold(pc);
		// following pointer c to the address which is pointed to by c, and store 25 to that address.
		// and because we assigned b to c, so b and c are now both pointing to the address 0x16, which stores the variable y.
                stage.find('#y_value').text('25');
		layer.draw();
		pc=pc+1;
	}else if(pc == 9){
		makeBold(pc);
		updateMessage("$ 150 25",2);
		updateMessage("$ ",3);
		// stage.find('#console_text').text('$ 150 25');
		layer.draw();
		pc=pc+1;
	}else if(pc == 10){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
		pc=pc+1;
	}
}

/* vim: set ts=4: */
