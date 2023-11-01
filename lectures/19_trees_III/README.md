# Lecture 19 --- Trees, Part III

Review from Lecture 17 & 18
- Overview of the ds_set implementation
- begin, find, destroy_tree, insert
- In-order, pre-order, and post-order traversal;
- Iterator implementation. Finding the in order successor to a node: add parent pointers or add a list/vector/stack
of pointers to the iterator.
- B+ Tree Overview

## Today’s Lecture

- Last piece of ds_set: removing an item, erase
- Breadth-first and depth-first tree search
- Tree height, longest-shortest paths, breadth-first search
- Erase with parent pointers, increment operation on iterators
- Limitations of our ds set implementation

## 19.1 ds_set Warmup/Review Exercises

- Draw a diagram of a possible memory layout for a ds set containing the numbers 16, 2, 8, 11, and 5. Is there
only one valid memory layout for this data as a ds set? Why?

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

- In what order should a forward iterator visit the data? Draw an abstract table representation of this data
(omits details of TreeNode memory layout).

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## 19.2 Erase

- First we need to find the node to remove. Once it is found,
the actual removal is easy if the node has no children or only one child.
Draw picture of each case!
- It is harder if there are two children:
  - Find the node with the greatest value in the left subtree or the node with the smallest value in the right subtree.

  - The value in this node may be safely moved into the current node because of the tree ordering.

  - Then we recursively apply erase to remove that node — which is guaranteed to have at most one child.

Exercise: Write a recursive version of erase.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

Exercise: How does the order that nodes are deleted affect the tree structure? Starting with a mostly balanced
tree, give an erase ordering that yields an unbalanced tree.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## 19.3 Depth-first vs. Breadth-first Search

- We should also discuss two other important tree traversal terms related to problem solving and searching.
  - In a depth-first search, we greedily follow links down into the tree, and don’t backtrack until we have hit a leaf. When we hit a leaf we step back out, but only to the last decision point and then proceed to the next leaf. This search method will quickly investigate leaf nodes, but if it has made an “incorrect” branch decision early in the search, it will take a long time to work back to that point and go down the “right” branch.

  - In a breadth-first search, the nodes are visited with priority based on their distance from the root, with nodes closer to the root visited first. In other words, we visit the nodes by level, first the root (level 0), then all children of the root (level 1), then all nodes 2 links from the root (level 2), etc. If there are multiple solution nodes, this search method will find the solution node with the shortest path to the root node.  However, the breadth-first search method is memory-intensive, because the implementation must store all nodes at the current level – and the worst case number of nodes on each level doubles as we progress down the tree!

- Both depth-first and breadth-first will eventually visit all elements in the tree.
- Note: The ordering of elements visited by depth-first and breadth-first is not fully specified.
  - In-order, pre-order, and post-order are all examples of depth-first tree traversals. Note: A simple recursive tree function is usually a depth-first traversal.

  - What is a breadth-first traversal of the elements in our sample binary search trees above?

## 19.4 General-Purpose Breadth-First Search/Tree Traversal

- Write an algorithm to print the nodes in the tree one tier at a time, that is, in a breadth-first manner.

- What is the best/average/worst-case running time of this algorithm? What is the best/average/worst-case
memory usage of this algorithm? Give a specific example tree that illustrates each case.

## 19.5 Height and Height Calculation Algorithm

- The height of a node in a tree is the length of the longest path down the tree from that node to a leaf node. The height of a leaf is 1. We will think of the height of a null pointer as 0.

- The height of the tree is the height of the root node, and therefore if the tree is empty the height will be 0. Exercise: Write a simple recursive algorithm to calculate the height of a tree.
&nbsp;
&nbsp;
&nbsp;
 
- What is the best/average/worst-case running time of this algorithm? What is the best/average/worst-case memory usage of this algorithm? Give a specific example tree that illustrates each case.
&nbsp;
&nbsp;
&nbsp;

## 19.6 Shortest Paths to Leaf Node

- Now let’s write a function to instead calculate the shortest path to a NULL child pointer.
&nbsp;
&nbsp;
&nbsp;

- What is the running time of this algorithm? Can we do better? Hint: How does a breadth-first vs. depth-first algorithm for this problem compare?
&nbsp;
&nbsp;
&nbsp;

## 19.7 Erase (now with parent pointers)

- If we choose to use parent pointers, we need to add to the Node representation, and re-implement several ds_set member functions.
- Exercise: Study the new version of insert, with parent pointers.
&nbsp;
&nbsp;
&nbsp;

- Exercise: Rewrite erase, now with parent pointers.
&nbsp;
&nbsp;
&nbsp;

