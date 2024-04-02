# Homework 9 — Simplified B+ Trees

In this assignment we will be implementing a partial and modified version of B+ trees. As a result, online
resources may not use the same terminology or may describe implementation details that are not relevant
to our HW8 implementation. You should read the entire assignment before beginning your work. You
should also make sure you understand the basic concepts discussed at the end of Lecture 17. It is highly
recommended that before you begin coding, you practice constructing a couple of trees (using b = 3, b = 4)
by hand and then checking your work with [this online visualization tool](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)

The bulk of the assignment will focus on proper insertion in a B+ tree, which is described on the next page.

## Learning Objectives

- Practice using B+ tree data structures.

## Implementation Details

In this assignment we will assume that the keys we insert are unique, i.e. for a particular B+ tree, we will
never call insert(3); insert(3);. We will also assume that b > 2 in all tests. You will find it beneficial to
borrow code from our partial implementation of the ds set class. We will not implement iterators, so find()
should instead return a pointer to a BPlusTreeNode. If the tree is empty, this will be a NULL pointer,
otherwise this will be the leaf node where the key is/would be. The print functions only need to work with
types/classes that already work with operator<<, and PrintSideways makes its split at b/2 children. You
must implement all of the functions required to make hw8 test.cpp compile and run correctly.

## Hints

Unless the tree is empty, find() will always return a pointer to a node in the tree. You do not need to store
NULL pointers. In the middle of an insertion, it is okay to let your nodes hold too many keys or children as
long as you fix it before the insertion and splits are finished. Since this is a tree, some things will be more
“natural” to do with recursion.

## Program Requirements & Submission Details

In this assignment, While you are encouraged to write your own test functions, we will not be looking at them. You only need
to submit a README.txt and BPlusTree.h file. Dr. Memory will be used on this assignment and you will
be penalized for leaks and memory errors in your solution. 

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 04/11/2024, Thursday, 10pm.

## Rubric

15 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - IMPLEMENTATION AND CODING STYLE (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (BPlusTree representation and functions are reasonable. BPlusTree only needs to track what b is and what the root is for this assignment.) (6 pts)
   - Bad representation: more member variables than necessary (size is ok) (-2)
   - Bad or unnecessary functions or classes (e.g. get_root()) (-2)
   - Incomplete B+ Tree Implementation (e.g. failed to reasonably implement find or insert) (-2)
