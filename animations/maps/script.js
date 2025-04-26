// Define code content with syntax highlighting
const codeContent = [
    '<span class="line-number">0.</span> <span style="color:blue">bool</span> containsNearbyDuplicate(<span style="color:blue">std::vector</span>&lt;<span style="color:blue">int</span>&gt;&amp; nums, <span style="color:blue">int</span> k) {',
    '<span class="line-number">1.</span>     <span style="color:blue">int</span> size = nums.size();',
    '<span class="line-number">2.</span>     <span style="color:green">// create the map, map key is the value of the vector element, map value is the index</span>',
    '<span class="line-number">3.</span>     <span style="color:blue">std::map</span>&lt;<span style="color:blue">int</span>,<span style="color:blue">int</span>&gt; map1;',
    '<span class="line-number">4.</span>     <span style="color:blue">for</span>(<span style="color:blue">int</span> i=0; i&lt;size; i++) {',
    '<span class="line-number">5.</span>         <span style="color:green">// if already exists</span>',
    '<span class="line-number">6.</span>         <span style="color:blue">if</span>(map1.find(nums[i]) != map1.end()) {',
    '<span class="line-number">7.</span>             <span style="color:blue">if</span>(i - map1[nums[i]] &lt;= k) {',
    '<span class="line-number">8.</span>                 <span style="color:blue">return true</span>;',
    '<span class="line-number">9.</span>             }',
    '<span class="line-number">10.</span>         }',
    '<span class="line-number">11.</span>         map1[nums[i]] = i;',
    '<span class="line-number">12.</span>     }',
    '<span class="line-number">13.</span>     <span style="color:blue">return false</span>;',
    '<span class="line-number">14.</span> }'
];

// Test cases
const testCases = [
    {
        array: [1, 2, 3, 1],
        k: 3,
        description: "Array [1, 2, 3, 1] with k=3: Expected true (nums[0] == nums[3], |0-3| <= 3)"
    },
    {
        array: [1, 0, 1, 1],
        k: 1,
        description: "Array [1, 0, 1, 1] with k=1: Expected true (nums[2] == nums[3], |2-3| <= 1)"
    },
    {
        array: [1, 2, 3, 4, 5],
        k: 2,
        description: "Array [1, 2, 3, 4, 5] with k=2: Expected false (no duplicates within distance k)"
    },
    {
        array: [1, 2, 3, 4, 1],
        k: 4,
        description: "Array [1, 2, 3, 4, 1] with k=4: Expected true (nums[0] == nums[4], |0-4| == 4 <= 4)"
    },
    {
        array: [99, 99],
        k: 1,
        description: "Array [99, 99] with k=1: Expected true (nums[0] == nums[1], |0-1| <= 1)"
    },
    {
        array: [1, 2, 3, 4, 5, 6],
        k: 2,
        description: "Array [1, 2, 3, 4, 5, 6] with k=2: Expected false (no duplicates)"
    }
];

// Global variables to track animation state
let currentTestCase = 0;
let currentStep = 0;
let map = new Map();
let result = false;
let animationFinished = false;
let currentLineHighlighted = -1;

// Initialize code display
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

// Highlight specific line of code
function highlightLine(lineNum) {
    // Remove current highlight
    if (currentLineHighlighted >= 0) {
        const currentLine = document.querySelector(`.code-line[data-line="${currentLineHighlighted}"]`);
        if (currentLine) {
            currentLine.classList.remove('highlighted');
        }
    }
    
    // Add new highlight
    currentLineHighlighted = lineNum;
    if (lineNum >= 0) {
        const targetLine = document.querySelector(`.code-line[data-line="${lineNum}"]`);
        if (targetLine) {
            targetLine.classList.add('highlighted');
            targetLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Update test case description
function updateCaseDescription() {
    const descEl = document.getElementById('caseDescription');
    descEl.textContent = testCases[currentTestCase].description;
}

// Create array visualization
function createArrayVisualization() {
    const container = document.getElementById('arrayContainer');
    container.innerHTML = ''; // Clear container
    
    const array = testCases[currentTestCase].array;
    array.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'array-item';
        item.setAttribute('data-index', index);
        item.textContent = value;
        container.appendChild(item);
    });
}

// Update map visualization
function updateMapVisualization() {
    const container = document.getElementById('mapContainer');
    container.innerHTML = ''; // Clear container
    
    // Display current map entries
    map.forEach((value, key) => {
        const item = document.createElement('div');
        item.className = 'map-item';
        
        const keyDiv = document.createElement('div');
        keyDiv.className = 'map-key';
        keyDiv.textContent = `Key: ${key}`;
        
        const valueDiv = document.createElement('div');
        valueDiv.className = 'map-value';
        valueDiv.textContent = `Index: ${value}`;
        
        item.appendChild(keyDiv);
        item.appendChild(valueDiv);
        container.appendChild(item);
    });
}

// Update explanation text
function updateExplanation(text) {
    document.getElementById('explanation').textContent = text;
}

// Update result display
function updateResult(res, final = false) {
    const resultEl = document.getElementById('result');
    resultEl.textContent = res ? "true" : "false";
    
    if (final) {
        resultEl.className = res ? "success" : "failure";
    } else {
        resultEl.className = "";
    }
}

// Highlight array item
function highlightArrayItem(index, className) {
    const items = document.querySelectorAll('.array-item');
    if (index >= 0 && index < items.length) {
        // Remove previous highlighting of the same class
        items.forEach(item => {
            if (item.classList.contains(className)) {
                item.classList.remove(className);
            }
        });
        
        // Add new highlight
        items[index].classList.add(className);
    }
}

// Remove all highlights from array items
function clearArrayHighlights() {
    const items = document.querySelectorAll('.array-item');
    items.forEach(item => {
        item.classList.remove('current', 'found', 'duplicate');
    });
}

// Reset animation state
function resetAnimation() {
    currentStep = 0;
    map = new Map();
    result = false;
    animationFinished = false;
    
    highlightLine(-1);
    clearArrayHighlights();
    updateMapVisualization();
    updateResult(false);
    updateExplanation("Animation reset. Click 'Next Step' to begin.");
    
    document.getElementById('nextStep').disabled = false;
}

// Handle test case button clicks
function initTestCaseButtons() {
    const buttons = document.querySelectorAll('.test-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set current test case
            currentTestCase = parseInt(this.getAttribute('data-testcase'));
            
            // Reset and initialize visualization
            resetAnimation();
            updateCaseDescription();
            createArrayVisualization();
        });
    });
}

// Animation steps for containsNearbyDuplicate algorithm
async function runAnimationStep() {
    const array = testCases[currentTestCase].array;
    const k = testCases[currentTestCase].k;
    
    if (animationFinished) {
        updateExplanation("Animation complete. Choose another test case or click 'Reset' to run again.");
        return;
    }
    
    switch (currentStep) {
        case 0:
            // Function definition
            highlightLine(0);
            updateExplanation(`Starting containsNearbyDuplicate function with array [${array.join(', ')}] and k=${k}`);
            break;
            
        case 1:
            // Get array size
            highlightLine(1);
            updateExplanation(`Getting array size: size = ${array.length}`);
            break;
            
        case 2:
            // Create map
            highlightLine(3);
            updateExplanation("Creating an empty map to store values and their indices");
            break;
            
        default:
            // Handle main loop iterations
            const loopIndex = Math.floor((currentStep - 3) / 3);
            const stepInLoop = (currentStep - 3) % 3;
            
            if (loopIndex >= array.length) {
                // Loop finished, return result
                highlightLine(13);
                updateExplanation("No duplicates found within distance k. Returning false.");
                updateResult(false, true);
                animationFinished = true;
                break;
            }
            
            const currentValue = array[loopIndex];
            
            if (stepInLoop === 0) {
                // Start of loop iteration
                highlightLine(4);
                updateExplanation(`Starting iteration ${loopIndex}: Processing element nums[${loopIndex}] = ${currentValue}`);
                clearArrayHighlights();
                highlightArrayItem(loopIndex, 'current');
            } 
            else if (stepInLoop === 1) {
                // Check if value exists in map
                highlightLine(6);
                const exists = map.has(currentValue);
                updateExplanation(`Checking if ${currentValue} already exists in the map: ${exists ? 'Found' : 'Not found'}`);
                
                if (exists) {
                    const prevIndex = map.get(currentValue);
                    highlightArrayItem(prevIndex, 'found');
                    
                    // Check if within k distance
                    highlightLine(7);
                    const diff = loopIndex - prevIndex;
                    const withinK = diff <= k;
                    
                    if (withinK) {
                        // Found duplicate within k distance
                        highlightLine(8);
                        updateExplanation(`Found duplicate! nums[${prevIndex}] = nums[${loopIndex}] = ${currentValue}, and |${loopIndex} - ${prevIndex}| = ${diff} <= ${k}. Returning true.`);
                        updateResult(true, true);
                        highlightArrayItem(loopIndex, 'duplicate');
                        animationFinished = true;
                        break;
                    } else {
                        updateExplanation(`nums[${prevIndex}] = nums[${loopIndex}] = ${currentValue}, but |${loopIndex} - ${prevIndex}| = ${diff} > ${k}. Continue checking.`);
                    }
                }
            }
            else if (stepInLoop === 2) {
                // Update map
                highlightLine(11);
                map.set(currentValue, loopIndex);
                updateMapVisualization();
                updateExplanation(`Updating map: map[${currentValue}] = ${loopIndex}`);
            }
    }
    
    currentStep++;
}

// Initialize on page load
window.onload = function() {
    initCodeDisplay();
    initTestCaseButtons();
    updateCaseDescription();
    createArrayVisualization();
    
    // Set up event listeners
    document.getElementById('nextStep').addEventListener('click', runAnimationStep);
    document.getElementById('resetBtn').addEventListener('click', function() {
        resetAnimation();
        createArrayVisualization();
    });
};