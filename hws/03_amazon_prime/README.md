# Homework 3 — Completing a Simple Amazon Prime Video Recommendation System

In this assignment you will complete the implementation of a simple recommendation system called New York Recommender. Your program will mimic some behaviors of the Amazon Prime Video Recommendation System. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice managing dynamic memory.
- Practice using arrays.
<!--- Practice overloading operator<<, and understand why it is a bad idea to make it a member function.-->

## Background

Amazon Prime Video recommends movies and tv shows to prime users.

## Specification

## Input Files

## Commands to Support

## Program Requirements & Submission Details

In this assignment, you are NOT allowed to use std::vector anywhere in your code. You must use dynamic memory to store the movie rating matrix, and the show rating matrix.

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. 

**Due Date**: 02/08/2024, Thursday, 22:00pm.

## Rubric

14 pts

 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - OVERALL CLASS DECLARATION & IMPLEMENTATION AND CODING STYLE (Good class design, split into a .h and .cpp file.  Functions > 1 line are in .cpp file.  Organized class implementation and reasonable comments throughout. Correct use of const/const& and of class method const. ) (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Improper uses or omissions of const and reference. (-1)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Uses global variables. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (Must use dynamic memory for the implementation.) (5 pts)
   - No credit (significantly incomplete implementation). (-5)
   - Does not use dynamic memory. (-5)
   - Uses std::vector anywhere in the code. (-5)
   - Member variables are public. (-2)
<!-- - OUTPUT OPERATOR OVERLOADING (2 pts)
   - Does not overload the output (&lt;&lt;) operator. (-2)
   - Incorrect syntax (wrong return type, wrong arguments). (-1)
-->
