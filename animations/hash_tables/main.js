// Author: Xi Chen
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 2000,
    height: 1000
});

// then create layer
var layer = new Konva.Layer();

function makeMemory(xstart, ystart, bufferSize, w, h)
{
    for (let i = 0; i < bufferSize; ++i)
    {
        let tr = new Konva.Rect
        ({
            x: xstart,
            y: ystart+i*h,
            id:"brec"+i,
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
        
        // Add index number to the left of each box
        let indexText = new Konva.Text
        ({
            x: xstart - 30, // Position to the left of the box
            y: ystart + i*h + h/2 - 10, // Center vertically
            text: i.toString(),
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#000000',
            align: 'center',
            width: 30,
        });

        layer.add(indexText);
    }	// end of for loop
}

makeMemory(1550,60,10,50,50);

var memoryText = new Konva.Text
({
    x: 1525,
    y: 25,
    id:"memory",
    text: "Memory",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

var mainLabel = new Konva.Text
({
    x: 400,
    y: 0,
    id:"main",
    text: "Main",
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

// box for code
layer.add(memoryText);
layer.add(mainLabel);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

const steps =
[
    // Initialize phonebook
    {mainHighlight: [1], funcHighlight: [], action: null, console: "Initializing phonebook array with size 10"},
    
    // Add dan
    {mainHighlight: [2], funcHighlight: [], action: null, console: "Adding entry: dan (5182764321)"},
    {mainHighlight: [2], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [2], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [2], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [2], funcHighlight: [11], action: null, console: "5182764321 % 10 = 1"},
    {mainHighlight: [2], funcHighlight: [14], action: null, console: "Hash index: 1"},
    {mainHighlight: [2], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [2], funcHighlight: [16], action: null, console: "Setting name: dan"},
    {mainHighlight: [2], funcHighlight: [17], action: null, console: "Setting number: 5182764321"},
    {mainHighlight: [2], funcHighlight: [18], action: {type: 'highlight_memory', index: 1, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [2], funcHighlight: [19], action: {type: 'add', index: 1, name: 'dan', number: '5182764321', color: '#0000FF'}, console: "Adding node to index 1"},
    {mainHighlight: [2], funcHighlight: [20], action: {type: 'highlight_memory', index: 1, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [2], funcHighlight: [20], action: {type: 'highlight_person', index: 1, name: 'dan', number: '5182764321', color: '#222'}, console: "Returning from add function"},
    
    // Add fred
    {mainHighlight: [3], funcHighlight: [], action: null, console: "Adding entry: fred (6173551212)"},
    {mainHighlight: [3], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [3], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [3], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [3], funcHighlight: [11], action: null, console: "6173551212 % 10 = 2"},
    {mainHighlight: [3], funcHighlight: [14], action: null, console: "Hash index: 2"},
    {mainHighlight: [3], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [3], funcHighlight: [16], action: null, console: "Setting name: fred"},
    {mainHighlight: [3], funcHighlight: [17], action: null, console: "Setting number: 6173551212"},
    {mainHighlight: [3], funcHighlight: [18], action: {type: 'highlight_memory', index: 2, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [3], funcHighlight: [19], action: {type: 'add', index: 2, name: 'fred', number: '6173551212', color: '#0000FF'}, console: "Adding node to index 2"},
    {mainHighlight: [3], funcHighlight: [20], action: {type: 'highlight_memory', index: 2, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [3], funcHighlight: [20], action: {type: 'highlight_person', index: 2, name: 'fred', number: '6173551212', color: '#222'}, console: "Returning from add function"},
    
    // Add alice
    {mainHighlight: [4], funcHighlight: [], action: null, console: "Adding entry: alice (5182761234)"},
    {mainHighlight: [4], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [4], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [4], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [4], funcHighlight: [11], action: null, console: "5182761234 % 10 = 4"},
    {mainHighlight: [4], funcHighlight: [14], action: null, console: "Hash index: 4"},
    {mainHighlight: [4], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [4], funcHighlight: [16], action: null, console: "Setting name: alice"},
    {mainHighlight: [4], funcHighlight: [17], action: null, console: "Setting number: 5182761234"},
    {mainHighlight: [4], funcHighlight: [18], action: {type: 'highlight_memory', index: 4, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [4], funcHighlight: [19], action: {type: 'add', index: 4, name: 'alice', number: '5182761234', color: '#0000FF'}, console: "Adding node to index 4"},
    {mainHighlight: [4], funcHighlight: [20], action: {type: 'highlight_memory', index: 4, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [4], funcHighlight: [20], action: {type: 'highlight_person', index: 4, name: 'alice', number: '5182761234', color: '#222'}, console: "Returning from add function"},
    
    // Add carol
    {mainHighlight: [5], funcHighlight: [], action: null, console: "Adding entry: carol (5182761267)"},
    {mainHighlight: [5], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [5], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [5], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [5], funcHighlight: [11], action: null, console: "5182761267 % 10 = 7"},
    {mainHighlight: [5], funcHighlight: [14], action: null, console: "Hash index: 7"},
    {mainHighlight: [5], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [5], funcHighlight: [16], action: null, console: "Setting name: carol"},
    {mainHighlight: [5], funcHighlight: [17], action: null, console: "Setting number: 5182761267"},
    {mainHighlight: [5], funcHighlight: [18], action: {type: 'highlight_memory', index: 7, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [5], funcHighlight: [19], action: {type: 'add', index: 7, name: 'carol', number: '5182761267', color: '#0000FF'}, console: "Adding node to index 7"},
    {mainHighlight: [5], funcHighlight: [20], action: {type: 'highlight_memory', index: 7, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [5], funcHighlight: [20], action: {type: 'highlight_person', index: 7, name: 'carol', number: '5182761267', color: '#222'}, console: "Returning from add function"},
    
    // Add bob
    {mainHighlight: [6], funcHighlight: [], action: null, console: "Adding entry: bob (5182765678)"},
    {mainHighlight: [6], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [6], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [6], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [6], funcHighlight: [11], action: null, console: "5182765678 % 10 = 8"},
    {mainHighlight: [6], funcHighlight: [14], action: null, console: "Hash index: 8"},
    {mainHighlight: [6], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [6], funcHighlight: [16], action: null, console: "Setting name: bob"},
    {mainHighlight: [6], funcHighlight: [17], action: null, console: "Setting number: 5182765678"},
    {mainHighlight: [6], funcHighlight: [18], action: {type: 'highlight_memory', index: 8, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [6], funcHighlight: [19], action: {type: 'add', index: 8, name: 'bob', number: '5182765678', color: '#0000FF'}, console: "Adding node to index 8"},
    {mainHighlight: [6], funcHighlight: [20], action: {type: 'highlight_memory', index: 8, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [6], funcHighlight: [20], action: {type: 'highlight_person', index: 8, name: 'bob', number: '5182765678', color: '#222'}, console: "Returning from add function"},
    
    // Add erin
    {mainHighlight: [7], funcHighlight: [], action: null, console: "Adding entry: erin (5182764488)"},
    {mainHighlight: [7], funcHighlight: [13], action: null, console: "Entering add function"},
    {mainHighlight: [7], funcHighlight: [14], action: null, console: "Calculating hash index..."},
    {mainHighlight: [7], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [7], funcHighlight: [11], action: null, console: "5182764488 % 10 = 8"},
    {mainHighlight: [7], funcHighlight: [14], action: null, console: "Hash index: 8"},
    {mainHighlight: [7], funcHighlight: [15], action: null, console: "Creating new node"},
    {mainHighlight: [7], funcHighlight: [16], action: null, console: "Setting name: erin"},
    {mainHighlight: [7], funcHighlight: [17], action: null, console: "Setting number: 5182764488"},
    {mainHighlight: [7], funcHighlight: [18], action: {type: 'highlight_memory', index: 8, color: '#00FF00'}, console: "Setting next pointer"},
    {mainHighlight: [7], funcHighlight: [19], action: {type: 'add', index: 8, name: 'erin', number: '5182764488', chain: true, color: '#0000FF'}, console: "Adding node to index 8 (chaining)"},
    {mainHighlight: [7], funcHighlight: [20], action: {type: 'highlight_memory', index: 8, color: '#343434'}, console: "Returning from add function"},
    {mainHighlight: [7], funcHighlight: [20], action: {type: 'highlight_person', index: 8, name: 'erin', number: '5182764488', color: '#222'}, console: "Returning from add function"},
    
    // Identify dan
    {mainHighlight: [8], funcHighlight: [], action: null, console: "Searching for number: 5182764321"},
    {mainHighlight: [8], funcHighlight: [21], action: null, console: "Entering identify function"},
    {mainHighlight: [8], funcHighlight: [22], action: null, console: "Calculating hash index..."},
    {mainHighlight: [8], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [8], funcHighlight: [11], action: null, console: "5182764321 % 10 = 1"},
    {mainHighlight: [8], funcHighlight: [22], action: null, console: "Hash index: 1"},
    {mainHighlight: [8], funcHighlight: [23], action: {type: 'highlight_memory', index: 1, color: '#00FF00'}, console: "Starting search at index 1"},
    {mainHighlight: [8], funcHighlight: [24], action: null, console: "phonebook[1] is not nullptr(true)"},
    {mainHighlight: [8], funcHighlight: [25], action: null, console: "5182764321 == 5182764321(true)"},
    {mainHighlight: [8], funcHighlight: [26], action: {type: 'idan', index: 1, name: 'dan', color: '#0000FF'}, console: "Returning: dan"},
    {mainHighlight: [8], funcHighlight: [31], action: {type: 'idan', index: 1, name: 'dan', color: '#222'}, console: "Returning from identify function"},
    {mainHighlight: [8], funcHighlight: [], action: {type: 'highlight_memory', index: 1, color: '#343434'}, console: "Identify 5182764321: dan"},
    
    // Identify erin
    {mainHighlight: [9], funcHighlight: [], action: null, console: "Searching for number: 5182764488"},
    {mainHighlight: [9], funcHighlight: [21], action: null, console: "Entering identify function"},
    {mainHighlight: [9], funcHighlight: [22], action: null, console: "Calculating hash index..."},
    {mainHighlight: [9], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [9], funcHighlight: [11], action: null, console: "5182764488 % 10 = 8"},
    {mainHighlight: [9], funcHighlight: [22], action: null, console: "Hash index: 8"},
    {mainHighlight: [9], funcHighlight: [23], action: {type: 'highlight_memory', index: 8, color: '#00FF00'}, console: "Starting search at index 8"},
    {mainHighlight: [9], funcHighlight: [24], action: null, console: "phonebook[8] is not nullptr(true)"},
    {mainHighlight: [9], funcHighlight: [25], action: null, console: "5182765678 != 5182764488(false)"},
    {mainHighlight: [9], funcHighlight: [28], action: null, console: "Moving to next node"},
    {mainHighlight: [9], funcHighlight: [24], action: null, console: "phonebook[8]->next is not nullptr(true)"},
    {mainHighlight: [9], funcHighlight: [25], action: null, console: "5182764488 == 5182764488(true)"},
    {mainHighlight: [9], funcHighlight: [26], action: {type: 'ierin', index: 8, name: 'erin', color: '#0000FF'}, console: "Returning: erin"},
    {mainHighlight: [9], funcHighlight: [31], action: {type: 'ierin', index: 8, name: 'erin', color: '#222'}, console: "Returning from identify function"},
    {mainHighlight: [9], funcHighlight: [], action: {type: 'highlight_memory', index: 8, color: '#343434'}, console: "Identify 5182764488: erin"},
    
    // Identify fred
    {mainHighlight: [10], funcHighlight: [], action: null, console: "Searching for number: 6173551212"},
    {mainHighlight: [10], funcHighlight: [21], action: null, console: "Entering identify function"},
    {mainHighlight: [10], funcHighlight: [22], action: null, console: "Calculating hash index..."},
    {mainHighlight: [10], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [10], funcHighlight: [11], action: null, console: "6173551212 % 10 = 2"},
    {mainHighlight: [10], funcHighlight: [22], action: null, console: "Hash index: 2"},
    {mainHighlight: [10], funcHighlight: [23], action: {type: 'highlight_memory', index: 2, color: '#00FF00'}, console: "Starting search at index 2"},
    {mainHighlight: [10], funcHighlight: [24], action: null, console: "phonebook[2] is not nullptr(true)"},
    {mainHighlight: [10], funcHighlight: [25], action: null, console: "6173551212 == 6173551212(true)"},
    {mainHighlight: [10], funcHighlight: [26], action: {type: 'ifred', index: 2, name: 'fred', color: '#0000FF'}, console: "Returning: fred"},
    {mainHighlight: [10], funcHighlight: [31], action: {type: 'ifred', index: 2, name: 'fred', color: '#222'}, console: "Returning from identify function"},
    {mainHighlight: [10], funcHighlight: [], action: {type: 'highlight_memory', index: 2, color: '#343434'}, console: "Identify 6173551212: fred"},
    
    // Identify not found
    {mainHighlight: [11], funcHighlight: [], action: null, console: "Searching for number: 1234567890"},
    {mainHighlight: [11], funcHighlight: [21], action: null, console: "Entering identify function"},
    {mainHighlight: [11], funcHighlight: [22], action: null, console: "Calculating hash index..."},
    {mainHighlight: [11], funcHighlight: [10], action: null, console: "Entering hash_function"},
    {mainHighlight: [11], funcHighlight: [11], action: null, console: "1234567890 % 10 = 0"},
    {mainHighlight: [11], funcHighlight: [22], action: null, console: "Hash index: 0"},
    {mainHighlight: [11], funcHighlight: [23], action: null, console: "Starting search at index 0"},
    {mainHighlight: [11], funcHighlight: [24], action: null, console: "phonebook[0] is not nullptr(false)"},
    {mainHighlight: [11], funcHighlight: [30], action: null, console: "Returning: Not found"},
    {mainHighlight: [11], funcHighlight: [31], action: null, console: "Returning from identify function"},
    {mainHighlight: [11], funcHighlight: [], action: null, console: "Identify 1234567890: Not found"},
    
    // Return 0
    {mainHighlight: [12], funcHighlight: [], action: null, console: "Program completed"}
];

function highlightCodeLines(mainLines, funcLines)
{
    for (let i = 0; i < mainCodeTextNodes.length; ++i)
    {
        if (mainLines.includes(i))
        {
            mainCodeTextNodes[i].fontStyle('normal');
            mainCodeTextNodes[i].fill('#FF0000'); // Bright red for current line
        }
        else
        {
            mainCodeTextNodes[i].fontStyle('normal');
            mainCodeTextNodes[i].fill('#222');
        }
    }

    for (let i = 0; i < funcCodeTextNodes.length; ++i)
    {
        if (funcLines.includes(i))
        {
            funcCodeTextNodes[i].fontStyle('normal');
            funcCodeTextNodes[i].fill('#FF0000'); // Bright red for current line
        }
        else
        {
            funcCodeTextNodes[i].fontStyle('normal');
            funcCodeTextNodes[i].fill('#222');
        }
    }

    layer.draw();
}

let stepIndex = 0;

function nextstep()
{
    if (stepIndex >= steps.length)
    {
        alert('End of animation! Refresh to restart.');
        return;
    }

    let step = steps[stepIndex];
    highlightCodeLines(step.mainHighlight, step.funcHighlight);
    
    // Perform the action first
    if (step.action) 
    {
        if (step.action.type === 'add')
        {
            addNodeToMemory(step.action.index, step.action.name, step.action.number, step.action.chain, step.action.color);
        }
        else if (step.action.type === 'highlight_memory')
        {
            highlightMemoryBox(step.action.index, step.action.color);
        }
        else if (step.action.type === 'idan')
        {
            highlightPersonBox(step.action.index, step.action.name, 5182764321, step.action.color);
        }
        else if (step.action.type === 'ierin')
        {
            highlightPersonBox(step.action.index, step.action.name, 5182764488, step.action.color);
        }
        else if (step.action.type === 'ifred')
        {
            highlightPersonBox(step.action.index, step.action.name, 6173551212, step.action.color);
        }
        else if (step.action.type === 'highlight_person')
        {
            highlightPersonBox(step.action.index, step.action.name, step.action.number, step.action.color);
        }
    }
    
    // Then show the console message
    if (step.console)
    {
        addConsoleText(step.console);
    }
    
    layer.draw();
    ++stepIndex;
}

window.nextstep = nextstep;

function highlightNext(index, path, i)
{
    if (i < path.length)
    {
        let obj = memoryNodes[index][path[i]];

        if (obj)
        {
            obj.group.children.each(child => {
                if (child instanceof Konva.Rect)
                {
                    child.stroke('#FF0000'); // red for current
                    child.strokeWidth(5);
                }
            });
        }

        layer.draw();
        ++i;

        if (i < path.length)
        {
            setTimeout(() => highlightNext(index, path, i), 1000);
        }
    }
}

function highlightIdentifyPath(index, path)
{
    // Remove previous highlights
    for (let idx in memoryNodes)
    {
        memoryNodes[idx].forEach(obj => {
            obj.group.children.each(child => {
                if (child instanceof Konva.Rect)
                {
                    child.stroke('#222');
                    child.strokeWidth(2);
                }
            });
        });
    }

    if (!memoryNodes[index]) return;

    // Start the animation
    highlightNext(index, path, 0);
}

// --- Main Code Box (left) ---
const mainCodeLines =
[
    'int main(){',
    '    Node *phonebook[SIZE] = {nullptr};',
    '    add(phonebook, 5182764321, "dan");',
    '    add(phonebook, 6173551212, "fred");',
    '    add(phonebook, 5182761234, "alice");',
    '    add(phonebook, 5182761267, "carol");',
    '    add(phonebook, 5182765678, "bob");',
    '    add(phonebook, 5182764488, "erin");',
    '    std::cout << "Identify 5182764321: " << identify(phonebook, 5182764321) << std::endl;',
    '    std::cout << "Identify 5182764488: " << identify(phonebook, 5182764488) << std::endl;',
    '    std::cout << "Identify 6173551212: " << identify(phonebook, 6173551212) << std::endl;',
    '    std::cout << "Identify 1234567890: " << identify(phonebook, 1234567890) << std::endl;',
    '    return 0;',
    '}'
];

// --- Function Code Box (center) ---
const funcCodeLines =
[
    '#include <iostream>',
    '#include <string>',
    'const int SIZE = 10;',
    'struct Node{',
    'public:',
    '    int number;',
    '    std::string name;',
    '    Node *next;',
    '    Node() : name(""), number(0), next(nullptr) {}',
    '};',
    'int hash_function(int number){',
    '    return number % SIZE;',
    '}',
    'void add(Node *phonebook[SIZE], int number, std::string &name){',
    '    int index = hash_function(number);',
    '    Node *tmp = new Node;',
    '    tmp->name = name;',
    '    tmp->number = number;',
    '    tmp->next = phonebook[index];',
    '    phonebook[index] = tmp;',
    '}',
    'std::string identify(Node *phonebook[SIZE], int number){',
    '    int index = hash_function(number);',
    '    Node *curr = phonebook[index];',
    '    while (curr != nullptr){',
    '        if (curr->number == number){',
    '            return curr->name;',
    '        }',
    '        curr = curr->next;',
    '    }',
    '    return "Not found";',
    '}'
];

// Draw main code box (left)
var mainCodeBox = new Konva.Rect
({
    x: 20,
    y: 25,
    width: 800,
    height: mainCodeLines.length * 24 + 40,
    fill: '#ddd',
    stroke: '#555',
    strokeWidth: 5,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

layer.add(mainCodeBox);

// Draw console box under main code box
var consoleBox = new Konva.Rect
({
    x: 20,
    y: mainCodeBox.y() + mainCodeBox.height() + 40,
    width: 800,
    height: 100,
    fill: '#ddd',
    stroke: '#555',
    strokeWidth: 5,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

layer.add(consoleBox);

var consoleLabel = new Konva.Text
({
    x: 375,
    y: consoleBox.y() - 25,
    id: 'console',
    text: 'Console',
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

layer.add(consoleLabel);

let consoleTextNode = null;

function addConsoleText(text)
{
    if (consoleTextNode)
    {
        consoleTextNode.destroy();
    }

    consoleTextNode = new Konva.Text
    ({
        x: 30,
        y: consoleBox.y() + 30,
        text: text,
        id: 'console_line',
        fontSize: 16,
        fontFamily: 'Consolas',
        fill: '#000000',
        width: 785,
        padding: 1,
        wrap: 'none',
    });

    layer.add(consoleTextNode);
    layer.draw();
}

let mainCodeTextNodes = [];

for (let i = 0; i < mainCodeLines.length; ++i)
{
    let t = new Konva.Text
    ({
        x: 30,
        y: 40 + i * 24,
        text: mainCodeLines[i],
        id: 'main_code_line_' + i,
        fontSize: 16,
        fontFamily: 'Consolas',
        fill: '#222',
        width: 785,
        padding: 1,
        wrap: 'none',
    });

    mainCodeTextNodes.push(t);
    layer.add(t);
}

// Function code box (center)
var funcCodeBox = new Konva.Rect
({
    x: 850,
    y: 25,
    width: 600,
    height: funcCodeLines.length * 24 + 30,
    fill: '#ddd',
    stroke: '#555',
    strokeWidth: 5,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

layer.add(funcCodeBox);

var funcCodeLabel = new Konva.Text
({
    x: 1175,
    y: 0,
    id: 'func_code',
    text: 'Functions',
    fontSize: 28,
    fontFamily: 'Calibri',
    fill: '#000000',
});

layer.add(funcCodeLabel);

let funcCodeTextNodes = [];

for (let i = 0; i < funcCodeLines.length; ++i)
{
    let t = new Konva.Text
    ({
        x: 875,
        y: 40 + i * 24,
        text: funcCodeLines[i],
        id: 'func_code_line_' + i,
        fontSize: 16,
        fontFamily: 'Consolas',
        fill: '#222',
        width: 750,
        padding: 1,
        wrap: 'none',
    });

    funcCodeTextNodes.push(t);
    layer.add(t);
}

let memoryNodes = {};

function addNodeToMemory(index, name, number, chain = false, color = '#222')
{
    if (!memoryNodes[index]) memoryNodes[index] = [];
    let y = 60 + index * 50 + 10;
    let x = 1625 + memoryNodes[index].length * 150;

    // Draw node group (rectangle + text)
    let group = new Konva.Group();

    let nodeRect = new Konva.Rect
    ({
        x: x,
        y: y,
        width: 100,
        height: 30,
        fill: '#fff',
        stroke: color,
        strokeWidth: 4,
        cornerRadius: 5,
    });

    let numberText = new Konva.Text
    ({
        x: x + 5,
        y: y + 2,
        text: String(number),
        fontSize: 12,
        fontFamily: 'Consolas',
        fill: '#333',
    });

    let nameText = new Konva.Text
    ({
        x: x + 5,
        y: y + 15,
        text: name,
        fontSize: 15,
        fontFamily: 'Calibri',
        fill: '#000',
        fontStyle: 'bold',
    });

    group.add(nodeRect);
    group.add(numberText);
    group.add(nameText);
    layer.add(group);

    // Draw arrow from memory box or previous node
    let arrow;

    if (memoryNodes[index].length === 0)
    {
        arrow = new Konva.Arrow
        ({
            points: [1700, y + 15, x, y + 15],
            pointerLength: 10,
            pointerWidth: 10,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 2,
        });
    }
    else
    {
        let prevX = 1725 + (memoryNodes[index].length - 1) * 150 + 100;

        arrow = new Konva.Arrow
        ({
            points: [prevX, y + 15, x, y + 15],
            pointerLength: 10,
            pointerWidth: 10,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 2,
        });
    }

    layer.add(arrow);
    memoryNodes[index].push({group, arrow});
}

function highlightMemoryBox(index, color)
{
    // Find the memory box by its ID
    const memoryBox = layer.findOne('#brec' + index);

    if (memoryBox)
    {
        memoryBox.stroke(color);
        memoryBox.strokeWidth(5);
        layer.draw();
    }
}

function highlightPersonBox(index, name, number, color)
{
    let y = 60 + index * 50 + 10;
    let x = 1725 + (memoryNodes[index].length - 1) * 150;

    // Draw node group (rectangle + text)
    let group = new Konva.Group();

    let nodeRect = new Konva.Rect
    ({
        x: x,
        y: y,
        width: 100,
        height: 30,
        fill: '#fff',
        stroke: color,
        strokeWidth: 4,
        cornerRadius: 5,
    });

    let numberText = new Konva.Text
    ({
        x: x + 5,
        y: y + 2,
        text: String(number),
        fontSize: 12,
        fontFamily: 'Consolas',
        fill: '#333',
    });

    let nameText = new Konva.Text
    ({
        x: x + 5,
        y: y + 15,
        text: name,
        fontSize: 15,
        fontFamily: 'Calibri',
        fill: '#000',
        fontStyle: 'bold',
    });

    group.add(nodeRect);
    group.add(numberText);
    group.add(nameText);
    layer.add(group);
    layer.draw();
}
