# Lab 4 — Memory Diagrams and Memory Debugging

## Checkpoint 1
*estimate: 30-45 minutes*

- Form a group of 2 members. If the number of students in the room is not divisible by 2, the graduate TA will approve a single team with 3 members.

- Introduce yourself to your teammate. Share to your teammate something about yourself (e.g. hobbies, sports, favorite music, etc). Learn something new about your teammate (even if you already know the teammate).

- Our TA/mentor will pick 3 code snippets for each student, from the following 5 code snippets. Following the conventions used in Data Structures lecture for memory diagramming, draw a picture of the stack and the heap that result from executing the code snippet. Use a ‘?’ to represent uninitialized values.

[Code Snippet 1](fruits.cpp)  
[Code Snippet 2](grains.cpp)  
[Code Snippet 3](desserts.cpp)  
[Code Snippet 4](veggies.cpp)  
[Code Snippet 5](protein.cpp)  

Show your diagram to your teammate, and ask the teammate to reverse engineer code for your diagram; at the same time, you reverse engineer code for your teammate's diagram.

When everyone has finished writing code for the drawing, discuss your answers as a group. Are differences in the original and reverse engineered code valid alternate answers? Or was something misinterpreted? Critique each other’s diagrams. What could be improved or drawn more clearly? What statements need to be added to each example to clean up / prevent memory leaks?

**To complete this checkpoint**, present your work to a TA/mentor.

## Checkpoint 2 & 3:

Checkpoints 2 and 3 focus on using a memory debugger. It is highly recommended that you thoroughly read the instructions for Checkpoint 2 and Checkpoint 3 before starting.

Memory debuggers will be a useful tool in many of the assignments this semester, and in C++ development if you work with the language outside of this course. While a traditional debugger lets you step through your code and examine variables, a memory debugger instead reports memory-related errors during execution and can help find memory leaks after your program has terminated. The next time you see a “segmentation fault”, or it works on your machine but not on Submitty, try running a memory debugger!

Read lecture notes [6.7](../../lectures/06_memory#67-memory-debugging), [6.8](../../lectures/06_memory#68-sample-buggy-program), [6.9](../../lectures/06_memory#69-using-dr-memory-httpwwwdrmemoryorg), [6.10](../../lectures/06_memory#610-using-valgrind-httpvalgrindorg), and [6.11](../../lectures/06_memory#610-using-valgrind-httpvalgrindorg), and try to understand the example buggy program code and what DrMemory or Valgrind say about this buggy program. Ask questions if you don't understand the code or if you don't understand the output of DrMemory or the output of Valgrind.

Please download the following 4 files needed for this lab:

[buggy_lab4.cpp](./buggy_lab4.cpp)
[first.txt](./first.txt)
[middle.txt](./middle.txt)
[last.txt](./last.txt)

## Checkpoint 2
*estimate: 20-40 minutes*

For Checkpoint 2 of this lab, we will heavily rely on dynamic memory to find the average and smallest number for a set of data from an input file. You will use a memory debugging tool such as DrMemory or Valgrind to fix memory errors and leaks in buggy_lab4.cpp. Make sure to download the provided .txt files as well.
First take a look at the code inside the identifyMeanAndMin() function. You will notice that the syntax used
throughout the program may be a little different than what you are used to. Try and familiarize yourself with
this syntax before you start working on the assignment. What does this line of code do?

```cpp
*(intArray + *numElements) = readInt;
```

Whats going on inside the *for* loop? If you are stuck on this, ask a mentor or TA for help as
soon as possible and refer back to your lecture notes on pointers and arrays.
Once you have done this, compile the program using:
```console
g++ buggy_lab4.cpp -o buggy_lab4.out -g -Wall
```

Try running the program normally using:

```console
./buggy_lab4.out
```

You will notice that a segmentation fault occurs. Now run this program using either Valgrind or DrMemory. If running using Valgrind, remember to use --leak-check=yes or --leak-check=full.

Your memory debugger should give you more context as to why a segmentation fault is occurring, especially if you have compiled with *-g*. To complete this checkpoint, add or modify code in the areas marked Parts 1, 2, and 3 to resolve all memory errors and leaks. As you are working on this, be sure to also think about the questions asked in Checkpoint 3.

It is highly recommended that you tackle one part at a time. For example, after adding a few lines of code to part 1, you will now receive different memory errors when you recompile and run the program using your memory debugger. Similarly, fixing all memory errors in part 2 will generate different memory errors that should be resolved in part 3.

In part 2 of buggy_lab4.cpp, the goal is to print out the contents of intArray in reverse order, while also calculating the sum of all elements in the array and keeping track of the smallest number encountered. Solutions that attempt to print the contents of the array in a different manner or end up with the wrong
value for the smallest number found or sum won't be accepted.
Note that:
- You are only allowed to modify or add code when asked to. This would be between the comments that
indicate parts 1, 2, and 3 inside buggy_lab4.cpp. Do not modify other parts of the code or create any
helper functions.
- You are not allowed to declare new variables; the ones provided are more than enough. Hint: how do
we create memory on the heap?
- You are not allowed to use additional data structures (like arrays or vectors).

**You will receive no credit if you do not follow the above restrictions.**

**To receive credit for this checkpoint**: Fix buggy_lab4.cpp so that it successfully prints out the average
and smallest number for a given set of data and is free of all memory errors and leaks on your local machine.
Submit buggy_lab4.cpp on Submitty and verify that there are no memory errors there as well and show a
mentor or TA both results. Also explain to a mentor TA what you added or modified in the program to
resolve all memory errors.

## Checkpoint 3
*estimate: 15-25 minutes*

As you work through Checkpoint 2, try and pay close attention the analysis given by DrMemory or Valgrind
and think about the following:

1. How does the output from your memory debugger differ when you compile your program with the -g
flag compared to when you leave it out?
2. How would you rewrite the for loop in part 2 to use the bracket [] operator instead of pointer syntax?
3. For DrMemory users, you would have encountered all of these errors in parts 1, 2, or 3 of Checkpoint 2:

```console
UNITIALIZED READ
UNADDRESSABLE ACCESS
INVALID HEAP ARGUMENT
LEAK
```

4. What do you think each of these errors mean?
5. For Valgrind users, the errors you will have seen are:
```console
Use of uninitialised value
Invalid write
Invalid read
Conditional jump or move depends on uninitialised value(s)
Mismatched free() / delete / delete []
? bytes in ? blocks are definitely lost in loss record ? of ?
```

**To receive credit for this checkpoint**, discuss your answers to these questions with a TA or mentor.

## Checkpoint 4
*remainder of the lab time*

For this checkpoint, you team up with one or two other students from your lab section. Our TA or mentor will pick one problem from the practice packet for you two (or three) to work together as a group. You should not look at the posted solutions. Work as a group (e.g., pair programming!) to come up with a complete solution to the problem.

Once you have completed and proofread and triple-checked your answer, launch your C++ development environment. First, focus on getting it to compile. What basic, minimal testing infrastructure is necessary to get your solution to compile?  What small bits of syntax were you missing or incorrect or sloppy? Try to avoid making these mistakes on Thursday's test!

Then, write a simple test case to exercise your solution. Compile and run the code. As time follows, fix bugs in your solution and improve and expand your test cases.

**To complete this checkpoint**, When about 10 minutes remain in the lab, the TA and mentors will circulate through the room to finalize checkoffs. Show them your initial solution, and explain the typos and errors you found and debugged in working through your computer tested solution. Explain your testing & debugging process.
