// Author: Based on previous examples
// Create a stage for the animation
var stage = new Konva.Stage({
    container: 'container',
    width: 1200,
    height: 700
});

// Create layer
var layer = new Konva.Layer();

// Variables to track animation state
var stack = [];
var lastPopped = "";
var currentString = "";
var currentIndex = 0;
var pc = 0; // Program counter for animation steps
var isComplete = false;

// Stack size and positioning
var stack_size = 10;
var stack_x = 1000;
var stack_y = 100;
var stack_width = 120;
var stack_height = 40;

// Initialize the visualization
function init() {
    // Reset layer
    layer.destroyChildren();
    
    // Create code display
    createCodeDisplay();
    
    // Create stack visualization
    createStack();
    
    // Create animation controls area
    createNextStepButton();
    
    // Add the layer to the stage
    stage.add(layer);
    layer.draw();
}

// Create the code display
function createCodeDisplay() {
    var codeRect = new Konva.Rect({
        x: 50,
        y: 50,
        width: 450,
        height: 600,
        stroke: '#555',
        strokeWidth: 2,
        fill: '#f5f5f5',
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        shadowOpacity: 0.2,
        cornerRadius: 10,
        id: 'code_rect'
    });
    layer.add(codeRect);

    // Add the code text
    var codeLines = [
        "bool isValid(string s) {",
        "    std::stack<char> myStack;",
        "    int len = s.length();",
        "    char c;",
        "    for(int i=0; i<len; i++) {",
        "        // Push opening brackets to stack",
        "        if(s[i]=='(' || s[i]=='{' || s[i]=='[') {",
        "            myStack.push(s[i]);",
        "        } else {",
        "            // Check for closing brackets",
        "            if(myStack.empty()) {",
        "                return false;",
        "            }",
        "            c = myStack.top();",
        "            myStack.pop();",
        "            // Check bracket matching",
        "            if(s[i]==')' && c!='(') return false;",
        "            if(s[i]=='}' && c!='{') return false;",
        "            if(s[i]==']' && c!='[') return false;",
        "        }",
        "    }",
        "    // Check if all brackets are matched",
        "    return myStack.empty();",
        "}"
    ];

    for (var i = 0; i < codeLines.length; i++) {
        makeText(60, 60 + i * 20, codeLines[i], 'code_line_' + i);
    }
}

// Create the stack boxes
function createStack() {
    makeText(stack_x, stack_y - 50, "Stack", "stack_title");
    
    // rectangles on stack
    for (var i = 0; i < stack_size; i++) {
        var rect = new Konva.Rect({
            x: stack_x,
            y: stack_y + i * stack_height,
            id: "stack_rec" + i,
            stroke: '#343434',
            strokeWidth: 2,
            fill: '#f0f0f0',
            width: stack_width,
            height: stack_height,
        });
        layer.add(rect);
    }
    
    var base = new Konva.Rect({
        x: stack_x,
        y: stack_y + stack_size * stack_height,
        width: stack_width,
        height: 5,
        fill: 'black',
    });
    layer.add(base);
}

// create next step button
function createNextStepButton() {
    
    var nextStepButton = new Konva.Label({
        x: 530,
        y: 400,

    });
    
    nextStepButton.add(new Konva.Tag({
        fill: 'blue',
        cornerRadius: 3,
        shadowColor: 'black',
    }));
    
    nextStepButton.add(new Konva.Text({
        text: 'Next Step',
        fontSize: 18,
        padding: 10,
        fill: 'white'
    }));
    
    nextStepButton.on('click', function() {
        nextStep();
    });

    
    layer.add(nextStepButton);
}

// Create the input string display
function createInputDisplay(str) {
    // Clear previous displays
    var prevDisplay = stage.find('#input_display');
    prevDisplay.each(function(node) {
        node.destroy();
    });
    
    // Input string display title
    makeText(520, 50, "Input: string s = \"" + str + "\"", "input_title");
    
    // Create boxes for each character
    var boxWidth = 40;
    var boxSpacing = 10;
    var startX = 520;
    var startY = 100;
    
    var group = new Konva.Group({
        id: 'input_display'
    });
    
    for (var i = 0; i < str.length; i++) {
        var charBox = new Konva.Rect({
            x: startX + i * (boxWidth + boxSpacing),
            y: startY,
            width: boxWidth,
            height: boxWidth,
            fill: '#f0f0f0',
            stroke: '#555',
            strokeWidth: 1,
            cornerRadius: 4,
            id: 'char_box_' + i
        });
        
        var charText = new Konva.Text({
            x: startX + i * (boxWidth + boxSpacing) + 12,
            y: startY + 10,
            text: str[i],
            fontSize: 20,
            fontFamily: 'monospace',
            fill: 'black',
            id: 'char_text_' + i
        });
        
        group.add(charBox);
        group.add(charText);
    }
    
    // Create the character pointer (initially at first character)
    var pointer = new Konva.RegularPolygon({
        x: startX + boxWidth/2,
        y: startY - 15,
        sides: 3,
        radius: 12,
        fill: 'red',
        rotation: 180,
        id: 'char_pointer'
    });
    
    group.add(pointer);
    layer.add(group);
}

// Create the result and explanations
function createResultDisplay() {
    var prevDisplay = stage.find('#result_display');
    prevDisplay.each(function(node) {
        node.destroy();
    });
    
    var group = new Konva.Group({
        id: 'result_display'
    });
    
    // Result display
    var resultBox = new Konva.Rect({
        x: 520,
        y: 150,
        width: 250,
        height: 40,
        fill: '#e0e0e0',
        stroke: '#555',
        strokeWidth: 1,
        cornerRadius: 5,
        id: 'result_box'
    });
    
    var resultText = new Konva.Text({
        x: 530,
        y: 160,
        text: 'Output: Code Not Finished',
        fontSize: 16,
        fontFamily: 'Arial',
        fill: 'black',
        id: 'result_text'
    });
    
    // Explanation box
    var explanationBox = new Konva.Rect({
        x: 520,
        y: 200,
        width: 250,
        height: 150,
        fill: '#f0f0f0',
        stroke: '#555',
        strokeWidth: 1,
        cornerRadius: 5,
        id: 'explanation_box'
    });
    
    var explanationText = new Konva.Text({
        x: 530,
        y: 210,
        text: 'Click "Next Step" to begin checking the brackets.',
        fontSize: 16,
        fontFamily: 'Arial',
        fill: 'black',
        width: 240,
        id: 'explanation_text'
    });
    
    group.add(resultBox);
    group.add(resultText);
    group.add(explanationBox);
    group.add(explanationText);
    
    layer.add(group);
}

// Utility function to create text
function makeText(x, y, str, id, color) {
    var text = new Konva.Text({
        x: x,
        y: y,
        text: str,
        id: 'text_' + id,
        fontSize: 16,
        fontFamily: 'Arial',
        fill: color || 'black',
        width: 1000,
    });
    layer.add(text);
    return text;
}

// highlight current line in code
function highlightCodeLine(lineNum) {
    for (var i = 0; i < 25; i++) {
        var line = stage.find('#text_code_line_' + i);
        if (line.length > 0) {
            line[0].fontStyle('normal');
            line[0].fill('black');
        }
    }
    
    // highlight current line
    var currentLine = stage.find('#text_code_line_' + lineNum);
    if (currentLine.length > 0) {
        currentLine[0].fontStyle('bold');
        currentLine[0].fill('blue');
    }
    
    layer.draw();
}

// Move the character pointer
function movePointer(index) {
    if (index < 0 || index >= currentString.length) return;
    
    var charBox = stage.find('#char_box_' + index)[0];
    var pointer = stage.find('#char_pointer')[0];
    
    if (charBox && pointer) {
        pointer.x(charBox.x() + charBox.width()/2);
    }
    
    layer.draw();
}


// Reset character highlight
function resetCharHighlight(index) {
    if (index < 0 || index >= currentString.length) return;
    
    var charBox = stage.find('#char_box_' + index)[0];
    if (charBox) {
        charBox.fill('#f0f0f0');
    }
    
    layer.draw();
}

// Push a character onto the stack
function pushToStack(char) {
    stack.push(char);
    var stackIndex = stack_size - stack.length;
    
    // Add the character to the stack visual
    var charText = new Konva.Text({
        x: stack_x + stack_width/2 - 10,
        y: stack_y + stackIndex * stack_height + 10,
        text: char,
        fontSize: 24,
        fontFamily: 'monospace',
        fill: 'black',
        id: 'stack_item_' + stackIndex
    });
    
    layer.add(charText);
    layer.draw();
}

// Pop a character from the stack
function popFromStack() {
    if (stack.length === 0) return null;
    
    var poppedChar = stack.pop();
    var stackIndex = stack_size - stack.length - 1;
    
    // Remove the character from the stack visual
    stage.find('#stack_item_' + stackIndex).destroy();
    
    // Reset the stack slot color
    stage.find('#stack_rec' + stackIndex)[0].fill('#f0f0f0');
    
    layer.draw();
    return poppedChar;
}


// Update the result text
function updateResult(text, color) {
    var resultText = stage.find('#result_text')[0];
    if (resultText) {
        resultText.text('Output: ' + text);
        resultText.fill(color || 'black');
    }
    layer.draw();
}

// Update the explanation text
function updateExplanation(text) {
    var explanationText = stage.find('#explanation_text')[0];
    if (explanationText) {
        explanationText.text(text);
    }
    layer.draw();
}

// Reset the animation state for a new case
function resetAnimation(str) {
    // Reset state variables
    currentString = str;
    currentIndex = 0;
    stack = [];
    pc = 1;
    isComplete = false;
    
    // Reset visual elements
    init();
    createInputDisplay(str);
    createResultDisplay();
    
    // Reset all stack slots
    for (var i = 0; i < stack_size; i++) {
        stage.find('#stack_rec' + i)[0].fill('#f0f0f0');
    }
    
    // Initialize first step
    highlightCodeLine(0);
    updateResult('Code Not Finished', 'black');
    updateExplanation('Click "Next Step" to begin checking the brackets: ' + str);
    
    layer.draw();
}

// Process the next step of the animation
function nextStep() {
    if (isComplete) return;
    
    switch (pc) {
        case 1:
            // Initialize stack
            highlightCodeLine(1);
            updateExplanation("Creating an empty stack to store opening brackets");
            pc++;
            break;
            
        case 2:
            // Get length
            highlightCodeLine(2);
            updateExplanation("Getting the length of the string of brackets: " + currentString.length);
            pc++;
            break;
            
        case 3:
            // Initialize for loop
            highlightCodeLine(4);
            updateExplanation("Starting the loop to process each character");
            pc++;
            break;
            
        case 4:
            // Check if done with all characters
            if (currentIndex >= currentString.length) {
                // Final check if stack is empty
                highlightCodeLine(21);
                updateExplanation("All characters processed. Checking if the stack is empty...");
                
                if (stack.length === 0) {
                    updateResult("True");
                    updateExplanation("The stack is empty, which means all opening brackets were matched with their closing brackets in the correct order. The string is valid.");
                } else {
                    updateResult("False", "red");
                    updateExplanation("The stack still has " + stack.length + " unmatched opening bracket(s). This means some opening brackets were never matched with closing brackets. The string is invalid.");
                }
                
                isComplete = true;
                break;
            }
            
            // Process current character
            movePointer(currentIndex);
            var currentChar = currentString[currentIndex];
            updateExplanation("Processing character at index " + currentIndex + ": '" + currentChar + "'");
            
            // Check if opening bracket
            if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
                highlightCodeLine(6);
                pc = 5; // Go to opening bracket logic
            } else {
                highlightCodeLine(8);
                pc = 6; // Go to closing bracket logic
            }
            break;
            
        case 5:
            // Process opening bracket
            var currentChar = currentString[currentIndex];
            highlightCodeLine(7);
            updateExplanation("Found opening bracket '" + currentChar + "'. Pushing it onto the stack to remember it.");
            pushToStack(currentChar);
            
            // Move to next character
            resetCharHighlight(currentIndex);
            currentIndex++;
            pc = 4; // Return to character processing
            break;
            
        case 6:
            // Process closing bracket - check if stack is empty
            var currentChar = currentString[currentIndex];
            highlightCodeLine(10);
            
            if (stack.length === 0) {
                updateExplanation("Found closing bracket '" + currentChar + "' but the stack is empty. This means there's no matching opening bracket, so the string is invalid.");
                updateResult("false", "red");
                isComplete = true;
                break;
            }
            
            updateExplanation("Found closing bracket '" + currentChar + "'. Checking the top of the stack for a matching opening bracket.");
            pc++;
            break;
            
        case 7:
            // Get top of stack
            var currentChar = currentString[currentIndex];
            var topChar = stack[stack.length - 1];
            highlightCodeLine(12);
            updateExplanation("The top of the stack contains: '" + topChar + "'");
            pc++;
            break;
            
        case 8:
            // Pop from stack
            var currentChar = currentString[currentIndex];
            var topChar = stack[stack.length - 1];
            highlightCodeLine(13);
            updateExplanation("Popping '" + topChar + "' from the stack to compare with '" + currentChar + "'");
            lastPopped = popFromStack();
            pc++;
            break;
            
        case 9:
            // Check if brackets match
            var currentChar = currentString[currentIndex];
            var topChar = lastPopped;
            if (currentChar === ')') {
                highlightCodeLine(15);
            } else if (currentChar === '}') {
                highlightCodeLine(16);
            } else if (currentChar === ']') {
                highlightCodeLine(17);
            }
            
            // Check if match failed
            if ((currentChar === ')' && topChar !== '(') || 
                (currentChar === '}' && topChar !== '{') || 
                (currentChar === ']' && topChar !== '[')) {
                
                updateExplanation("Mismatch! Closing bracket '" + currentChar + "' doesn't match with the opening bracket '" + topChar + "'. The string is invalid.");
                updateResult("False");
                isComplete = true;
                break;
            }
            
            // Match succeeded
            updateExplanation("Match found! Closing bracket '" + currentChar + "' correctly matches with opening bracket '" + topChar + "'." );
            
            // Move to next character
            resetCharHighlight(currentIndex);
            currentIndex++;
            pc = 4; // Return to character processing
            break;
    }
    
    layer.draw();
}

// Case 1: "()"
function case1() {
    resetAnimation("()");
}

// Case 2: "()[]{}"
function case2() {
    resetAnimation("()[]{}");
}

// Case 3: "(]"
function case3() {
    resetAnimation("(]");
}

// Case 4: "([])"
function case4() {
    resetAnimation("([])");
}

// Case 4: "({[{[()]}]})"
function case5() {
    resetAnimation("{[([])]}");
}

// Initialize the animation
init();
case1(); // Start with Case 1 by default