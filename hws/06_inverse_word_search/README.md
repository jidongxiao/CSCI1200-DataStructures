**Special Note 1: A correct program does not necessarily pass all the test cases for this assignment, as Submitty may let you fail a test case if your program is not fast enough or consumes too much memory.**
**Special Note 2: For this assignment, we will not deduct points if you use data structures which have not been learned in this class. However, students who passed all test cases last semester did not use any of such data structures. In other words, using only data structures we have learned so far, is sufficient to pass all test cases.**

# Homework 6 — Inverse Word Search Recursion

In this homework we will build an inverse word search program using the techniques of recursion. 
The goal is to construct a grid of letters that one can search to find specific words. Understanding the non-linear word
search program from Lectures 12 will be helpful in thinking about how you will solve this problem.
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

```console
inverse_word_search.exe puzzle2.txt out2.txt one_solution
inverse_word_search.exe puzzle2.txt out2.txt all_solutions
```

The third argument indicates whether the program should find all solutions, or just one solution. Here’s an
example of the input file format:

![alt text](example1.png "example1")

The first line specifies the width and height of the grid. Then each line that follows contains a character
and a word. If the character is ’+’, then the word must appear in the grid. If the character is ’-’, then the
word must not appear in the grid. For this first example we show an incorrect solution on the left. Though
it contains the 4 required words, it also contains two of the forbidden words. The solution on the right is a
fully correct solution. This particular problem has 8 solutions including rotations and reflections.

Below is a second example that specifies only positive (required) words. This puzzle has 4 solutions including
rotations and reflections.

![alt text](example2.png "example2")

When asked to find all solutions, your program should first output the number of solutions and then an
ASCII representation for each solution. See the example output files provided in this folder. You should follow
this output closely, however your solutions may be listed in a different order. When asked to find just one
solution, your program should just output the first legal solution it finds (it does not need to count the
number of solutions, nor does it need to be the first solution shown in our output). If the puzzle is impossible
your program should output “No solutions found”.

**To implement this assignment, you must use recursion in your search.** First you should tackle the problem
of finding and outputting one legal solution to the puzzle (if one exists).

## Algorithm Analysis

For larger, more complex examples, this is a really hard problem. Your program should be able to handle
the small puzzles we have created in a reasonable amount of time. <!--You should make up your own test cases
as well to understand this complexity. Include these test cases with your submission (they will be graded).
Summarize the results of your testing, which test cases completed successfully and the approximate “wall
clock time” for completion of each test.--> The UNIX/WSL time command can be prepended to your command
line to estimate the running time:

```console
time inverse_word_search.exe puzzle1.txt out1.txt one_solution
```

Once you have finished your implementation and testing, analyze the performance of your algorithm using
order notation. What important variables control the complexity of a particular problem? The width &
height of the grid (w and h), the number of required words (r), the number of forbidden words (f), the
number of letters in each word (l), the number of solutions (s)? In your plain text README.txt file, write
a concise paragraph (< 200 words) justifying your answer. <!--Also include a simple table summarizing the
running time and number of solutions found by your program on each of the provided examples. Note: It’s
ok if your program can’t solve the biggest puzzles in a reasonable amount of time.-->

## Program Requirements & Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 03/14/2024, Thursday, 10pm.

## Rubric

20 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - LETTER GRID REPRESENTATION (2 pts)
   - Grid is not represented via nested structure vector&lt;vector&lt;char&gt;&gt;, vector&lt;vector&lt;string&gt;&gt;, vector&lt;string&gt;, char\*\*, etc. (-1)
   - Lookup of a position is not O(1), uses something like&lt;list&lt;char&gt;&gt; which has lookup of O(n). (-1)
   - Incomplete to the point that no grid representation is evident within their code. (-1)
 - USES RECURSION (4 pts)
   - Use some non-trivial recursion but doesn’t use recursion in the search process of board creation. (-2)
   - Uses recursion but only trivially. (-3)
   - Does not use any recursion. (-4)
 - ALGORITHM ANALYSIS (In terms of the grid dimensions, the # of words, # of letters per word, the number of solutions etc.  Looking for both an answer in order notation and a well-written justification in the plaintext README.txt file.) (5 pts)
   - No order notation provided (-5)
   - Order notation not written in terms of the provided variables w,h,r,f,l,s. Introduces new vars or provides it just in terms of n. (-2)
   - Incorrect order notation. (-2)
   - Order notation not simplified. (-1)
   - No justification provided. (-4)
   - Insufficient justification (tables alone are not enough). (-1)
   - Did not finish but provides a reasonable analysis with respect to a theoretical implementation and properly justifies it. (-2)
   - Did not finish but provides a runtime and some small analysis for a theoretical solution. (-4)
   - Correct order notation for a largely incomplete implementation. (-4)
<!-- - TESTING SUMMARY & NEW TEST CASES (Included with submission and discussed in README.txt) (3 pts)
   - Does not provide an adequate description of what the new testcases were in the README. (-2)
   - Did not provide running times of the new test cases. (-1)
   - Provides new test case description but implementation/test was missing from the submission. (-1)
   - Did not provide new test cases or implementation too incomplete for new test cases. (-3)-->
 - PROGRAM STRUCTURE (6 pts)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor variable names. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
