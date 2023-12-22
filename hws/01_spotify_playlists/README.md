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

Next, we drag track 4 up to right above track 2.

After this dragging action, now, track 1 is still "Perfect Duet", track 2 is "I'll Never Love Again", track 3 is "Always Remember Us This Way", and track 4 is "Million Reasons".

## Command Line Arguments

Your program will expect 4 command line arguments. The first is the name of the input file. The second is
the name of the output file. The third argument is an integer that specifies the width of the text column. The
fourth argument will be a string (flush_left, flush_right, or full_justify) specifying which formatting
mode should be used. Here are examples of valid command lines for your program:

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

## File I/O

You will read the words to format from an input text file. You should not make any assumptions about the
formatting of this file, except that the words will be separated by at least one whitespace character. Remember
that whitespace characters include spaces, tabs, and newlines. Any punctuation in the file (including periods,
commas, apostrophes, etc.) should be treated as part of the word if it is not separated from the word by
spaces. The basic iostream string input operator, >>, will work perfectly for this assignment. The output of
your program will be written to a file, and should follow the specifications in this handout and match our
examples. Reading and writing files in C++ is very similar to std::cin and std::cout. See examples of
STL file streams on the course webpage [Programming Information](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/programming_information.php).

## Corner Cases

So now you understand the core requirements for this assignment, but you may already have thought of a
few problem cases. For example, how should the program full justify a line that contains just a single word?
There are no available slots between words to use to insert the extra spaces. In this case your program
should simply left justify the line. Another question you might ask is what to do if one of the words in the
file is (by itself!) wider than the width of the column? In your initial coding and testing we recommend you
assume that this will never happen. This solution will be worth nearly full credit. To receive full credit on
the assignment your program should handle this case by splitting the word and inserting a hyphen. Note
that we do not expect you to properly split the words between syllables, as that would require a database
of English words and syllables. If you think of other corner cases as you work on the assignment, propose
reasonable ways to handle those situations. If those solutions are overly complex or tricky, you do not need
to tackle the implementation, but you should write up your thoughts in your README.txt for the grader
to read.

## Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. Prepare and submit your assignment as instructed on the course webpage. Please ask a TA
if you need help preparing your assignment for submission.

**Due Date**: 09/07/2023, 23:59pm.
