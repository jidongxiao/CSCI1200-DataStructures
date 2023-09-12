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

makeMemory(800,0,12,200,50);
makeText(800+350, -20, "0x1000", "addr0");
makeText(800+350, 5, "0x1004", "addr1");
makeText(800+350, 30, "0x1008", "addr2");
makeText(800+350, 80, "0x1010", "addr3");
makeText(800+350, 130, "0x1018", "addr4");
makeText(800+350, 180, "0x1020", "addr5");
makeText(800+350, 230, "0x1028", "addr6");
makeText(800+350, 280, "0x1030", "addr7");
makeText(800+350, 330, "0x1038", "addr8");
makeText(800+350, 380, "0x1040", "addr9");
makeText(800+350, 430, "0x1048", "addr10");
makeText(800+350, 480, "0x1050", "addr11");
makeText(800+350, 530, "0x1058", "addr12");

var line1 = new Konva.Line({
	points: [800, 25, 1000, 25],
        stroke: '#343434',
        strokeWidth: 5,
      });

layer.add(line1);

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
    points: [950, 580, 1100, 400, 1005, 50],
    tension: 0.5,
    pointerLength: 10,
    pointerWidth: 10,
    id: "arrowleft1",
    fill: 'green',
    stroke: 'green',
    strokeWidth: 5,
});

/* for the arrow */
var arrowarray1 = [950, 580, 1100, 400, 1005, 50];

// move downwards
function moveArrow(){
    arrowarray1[5] = arrowarray1[5] + 50;
    arrowarray1[3] = arrowarray1[3] + 50;
    stage.find('#arrowleft1').points(arrowarray1);
}

// move downwards
function moveArrow2(){
    arrowarray1[5] = arrowarray1[5] + 50;
    //arrowarray1[3] = arrowarray1[3] + 10;
    stage.find('#arrowleft1').points(arrowarray1);
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

// hard code here, we assume we only have 5 lines of code.
function makeBold(id){
	for(let i=1;i<=5;i++){
		if(i!=id){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+id).fontStyle('bold');
		}
	}
}

var code=["1. const int n = 10;",
    "2. double a[n];",
    "3. double *p;",
    "4. for( p=a; p<a+n; ++p )",
    "5. \t\t *p = sqrt( p-a );",
];


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
		makeText(650,10,"const int n",'n');
		// this has to be after makeMemory so that the memory doesn't overwrite this.
		makeContent(870,10,"10",'n_value');
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		makeBold(pc);
		makeText(650,50,"double[] a",'a');
		makeContent(870,50,"?",'a0_value');
		makeContent(870,100,"?",'a1_value');
		makeContent(870,150,"?",'a2_value');
		makeContent(870,200,"?",'a3_value');
		makeContent(870,250,"?",'a4_value');
		makeContent(870,300,"?",'a5_value');
		makeContent(870,350,"?",'a6_value');
		makeContent(870,400,"?",'a7_value');
		makeContent(870,450,"?",'a8_value');
		makeContent(870,500,"?",'a9_value');
		makeText(1050,50,"a[0]",'a0');
		makeText(1050,100,"a[1]",'a1');
		makeText(1050,150,"a[2]",'a2');
		makeText(1050,200,"a[3]",'a3');
		makeText(1050,250,"a[4]",'a4');
		makeText(1050,300,"a[5]",'a5');
		makeText(1050,350,"a[6]",'a6');
		makeText(1050,400,"a[7]",'a7');
		makeText(1050,450,"a[8]",'a8');
		makeText(1050,500,"a[9]",'a9');
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(pc);
		makeText(650,550,"double *p",'p');
		makeContent(870,550,"?",'p_value');
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(pc);
		// add the arrow here.
                layer.add(arrowLeft1);
                stage.find('#p_value').text('0x1008');
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(pc);
                stage.find('#a0_value').text('0.00');
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		// because it's a loop, so we just go between line 4 and line 5.
		makeBold(4);
                stage.find('#p_value').text('0x1010');
		moveArrow();
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){
		// because it's a loop, so we just go between line 4 and line 5.
		makeBold(5);
                stage.find('#a1_value').text('1.00');
		layer.draw();
		pc=pc+1;
	}else if(pc == 8){
		makeBold(4);
                stage.find('#p_value').text('0x1018');
		moveArrow();
		layer.draw();
		pc=pc+1;
	}else if(pc == 9){
		makeBold(5);
                stage.find('#a2_value').text('1.44');	// sqrt(2)
		layer.draw();
		pc=pc+1;
	}else if(pc == 10){
		makeBold(4);
                stage.find('#p_value').text('0x1020');
		moveArrow();
		layer.draw();
		pc=pc+1;
	}else if(pc == 11){
		makeBold(5);
                stage.find('#a3_value').text('1.73');	// sqrt(3)
		layer.draw();
		pc=pc+1;
	}else if(pc == 12){
		makeBold(4);
                stage.find('#p_value').text('0x1028');
		moveArrow();
		layer.draw();
		pc=pc+1;
	}else if(pc == 13){
		makeBold(5);
                stage.find('#a4_value').text('2.00');	// sqrt(4)
		layer.draw();
		pc=pc+1;
	}else if(pc == 14){
		makeBold(4);
                stage.find('#p_value').text('0x1030');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 15){
		makeBold(5);
                stage.find('#a5_value').text('2.24');	// sqrt(5)
		layer.draw();
		pc=pc+1;
	}else if(pc == 16){
		makeBold(4);
                stage.find('#p_value').text('0x1038');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 17){
		makeBold(5);
                stage.find('#a6_value').text('2.45');	// sqrt(6)
		layer.draw();
		pc=pc+1;
	}else if(pc == 18){
		makeBold(4);
                stage.find('#p_value').text('0x1040');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 19){
		makeBold(5);
                stage.find('#a7_value').text('2.65');	// sqrt(7)
		layer.draw();
		pc=pc+1;
	}else if(pc == 20){
		makeBold(4);
                stage.find('#p_value').text('0x1048');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 21){
		makeBold(5);
                stage.find('#a8_value').text('2.83');	// sqrt(8)
		layer.draw();
		pc=pc+1;
	}else if(pc == 22){
		makeBold(4);
                stage.find('#p_value').text('0x1050');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 23){
		makeBold(5);
                stage.find('#a9_value').text('3.00');	// sqrt(9)
		layer.draw();
		pc=pc+1;
	}else if(pc == 24){
		makeBold(4);
                stage.find('#p_value').text('0x1058');
		moveArrow2();
		layer.draw();
		pc=pc+1;
	}else if(pc == 25){
		alert("End of loop! Also end of animation! Refresh the page if you want to re-run the animation.");
		pc=pc+1;
	}
}

/* vim: set ts=4: */
