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

## Checkpoint 2: 
*estimate: 20-30 minutes*

The PushBack() and the PrintList() function are used in [checkpoint2.cpp](checkpoint2.cpp), but their definitions are missing, please complete these two functions and make sure the program runs and produces the following output.

```console
$ g++ checkpoint2.cpp
$ ./a.out
Linked List of NodeA nodes: 1 -> 2 -> 3 -> 4 -> 5 -> nullptr
Linked List of NodeB nodes: 1 -> 1.41421 -> 1.73205 -> 2 -> 2.23607 -> nullptr
```

**Note**: Hardcoding the PrintList() function to just print the above two messages is strictly prohibited. Also, your functions must be templated functions.

**To complete this checkpoint**, show a TA the implementation and the output of your program.

## Checkpoint 3: Merge Two Lists. 
*estimate: 30-40 minutes*

Given two doubly-linked lists: linked list A and linked list B, and both linked lists are sorted. Data in linked list A is sorted in an ascending order. Data in linked list B is also sorted in an ascending order. Merge these two lists such that data in the merged list is still sorted in an ascending order.

More specifically, complete the mergeLists() function in [checkpoint3.cpp](checkpoint3.cpp), such that the program prints the following output.

```console
$ g++ checkpoint3.cpp
$ ./a.out
1 3 5 7 9
2 4 6 8 10
1 2 3 4 5 6 7 8 9 10
10 9 8 7 6 5 4 3 2 1
```

**To complete this checkpoint**, explain to a TA your implementation and show the output of your program.

<!--TODO: how about memory leaks?-->

<!--## Checkpoint 3: Debugging a Merge Sort program. 
*estimate: 30-40 minutes*

We expect our program [checkpoint3.cpp](checkpoint3.cpp) to produce the following results when it is compiled and run.

```console
$ g++ checkpoint3.cpp
$ ./a.out
Test Case 1: Original Vector: 5 2 9 1 5 6
Sorted Vector: 1 2 5 5 6 9

Test Case 2: Original Vector: 3 8 2 7 4
Sorted Vector: 2 3 4 7 8

```

But this program currently does not behave as expected. Troubleshoot this program, find the problems and fix them. You can use a debugger.

**To complete this checkpoint**, explain to a TA the bugs you found, show a TA your fixes and run the program to show that your fixes are correct and the program now produces the expected results.-->
