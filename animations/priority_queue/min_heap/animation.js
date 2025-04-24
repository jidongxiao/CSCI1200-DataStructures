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
var startX = 500;
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

function drawNode(x, y, value, color = '#ffffff') {
    var group = new Konva.Group({ x: x, y: y });

    var circle = new Konva.Circle({
        radius: nodeRadius,
        fill: color,
        stroke: '#000000',
        strokeWidth: 2
    });

    var text = new Konva.Text({
        text: value.toString(),
        fill: 'black',
        align: 'center',
        width: nodeRadius * 2,
        x: -nodeRadius,
        y: -10
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
        stroke: 'black',
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
        if (heap[parentIdx] <= heap[idx]) break;
        [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
        idx = parentIdx;
    }
}

function pop() {
    if (heap.length === 0) return null;

    var min = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    var idx = 0;
    while (true) {
        var left = 2 * idx + 1;
        var right = 2 * idx + 2;
        var smallest = idx;

        if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
        if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

        if (smallest === idx) break;

        [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
        idx = smallest;
    }

    return min;
}

var cppCode = [
    "#include <iostream>",
    "#include <queue>",
    "",
    "int main() {",
    "    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;",
    "",
    "    minHeap.push(3);",
    "    minHeap.push(4);",
    "    minHeap.push(3);",
    "    minHeap.push(1);",
    "    minHeap.push(5);",
    "",
    "    while (!minHeap.empty()) {",
    "        std::cout << minHeap.top() << \" \";",
    "        minHeap.pop();",
    "    }",
    "    std::cout << std::endl;",
    "",
    "    return 0;",
    "}"
];

function renderCode(step) {
    var codeBlock = document.getElementById('codeBlock');
    codeBlock.innerHTML = cppCode.map((line, i) => {
        var bold = false;
        if (step >= 0 && step <= 4) bold = i === 6 + step;
        else if (step >= 5 && step <= 10) bold = i === 13 || i === 14;
        return bold ? `<b>${line}</b>` : line;
    }).join('\n');
}

function next() {
    var op = operations[currentStep];
    if (op.type === 'push') {
        push(op.value);
    } else if (op.type === 'pop') {
        pop();
    }

    renderCode(currentStep);
    makeTree();
    currentStep++;
}

document.getElementById('next').addEventListener('click', next);

layer.draw();
