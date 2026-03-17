# Lab 11 — Stacks and Queues

## Checkpoint 1: Implementing a Stack using Queues

In this exercise, we will be implementing a stack using queues. You are given a starter program, MyStack.cpp.

### The Scenario:

Imagine the STL stack library is unavailable in your environment, but the STL queue library is. Your goal is to implement a Last-In-First-Out (LIFO) stack using a First-In-First-Out (FIFO) queue as the underlying storage.

### Your Tasks:

#### Implement the Logic: 

Complete the Code: Fill in the missing logic in the MyStack class. You must implement push, pop, top, empty, and size.

#### Verify via Testing:

Compile and run the program. The main function contains several assert statements. If your implementation is correct, the program should run to completion and print "All tests passed successfully!"

#### Visualize the Logic:

Draw a step-by-step diagram showing the state of the internal queue after each push or pop operation in the main function.

**To Complete This Checkpoint**: Show a TA or mentor the following:

- The completed code for your MyStack class.
- The terminal output proving you passed all test cases.
- Your diagram showing how the internal queue was changed after each push or pop operation in the main function.

## Checkpoint 2: Implementing a Queue using two Stacks

In this exercise, we will be implementing a Queue using two stacks. You are given a starter program, MyQueue.cpp.

### The Scenario:

Imagine you have access to the STL stack library, but the queue library is missing. To maintain FIFO order, you will use two stacks:

- s_in: To handle all incoming push operations.
- s_out: To handle pop and front operations.

### Your Tasks:

#### Implement the Logic: 

Complete the Code: Fill in the missing logic in the MyQueue class. You must implement push, pop, front, empty, and size.

#### Verify via Testing:

Compile and run the program. The main function contains several assert statements. If your implementation is correct, the program should run to completion and print "All queue tests passed successfully!"

#### Visualize the Logic:

Draw a step-by-step diagram showing the state of the internal stacks after each push or pop operation in the main function.

**To Complete This Checkpoint**: Show a TA or mentor the following:

- The completed code for your MyQueue class.
- The terminal output proving you passed all test cases.
- Your diagram illustrating how the two stacks change after each push or pop operation in the main function.

## Checkpoint 3: Implementing a Queue using a Single Stack (Recursion)

In Checkpoint 2, you used two physical stacks to maintain FIFO order. In this exercise, you will achieve the same result using only one explicit stack. To do this, you will utilize recursion to act as a temporary "hidden" storage during your pop and front operations. You are given a starter program, MyQueue_onestack.cpp.

### The Scenario:

You are restricted to a single std::stack. To retrieve the oldest element (the one at the bottom), you must recursively "unwind" the stack, store the top elements in the function's local variables, and then "rewind" the stack by pushing them back once the bottom element is found.

### Your Tasks:

#### Implement the Logic:

Complete the Code: Fill in the missing logic in the MyQueueRecursive class. You must implement push, pop, front, empty, and size.

#### Verify via Testing:

Compile and run the program. The main function will test your logic by pushing 10, 20, 30, popping, and then pushing 40. The program should print: "Recursive Queue logic works!"

#### Visualize the Logic:

Draw a Call Stack Diagram specifically for the first q.pop() operation. Your diagram should show:

- The state of the std::stack at each recursive call.
- The value of top_element being held in the local memory of each function call.
- How the stack is rebuilt as the recursive calls return.

**To Complete This Checkpoint**: Show a TA or mentor the following:

- Your completed MyQueueRecursive class implementation.
- The terminal output proving you passed all test cases.
- Your diagram of the recursion process showing how the "front" element is retrieved.
