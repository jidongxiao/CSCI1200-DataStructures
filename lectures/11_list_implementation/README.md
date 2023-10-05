# Lecture 11 --- Doubly-Linked Lists

- Limitations of singly-linked lists
- Doubly-linked lists: Structure, Insert, & Remove
- Our own version of the STL list&lt;T&gt; class, named dslist, Implementing list iterators
- Common mistakes, STL List w/ iterators vs. “homemade” linked list with Node objects & pointers

## 11.1 Basic Linked Lists Mechanisms: Common Mistakes

- Here is a summary of common mistakes. Read these carefully, and read them again when you have problem that
you need to solve.
- Allocating a new node to step through the linked list; only a pointer variable is needed.
- Confusing the . and the -> operators.
- Not setting the pointer from the last node to NULL.
- Not considering special cases of inserting / removing at the beginning or the end of the linked list.
- Applying the delete operator to a node (calling the operator on a pointer to the node) before it is appropriately
disconnected from the list. Delete should be done after all pointer manipulations are completed.
- Pointer manipulations that are out of order. These can ruin the structure of the linked list.
- Trying to use STL iterators to visit elements of a “home made” linked list chain of nodes. (And the reverse....
trying to use ->next and ->prev with STL list iterators.)

## 11.2 Limitations of Singly-Linked Lists

- We can only move through it in one direction
- We need a pointer to the node before the spot where we want to insert and a pointer to the node before the node that needs to be deleted.
- Appending a value at the end requires that we step through the entire list to reach the end.

## 11.3 Transition to a Doubly-Linked List Structure

- The revised Node class has two pointers, one going “forward” to the successor in the linked list and one going “backward” to the predecessor in the linked list. We will have a head pointer to the beginning and a tail pointer to the end of the list.

```cpp
template <class T> class Node {
public:
Node() : next_(NULL), prev_(NULL) {}
Node(const T& v) : value_(v), next_(NULL), prev_(NULL) {}
T value_;
Node<T>* next_;
Node<T>* prev_;
};
```

- Note that we now assume that we have both a head pointer as before, and a tail pointer variable, which stores the address of the last node in the linked list.
- The tail pointer is not strictly necessary, but it allows immediate access to the end of the list for efficient
push-back operations.

## 11.4 Inserting a Node into the Middle of a Doubly-Linked List

- Suppose we want to insert a new node containing the value 15 following the node containing the value 1. We
have a temporary pointer variable, p, that stores the address of the node containing the value 1. Here’s a
picture of the state of affairs:

![alt text](insert.png "insert")

- What must happen? Editing the diagram above...  
  – The new node must be created, using another temporary pointer variable to hold its address.  
  – Its two pointers must be assigned.  
  – Two pointers in the current linked list must be adjusted. Which ones?
- Assigning the pointers for the new node MUST occur before changing the pointers for the current linked list
nodes!

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/doubly_lists/insert/index.html) to see how the insert works.

## 11.5 Removing a Node from the Middle of a Doubly-Linked List

- Now instead of inserting a value, suppose we want to remove the node pointed to by p (the node whose address
is stored in the pointer variable p)

![alt text](remove.png "remove")

- Two pointers need to change before the node is deleted! All of them can be accessed through the pointer
variable p.

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/doubly_lists/remove/index.html) to see how the remove works.

## 11.7 Special Cases of Remove

- If p==head and p==tail, the single node in the list must be removed and both the head and tail pointer
variables must be assigned the value NULL.
- If p==head or p==tail, then the pointer adjustment code we just wrote needs to be specialized to removing
the first or last node.

## 11.8 Leetcode Exercises

- [Leetcode problem 141: Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/). Solution: [p141_linkedlistcycle.cpp](../../leetcode/p141_linkedlistcycle.cpp)

