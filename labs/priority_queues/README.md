# Lab 10 — Priority Queues

In this lab, you will use binary heaps to implement the priority queue container. Start by downloading the files:

[priority_queue.h](priority_queue.h) [test_pq.cpp](test_pq.cpp)

The code provided in these files is straightforward. test_pq.cpp is a driver and test program, while priority_queue.h is a skeleton implementation. Please take a careful look. You will complete the implementation and add to the main program in lab. In your implementation, be careful when subtracting 1 from an unsigned int whose value is 0; it is not -1!

## Checkpoint 1:

Implement and test the push (a.k.a. insert) and the check_heap functions. Recall that push depends on the percolate_up functionality. check_heap, which works either with the heap member variable or with a vector provided from the outside, determines if the vector is properly a heap, meaning that each value is less than or equal to the values of both of its children (if they exist).

**To complete this checkpoint**: Show a TA or mentor your debugged implementation and discuss the running time of both insert and check_heap.

## Checkpoint 2:

Implement and test the pop (a.k.a. delete_min) function and the constructor that builds a valid heap from a vector of values that is in no particular order. Both of these depend on proper implementation of the percolate_down function.

**To complete this checkpoint**: Show a TA or mentor these additions and the test output.

## Checkpoint 3:

Finally, write and test the non-member function that sorts a vector by doing a heap sort. This code should sort the data “in place” and not require a large scratch space (e.g., another vector or list or another priority queue) to store a copy of the data as it is being sorted.

**To complete this checkpoint**: Show a TA or mentor your completed and debugged heap sort code.
