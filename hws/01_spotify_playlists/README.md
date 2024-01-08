This README is still incomplete.

# Homework 1 — Spotify Playlists

Before starting this homework, make sure you have read and understood the Academic Integrity Policy.

In this assignment you will develop a program to manage music playlists like Spotify does, let's call this program New York Playlists. Please read the entire handout before starting to code the assignment. 

## Learning Objectives

- Practice handling command line arguments
- Practice handling file input and output
- Practice the C++ Standard Template Library string and vector classes. 

## Background

On Spotify, users can create and manage playlists. On the Spotify app or website, users can navigate to the "Your Library" section and click on the "+" sign to create a playlist. When creating a playlist, users can add music tracks to the playlist.

After a playlist is created, users can add new tracks to this playlist, or remove tracks from this playlist. Users can also re-order tracks within a playlist. The following two images show the re-order process:

Before re-ordering, track 1 is "Perfect Duet", track 2 is "Always Remember Us This Way", track 3 is "Million Reasons", and track 4 is "I'll Never Love Again".

![alt text](images/before_reorder.png "Spotify before re-order")

Next, we drag track 4 up to right above track 2.

After this dragging action, now, track 1 is still "Perfect Duet", track 2 is "I'll Never Love Again", track 3 is "Always Remember Us This Way", and track 4 is "Million Reasons".

![alt text](images/after_reorder.png "Spotify after re-order")

## Command Line Arguments

Your program will expect 4 command line arguments. The first is the name of the input file. The second is
the name of the output file. The third argument is 
The fourth argument will be 
Here are examples of valid command lines for your program:

```console
./nyplaylists.exe playlist1.txt output.txt add
./nyplaylists.exe playlist1.txt output.txt remove
./nyplaylists.exe playlist1.txt output.txt reorder old new
./nyplaylists.exe playlist1.txt output.txt skip count
```

You should implement very simple error checking to ensure that 4 arguments are provided and that the
input and output file streams are successfully opened. You should also check that the values for the third
and fourth arguments are valid. Your program should exit gracefully with a useful error message sent to
std::cerr if there is a problem with the arguments.

You must follow the specifications for the command line, input file, and output file exactly to ensure you
receive full credit from the Submitty homework submission autograder. We have provided sample input &
output files on the course website. Examples of using command line arguments can be found on the course
webpage: [Programming Information](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/programming_information.php).

## Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. Prepare and submit your assignment as instructed on the course webpage. Please ask a TA
if you need help preparing your assignment for submission.

**Due Date**: 01/18/2024, 23:59pm.

## Rubric

12 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - STL Vector & String (3 pts)
   - did not use STL vector (-3)
 - Program Structure (7 pts)
   - No credit (significantly incomplete implementation) (-7)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Improper uses or omissions of const and reference. (-1)
   - Almost total lack of helpful comments. (-4)
   - Too few comments. (-2)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Lacks error checking (num of args, invalid file names, invalid command, etc.) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Uses global variables. (-1)
   - Overly long lines, in excess of 100 or so characters. It's recommended to keep all lines short and put comments on their own lines. (-1)
