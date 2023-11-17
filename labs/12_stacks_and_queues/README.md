# Lab 12 — Stacks and Queues

In this lab, you will implement queues in different ways, and then fix memory leaks in the provided program. Start by downloading the provided program [levelOrder.cpp](levelOrder.cpp). The provided program [levelOrder.cpp](levelOrder.cpp) traverses a binary tree by level order. It prints the following message to STDOUT:

```console
Level Order Traversal: 1 2 3 4 5 6 7
Level Order Traversal: 1 2 3 4 5 6 7 8 9
Level Order Traversal: 1 2 3 4 5 6 7 8
```

## Checkpoint 1:

*estimate: 30-40 minutes*

Read the code of provided program, and then run the program to see its output. After that, replace the STL queue library with the STL stack library, and implement the queue using two stacks. Do not change the *main* function. Do not change the *levelOrderTraversal* function, except this line:

```cpp
std::queue<TreeNode*> myQueue;
```

**To complete this checkpoint**: Show a TA your program, and your test results. Your program should still produce the same results as the original program. And you must be able to explain your program.

## Checkpoint 2:

*estimate: 30-40 minutes*

Re-implement the queue using the STL list library. Still, do not change the *main* function, and do not change the *levelOrderTraversal* function, except this line:

```cpp
std::queue<TreeNode*> myQueue;
```

**To complete this checkpoint**: Show a TA your program, and your test results. Your program should still produce the same results as the original program. And you must
 be able to explain your program.

## Checkpoint 3:

*estimate: 15-20 minutes*

The provided program clearly has memory leaks. Fix the memory leaks.

**To complete this checkpoint**: Show a TA your program, and your test results with either Valgrind or DrMemory.
