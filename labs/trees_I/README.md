# Lab 8 — Trees, Binary Trees, & Binary Search Trees

## Checkpoint 1

*estimate: 20-30 minutes*

Pair up with one other student in your lab section and complete the exercises below. Please raise your hand and ask for help from a TA or mentor if you get stuck or are uncertain about any of the terms used below.

problem 1: Draw a binary tree with 4 levels with the integers 1-7 such that the sum of elements on every level of the tree is the same.

problem 2: Create an exactly balanced binary search tree with 7 color words (order the colors alphabetically).

problem 3: Arrange the following items of clothing in a tree with 3 levels such that the parent of every node is generally donned before the child when dressing in the morning and nodes at the same level could be donned in any order: jacket, pants, shoes, shirt, undergarments, socks, and belt.

problem 4: Draw a binary search tree with the integers 1-7, where 3 has no parent and 5 has no children, and there are no other elements at the same level as 5.

problem 5: What is the sum of the leaf nodes in a perfectly balanced binary search tree containing the powers of 2 less than 128?

problem 6: Draw an exactly-balanced binary search tree containing the letters of the word: uncopyrightable

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

What is the pre-order traversal of the tree above?

problem 7: Now draw an exactly-balanced binary tree of characters such that a post-order traversal spells the word: uncopyrightable


&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

What is the breadth-first traversal of the tree above?

**To complete this checkpoint**: When you have finished all of the problems, discuss your answers with your lab TA or mentor.

## Checkpoint 2

*estimate: 20-35 minutes*

Now let’s explore the implementation of the ds_set class, along with the use of recursive functions to manipulate binary search trees. Download and examine the files: [ds_set.h](ds_set.h) and [test_ds_set.cpp](test_ds_set.cpp).

The implementation of *find* provided in ds_set.h is recursive. Re-implement and test a non-recursive replacement for this function.

**To complete this checkpoint**: Show one of the TAs your new code. Be prepared to discuss the running time for the two different versions of *find* for various inputs.

## Checkpoint 3

*estimate: 20-35 minutes*

The implementation of the copy constructor and the assignment operator is not yet complete
because each depends on a private member function called *copy_tree*, the body of which has not yet been
written. Write *copy_tree* and then test to see if it works by “uncommenting” the appropriate code from the
main function.

**To complete this checkpoint**: Test your code and show one of the TAs your new code.
