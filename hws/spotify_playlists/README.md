# Homework 1 — Spotify Playlists

Before starting this homework, make sure you have read and understood the Academic Integrity Policy.

In this assignment you will develop a program to manage music playlists like Spotify does, let's call this program New York Playlists. Please read the entire handout before starting to code the assignment. 

## Learning Objectives

- Practice handling command line arguments.
- Practice handling file input and output.
- Practice the C++ Standard Template Library string and vector classes. 

## Background

On Spotify, users can create and manage playlists. On the Spotify app or website, users can navigate to the "Your Library" section and click on the "+" sign to create a playlist. When creating a playlist, users can add music tracks to the playlist.

After a playlist is created, users can add new tracks to this playlist, or remove tracks from this playlist. Users can also move tracks to new positions within a playlist. The following two images show the moving process:

At first, track 1 is "Perfect Duet", track 2 is "Always Remember Us This Way", track 3 is "Million Reasons", and track 4 is "I'll Never Love Again".

![alt text](images/before_reorder.png "Spotify before re-order")

Next, we drag track 4 up to right above track 2.

After this dragging action, now, track 1 is still "Perfect Duet", track 2 is "I'll Never Love Again", track 3 is "Always Remember Us This Way", and track 4 is "Million Reasons".

![alt text](images/after_reorder.png "Spotify after re-order")

### Next and Previous Button

When using Spotify, if users press the "Next" button, Spotify will skip the currently playing song and starts playing the song that is listed directly after it; if users press the "Previous" button, Spotify will go to the song listed directly before the currently playing song.

The following images show the behavior of pressing "Next".

Before pressing "Next", the currently playing song is "Always Remember Us This Way":
![alt text](images/before_press_next.png "Spotify before pressing next")

Press "Next":
![alt text](images/press_next.png "Spotify pressing next")

After pressing "Next", the currently playing song is now "Million Reasons":
![alt text](images/after_press_next.png "Spotify after pressing next")

The following images show the behavior of pressing "Previous".

Before pressing "Previous", the currently playing song is "Million Reasons":
![alt text](images/before_press_previous.png "Spotify before pressing previous")

Press "Previous":
![alt text](images/press_previous.png "Spotify pressing previous")

After pressing "Previous", the currently playing song is "Always Remember Us This Way":
![alt text](images/after_press_previous.png "Spotify after pressing previous")

## Command Line Arguments

Your program will be run like this:

```console
./nyplaylists.exe playlist.txt actions.txt output.txt
```

Here:

- nyplaylists.exe is the executable file name.
- playlist.txt is the name of an input file which contains a playlist - in this README, we will refer to this file as the **playlist file**.
- actions.txt is an input file which defines a sequence of actions - in this README, we will refer to this file as the **actions file**.
- output.txt where to print your output to.

## Playlist File Format and Output File Format

The playlist file and the output file have the same format. Take the playlist_tiny1.txt as an example, this file has the following 4 lines:

```console
"Perfect Duet" Ed Sheeran, Beyonce
"Always Remember Us This Way" Lady Gaga current
"Million Reasons" Lady Gaga
"I Will Never Love Again - Film Version" Lady Gaga, Bradley Cooper
```

Except the second line, each line has two fields, the music title, and the artist(s). There is one single space separating these two fields. 

The second line is special, it ends with the word **current**, meaning that the song "Always Remember Us This Way" is the currently playing song. This word **current** appears in the **playlist file** once and should also appear in the output file once.

## Actions File Format

The actions file defines actions. Take actions1.txt as an example, this file has the following lines:

```console
add "Umbrella" Rihanna
add "We Are Young" Fun
add "You Are Still the One" Shania Twain
remove "Million Reasons" Lady Gaga
add "Viva La Vida" Coldplay
move "I Will Never Love Again - Film Version" Lady Gaga, Bradley Cooper 1
next
next
next
previous
move "You Are Still the One" Shania Twain 4
```

The **actions file** may include 5 different types of actions:

- add, which adds a song to the end of the playlist.
- remove, which removes a song from the playlist.
- move, which moves a song to a new position - the new position is always included at the end of the line. The line *move "I Will Never Love Again - Film Version" Lady Gaga, Bradley Cooper 1*, moves the song "I Will Never Love Again - Film Version" to position 1, and the line *move "You Are Still the One" Shania Twain 4*, moves the song "You Are Still the One" to position 4. Note that, unliked array indexing in C/C++, positioning in Spotify starts at 1, as opposed to 0. This can be seen in the above Spotify screenshot: the first position is position 1.
- next, which skips the currently playing song and starts playing the song that is listed directly after it. Note that if the currently playing song is already at the bottom of the playlist, the action *next* will make the first song (i.e., the song at the very top of the playlist) as the currently playing song.
- previous, which skips the currently playing song and goes to the song listed directly before the currently playing song. Note that if the currently playing song is already at the top of the playlist, the action *previous* will make the last song (i.e., the song at the bottom of the playlist) as the currently playing song.

According to this sample **actions file**, 4 songs will be added to the playlist, 1 song will be removed, 2 songs will be moved. And the currently playing song will be a different song, instead of the song "Always Remember Us This Way".

When playlist_tiny1.txt and actions1.txt are supplied to your program as the two input files, your program should produce the following output file:

```console
"I Will Never Love Again - Film Version" Lady Gaga, Bradley Cooper
"Perfect Duet" Ed Sheeran, Beyonce
"Always Remember Us This Way" Lady Gaga
"You Are Still the One" Shania Twain
"Umbrella" Rihanna
"We Are Young" Fun current
"Viva La Vida" Coldplay
```

## Non-existent Songs

If a move action or a remove action as defined in the **actions file** attempts to move or remove a song which does not exist in the playlist, your program should ignore such an action.

## Duplicated Songs

In cases where the same song appears more than once on the playlist, choose the first song (to move or remove) - i.e., search the playlist, starting from the top to the bottom, identify the first occurrence of this song, and use it (to move or remove).

## Removing current songs

Question: "If a song is specified as currently playing, what happens if it is removed? Does the song before or after it start playing?"

Answer: You decide; it won't be tested.

## Other Assumptions

Question: Can we assume the substring "current" will not be found in any other part of the spotify playlist that is not the indication of where the playlist is currently at?(i.e. it will not be part of a song title)

Answer: Yes, you can assume that.

<!-- ## Instructor's Code

You can test (but not view) the instructor's code here: [instructor code](http://ds.cs.rpi.edu/hws/playlists/). Note that this site is hosted on RPI's network and you can visit this site only if you are on RPI's network: either on campus or using a VPN service. Also note that, it is not your job in this assignment to play musics, the instructor's C++ code here is just used as the backend to manage the playlist.
-->

## Program Requirements & Submission Details

In this assignment, you are required to use both std::string and std::vector. You are NOT allowed to use any data structures we have not learned so far.

Use good coding style when you design and implement your program. Organize your program into functions: don't put all the code in main! Be sure to make up new test cases to fully debug your program and don't forget to comment your code! Complete the provided template [README.txt](./README.txt). You must do this assignment on your own. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file. 

**Due Date**: 01/22/2026, 10pm.

## Rubric

13 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - STL Vector & String (3 pts)
   - Uses data structures which have not been covered in this class. (-3)
   - Did not use STL vector (-2)
   - Did not use STL string (-2)
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
   - Overly long lines, in excess of 100 or so characters. It's recommended to keep all lines short and put comments on their own lines. (-1)
