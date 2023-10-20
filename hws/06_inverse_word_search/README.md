# Homework 6 — Inverse Word Search Recursion

In this homework we will build an inverse word search program using the techniques of recursion. 
The goal is to construct a grid of letters that one can search to find specific words. Understanding the non-linear word
search program from Lectures 12 & 13 will be helpful in thinking about how you will solve this problem.
We strongly urge you to study and play with that program, including tracing through its behavior using a
debugger or cout statements or both. Please read the entire handout before beginning your implementation.

## Your Tasks

For this assignment, you will be given the dimensions (width and height) of a word search puzzle, a set of
words that should appear in the grid (forwards, backwards, up, down, or along any diagonal), and optionally
a set of words that should not appear anywhere in the grid. Each grid cell will be assigned one of the 26
lowercase letters. Note that unlike the non-linear word search problem we discussed in class, we will only
allow words that appear in a straight line (including diagonals). Your task is to output all unique word
search grids that satisfy the requirements. Rotations and mirroring of the board will be considered unique
solutions.

Your program should expect three command line arguments, the name of the input file, the name of the
output file, and a string:

```cpp
inverse_word_search.exe puzzle2.txt out2.txt one_solution
inverse_word_search.exe puzzle2.txt out2.txt all_solutions
```

The third argument indicates whether the program should find all solutions, or just one solution. Here’s an
example of the input file format:

The first line specifies the width and height of the grid. Then each line that follows contains a character
and a word. If the character is ’+’, then the word must appear in the grid. If the character is ’-’, then the
word must not appear in the grid. For this first example we show an incorrect solution on the left. Though
it contains the 4 required words, it also contains two of the forbidden words. The solution on the right is a
fully correct solution. This particular problem has 8 solutions including rotations and reflections.

Below is a second example that specifies only positive (required) words. This puzzle has 4 solutions including
rotations and reflections.

When asked to find all solutions, your program should first output the number of solutions and then an
ASCII representation for each solution. See the example output on the course webpage. You should follow
this output closely, however your solutions may be listed in a different order. When asked to find just one
solution, your program should just output the first legal solution it finds (it does not need to count the
number of solutions, nor does it need to be the first solution shown in our output). If the puzzle is impossible
your program should output “No solutions found”.

To implement this assignment, you must use recursion in your search. First you should tackle the problem
of finding and outputting one legal solution to the puzzle (if one exists).

## Algorithm Analysis

For larger, more complex examples, this is a really hard problem. Your program should be able to handle
the small puzzles we have created in a reasonable amount of time. You should make up your own test cases
as well to understand this complexity. Include these test cases with your submission (they will be graded).
Summarize the results of your testing, which test cases completed successfully and the approximate “wall
clock time” for completion of each test. The UNIX/WSL time command can be prepended to your command
line to estimate the running time:

```console
time inverse_word_search.exe puzzle1.txt out1.txt one_solution
```

Once you have finished your implementation and testing, analyze the performance of your algorithm using
order notation. What important variables control the complexity of a particular problem? The width &
height of the grid (w and h), the number of required words (r), the number of forbidden words (f), the
number of letters in each word (l), the number of solutions (s)? In your plain text README.txt file, write
a concise paragraph (< 200 words) justifying your answer. Also include a simple table summarizing the
running time and number of solutions found by your program on each of the provided examples. Note: It’s
ok if your program can’t solve the biggest puzzles in a reasonable amount of time.

## Program Requirements & Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 10/26/2023, Thursday, 23:59pm.

## Rubric

15 pts
 - README.txt Completed (2 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
 - OVERALL CLASS DECLARATION & IMPLEMENTATION AND CODING STYLE (Good class design, split into a .h and .cpp file.  Functions > 1 line are in .cpp file.  Organized class implementation and reasonable comments throughout. Correct use of const/const& and of class method const. ) (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor variable names. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (Must create and use homemade linked lists for the implementation.) (5 pts)
   - No credit (significantly incomplete implementation). (-5)
   - Uses std::vector, std::list, or data structures which have not been covered in this class. (-5)
   - Uses iterators in the code (okay for iterating through something other than the lists). (-5)
   <!--- Member variables are public. (-2)-->
 - OUTPUT OPERATOR OVERLOADING (2 pts)
   - Does not overload the output (&lt;&lt;) operator. (-2)
   - Incorrect syntax (wrong return type, wrong arguments). (-1)
