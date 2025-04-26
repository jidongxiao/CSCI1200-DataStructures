
// Canvas dimensions
const width = window.innerWidth * 0.9 * 0.75;
const height = 600;

// Create Konva stage & layer
const stage = new Konva.Stage({
  container: 'tree-container',
  width: width,
  height: height
});
const layer = new Konva.Layer();
stage.add(layer);

// Node positions (9 as left child of 8)
const positions = {
  1: { x: width/2,       y: 80 },
  2: { x: width/2 -200,  y:180 },
  3: { x: width/2 +200,  y:180 },
  4: { x: width/2 -300,  y:280 },
  5: { x: width/2 -100,  y:280 },
  6: { x: width/2 -150,  y:380 },
  7: { x: width/2 -50,   y:380 },
  8: { x: width/2 +300,  y:280 },
  9: { x: width/2 +250,  y:380 }
};

// Tree data
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

// Store node visuals
const nodes = {};

// Draw a single node
function drawNode(x, y, label) {
  const circle = new Konva.Circle({ x, y, radius: 20, fill: 'white', stroke: '#333', strokeWidth: 2 });
  const text   = new Konva.Text({ x: x - 5, y: y - 8, text: label.toString(), fontSize: 16, fill: '#333' });
  layer.add(circle, text);
  nodes[label] = { circle, text };
}

// Draw edge between parent and child
function drawEdge(parentVal, childVal) {
  const p = positions[parentVal], c = positions[childVal];
  const dx = c.x - p.x, dy = c.y - p.y;
  const d = Math.hypot(dx, dy), ox = (dx/d) * 20, oy = (dy/d) * 20;
  const line = new Konva.Line({ points:[p.x+ox,p.y+oy, c.x-ox,c.y-oy], stroke: '#333', strokeWidth: 2 });
  layer.add(line);
}

// Make tree
function renderTree(node, parent = null) {
  if (!node) return;
  drawNode(positions[node.val].x, positions[node.val].y, node.val);
  if (parent) drawEdge(parent.val, node.val);
  renderTree(node.left, node);
  renderTree(node.right, node);
}
renderTree(tree);

// Stack visualization
const stackStage = new Konva.Stage({ container: 'stack-visual', width: 200, height: 500 });
const stackLayer = new Konva.Layer();
stackStage.add(stackLayer);
let stackVisual = [];
function pushStack(val) {
  const y = 400 - stackVisual.length * 30;
  const box = new Konva.Rect({ x:50, y, width:40, height:25, fill:'#007bff', stroke:'#0056b3', cornerRadius:4 });
  const txt = new Konva.Text({ x:58, y: y+4, text: val.toString(), fontSize:14, fill:'#fff' });
  stackLayer.add(box, txt);
  stackVisual.push({ box, txt });
  stackLayer.draw();
}
function popStack() {
  const it = stackVisual.pop();
  if (it) { it.box.destroy(); it.txt.destroy(); stackLayer.draw(); }
}

// Highlight current node
function highlight(val) {
  for (const v in nodes) nodes[v].circle.fill('white');
  if (val != null && nodes[val]) nodes[val].circle.fill('#ffc107');
  layer.draw();
}

function updateStatus(current, reason) {
  document.getElementById('currentVal').innerText = current != null ? current : 'None';
  const reasonEl = document.getElementById('reason');
  reasonEl.innerText = reason;
  reasonEl.style.whiteSpace = 'normal';
  reasonEl.style.display = 'inline-block';
  reasonEl.style.maxWidth = '70%';
  reasonEl.style.overflowWrap = 'break-word';
}
function logVisit(val) { document.getElementById('seq').innerText += ` ${val}`; }

// Traversal state
let current = tree;
let lastVisited = null;
const stack = [];
let stepReady = true;

// Final sequences for display
const finalSeqs = {
  'In-Order': '4 2 6 5 7 1 3 9 8',
  'Pre-Order': '1 2 4 5 6 7 3 8 9',
  'Post-Order': '4 6 7 5 2 9 8 3 1'
};

// Tabs
const modes = ['In-Order', 'Pre-Order', 'Post-Order'];
let currentMode = 'In-Order';
const tabsDiv = document.createElement('div');
tabsDiv.id = 'tabs'; tabsDiv.style.textAlign = 'center'; tabsDiv.style.margin = '10px';
modes.forEach(mode => {
  const btn = document.createElement('button');
  btn.innerText = mode; btn.className = 'tab-btn';
  btn.onclick = () => {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Update final sequence display
    finalSeqEl.innerHTML = `<strong>Final Sequence (${mode}):</strong> ${finalSeqs[mode]}`; 
    resetAll();
  };
  if (mode === currentMode) btn.classList.add('active');
  tabsDiv.appendChild(btn);
});
document.body.insertBefore(tabsDiv, document.getElementById('controls'));

//Initialize final sequence display
const finalSeqEl = document.getElementById('final-seq');
finalSeqEl.innerHTML = `<strong>Final Sequence (${currentMode}):</strong> ${finalSeqs[currentMode]}`; 

// Step functions
function stepInOrder() {
  if (current) {
    highlight(current.val);
    updateStatus(current.val, `We have reached node ${current.val}. Push it onto the stack to remember it for later, then move to its left child to continue traversing the left subtree.`);
    stack.push(current); pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length) {
    current = stack.pop(); popStack();
    highlight(current.val);
    updateStatus(current.val, `Left subtree complete. Now visit node ${current.val} and output it in the in-order sequence, then move to its right child to explore its right subtree.`);
    logVisit(current.val);
    setTimeout(() => { current = current.right; stepReady = true; }, 500);
  } else {
    highlight(null);
    updateStatus(null, 'In-order traversal complete! All nodes have been visited.');
  }
}

function stepPreOrder() {
  if (current) {
    highlight(current.val);
    updateStatus(current.val, `Output node ${current.val} as the next in pre-order sequence, then push it onto the stack so we can revisit its right subtree later, and move to its left child.`);
    logVisit(current.val);
    stack.push(current); pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length) {
    current = stack.pop(); popStack();
    highlight(current.val);
    updateStatus(current.val, `Finished left subtree of node ${current.val}. Now proceed to explore its right subtree.`);
    current = current.right;
  } else {
    highlight(null);
    updateStatus(null, 'Pre-order traversal complete! All nodes have been visited.');
  }
  stepReady = true;
}

function stepPostOrder() {
  if (current) {
    highlight(current.val);
    updateStatus(current.val, `Push node ${current.val} onto the stack and move to its left child. In post-order, we process children before the node itself.`);
    stack.push(current); pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }
  if (stack.length) {
    const peek = stack[stack.length - 1];
    if (peek.right && lastVisited !== peek.right) {
      updateStatus(peek.val, `Left subtree of node ${peek.val} done. Now move to its right subtree to continue processing children first.`);
      current = peek.right;
      stepReady = true;
    } else {
      current = stack.pop(); popStack();
      highlight(current.val);
      updateStatus(current.val, `Both children of node ${current.val} have been visited. Now output node ${current.val} for post-order sequence.`);
      logVisit(current.val);
      lastVisited = current;
      current = null;
      stepReady = true;
    }
  } else {
    highlight(null);
    updateStatus(null, 'Post-order traversal complete! All nodes have been visited.');
  }
}

// Handles step function
document.getElementById('stepBtn').onclick = () => {
  if (!stepReady) return;
  stepReady = false;
  if (currentMode === 'In-Order') stepInOrder();
  else if (currentMode === 'Pre-Order') stepPreOrder();
  else if (currentMode === 'Post-Order') stepPostOrder();
};

// Clear/Reset
document.getElementById('resetBtn').onclick = resetAll;
function resetAll() {
  while (stackVisual.length) popStack();
  stack.length = 0;
  current = tree;
  lastVisited = null;
  stepReady = true;
  document.getElementById('seq').innerText = '';
  updateStatus(null, 'Ready to begin traversal. Click "Step" to start.');
  highlight(null);
}

layer.draw();
