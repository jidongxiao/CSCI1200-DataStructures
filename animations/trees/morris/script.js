// Define code content
const codeContent = [
    '<span class="line-number">0.</span> <span style="color:blue">void</span> postorderTraversal(<span style="color:blue">TreeNode</span>* root) {',
    '<span class="line-number">1.</span>     <span style="color:blue">TreeNode</span>* current = root;',
    '<span class="line-number">2.</span>     <span style="color:blue">TreeNode</span>* rightmost;',
    '<span class="line-number">3.</span>     <span style="color:blue">while</span> (current != <span style="color:blue">nullptr</span>) {',
    '<span class="line-number">4.</span>         <span style="color:blue">if</span> (current->left != <span style="color:blue">nullptr</span>) {',
    '<span class="line-number">5.</span>             rightmost = current->left;',
    '<span class="line-number">6.</span>             <span style="color:blue">while</span> (rightmost->right != <span style="color:blue">nullptr</span> && rightmost->right != current) {',
    '<span class="line-number">7.</span>                 rightmost = rightmost->right;',
    '<span class="line-number">8.</span>             }',
    '<span class="line-number">9.</span>             <span style="color:blue">if</span> (rightmost->right == <span style="color:blue">nullptr</span>) {',
    '<span class="line-number">10.</span>                 rightmost->right = current;',
    '<span class="line-number">11.</span>                 current = current->left;',
    '<span class="line-number">12.</span>             } <span style="color:blue">else</span> {',
    '<span class="line-number">13.</span>                 rightmost->right = <span style="color:blue">nullptr</span>;',
    '<span class="line-number">14.</span>                 reverseTraverseRightEdge(current->left);',
    '<span class="line-number">15.</span>                 current = current->right;',
    '<span class="line-number">16.</span>             }',
    '<span class="line-number">17.</span>         } <span style="color:blue">else</span> {',
    '<span class="line-number">18.</span>             current = current->right;',
    '<span class="line-number">19.</span>         }',
    '<span class="line-number">20.</span>     }',
    '<span class="line-number">21.</span>     reverseTraverseRightEdge(root); <span style="color:green">// final right edge</span>',
    '<span class="line-number">22.</span>     <span style="color:blue">return</span>;',
    '<span class="line-number">23.</span> }',
    '<span class="line-number">24.</span> ',
    '<span class="line-number">25.</span> <span style="color:blue">TreeNode</span>* reverse(<span style="color:blue">TreeNode</span>* head) {',
    '<span class="line-number">26.</span>     <span style="color:blue">TreeNode</span>* prev = <span style="color:blue">nullptr</span>;',
    '<span class="line-number">27.</span>     <span style="color:blue">TreeNode</span>* next = <span style="color:blue">nullptr</span>;',
    '<span class="line-number">28.</span>     <span style="color:blue">while</span> (head != <span style="color:blue">nullptr</span>) {',
    '<span class="line-number">29.</span>         next = head->right;',
    '<span class="line-number">30.</span>         head->right = prev;',
    '<span class="line-number">31.</span>         prev = head;',
    '<span class="line-number">32.</span>         head = next;',
    '<span class="line-number">33.</span>     }',
    '<span class="line-number">34.</span>     <span style="color:blue">return</span> prev;',
    '<span class="line-number">35.</span> }',
    '<span class="line-number">36.</span> ',
    '<span class="line-number">37.</span> <span style="color:blue">void</span> reverseTraverseRightEdge(<span style="color:blue">TreeNode</span>* head) {',
    '<span class="line-number">38.</span>     <span style="color:blue">TreeNode</span>* tail = reverse(head);',
    '<span class="line-number">39.</span>     <span style="color:blue">TreeNode</span>* current = tail;',
    '<span class="line-number">40.</span>     <span style="color:blue">while</span> (current != <span style="color:blue">nullptr</span>) {',
    '<span class="line-number">41.</span>         std::cout << current->val << " ";',
    '<span class="line-number">42.</span>         current = current->right;',
    '<span class="line-number">43.</span>     }',
    '<span class="line-number">44.</span>     reverse(tail); <span style="color:green">// restore structure</span>',
    '<span class="line-number">45.</span> }'
  ];
  
  // Initialize code display with proper structure for highlighting
  function initCodeDisplay() {
    const codeDisplay = document.getElementById('codeDisplay');
    codeContent.forEach((line, index) => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'code-line';
      lineDiv.setAttribute('data-line', index);
      lineDiv.innerHTML = line;
      codeDisplay.appendChild(lineDiv);
    });
  }
  
  // Function to highlight a specific line of code
  function highlightLine(lineNum) {
    // First, remove all highlights
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach(line => {
      line.classList.remove('highlighted');
    });
    
    // Add highlight to the specified line
    if (lineNum >= 0 && lineNum < codeContent.length) {
      const targetLine = document.querySelector(`.code-line[data-line="${lineNum}"]`);
      if (targetLine) {
        targetLine.classList.add('highlighted');
        
        // Scroll to make the highlighted line visible
        targetLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
  
  // Wait for the "Next Step" button click.
  function waitForNext() {
    return new Promise(resolve => {
      const btn = document.getElementById('nextStep');
      btn.disabled = false;
      btn.onclick = () => {
        btn.disabled = true;
        resolve();
      };
    });
  }
  
  // Append text to the output.
  function appendOutput(text) {
    const out = document.getElementById('output');
    out.innerText += text;
  }
  
  // Update the explanation text.
  function updateExplanation(text) {
    document.getElementById('treeExplanation').innerHTML =
      'Post-order traversal output: <span id="output">' +
      document.getElementById('output').innerText + '</span><br>' + text;
  }
  
  // Tree node class using Konva for visualization.
  class TreeNode {
    constructor(val, x, y) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.x = x;
      this.y = y;
      this.shape = new Konva.Rect({
        x: x - 20,
        y: y - 20,
        width: 40,
        height: 40,
        fill: 'white',
        stroke: '#888',
        strokeWidth: 2,
        cornerRadius: 4
      });
      this.label = new Konva.Text({
        x: x - 7,
        y: y - 10,
        text: String(val),
        fontSize: 20,
        fontFamily: 'Arial',
        fill: 'black'
      });
      this.leftEdge = null;
      this.rightEdge = null;
      this.threadEdge = null;
      this.reversedEdges = [];
    }
  }
  
  // Initialize Konva stage and layer.
  const stage = new Konva.Stage({ 
    container: 'container', 
    width: document.querySelector('.tree-container').clientWidth - 30, 
    height: document.querySelector('.tree-container').clientHeight - 140
  });
  const layer = new Konva.Layer();
  stage.add(layer);
  
  // Calculate connection points for arrow drawing.
  function calculateConnectionPoints(fromNode, toNode) {
    const nodeRadius = 20;
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const angle = Math.atan2(dy, dx);
    return {
      fromX: fromNode.x + nodeRadius * Math.cos(angle),
      fromY: fromNode.y + nodeRadius * Math.sin(angle),
      toX: toNode.x - nodeRadius * Math.cos(angle),
      toY: toNode.y - nodeRadius * Math.sin(angle)
    };
  }
  
  // Create an arrow between two nodes.
  function createArrow(fromNode, toNode, color = '#888', dashed = false) {
    const points = calculateConnectionPoints(fromNode, toNode);
    const arrow = new Konva.Arrow({
      points: [points.fromX, points.fromY, points.toX, points.toY],
      pointerLength: 10,
      pointerWidth: 8,
      fill: color,
      stroke: color,
      strokeWidth: dashed ? 1 : 2,
      dashEnabled: dashed,
      dash: dashed ? [5, 5] : null
    });
    layer.add(arrow);
    return arrow;
  }
  
  // Draw an edge between two nodes.
  function drawEdge(parent, child, isLeft = true) {
    const arrow = createArrow(parent, child);
    layer.add(arrow);
    if (isLeft) { parent.leftEdge = arrow; } 
    else { parent.rightEdge = arrow; }
    arrow.moveToBottom();
    return arrow;
  }
  
  // Create and remove thread edges.
  function createThreadEdge(fromNode, toNode) {
    if (fromNode.threadEdge) { fromNode.threadEdge.destroy(); }
    const threadArrow = createArrow(fromNode, toNode, '#ff5722', true);
    fromNode.threadEdge = threadArrow;
    threadArrow.moveToTop();
    layer.draw();
    return threadArrow;
  }
  
  function removeThreadEdge(node) {
    if (node && node.threadEdge) {
      node.threadEdge.destroy();
      node.threadEdge = null;
      layer.draw();
    }
  }
  
  // Highlight and unhighlight a node.
  function highlightNode(node, color = '#8bc34a') {
    if (node && node.shape) { node.shape.to({ fill: color, duration: 0.25 }); }
  }
  
  function unhighlightNode(node, color = 'white') {
    if (node && node.shape) { node.shape.to({ fill: color, duration: 0.25 }); }
  }
  
  // Calculate tree layout.
  const stageWidth = stage.width();
  const stageHeight = stage.height();
  const centerX = stageWidth / 2;
  const topY = 40;
  const levelHeight = stageHeight / 4;
  
  // Build the 9-node binary tree.
  const node1 = new TreeNode(1, centerX, topY);
  const node2 = new TreeNode(2, centerX - stageWidth/4, topY + levelHeight);
  const node3 = new TreeNode(3, centerX + stageWidth/4, topY + levelHeight);
  const node4 = new TreeNode(4, centerX - stageWidth/3, topY + 2*levelHeight);
  const node5 = new TreeNode(5, centerX - stageWidth/6, topY + 2*levelHeight);
  const node6 = new TreeNode(6, centerX - stageWidth/4, topY + 3*levelHeight);
  const node7 = new TreeNode(7, centerX - stageWidth/12, topY + 3*levelHeight);
  const node8 = new TreeNode(8, centerX + stageWidth/3, topY + 2*levelHeight);
  const node9 = new TreeNode(9, centerX + stageWidth/4, topY + 3*levelHeight);
  
  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node5.left = node6;
  node5.right = node7;
  node3.right = node8;
  node8.left = node9;
  
  const nodes = [node1, node2, node3, node4, node5, node6, node7, node8, node9];
  nodes.forEach(n => {
    layer.add(n.shape);
    layer.add(n.label);
  });
  
  drawEdge(node1, node2, true);
  drawEdge(node1, node3, false);
  drawEdge(node2, node4, true);
  drawEdge(node2, node5, false);
  drawEdge(node5, node6, true);
  drawEdge(node5, node7, false);
  drawEdge(node3, node8, false);
  drawEdge(node8, node9, true);
  
  nodes.forEach(n => {
    n.shape.moveToTop();
    n.label.moveToTop();
  });
  layer.draw();
  
  // Visualize the reversal process.
  async function visualizeReversal(head) {
    const connections = [];
    let current = head;
    while (current !== null && current.right !== null) {
      connections.push({ from: current, to: current.right });
      current = current.right;
    }
    for (const conn of connections) {
      if (conn.from.rightEdge) {
        conn.from.rightEdge.destroy();
        conn.from.rightEdge = null;
      }
    }
    let prev = null;
    current = head;
    while (current !== null) {
      const next = current.right;
      if (prev !== null) {
        const reversedEdge = createArrow(current, prev, '#e91e63');
        current.reversedEdges.push(reversedEdge);
        reversedEdge.moveToTop();
      }
      prev = current;
      current = next;
      layer.draw();
      await waitForNext();
    }
    return prev;
  }
  
  // Restore the original tree structure.
  async function visualizeRestore(head) {
    nodes.forEach(node => {
      if (node.reversedEdges) {
        node.reversedEdges.forEach(edge => edge.destroy());
        node.reversedEdges = [];
      }
    });
    let current = head;
    while (current !== null && current.right !== null) {
      if (!current.rightEdge) {
        current.rightEdge = createArrow(current, current.right, '#888');
        current.rightEdge.moveToBottom();
      }
      current = current.right;
    }
    nodes.forEach(n => {
      n.shape.moveToTop();
      n.label.moveToTop();
    });
    layer.draw();
  }
  
  // Reverse a chain of right pointers.
  async function reverseChain(head) {
    updateExplanation("Visualizing the reversal of pointers");
    await waitForNext();
    const reversedHead = await visualizeReversal(head);
    let prev = null, curr = head, next;
    while (curr !== null) {
      next = curr.right;
      curr.right = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  
  // Restore the chain.
  async function restoreChain(head) {
    updateExplanation("Visualizing the restoration of original pointers");
    await waitForNext();
    await visualizeRestore(head);
    let prev = null, curr = head, next;
    while (curr !== null) {
      next = curr.right;
      curr.right = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  
  // Reverse traverse the right edge of a subtree.
  async function reverseTraverseRightEdge(head) {
    if (!head) return;
    highlightLine(-1); // Clear code highlighting during reverse traversal
    updateExplanation("Executing reverseTraverseRightEdge on node " + head.val);
    await waitForNext();
    let tail = await reverseChain(head);
    layer.draw();
    updateExplanation("Visiting nodes along the reversed right edge");
    let cur = tail;
    while (cur !== null) {
      highlightNode(cur, '#4caf50');
      layer.draw();
      appendOutput(cur.val + " ");
      updateExplanation("Visited node: " + cur.val);
      await waitForNext();
      unhighlightNode(cur, 'white');
      layer.draw();
      cur = cur.right;
    }
    updateExplanation("Restoring the original right edge");
    await waitForNext();
    await restoreChain(tail);
    layer.draw();
  }
  
  // Morris Post‑Order Traversal Animation.
  async function postorderTraversal(root) {
    // Ensure all nodes are white at start
    nodes.forEach(n => { unhighlightNode(n, 'white'); });
    
    // Highlight the initialization steps
    highlightLine(0);
    updateExplanation("Starting the Morris Post-Order Traversal");
    await waitForNext();
    
    highlightLine(1);
    updateExplanation("Initializing current = root (node 1)");
    await waitForNext();
    
    highlightLine(2);
    updateExplanation("Declaring rightmost pointer");
    await waitForNext();
    
    let current = root;
    
    // Main loop
    while (current !== null) {
      // Clear previous highlighting
      nodes.forEach(n => { 
        if (n !== current) {
          unhighlightNode(n, 'white');
        }
      });
      
      highlightLine(3);
      updateExplanation("Checking if current is null");
      await waitForNext();
      
      // Always ensure current node is highlighted in yellow
      highlightNode(current, '#ffeb3b');
      layer.draw();
      
      highlightLine(4);
      updateExplanation("Checking if current node " + current.val + " has a left child");
      await waitForNext();
      
      if (current.left !== null) {
        highlightLine(5);
        updateExplanation("Current: " + current.val + " has left child, initializing rightmost = current.left (node " + current.left.val + ")");
        await waitForNext();
        
        let rightmost = current.left;
        highlightNode(rightmost, '#2196f3');
        layer.draw();
        
        highlightLine(6);
        updateExplanation("Finding the rightmost node in left subtree that doesn't have a thread");
        await waitForNext();
        
        while (rightmost.right !== null && rightmost.right !== current) {
          highlightLine(7);
          updateExplanation("Moving rightmost from " + rightmost.val + " to its right child");
          await waitForNext();
          
          unhighlightNode(rightmost, 'white');
          rightmost = rightmost.right;
          highlightNode(rightmost, '#2196f3');
          // Ensure current is still highlighted
          highlightNode(current, '#ffeb3b');
          layer.draw();
          
          highlightLine(6);
          updateExplanation("Checking if we've reached the rightmost node or a thread");
          await waitForNext();
        }
        
        highlightLine(9);
        updateExplanation("Checking if rightmost (" + rightmost.val + ") has no thread");
        await waitForNext();
        
        if (rightmost.right === null) {
          highlightLine(10);
          updateExplanation("Creating thread from rightmost (" + rightmost.val + ") to current (" + current.val + ")");
          await waitForNext();
          
          createThreadEdge(rightmost, current);
          rightmost.right = current;
          highlightNode(rightmost, '#03a9f4');
          // Keep current highlighted
          highlightNode(current, '#ffeb3b');
          layer.draw();
          await waitForNext();
          
          highlightLine(11);
          updateExplanation("Moving current to its left child (" + current.left.val + ")");
          await waitForNext();
          
          unhighlightNode(rightmost, 'white');
          unhighlightNode(current, 'white');
          current = current.left;
          // Highlight new current
          highlightNode(current, '#ffeb3b');
          layer.draw();
        } else {
          highlightLine(13);
          updateExplanation("Thread detected from rightmost (" + rightmost.val + ") to current (" + current.val + ") - removing thread");
          await waitForNext();
          
          removeThreadEdge(rightmost);
          rightmost.right = null;
          unhighlightNode(rightmost, 'white');
          // Keep current highlighted
          highlightNode(current, '#ffeb3b');
          layer.draw();
          
          highlightLine(14);
          updateExplanation("Processing left subtree of current (" + current.val + ")");
          await waitForNext();
          
          // Save current node to restore highlight after recursion
          const savedCurrent = current;
          await reverseTraverseRightEdge(current.left);
          
          // Restore current node highlight
          highlightNode(savedCurrent, '#ffeb3b');
          layer.draw();
          
          highlightLine(15);
          updateExplanation("Moving current to its right child");
          await waitForNext();
          
          unhighlightNode(current, 'white');
          current = current.right;
          if (current) {
            highlightNode(current, '#ffeb3b');
            layer.draw();
          }
        }
      } else {
        highlightLine(17);
        updateExplanation("Current: " + current.val + " has no left child");
        await waitForNext();
        
        highlightLine(18);
        updateExplanation("Moving current to its right child");
        await waitForNext();
        
        unhighlightNode(current, 'white');
        current = current.right;
        if (current) {
          highlightNode(current, '#ffeb3b');
          layer.draw();
        }
      }
      
      highlightLine(3);
      updateExplanation("Checking if current is null");
      await waitForNext();
    }
    
    highlightLine(21);
    updateExplanation("Processing the final right edge starting from root");
    await waitForNext();
    
    await reverseTraverseRightEdge(root);
    
    highlightLine(22);
    updateExplanation("Morris Post-Order Traversal complete");
    await waitForNext();
    
    highlightLine(-1); // Clear highlighting
    updateExplanation("Final post-order traversal result: " + document.getElementById('output').innerText);
    nodes.forEach(n => {
      unhighlightNode(n, 'white');
      n.shape.moveToTop();
      n.label.moveToTop();
    });
    layer.draw();
  }
  
  window.addEventListener('resize', function() {
    stage.width(document.querySelector('.tree-container').clientWidth - 30);
    stage.height(document.querySelector('.tree-container').clientHeight - 140);
    layer.draw();
  });
  
  window.onload = function() {
    initCodeDisplay();
    document.getElementById('nextStep').disabled = false;
    postorderTraversal(node1);
  };