# Lab 7 — List Implementation

## Checkpoint 1
*estimate: 20-30 minutes*

The implementation of the dslist class in [dslist.h](dslist.h) is incomplete. In particular, the class is missing the destroy_list
private member function that is used by the destructor and the clear member function. The provided test
case in [checkpoint1.cpp](checkpoint1.cpp) works “fine”, so what’s the problem?

Before we fix the problem, let’s use Dr. Memory and/or Valgrind to look at the details more carefully.
You should use the memory debugging tools both on your local machine and by submitting the files to
the homework server. Study the memory debugger output carefully. The output should match your
understanding of the problems caused by the missing destroy_list implementation. Ask a TA if you
have any questions.

Now write and debug the destroy_list function and then re-run the memory debugger (both locally and on
the submission server) to show that the memory problems have been fixed. Also finish the implementation
of the push_front, pop_front, and pop_back functions.

**To complete this checkpoint**, show a TA the implementation and memory debugger output before and
after writing destroy_list.

## Checkpoint 3: 
*estimate: TBD*

Merge Sort an Array.
