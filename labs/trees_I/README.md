# Lab 8 — Trees, Binary Trees, & Binary Search Trees

## Checkpoint 1

*estimate: 20-30 minutes*

problem 1: Draw a binary tree with 4 levels with the integers 1-7 such that the sum of elements on every level of the tree is the same.

problem 2: Create a exactly balanced binary search tree with 7 color words (order the colors alphabetically).

problem 3: Draw a exactly-balanced binary search tree containing the letters of the word: uncopyrightable

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

What is the pre-order traversal of the tree above?

problem 4: Now draw a exactly-balanced binary tree of characters such that a post-order traversal spells the word: uncopyrightable


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
