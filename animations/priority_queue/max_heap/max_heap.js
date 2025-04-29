var stage = new Konva.Stage({
    container: 'container',
    width: 2000,
    height: 1000
});

var layer = new Konva.Layer();
stage.add(layer);

var heap = [];
var nodeRadius = 25;
var levelHeight = 80;
var startX = 100;
var startY = 50;
var horizontalSpacing = 150;

var animationNodes = [];
var animationLines = [];
var currentStep = 0;

var operations = [
    { type: 'push', value: 3 },
    { type: 'push', value: 4 },
    { type: 'push', value: 3 },
    { type: 'push', value: 1 },
    { type: 'push', value: 5 },
    { type: 'pop' },
    { type: 'pop' },
    { type: 'pop' },
    { type: 'pop' },
    { type: 'pop' }
];

var cppCode = [
    "#include <iostream>",
    "#include <queue>",
    "",
    "int main() {",
    "    std::priority_queue<int> maxHeap;",
    "",
    "    maxHeap.push(3);",
    "    maxHeap.push(4);",
    "    maxHeap.push(3);",
    "    maxHeap.push(1);",
    "    maxHeap.push(5);",
    "",
    "    while (!maxHeap.empty()) {",
    "        std::cout << maxHeap.top() << \" \";",
    "        maxHeap.pop();",
    "    }",
    "    std::cout << std::endl;",
    "",
    "    return 0;",
    "}"
];

var codeBox = new Konva.Rect({
    x: 20,
    y: 60,
    width: 500,
    height: 550,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(codeBox);

var consoleBox = new Konva.Rect({
    x: 550,
    y: 60,
    width: 200,
    height: 350,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});
layer.add(consoleBox);

var consoleLabel = new Konva.Text({
    x: 610,
    y: 30,
    text: "Console",
    fontSize: 24,
    fontFamily: 'Calibri',
    fill: '#000',
});
layer.add(consoleLabel);

var consoleOutputText = new Konva.Text({
    x: 570,
    y: 80,
    text: "",
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'black',
    width: 360,
    wrap: 'word'
});
layer.add(consoleOutputText);

var consoleContent = "";

function makeCodeLine(x, y, text, id) {
    return new Konva.Text({
        x: x,
        y: y,
        text: text,
        id: 'line' + id,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000000',
        width: 460,
        padding: 5,
    });
}

for (let i = 0; i < cppCode.length; i++) {
    let t = makeCodeLine(30, 70 + i * 25, cppCode[i], i + 1);
    layer.add(t);
}

function makeBold(id) {
    for (let i = 1; i <= cppCode.length; i++) {
        let line = stage.findOne('#line' + i);
        if (line) {
            if (i === id) {
                line.fontStyle('bold');
            } else {
                line.fontStyle('normal');
            }
        }
    }
}

function renderCode(step) {
    if (step >= 0 && step <= 4) {
        makeBold(7 + step);
    } else if (step >= 5 && step <= 10) {
        makeBold(14);
    } else {
        makeBold(0);
    }
}

function drawNode(x, y, value, color = '#ffffff') {
    var group = new Konva.Group({ x: x, y: y });

    var circle = new Konva.Circle({
        radius: nodeRadius,
        fill: color,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.2,
    });

    var text = new Konva.Text({
        text: value.toString(),
        fill: 'black',
        align: 'center',
        width: nodeRadius * 2,
        x: -nodeRadius,
        y: -7
    });

    group.add(circle);
    group.add(text);
    layer.add(group);
    animationNodes.push(group);

    return group;
}

function makeLine(x1, y1, x2, y2) {
    var line = new Konva.Line({
        points: [x1, y1, x2, y2],
        stroke: '#555',
        strokeWidth: 2,
        lineCap: 'round',
        lineJoin: 'round'
    });
    layer.add(line);
    animationLines.push(line);
    return line;
}

function makeTree() {
    animationNodes.forEach(n => n.destroy());
    animationLines.forEach(l => l.destroy());
    animationNodes = [];
    animationLines = [];

    if (heap.length === 0) return;
    var positions = [];

    for (var i = 0; i < heap.length; i++) {
        var level = Math.floor(Math.log2(i + 1));
        var indexInLevel = i - (2 ** level - 1);
        var nodesInLevel = 2 ** level;
        var x = startX + (indexInLevel - (nodesInLevel - 1) / 2) * horizontalSpacing * (1.5 - level / 5);
        var y = startY + level * levelHeight;

        positions.push({ x: x, y: y });
        drawNode(x, y, heap[i]);

        if (i > 0) {
            var parentPos = positions[Math.floor((i - 1) / 2)];
            makeLine(parentPos.x, parentPos.y + nodeRadius, x, y - nodeRadius);
        }
    }
    layer.draw();
}

function push(val) {
    heap.push(val);
    var idx = heap.length - 1;
    while (idx > 0) {
        var parentIdx = Math.floor((idx - 1) / 2);
        if (heap[parentIdx] >= heap[idx]) break;
        [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
        idx = parentIdx;
    }
}

function pop() {
    if (heap.length === 0) { return null; }

    var max = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    var idx = 0;
    while (true) {
        var left = 2 * idx + 1;
        var right = 2 * idx + 2;
        var largest = idx;

        if (left < heap.length && heap[left] > heap[largest]) largest = left;
        if (right < heap.length && heap[right] > heap[largest]) largest = right;

        if (largest === idx) break;

        [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
        idx = largest;
    }

    return max;
}

function next() {
    if (currentStep >= operations.length) {
        alert("End of animation! Refresh the page if you want to re-run the animation.");
        return;
    }

    var op = operations[currentStep];
    if (op.type === 'push') {
        push(op.value);
    } else if (op.type === 'pop') {
        let val = pop();
        if (val !== null) {
            consoleContent += val + ' ';
            consoleOutputText.text(consoleContent);
        }
    }
    renderCode(currentStep);
    makeTree();
    currentStep++;
}

document.getElementById('next').addEventListener('click', next);
layer.draw();
