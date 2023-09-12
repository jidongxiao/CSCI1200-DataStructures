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
makeMemory(750,100,10,200,50);
//makeText(750+250, 75, "0x1030", "addr0");
//makeText(750+250, 175, "0x1028", "addr1");
//makeText(750+250, 275, "0x1020", "addr2");
//makeText(750+250, 375, "0x1018", "addr3");
//makeText(750+250, 475, "0x1010", "addr4");
//makeText(750+250, 575, "0x1008", "addr5");
//makeText(750+250, 675, "0x1000", "addr6");

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
makeHeap(1200,100,12,200,50);
makeText(1480, 74, "0x0258", "haddr0");
makeText(1480, 124, "0x0250", "haddr0");
makeText(1480, 174, "0x0248", "haddr1");
makeText(1480, 224, "0x0240", "haddr0");
makeText(1480, 274, "0x0238", "haddr2");
makeText(1480, 324, "0x0230", "haddr0");
makeText(1480, 374, "0x0228", "haddr3");
makeText(1480, 424, "0x0220", "haddr0");
makeText(1480, 474, "0x0218", "haddr4");
makeText(1480, 524, "0x0210", "haddr0");
makeText(1480, 574, "0x0208", "haddr5");
makeText(1480, 624, "0x0200", "haddr0");

// the code rectangle.
var rect1 = new Konva.Rect({
    x: 20,
    y: 60,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 400,
    height: 250,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var rect2 = new Konva.Rect({
    x: 20,
    y: 400,
    id:"console",
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

var rect3 = new Konva.Rect({
    x: 1450,
    y: 670,
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
    y: 345,
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

var arrow1 = new Konva.Arrow({
    points: [880, 125, 1200, 445],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

var arrow2 = new Konva.Arrow({
    points: [1280, 428, 1140, 350, 1200, 295],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow2",
    fill: 'yellow',
    stroke: 'yellow',
    strokeWidth: 5,
});

var arrow3 = new Konva.Arrow({
    points: [1280, 378, 1140, 450, 1200, 645],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrow3",
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
});

/* for the arrow */
var arrowarray2 = [880, 248, 1200, 505];

// move arrow 2 up
function moveArrowUp(){
    arrowarray2[3] = arrowarray2[3] - 200;
    stage.find('#arrow2').points(arrowarray2);
}

var arrowarray1 = [880, 148, 1200, 305];

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
makeText(750+690, 670, "legend (for heap)", "legend");
makeText(1490, 715, "memory not allocated", "free");
makeText(1490, 755, "memory allocated", "allocated");
makeLegendBox(1460, 735, '#ddd');
makeLegendBox(1460, 780, '#ecbeb4');

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
        width: 550,
        padding: 20,
    });
}

var code=[
	"0.  double** a = new double* [rows];",
	"1.  for(int i = 0; i < rows; i++) {",
	"2.  \t\t\t a[i] = new double[cols];",
	"3.  \t\t\t for (int j=0; j<cols; j++) {",
	"4.  \t\t\t \t\t\t a[i][j] = double(i+1) / double(j+1);",
	"5.  \t\t\t }",
	"6.  }",
	"7.  for(int i = 0; i < rows; i++) {",
	"8.  \t\t\t delete [] a[i];",
	"9.  }",
	"10. delete [] a;",
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

// make multiple lines bold
function makeBold2(id, len){
	for(let i=1; i<=code.length; i++){
		if( i<id || i>=(id+len) ){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+i).fontStyle('bold');
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
    "",
    ""];

function updateMessage(msg,i) {
        stage.find('#text_msg'+i).text(msg);
}

// draw that $ sign, which is a command line prompt.
makeText(60,420,message[0],'msg0');

var line1 = new Konva.Line({
        points: [750, 175, 950, 175],
        stroke: '#343434',
        strokeWidth: 5,
      });

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

var pc=1;
function nextstep() {
	if(pc == 1){
		makeBold(pc);
		makeText(600,100,"double ** a",'a');
		makeContent(800,100,"0x0220",'a_value');
		makeText(1020,400,"double [2]",'a_heap');
		// changing color to mark it as allocated
                stage.find('#hrec_5').fill('#ecbeb4');
                stage.find('#hrec_6').fill('#ecbeb4');
		// heap value
		makeContent(1262,345,"\t ?",'a_heap_value1');
		makeContent(1262,395,"\t ?",'a_heap_value0');
		// heap label
		makeText(1400, 350, "a[1]", "haddr4");
		makeText(1400, 400, "a[0]", "haddr5");
		// add the 1st arrow here.
                layer.add(arrow1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
		makeText(650,135,"int i",'i');
		makeContent(820,135,"0",'i_value');
		layer.add(line1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
                stage.find('#a_heap_value0').text('0x0238');
		// changing color to mark it as allocated
                stage.find('#hrec_1').fill('#ecbeb4');
                stage.find('#hrec_2').fill('#ecbeb4');
                stage.find('#hrec_3').fill('#ecbeb4');
		// add the 2nd arrow here.
                layer.add(arrow2);
		// heap label
		makeText(1400, 250, "a[0][0]", "a0_haddr0");
		makeText(1400, 200, "a[0][1]", "a0_haddr1");
		makeText(1400, 150, "a[0][2]", "a0_haddr2");
		// heap value
		makeContent(1262,145,"\t ?",'a0_heap_value2');
		makeContent(1262,195,"\t ?",'a0_heap_value1');
		makeContent(1262,245,"\t ?",'a0_heap_value0');
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(pc);
		makeText(650,160,"int j",'j');
		makeContent(820,160,"0",'j_value');
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(pc);
                stage.find('#a0_heap_value0').text('1.00');
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		makeBold(pc);
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){	// inner loop, 2nd iteration, update j first.
		makeBold(4);
                stage.find('#j_value').text('1');
		layer.draw();
		pc=pc+1;
	}else if(pc == 8){
		makeBold(5);
                stage.find('#a0_heap_value1').text('0.50');
		layer.draw();
		pc=pc+1;
	}else if(pc == 9){
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 10){	// inner loop, 3rd iteration, update j first.
		makeBold(4);
                stage.find('#j_value').text('2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 11){
		makeBold(5);
                stage.find('#a0_heap_value2').text('0.33');
		layer.draw();
		pc=pc+1;
	}else if(pc == 12){	// close curly brace of inner loop.
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 13){	// open curly brace
		makeBold(4);
                stage.find('#j_value').text('3');
		layer.draw();
		pc=pc+1;
	}else if(pc == 14){	// close curly brace of inner loop.
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 15){	// close curly bracket for outter loop.
		makeBold(7);
		layer.draw();
		pc=pc+1;
	}else if(pc == 16){	// open curly brace, update i
		makeBold(2);
                stage.find('#i_value').text('1');
		layer.draw();
		pc=pc+1;
	}else if(pc == 17){
		makeBold(3);
                stage.find('#a_heap_value1').text('0x0200');
		// changing color to mark it as allocated
                stage.find('#hrec_8').fill('#ecbeb4');
                stage.find('#hrec_9').fill('#ecbeb4');
                stage.find('#hrec_10').fill('#ecbeb4');
		// add the 3rd arrow here.
                layer.add(arrow3);
		// heap label
		makeText(1400, 600, "a[1][0]", "a1_haddr0");
		makeText(1400, 550, "a[1][1]", "a1_haddr1");
		makeText(1400, 500, "a[1][2]", "a1_haddr2");
		// heap value
		makeContent(1262,495,"\t ?",'a1_heap_value2');
		makeContent(1262,545,"\t ?",'a1_heap_value1');
		makeContent(1262,595,"\t ?",'a1_heap_value0');
		layer.draw();
		pc=pc+1;
	}else if(pc == 18){	// i=1, again start inner loop, reset j to 0. repeat the inner loop one more time.
		makeBold(4);
                stage.find('#j_value').text('0');
		layer.draw();
		pc=pc+1;
	}else if(pc == 19){
		makeBold(5);
                stage.find('#a1_heap_value0').text('2.00');
		layer.draw();
		pc=pc+1;
	}else if(pc == 20){
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 21){	// inner loop, 2nd iteration, update j first.
		makeBold(4);
                stage.find('#j_value').text('1');
		layer.draw();
		pc=pc+1;
	}else if(pc == 22){
		makeBold(5);
                stage.find('#a1_heap_value1').text('1.00');
		layer.draw();
		pc=pc+1;
	}else if(pc == 23){
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 24){	// inner loop, 3rd iteration, update j first.
		makeBold(4);
                stage.find('#j_value').text('2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 25){
		makeBold(5);
                stage.find('#a1_heap_value2').text('0.66');
		layer.draw();
		pc=pc+1;
	}else if(pc == 26){	// close curly brace of inner loop.
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 27){	// open curly brace
		makeBold(4);
                stage.find('#j_value').text('3');
		layer.draw();
		pc=pc+1;
	}else if(pc == 28){	// close curly brace of inner loop.
		makeBold(6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 29){	// close curly bracket for outter loop.
		makeBold(7);
		layer.draw();
		pc=pc+1;
	}else if(pc == 30){	// open curly brace, update i, and because i is 2 now, get out of the outter for loop.
		makeBold(2);
                stage.find('#i_value').text('2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 31){	// close curly brace.
		makeBold(7);
		layer.draw();
		pc=pc+1;
	}else if(pc == 32){	// start the next for loop, reset i, reclaim j.
		makeBold(8);
                stage.find('#i_value').text('0');
                stage.find('#j_value').text('');
                stage.find('#text_j').text('');
		layer.draw();
		pc=pc+1;
	}else if(pc == 33){	// delete a[0]
		makeBold(9);
		// changing color to mark it as reclaimed
                stage.find('#hrec_1').fill('#ddd');
                stage.find('#hrec_2').fill('#ddd');
                stage.find('#hrec_3').fill('#ddd');
		layer.draw();
		pc=pc+1;
	}else if(pc == 34){	// close curly brace.
		makeBold(10);
		layer.draw();
		pc=pc+1;
	}else if(pc == 35){	// 2nd iteration of the for loop, update i.
		makeBold(8);
                stage.find('#i_value').text('1');
		layer.draw();
		pc=pc+1;
	}else if(pc == 36){	// delete a[1]
		makeBold(9);
		// changing color to mark it as reclaimed
                stage.find('#hrec_8').fill('#ddd');
                stage.find('#hrec_9').fill('#ddd');
                stage.find('#hrec_10').fill('#ddd');
		layer.draw();
		pc=pc+1;
	}else if(pc == 37){	// close curly brace.
		makeBold(10);
		layer.draw();
		pc=pc+1;
	}else if(pc == 38){	// update i, and now i is 2, get out of the loop.
		makeBold(8);
                stage.find('#i_value').text('2');
		layer.draw();
		pc=pc+1;
	}else if(pc == 39){	// close curly brace.
		makeBold(10);
		layer.draw();
		pc=pc+1;
	}else if(pc == 40){	// delete a
		makeBold(11);
                stage.find('#hrec_5').fill('#ddd');
                stage.find('#hrec_6').fill('#ddd');
		layer.draw();
		pc=pc+1;
	}else if(pc == 41){
		alert("End of animation! Refresh the page if you want to re-run the animation.");
		pc=pc+1;
	}
}

/* vim: set ts=4: */
