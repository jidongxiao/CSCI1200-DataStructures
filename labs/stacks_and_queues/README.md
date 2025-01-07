# Lab 11 — Stacks and Queues

In this lab, you will find out the answer to this question: When the STL queue library/class is not available to you, can you make your own queue? More specifically, in this lab, you will implement queues in different ways, and then fix memory leaks in the provided program. Start by downloading the provided program [levelOrder.cpp](levelOrder.cpp). The provided program [levelOrder.cpp](levelOrder.cpp) traverses a binary tree by level order. It prints the following message to STDOUT:

```console
Level Order Traversal: 1 2 3 4 5 6 7
Level Order Traversal: 1 2 3 4 5 6 7 8 9
Level Order Traversal: 1 2 3 4 5 6 7 8
```

## Checkpoint 1:

*estimate: 30-40 minutes*

First, read the code of the provided program, and run the program to see its output. 

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/trees/level_order/index.html) to see how level order traverse works.

The provided program includes the STL queue library with this line:

```cpp
#include <queue>
```

Now, let us assume that the STL queue library is not available, but the STL stack library is avaiable, meaning that you are now not allowed to have this above line in the program, but you can have the following line in the program:

```cpp
#include <stack>
```

Do not change the *main* function. Do not change the *levelOrderTraversal* function, except this line:

```cpp
std::queue<TreeNode*> myQueue;
```

Can you still make the program work? i.e., still traversing a binary tree by level order, when the STL queue library is not available, but the STL stack library is available to you. You can implement your own classes or functions.

**To complete this checkpoint**: Show a TA your program, and your test results. Your program should still produce the same results as the original program. And you must be able to explain your program.

## Checkpoint 2:

*estimate: 30-40 minutes*

Now, let us assume that the STL queue library is not available, and the STL stack library is not avaiable, meaning that you are now not allowed to have either of following two lines in the program:

```cpp
#include <queue>
#include <stack>
```

However, you can include the STL list library like this:

```cpp
#include <list>
```

Still, do not change the *main* function, and do not change the *levelOrderTraversal* function, except this line:

```cpp
std::queue<TreeNode*> myQueue;
```

Can you still make the program work? i.e., still traversing a binary tree by level order, when neither the STL queue library nor the STL stack library is available, but the STL list library is available to you. You can implement your own classes or functions.

**To complete this checkpoint**: Show a TA your program, and your test results. Your program should still produce the same results as the original program. And you must
 be able to explain your program.

## Checkpoint 3:

*estimate: 15-20 minutes*

The provided program clearly has memory leaks. Fix the memory leaks.

**To complete this checkpoint**: Show a TA your program, and your test results with either Valgrind or DrMemory.
