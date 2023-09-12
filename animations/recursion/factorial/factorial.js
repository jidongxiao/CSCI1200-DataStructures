// Author: Jidong Xiao 
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 2000,
    height: 1000
});

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
            id:"stack_rec"+i,
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

// in this animation, we assume the stack size is fixed.
var stack_size = 18;
// create stack
makeMemory(1050,100,stack_size,200,30);

// the code rectangle.
var rect1 = new Konva.Rect({
    x: 20,
    y: 10,
    id:"code_rec1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 350,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var fact3 = new Konva.Rect({
    x: 460,
    y: 10,
    id:"code_fact4",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 350,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var fact2 = new Konva.Rect({
    x: 460,
    y: 220,
    id:"code_fact3",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 350,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var fact1 = new Konva.Rect({
    x: 460,
    y: 430,
    id:"code_fact2",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 350,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var fact0 = new Konva.Rect({
    x: 460,
    y: 640,
    id:"code_fact1",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 350,
    height: 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var legend = new Konva.Rect({
    x: 1350,
    y: 270,
    id:"legend_box",
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ffffff',
    width: 360,
    height: 350,
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
    x: 1120,
    y: 35,
    id:"stack",
    text: "Stack",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

// box for code
layer.add(rect1);
layer.add(fact3);
layer.add(fact2);
layer.add(fact1);
layer.add(fact0);
layer.add(stackText);
// the large legend box
layer.add(legend);
// the actual legends
makeText(750+690, 270, "legend", "legend");
makeText(1390, 315, "activation record for fact(0)", "AR_0");
makeText(1390, 365, "activation record for fact(1)", "AR_1");
makeText(1390, 415, "activation record for fact(2)", "AR_2");
makeText(1390, 465, "activation record for fact(3)", "AR_3");
makeText(1390, 515, "activation record for fact(4)", "AR_4");
makeLegendBox(1360, 335, '#c4ff33');	// AR 0
makeLegendBox(1360, 385, '#ab33ff');	// AR 1
makeLegendBox(1360, 435, '#3364ff');	// AR 2
makeLegendBox(1360, 485, '#ff5733');	// AR 3
makeLegendBox(1360, 535, '#15925d');	// AR 4

function push_func(n){
	x=920;
	y=600+(n-4)*90;
	id='n_label_' + n;
	// make the n label.
	makeText(x,y,'int n',id);
	x=1120
	// make the n value.
	id='n_value_' + n;
	makeText(x,y,n,id);
	x=1060;
	y=570+(n-4)*90;
	id='return_' + n;
	makeText(x,y,"return address",id);
	// update color for this stack frame.
	if(n == 4){
		stage.find('#stack_rec'+(stack_size-1+n-4)).fill('#15925d');
		stage.find('#stack_rec'+(stack_size-2+n-4)).fill('#15925d');
	}else if(n == 3){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ff5733');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ff5733');
	}else if(n == 2){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#3364ff');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#3364ff');
	}else if(n == 1){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ab33ff');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ab33ff');
	}else if(n == 0){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#c4ff33');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#c4ff33');
	}
}

function push_result(n){
	x=920;
	y=540+(n-4)*90;
	id="result_label_"+n;
	// make the result label.
	makeText(x,y,'int result',id);
	x=1120
	id="result_"+n;
	// make the result value.
	makeText(x,y,'?',id);
	if(n == 4){
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#15925d');
	}else if(n == 3){
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ff5733');
	}else if(n == 2){
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#3364ff');
	}else if(n == 1){
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ab33ff');
	}else if(n == 0){
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#c4ff33');
	}
}

function pop_func(n){
	stage.find('#text_n_label_'+n).text("");
	stage.find('#text_n_value_'+n).text("");
	stage.find('#text_return_'+n).text("");
	// because level 0 doesn't really define the result variable.
	if(n!=0){
		stage.find('#text_result_label_'+n).text("");
		stage.find('#text_result_'+n).text("");
	}
	// update color for this stack frame.
	if(n == 4){
		stage.find('#stack_rec'+(stack_size-1+n-4)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-2+n-4)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ddd');
	}else if(n == 3){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ddd');
	}else if(n == 2){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ddd');
	}else if(n == 1){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-1-2+(n-4)*3)).fill('#ddd');
	}else if(n == 0){
		stage.find('#stack_rec'+(stack_size-1+(n-4)*3)).fill('#ddd');
		stage.find('#stack_rec'+(stack_size-2+(n-4)*3)).fill('#ddd');
	}
}

function update_result(n, value){
	stage.find('#text_result_'+n).text(value);
}

function makeCode(x,y,str,id) {
    let code = new Konva.Text({
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
	layer.add(code);
}

var code=["0. int fact(int n){",
	"1. \t\t\t if ( n==0 ) {",
	"2. \t\t\t \t\t\t return 1;",
	"3. \t\t\t } else {",
	"4. \t\t\t \t\t\t int result = fact(n-1);",
	"5. \t\t\t \t\t\t return n * result;",
	"6. \t\t\t }",
	"7. }",
];

function makeBold(level, id){
	for(let i=(level*100+1); i<=(level*100+code.length); i++){
		if(i!=id){
			stage.find('#line'+i).fontStyle('normal');
		}else{
			stage.find('#line'+i).fontStyle('bold');
		}
	}
}

function makeAllCode(){
	// write the code fragment into all 5 code boxes.
	for (let i=0;i<code.length;i++){
		// the array starts from index 0, but we want ids to be counted from index 1.
		makeCode(20,5+(i*20),code[i],i+1+400);
		makeCode(470,5+(i*20),code[i],i+1+300);
		makeCode(470,210+5+(i*20),code[i],i+1+200);
		makeCode(470,210*2+5+(i*20),code[i],i+1+100);
		makeCode(470,210*3+5+(i*20),code[i],i+1);
	}
}

makeAllCode();
// add the layer to the stage
stage.add(layer);
// only the first line is different, and the first line's id is supposed to be 'line'+1+300
stage.find('#line'+(1+300)).text('0. int fact(3){');
stage.find('#line'+(1+200)).text('0. int fact(2){');
stage.find('#line'+(1+100)).text('0. int fact(1){');
stage.find('#line'+1).text('0. int fact(0){');

var messageBox = new Konva.Rect({
  x: 50,
  y: 300,
  width: 220,
  height: 60,
  fill: 'lightblue',
  stroke: 'black',
  strokeWidth: 4
});

var arrow = new Konva.Arrow({
  x: messageBox.x() + messageBox.width() / 2,
  y: messageBox.y(),
  points: [0, 0, 0, -150],
  pointerLength: 20,
  pointerWidth: 20,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 4
});

var messageText = new Konva.Text({
  x: messageBox.x() + 10,
  y: messageBox.y() + 20,
  text: 'fact(4) returns 24!',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black'
});

// draw the image
layer.draw();

// calculating fact(4), which is 4x3x2x1=24.
var pc=1;
function nextstep() {
	if(pc == 1){
		makeBold(4, 401);
		layer.draw();
		pc=pc+1;
	}else if(pc == 2){
		push_func(4);
		layer.draw();
		pc=pc+1;
	}else if(pc == 3){
		makeBold(4, 402);
		layer.draw();
		pc=pc+1;
	}else if(pc == 4){
		makeBold(4, 404);
		layer.draw();
		pc=pc+1;
	}else if(pc == 5){
		makeBold(4, 405);
		push_result(4);
		layer.draw();
		pc=pc+1;
	}else if(pc == 6){
		// start fact(3)
		makeBold(3, 301);
		layer.draw();
		pc=pc+1;
	}else if(pc == 7){
		push_func(3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 8){
		makeBold(3, 302);
		layer.draw();
		pc=pc+1;
	}else if(pc == 9){
		makeBold(3, 304);
		layer.draw();
		pc=pc+1;
	}else if(pc == 10){
		makeBold(3, 305);
		push_result(3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 11){
		// start fact(2)
		makeBold(2, 201);
		layer.draw();
		pc=pc+1;
	}else if(pc == 12){
		push_func(2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 13){
		makeBold(2, 202);
		layer.draw();
		pc=pc+1;
	}else if(pc == 14){
		makeBold(2, 204);
		layer.draw();
		pc=pc+1;
	}else if(pc == 15){
		makeBold(2, 205);
		push_result(2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 16){
		// start fact(1)
		makeBold(1, 101);
		layer.draw();
		pc=pc+1;
	}else if(pc == 17){
		push_func(1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 18){
		makeBold(1, 102);
		layer.draw();
		pc=pc+1;
	}else if(pc == 19){
		makeBold(1, 104);
		layer.draw();
		pc=pc+1;
	}else if(pc == 20){
		makeBold(1, 105);
		push_result(1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 21){
		// start fact(0)
		makeBold(0, 1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 22){
		push_func(0);
		layer.draw();
		pc=pc+1;
	}else if(pc == 23){
		makeBold(0, 2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 24){
		makeBold(0, 3);
		layer.draw();
		pc=pc+1;
	}else if(pc == 25){
		// fact(0) returns
		pop_func(0);
		// fact(0) is done, no more bold font.
		makeBold(0, -1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 26){
		// because fact(0) returns 1;
		update_result(1,1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 27){
		// march on in fact(1).
		makeBold(1, 106);
		layer.draw();
		pc=pc+1;
	}else if(pc == 28){
		// fact(1) returns
		pop_func(1);
		// fact(1) is done, no more bold font.
		makeBold(1, -1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 29){
		// because fact(1) returns 1;
		update_result(2,1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 30){
		// march on in fact(2).
		makeBold(2, 206);
		layer.draw();
		pc=pc+1;
	}else if(pc == 31){
		// fact(2) returns
		pop_func(2);
		// fact(2) is done, no more bold font.
		makeBold(2, -1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 32){
		// because fact(2) returns 2;
		update_result(3, 2);
		layer.draw();
		pc=pc+1;
	}else if(pc == 33){
		// march on in fact(3).
		makeBold(3, 306);
		layer.draw();
		pc=pc+1;
	}else if(pc == 34){
		// fact(3) returns
		pop_func(3);
		// fact(3) is done, no more bold font.
		makeBold(3, -1);
		layer.draw();
		pc=pc+1;
	}else if(pc == 35){
		// because fact(3) returns 6;
		update_result(4, 6);
		layer.draw();
		pc=pc+1;
	}else if(pc == 36){
		// march on in fact(4).
		makeBold(4, 406);
		layer.draw();
		pc=pc+1;
	}else if(pc == 37){
		// displaying fact(4) results.
		layer.add(messageBox);
		layer.add(arrow);
		layer.add(messageText);
		layer.draw();
		pc=pc+1;
	}else if(pc == 38){
		// fact(4) returns
		pop_func(4);
		layer.draw();
		pc=pc+1;
	}else if(pc == 39){
		// fact(4) is done, no more bold font.
		makeBold(4, -1);
		layer.draw();
		alert("End of animation! Refresh the page if you want to re-run the animation.");
		pc=pc+1;
	}else if(pc == 40){
		// hiding the fact(4) results.
		messageText.destroy();
		arrow.destroy();
		messageBox.destroy();
		layer.draw();
		// reset the counter.
		pc=1;
	}
}

/* vim: set ts=4: */
