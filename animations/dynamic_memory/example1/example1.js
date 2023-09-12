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

// create stack
makeMemory(750,100,6,200,100);
makeText(750+250, 175, "0x1014", "addr0");
makeText(750+250, 275, "0x1010", "addr1");
makeText(750+250, 375, "0x100C", "addr2");
makeText(750+250, 475, "0x1008", "addr3");
makeText(750+250, 575, "0x1004", "addr4");
makeText(750+250, 675, "0x1000", "addr5");

function makeHeap(xstart,ystart,bufferSize,w,h) {
    for(let i=0;i<bufferSize;i++){
        let tr = new Konva.Rect({
            x: xstart,
            y: ystart+i*h,
            id:"hrec_"+i,	// heap rectangle
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

// create heap
makeHeap(1200,100,6,200,100);
makeText(750+690, 80, "0x0218", "haddr0");
makeText(750+690, 180, "0x0214", "haddr1");
makeText(750+690, 280, "0x0210", "haddr2");
makeText(750+690, 380, "0x020C", "haddr3");
makeText(750+690, 480, "0x0208", "haddr4");
makeText(750+690, 580, "0x0204", "haddr5");

// the code rectangle.
var rect1 = new Konva.Rect({
    x: 20,
    y: 60,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 320,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var rect2 = new Konva.Rect({
    x: 20,
    y: 470,
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

var rect3 = new Konva.Rect({
    x: 1450,
    y: 650,
    id:"legend_box",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ffffff',
    width: 250,
    height: 150,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

function makeLegendBox(xstart,ystart,color){
	var rect = new Konva.Rect({
    x: xstart,
    y: ystart,
    id:"legend_box",
    stroke: '#555',
    strokeWidth: 5,
    fill: color,
    width: 40,
    height: 25,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
	});
	layer.add(rect);
}

var stackText = new Konva.Text({
    x: 820,
    y: 35,
    id:"stack",
    text: "Stack",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var heapText = new Konva.Text({
    x: 1270,
    y: 35,
    id:"heap",
    text: "Heap",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var codeLabel = new Konva.Text({
    x: 150,
    y: 405,
    id:"code",
    text: "Code",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var consoleLabel = new Konva.Text({
    x: 130,
    y: 735,
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

var arrow1 = new Konva.Arrow({
    points: [880, 148, 1200, 395],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var arrow2 = new Konva.Arrow({
    points: [880, 248, 1200, 595],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow2",
    fill: 'yellow',
    stroke: 'yellow',
    strokeWidth: 5,
});

var arrow3 = new Konva.Arrow({
    points: [880, 348, 1200, 595],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow3",
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
});

/* for the arrow */
var arrowarray2 = [880, 248, 1200, 595];

// move arrow 2 up
function moveArrowUp(){
    arrowarray2[3] = arrowarray2[3] - 200;
    stage.find('#arrow2').points(arrowarray2);
}

var arrowarray1 = [880, 148, 1200, 395];

// move arrow 1 down
function moveArrowDown(){
    arrowarray1[3] = arrowarray1[3] + 200;
    stage.find('#arrow1').points(arrowarray1);
}

// box for code
layer.add(rect1);
// box for console
layer.add(rect2);
// box for legend
layer.add(rect3);
// legend
makeText(750+690, 650, "legend (for heap)", "legend");
makeText(1490, 695, "memory not allocated", "free");
makeText(1490, 735, "memory allocated", "allocated");
makeLegendBox(1460, 715, '#ddd');
makeLegendBox(1460, 760, '#ecbeb4');

layer.add(stackText);
layer.add(heapText);
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

var code=["1. int * p = new int;",
	"2. *p = 17;",
	"3. cout << *p << endl;",
	"4. int * q;",
	"5. q = new int;",
	"6. *q = *p;",
	"7. *p = 27;",
	"8. cout << *p << \" \" << *q << endl;",
	"9. int * temp = q;",
	"10. q = p;",
	"11. p = temp;",
	"12. cout << *p << \" \" << *q << endl;",
	"13. delete p;",
	"14. delete q;",
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
makeText(60,480,message[0],'msg0');

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

var pc=1;
function nextstep() {
	if(pc == 1){
		makeBold(pc);
		makeText(650,120,"int * p",'p');
		makeText(1120,320,"int",'p_heap');
		// changing color to mark it as allocated
                stage.find('#hrec_2').fill('#ecbeb4');
		// this has to be after makeMemory so that the memory doesn't overwrite this.
		makeContent(800,120,"0x020C",'p_value');
		makeContent(1280,320,"?",'p_heap_value');
		// add the arrow here.
                layer.add(arrow1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
                stage.find('#p_heap_value').text('17');
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
		updateMessage("$ 17",0);
                makeText(60,500,message[1],'msg1');
		updateMessage("$ ",1);
                makeText(60,520,message[2],'msg2');
                makeText(60,540,message[3],'msg3');
		// stage.find('#console_text').text('$ 10 15');
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(pc);
		makeText(650,220,"int * q",'q');
		makeContent(800,220,"\t\t\t\t?",'q_value');
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(pc);
		makeText(1120,520,"int",'q_heap');
		// changing color to mark it as allocated
                stage.find('#hrec_4').fill('#ecbeb4');
                stage.find('#q_value').text('0x0204');
		makeContent(1280,520,"?",'q_heap_value');
		// add the second arrow here.
                layer.add(arrow2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		makeBold(pc);
                stage.find('#q_heap_value').text('17');
		// stage.find('#console_text').text('$ 150 15');
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){
		makeBold(pc);
                stage.find('#p_heap_value').text('27');
		layer.draw();
		pc=pc+1;
	}else if(pc == 8){
		makeBold(pc);
		updateMessage("$ 27 17",1);
		updateMessage("$ ",2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 9){
		makeBold(pc);
		makeText(650,320,"int * temp",'temp');
		makeContent(800,320,"0x0204",'temp_value');
		// add the 3rd arrow here.
                layer.add(arrow3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 10){
		makeBold(pc);
                stage.find('#q_value').text('0x020C');
		moveArrowUp();
		layer.draw();
		pc=pc+1;
	}else if(pc == 11){
		makeBold(pc);
                stage.find('#p_value').text('0x0204');
		moveArrowDown();
		layer.draw();
		pc=pc+1;
	}else if(pc == 12){
		makeBold(pc);
		updateMessage("$ 17 27",2);
		updateMessage("$ ",3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 13){
		makeBold(pc);
		// changing color to mark it as reclaimed
                stage.find('#hrec_4').fill('#ddd');
                stage.find('#text_q_heap').text('');
		layer.draw();
		pc=pc+1;
	}else if(pc == 14){
		makeBold(pc);
		// changing color to mark it as reclaimed
                stage.find('#hrec_2').fill('#ddd');
                stage.find('#text_p_heap').text('');
		layer.draw();
		pc=pc+1;
	}else if(pc == 15){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
		pc=pc+1;
	}
}

/* vim: set ts=4: */
