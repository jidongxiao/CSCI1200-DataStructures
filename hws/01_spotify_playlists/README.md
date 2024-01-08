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

After a playlist is created, users can add new tracks to this playlist, or remove tracks from this playlist. Users can also move tracks to new positions within a playlist. The following two images show the moving process:

At first, track 1 is "Perfect Duet", track 2 is "Always Remember Us This Way", track 3 is "Million Reasons", and track 4 is "I'll Never Love Again".

![alt text](images/before_reorder.png "Spotify before re-order")

Next, we drag track 4 up to right above track 2.

After this dragging action, now, track 1 is still "Perfect Duet", track 2 is "I'll Never Love Again", track 3 is "Always Remember Us This Way", and track 4 is "Million Reasons".

![alt text](images/after_reorder.png "Spotify after re-order")

## Command Line Arguments

Your program will support 3 commands.

### Command 1: add a music track to a playlist
The first argument is the name of an input file which contains a playlist. The second argument is the name of another input file which contains all available music tracks. The third argument is the output file. The fourth argument is the action, which in this case is "add". The fifth argument is the title of the music track.

```console
./nyplaylists.exe playlist.txt library.txt output.txt add title
```

### Command 2: remove a music track to a playlist
The first argument is the name of an input file which contains a playlist. The second argument is the name of another input file which contains all available music tracks. The third argument is the output file. The fourth argument is the action, which in this case is "remove". The fifth argument is the title of the music track.

```console
./nyplaylists.exe playlist.txt library.txt output.txt remove title
```

### Command 3: move a music track to a new position on the playlist
The first argument is the name of an input file which contains a playlist. The second argument is the name of another input file which contains all available music tracks. The third argument is the output file. The fourth argument is the action, which in this case is "move". The fifth argument is the title of the music track. The sixth argument is the new position - where this user wants the music track to be located on the playlist. Note that, unliked array indexing in C/C++, positioning in Spotify starts at 1, as opposed to 0. This can be seen in the above Spotify screenshot: the first position is position 1.

```console
./nyplaylists.exe playlist.txt library.txt output.txt move title [new_position]
```

For all 3 commands, the output.txt contains the updated playlist. We have provided sample input & output files. Examples of using command line arguments can be found on the course webpage: [Programming Information](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/programming_information.php).

You should implement very simple error checking to ensure that 5 or 6 arguments are provided and that the input and output file streams are successfully opened. You should also check that the value for the fifth argument is valid. Your program should exit gracefully with a useful error message sent to std::cerr if there is a problem with the arguments.

## Handling Music Tracks with the Same Title

In cases where multiple tracks may have the same title, choose the first track from the input file. This is NOT the natural behavior of Spotify, but this decision is just to simplify your implementation.

## Submission Details

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Complete the provided template [README.txt](./README.txt). You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file. Prepare and submit your assignment as instructed on the course webpage. Please ask a TA if you need help preparing your assignment for submission.

**Due Date**: 01/18/2024, 22:00pm.

## Rubric

13 pts
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
