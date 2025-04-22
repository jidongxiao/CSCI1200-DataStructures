// In-Order / Pre-Order / Post-Order Traversal Visualization (combined)

//canvas dimensions for tree visualization
const width = window.innerWidth * 0.9 * 0.75;
const height = 600;

//create the main stage and layer for the tree
const stage = new Konva.Stage({
  container: 'tree-container',
  width: width,
  height: height
});
const layer = new Konva.Layer();
stage.add(layer);

//adjusted positions: node 9 is left child of 8
const positions = {
  1: { x: width / 2,       y: 80 },
  2: { x: width / 2 - 200, y: 180 },
  3: { x: width / 2 + 200, y: 180 },
  4: { x: width / 2 - 300, y: 280 },
  5: { x: width / 2 - 100, y: 280 },
  6: { x: width / 2 - 150, y: 380 },
  7: { x: width / 2 - 50,  y: 380 },
  8: { x: width / 2 + 300, y: 280 },
  9: { x: width / 2 + 250, y: 380 }  // left child of 8
};

//tree structure
const tree = {
  val: 1,
  left: {
    val: 2,
    left:  { val: 4, left: null, right: null },
    right: {
      val: 5,
      left:  { val: 6, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 8,
      left:  { val: 9, left: null, right: null },
      right: null
    }
  }
};

//store node references for highlighting
const nodes = {};

//recursive tree draw with shortened lines
function drawTree(node, parent = null) {
  if (!node) return;
  const pos = positions[node.val];
  if (parent) {
    const p = positions[parent.val];
    const dx = pos.x - p.x, dy = pos.y - p.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const offX = (dx/dist)*20, offY = (dy/dist)*20;
    layer.add(new Konva.Line({
      points: [p.x + offX, p.y + offY, pos.x - offX, pos.y - offY],
      stroke: 'black', strokeWidth: 2
    }));
  }
  const circle = new Konva.Circle({ x: pos.x, y: pos.y, radius: 20, fill: 'white', stroke: 'black', strokeWidth: 2 });
  const text = new Konva.Text({ x: pos.x - 5, y: pos.y - 8, text: node.val.toString(), fontSize: 16, fill: 'black' });
  layer.add(circle);
  layer.add(text);
  nodes[node.val] = { circle, text };
  drawTree(node.left, node);
  drawTree(node.right, node);
}

//stack visualization setup
const stackStage = new Konva.Stage({ container: 'stack-visual', width: 200, height: 500 });
const stackLayer = new Konva.Layer();
stackStage.add(stackLayer);
let stackVisual = [];

function pushStack(val) {
  const box = new Konva.Rect({ x: 50, y: 400 - stackVisual.length * 30, width: 40, height: 25, fill: '#89CFF0', stroke: 'black' });
  const label = new Konva.Text({ x: 60, y: 405 - stackVisual.length * 30, text: val.toString(), fontSize: 16, fill: 'black' });
  stackLayer.add(box);
  stackLayer.add(label);
  stackVisual.push({ box, label });
  stackLayer.draw();
}

function popStack() {
  const item = stackVisual.pop();
  if (item) {
    item.box.destroy();
    item.label.destroy();
    stackLayer.draw();
  }
}

function highlight(val, color = 'yellow') {
  const n = nodes[val];
  if (n) {
    n.circle.fill(color);
    layer.draw();
  }
}

function resetHighlights() {
  for (let v in nodes) {
    nodes[v].circle.fill('white');
  }
  layer.draw();
}

function updateStatus(current, reason) {
  document.getElementById('currentVal').innerText = current ?? 'None';
  document.getElementById('reason').innerText = reason;
}

function logVisit(val) {
  document.getElementById('seq').innerText += ` ${val}`;
}

//traversal state
let current = tree;
const stack = [];
let stepReady = true;
let lastVisited = null;

//final sequences for display
const finalSeqs = {
  'In-Order': '4 2 6 5 7 1 3 8 9',
  'Pre-Order': '1 2 4 5 6 7 3 8 9',
  'Post-Order': '4 6 7 5 2 9 8 3 1'
};

//create tabs dynamically
const modes = ['In-Order', 'Pre-Order', 'Post-Order'];
let currentMode = modes[0];
const tabsDiv = document.createElement('div');
tabsDiv.id = 'tabs';
tabsDiv.style.textAlign = 'center';
tabsDiv.style.margin = '10px';
modes.forEach((mode) => {
  const btn = document.createElement('button');
  btn.innerText = mode;
  btn.className = 'tab-btn';
  btn.style.margin = '0 5px';
  btn.onclick = () => {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach((b) => (b.style.fontWeight = 'normal'));
    btn.style.fontWeight = 'bold';
    document.getElementById('final-seq').innerHTML = `<strong>Final Sequence (${mode}):</strong> ${finalSeqs[mode]}`;
    resetAll();
  };
  if (mode === currentMode) btn.style.fontWeight = 'bold';
  tabsDiv.appendChild(btn);
});
document.body.insertBefore(tabsDiv, document.getElementById('main-container'));
document.getElementById('final-seq').innerHTML = `<strong>Final Sequence (${currentMode}):</strong> ${finalSeqs[currentMode]}`;

//step functions for each traversal
function stepInOrder() {
  if (current) {
    highlight(current.val, 'yellow');
    updateStatus(current.val, `Push ${current.val} into stack`);
    stack.push(current);
    pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length > 0) {
    const peek = stack[stack.length - 1];
    updateStatus(peek.val, `Peek stack (current = ${peek.val})`);
    current = stack.pop();
    popStack();
    updateStatus(current.val, `Visit ${current.val}`);
    highlight(current.val, 'orange');
    logVisit(current.val);
    setTimeout(() => {
      resetHighlights();
      current = current.right;
      stepReady = true;
    }, 500);
  } else {
    updateStatus('None', 'Done');
  }
}

function stepPreOrder() {
  if (current) {
    updateStatus(current.val, `Visit ${current.val}`);
    highlight(current.val, 'orange');
    logVisit(current.val);
    updateStatus(current.val, `Push ${current.val} into stack`);
    stack.push(current);
    pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length > 0) {
    const node = stack.pop();
    popStack();
    updateStatus(node.val, `Move to right of ${node.val}`);
    current = node.right;
    stepReady = true;
  } else {
    updateStatus('None', 'Done');
  }
}

function stepPostOrder() {
  if (current) {
    highlight(current.val, 'yellow');
    updateStatus(current.val, `Push ${current.val} into stack`);
    stack.push(current);
    pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length > 0) {
    const peek = stack[stack.length - 1];
    if (peek.right && lastVisited !== peek.right) {
      updateStatus(peek.val, `Move to right of ${peek.val}`);
      current = peek.right;
      stepReady = true;
    } else {
      const node = stack.pop();
      popStack();
      lastVisited = node;
      updateStatus(node.val, `Visit ${node.val}`);
      highlight(node.val, 'orange');
      logVisit(node.val);
      current = null;  // avoid re-visiting the same node
      setTimeout(() => {
        resetHighlights();
        stepReady = true;
      }, 500);
    }
  } else {
    updateStatus('None', 'Done');
  }
}

//bind the step button
document.getElementById('stepBtn').onclick = () => {
  if (!stepReady) return;
  stepReady = false;
  if (currentMode === 'In-Order') stepInOrder();
  else if (currentMode === 'Pre-Order') stepPreOrder();
  else if (currentMode === 'Post-Order') stepPostOrder();
};

//reset button and function
function resetAll() {
  while (stackVisual.length) popStack();
  stack.length = 0;
  current = tree;
  lastVisited = null;
  stepReady = true;
  document.getElementById('seq').innerText = '';
  updateStatus('None', 'Ready');
  resetHighlights();
}

document.getElementById('resetBtn').onclick = resetAll;

//initial render of the tree
drawTree(tree);
layer.draw();
