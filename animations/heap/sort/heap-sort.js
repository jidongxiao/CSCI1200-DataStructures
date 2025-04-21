// initial array to be sorted
let array = [5, 3, 8, 1, 9, 4];
let currentStep = 0;
let animationSteps = [];

// heap sort code
const codeLines = [
  "void heapSort(int arr[], int n) {",
  "  for (int i = n / 2 - 1; i >= 0; i--)",
  "    heapify(arr, n, i);",
  "  for (int i = n - 1; i > 0; i--) {",
  "    std::swap(arr[0], arr[i]);",
  "    heapify(arr, i, 0);",
  "  }",
  "}",
  "",
  "void heapify(int arr[], int n, int i) {",
  "  int largest = i;",
  "  int left = 2 * i + 1;",
  "  int right = 2 * i + 2;",
  "  if (left < n && arr[left] > arr[largest])",
  "    largest = left;",
  "  if (right < n && arr[right] > arr[largest])",
  "    largest = right;",
  "  if (largest != i) {",
  "    std::swap(arr[i], arr[largest]);",
  "    heapify(arr, n, largest);",
  "  }",
  "}"
];

function initialize() {
  const codeElement = document.getElementById('code');
  let codeHTML = '';
  
  codeLines.forEach((line, index) => {
    // how much padding to add
    const paddingLeft = line.startsWith(' ') ? '20px' : '0';
    // add the line number for the code
    codeHTML += `<div id="code-line-${index}">`;
    
    if (!line.trim()) {
      codeHTML += '&nbsp;';
    } else {
      const lineNum = index;
      // align single digit lines better
      const formattedLineNum = lineNum < 10 ? ` ${lineNum}` : lineNum;
      codeHTML += `${formattedLineNum}. ${line}`;
    }
    
    codeHTML += '</div>';
  });
  
  codeElement.innerHTML = codeHTML;
  generateAnimationSteps();
  // initial array display
  updateArrayDisplay();
  // initial heap tree
  drawHeapTree();
  
  // set up next step buttons
  document.getElementById('arrayNextBtn').addEventListener('click', nextStep);
  document.getElementById('treeNextBtn').addEventListener('click', nextStep);
}

// highlight a specific line of code
function highlightLine(lineIndex) {
  // reset all lines
  for (let i = 0; i < codeLines.length; i++) {
    const line = document.getElementById(`code-line-${i}`);
    if (line) {
      line.style.backgroundColor = 'transparent';
      line.style.fontWeight = 'normal';
    }
  }
  
  // highlight the specified line
  const highlightedLine = document.getElementById(`code-line-${lineIndex}`);
  if (highlightedLine) {
    highlightedLine.style.fontWeight = 'bold';
  }
}

// update the array display
function updateArrayDisplay() {
  const arrayContainer = document.getElementById('arrayContainer');
  const descriptionElement = document.getElementById('arrayDescription');
  arrayContainer.innerHTML = '';
  
  // create array visualization
  array.forEach((value, index) => {
    const elementContainer = document.createElement('div');
    elementContainer.style.display = 'inline-block';
    elementContainer.style.marginRight = '5px';
    
    const element = document.createElement('div');
    element.className = 'array-element';
    
    // highlight right lines, and nodes based on current step
    if (animationSteps[currentStep] && animationSteps[currentStep].comparing && animationSteps[currentStep].comparing.includes(index)) {
      element.classList.add('highlight');
    } else if (animationSteps[currentStep] && animationSteps[currentStep].swapping && animationSteps[currentStep].swapping.includes(index)) {
      element.classList.add('swap');
    } else if (animationSteps[currentStep] && animationSteps[currentStep].sorted && animationSteps[currentStep].sorted.includes(index)) {
      element.classList.add('done');
    } else if (animationSteps[currentStep] && animationSteps[currentStep].activeHeap && index < animationSteps[currentStep].heapSize) {
      element.classList.add('active-heap');
    }
    
    element.textContent = value;
    elementContainer.appendChild(element);
    
    // add index below
    const indexElement = document.createElement('div');
    indexElement.className = 'array-index';
    indexElement.textContent = index;
    elementContainer.appendChild(indexElement);
    
    arrayContainer.appendChild(elementContainer);
  });
  
  // update the description
  if (animationSteps[currentStep] && animationSteps[currentStep].description) {
    descriptionElement.textContent = animationSteps[currentStep].description;
  } else {
    descriptionElement.textContent = '';
  }
}

// draw heap tree on the canvas
function drawHeapTree() {
  const canvas = document.getElementById('treeCanvas');
  // canvas with context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const heapSize = animationSteps[currentStep] ? (animationSteps[currentStep].heapSize || array.length) : array.length;
  
  // tree node positions (x, y coordinates for each node)
  const positions = [
    [250, 50], // index 0
    [150, 120], // index 1
    [350, 120], // index 2
    [100, 190], // index 3
    [200, 190], // index 4
    [300, 190], // index 5
  ];
  
  // draw edges/arrows
  for (let i = 0; i < Math.min(array.length, positions.length); i++) {
    if (i > 0 && i < heapSize) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (parentIndex < heapSize) {
        // starting point for the line from parent to child
        const startX = positions[parentIndex][0];
        // bottom of parent node
        const startY = positions[parentIndex][1] + 20;
        const endX = positions[i][0];
        // top of child node
        const endY = positions[i][1] - 20; 
        
        // draw the lines for the arrows
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // draw arrows
        const angle = Math.atan2(endY - startY, endX - startX);
        const arrowSize = 10;
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(
          endX - arrowSize * Math.cos(angle - Math.PI / 6),
          endY - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          endX - arrowSize * Math.cos(angle + Math.PI / 6),
          endY - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fillStyle = '#555';
        ctx.fill();
      }
    }
  }

  for (let i = 0; i < Math.min(array.length, positions.length); i++) {
    if (i < heapSize) {
      // determine node color based on current operation
      let nodeColor = '#ddd';
      let borderColor = '#888';
      
      if (animationSteps[currentStep] && animationSteps[currentStep].comparing && 
          animationSteps[currentStep].comparing.includes(i)) {
        nodeColor = '#ffcf4d';
        borderColor = '#e8a800';
      } else if (animationSteps[currentStep] && animationSteps[currentStep].swapping && 
                 animationSteps[currentStep].swapping.includes(i)) {
        nodeColor = '#ff7675';
        borderColor = '#d63031';
      } else if (animationSteps[currentStep] && animationSteps[currentStep].sorted && 
                 animationSteps[currentStep].sorted.includes(i)) {
        nodeColor = '#81ecec';
        borderColor = '#00cec9';
      } else if (animationSteps[currentStep] && animationSteps[currentStep].activeHeap && i < animationSteps[currentStep].heapSize) {
        // highlight active heap nodes
        nodeColor = '#a3d8f4';
        borderColor = '#0984e3';
      }
      
      // draw rectangle with round corners
      const width = 40;
      const height = 40;
      const x = positions[i][0] - width/2;
      const y = positions[i][1] - height/2;
      const radius = 5;
      
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      
      // style rectangle
      ctx.fillStyle = nodeColor;
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // draw text in the heap tree
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 16px Times New Roman';
      ctx.fillText(array[i].toString(), positions[i][0], positions[i][1]);
    }
  }
}

function generateAnimationSteps() {
  animationSteps = [];
  const originalArray = [5, 3, 8, 1, 9, 4];
  
  let tempArray = [...originalArray];
  const n = tempArray.length;
  
  animationSteps.push({
    array: [...originalArray],
    line: 0,
    description: 'Starting heap sort with array [' + originalArray.join(', ') + ']',
    heapSize: n
  });
  
  // build max-heap
  animationSteps.push({
    array: [...originalArray],
    line: 2,
    description: 'Building max heap',
    heapSize: n
  });
  
  let sortedIndices = [];
  
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    animationSteps.push({
      array: [...originalArray],
      line: 3,
      description: `Heapifying subtree rooted at index ${i}`,
      heapSize: n,
      comparing: [i]
    });
    
    heapifyWithAnimation(tempArray, n, i, sortedIndices, originalArray);
  }
  
  animationSteps.push({
    array: [...originalArray],
    line: 6,
    description: 'Max heap built. Extracting elements one by one',
    heapSize: n
  });
  
  for (let i = n - 1; i > 0; i--) {
    // highlight the active heap portion before swap
    animationSteps.push({
      array: [...originalArray],
      line: 7,
      description: `Current active heap size: ${i+1}. Elements from index 0 to ${i} need to be processed.`,
      heapSize: i + 1,
      activeHeap: true,
      sorted: [...sortedIndices]
    });
    
    animationSteps.push({
      array: [...originalArray],
      line: 8,
      description: `Swapping root (${tempArray[0]}) with element at index ${i} (${tempArray[i]})`,
      heapSize: i + 1,
      swapping: [0, i]
    });
    
    [tempArray[0], tempArray[i]] = [tempArray[i], tempArray[0]];
    
    // this index is sorted
    sortedIndices.push(i);
    
    animationSteps.push({
      array: [...originalArray],
      line: 8,
      description: `Element ${tempArray[i]} is now in its correct position`,
      heapSize: i,
      sorted: [...sortedIndices]
    });
  
    animationSteps.push({
      array: [...originalArray],
      line: 11,
      description: `Heapifying reduced heap (size ${i})`,
      heapSize: i,
      activeHeap: true,
      sorted: [...sortedIndices]
    });
    
    heapifyWithAnimation(tempArray, i, 0, sortedIndices, originalArray);
  }
  
  sortedIndices.push(0);
  animationSteps.push({
    array: [...originalArray],
    line: 13,
    description: 'Heap sort complete! Array is now sorted: [' + tempArray.join(', ') + ']',
    heapSize: n,
    sorted: sortedIndices
  });
}

// heapify function that records animation steps
function heapifyWithAnimation(arr, n, i, sortedIndices, originalArray) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  animationSteps.push({
    array: [...originalArray],
    line: 16,
    description: `Heapifying at index ${i}`,
    heapSize: n,
    comparing: [i],
    sorted: sortedIndices ? [...sortedIndices] : []
  });
  
  // compare with left child
  if (left < n) {
    animationSteps.push({
      array: [...originalArray],
      line: 21,
      description: `Comparing ${arr[i]} (index ${i}) with left child ${arr[left]} (index ${left})`,
      heapSize: n,
      comparing: [i, left],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
    
    if (arr[left] > arr[largest]) {
      largest = left;
      
      animationSteps.push({
        array: [...originalArray],
        line: 22,
        description: `Left child ${arr[left]} is larger than current largest ${arr[i]}`,
        heapSize: n,
        comparing: [largest],
        sorted: sortedIndices ? [...sortedIndices] : []
      });
    } else {
      animationSteps.push({
        array: [...originalArray],
        line: 21,
        description: `No action needed: ${arr[i]} (index ${i}) is already larger than or equal to its left child ${arr[left]} (index ${left})`,
        heapSize: n,
        comparing: [i],
        sorted: sortedIndices ? [...sortedIndices] : []
      });
    }
  } else {
    // no left child
    animationSteps.push({
      array: [...originalArray],
      line: 21,
      description: `No left child exists for node at index ${i}`,
      heapSize: n,
      comparing: [i],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
  }
  
  // compare with right child
  if (right < n) {
    animationSteps.push({
      array: [...originalArray],
      line: 25,
      description: `Comparing ${arr[largest]} (index ${largest}) with right child ${arr[right]} (index ${right})`,
      heapSize: n,
      comparing: [largest, right],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
    
    if (arr[right] > arr[largest]) {
      largest = right;
      
      animationSteps.push({
        array: [...originalArray],
        line: 26,
        description: `Right child ${arr[right]} is larger than current largest ${arr[largest === i ? arr[i] : arr[left]]}`,
        heapSize: n,
        comparing: [largest],
        sorted: sortedIndices ? [...sortedIndices] : []
      });
    } else {
      animationSteps.push({
        array: [...originalArray],
        line: 25,
        description: `No action needed: ${arr[largest]} (index ${largest}) is already larger than or equal to its right child ${arr[right]} (index ${right})`,
        heapSize: n,
        comparing: [largest],
        sorted: sortedIndices ? [...sortedIndices] : []
      });
    }
  } else {
    // there is no right child
    animationSteps.push({
      array: [...originalArray],
      line: 25,
      description: `No right child exists for node at index ${i}`,
      heapSize: n,
      comparing: [i],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
  }
  
  // if largest is not root, swap and heapify
  if (largest !== i) {
    animationSteps.push({
      array: [...originalArray],
      line: 30,
      description: `Swapping ${arr[i]} (index ${i}) with ${arr[largest]} (index ${largest})`,
      heapSize: n,
      swapping: [i, largest],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
    
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    animationSteps.push({
      array: [...originalArray],
      line: 33,
      description: `Recursively heapifying the affected subtree rooted at index ${largest}`,
      heapSize: n,
      comparing: [largest],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
    
    heapifyWithAnimation(arr, n, largest, sortedIndices, originalArray);
  } else {
    // add explanation when no swap is needed
    animationSteps.push({
      array: [...originalArray],
      line: 30,
      description: `No swap needed: Element at index ${i} (${arr[i]}) is already in correct position for max heap`,
      heapSize: n,
      comparing: [i],
      sorted: sortedIndices ? [...sortedIndices] : []
    });
  }
}

function nextStep() {
  if (currentStep < animationSteps.length - 1) {
    currentStep++;
    
    // always use the original array for display
    if (animationSteps[currentStep] && animationSteps[currentStep].array) {
      array = [...animationSteps[currentStep].array];
    }
    
    // highlight code line
    if (animationSteps[currentStep] && animationSteps[currentStep].line !== undefined) {
      highlightLine(animationSteps[currentStep].line);
    }
    
    // update visuals
    updateArrayDisplay();
    drawHeapTree();
  }
}

// initialize on page load
window.onload = initialize;