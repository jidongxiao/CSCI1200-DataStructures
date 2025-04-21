//set up the main canvas dimensions for tree visualization
//using 75% of 90% window width to leave some margin
const width = window.innerWidth * 0.9 * 0.75;
const height = 600;

//create the main stage for tree visualization
const stage = new Konva.Stage({
  container: 'tree-container', //html div id
  width: width,
  height: height
});

//create and add a layer to the stage for drawing
const layer = new Konva.Layer();
stage.add(layer);

//manually calculated x,y coordinates for visual balance
const positions = {
  1: { x: width / 2, y: 80 },      //root node centered
  2: { x: width / 2 - 200, y: 180 }, //left child
  3: { x: width / 2 + 200, y: 180 }, //right child
  4: { x: width / 2 - 300, y: 280 }, //left-left grandchild
  5: { x: width / 2 - 100, y: 280 }, //left-right grandchild
  6: { x: width / 2 - 150, y: 380 }, //left-right-left great-grandchild
  7: { x: width / 2 - 50, y: 380 },  //left-right-right great-grandchild
  8: { x: width / 2 + 300, y: 280 }, //right-right grandchild
  9: { x: width / 2 + 350, y: 380 }  //right-right-right great-grandchild
};

//binary tree structure definition--------------------------------------
const tree = {
  val: 1, //root node
  left: {
    val: 2,
    left: { val: 4, left: null, right: null }, //leaf node
    right: {
      val: 5,
      left: { val: 6, left: null, right: null }, //leaf node
      right: { val: 7, left: null, right: null } //leaf node
    }
  },
  right: {
    val: 3,
    left: null, //no left child
    right: {
      val: 8,
      left: null, //no left child
      right: { val: 9, left: null, right: null } //leaf node
    }
  }
};

//store references to all visual node elements
const nodes = {};

/**
 * recursively draws the tree starting from given node
 */
function drawTree(node, parent = null) {
  if (!node) return;  //base case
  
  //get pre-defined position for this node
  const pos = positions[node.val];

  //if not root node, draw line to parent
  if (parent) {
    const parentPos = positions[parent.val];
    layer.add(new Konva.Line({
      points: [parentPos.x, parentPos.y, pos.x, pos.y],
      stroke: 'black',
      strokeWidth: 2
    }));
  }

  //create circle for node
  const circle = new Konva.Circle({
    x: pos.x,
    y: pos.y,
    radius: 20,
    fill: 'white',  
    stroke: 'black',
    strokeWidth: 2
  });

  //create text label for node value
  const text = new Konva.Text({
    x: pos.x - 5,  //adjust slightly for centering
    y: pos.y - 8,
    text: node.val.toString(),
    fontSize: 16,
    fill: 'black'
  });

  //add elements to layer
  layer.add(circle);
  layer.add(text);

  //store references for later manipulation
  nodes[node.val] = { circle, text };

  //recursively draw left and right children
  drawTree(node.left, node);
  drawTree(node.right, node);
}

//create a separate stage for stack visualization
const stackStage = new Konva.Stage({
  container: 'stack-visual', //html div id
  width: 200,  //narrower since it's just for stack
  height: 500  //tall enough to show several stack items
});

//create and add layer for stack visualization
const stackLayer = new Konva.Layer();
stackStage.add(stackLayer);

//visual elements for stack representation
let stackVisual = [];

/**
 * visualizes pushing a value onto the stack
 */
function pushStack(val) {
  //create rectangle for stack element
  const box = new Konva.Rect({
    x: 50,
    y: 400 - stackVisual.length * 30, //stack grows upward
    width: 40,
    height: 25,
    fill: '#89CFF0',  //light blue color
    stroke: 'black'
  });

  //create text label for stack element
  const label = new Konva.Text({
    x: 60,
    y: 405 - stackVisual.length * 30,
    text: val.toString(),
    fontSize: 16,
    fill: 'black'
  });

  //add to stack layer
  stackLayer.add(box);
  stackLayer.add(label);
  
  stackVisual.push({ box, label }); //store reference
  stackLayer.draw(); //redraw stack layer
}

/**
 * visualizes popping from the stack
 */
function popStack() {
  const item = stackVisual.pop();
  if (item) {
    //remove visual elements
    item.box.destroy();
    item.label.destroy();
    stackLayer.draw();
  }
}

/**
 * highlights a node with specified color
 */
function highlight(val, color = 'yellow') {
  const node = nodes[val];
  if (node) {
    node.circle.fill(color);
    layer.draw();  //redraw to show changes
  }
}

/**
 * resets all node highlights to white
 */
function resetHighlights() {
  for (let val in nodes) {
    nodes[val].circle.fill('white');
  }
  layer.draw();
}

/**
 * updates the status display
 */
function updateStatus(current, reason) {
  document.getElementById('currentVal').innerText = current ?? 'None';
  document.getElementById('reason').innerText = reason;
}

/**
 * logs a visited node to the sequence display
 */
function logVisit(val) {
  const seq = document.getElementById('seq');
  seq.innerText += ` ${val}`;
}

/**
 * resets the entire visualization to initial state
 */
function resetAll() {
  //clear stack visualization
  while (stackVisual.length > 0) {
    popStack();
  }

  //reset traversal state
  stack.length = 0;
  current = tree;
  stepReady = true;

  //clear displays
  document.getElementById('seq').innerText = '';
  updateStatus('None', 'Ready');
  resetHighlights();
}

//traversal state variables
let current = tree; //current node being processed
const stack = []; //stack used for traversal
let stepReady = true; //flag to control step-by-step execution

//handler for step button - performs one step of inorder traversal
document.getElementById("stepBtn").onclick = () => {
  if (!stepReady) return;  //don't allow overlapping steps
  stepReady = false;

  if (current) {
    //step 1: go as far left as possible
    updateStatus(current.val, 'go left');
    stack.push(current);
    pushStack(current.val);
    current = current.left;
    stepReady = true;
    return;
  }

  if (stack.length > 0) {
    //step 2: visit node (inorder)
    current = stack.pop();
    updateStatus(current.val, 'visit node');
    popStack();
    highlight(current.val);
    logVisit(current.val);
    
    //step 3: move to right subtree
    setTimeout(() => {
      highlight(current.val, 'white');
      current = current.right;
      stepReady = true;
    }, 500);
  } else {
    //traversal complete
    updateStatus('None', 'done!');
  }
};

//event handler for reset button
document.getElementById("resetBtn").onclick = resetAll;

//initial render of the tree
drawTree(tree);
layer.draw();