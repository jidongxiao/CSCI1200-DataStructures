This README is still incomplete!

# Homework 3 — Completing a Simple Amazon Prime Video Recommendation System

In this assignment you will complete the implementation of a simple recommendation system called New York Recommender. Your program will mimic some behaviors of the Amazon Prime Video Recommendation System. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice managing dynamic memory.
- Practice using arrays.
<!--- Practice overloading operator<<, and understand why it is a bad idea to make it a member function.-->

## Background

Amazon Prime Video recommends movies and tv shows to prime users. Prime users on the prime video page will see things like this:

![alt text](images/movies.png "Amazon Prime Movies")

and this:

![alt text](images/shows.png "Amazon Prime Shows")

In this assignment, you will be completing a program which aims to implement these two features: recommending movies and recommending tv shows to users.

## Specification

In this assignment we assume there are 500 users in total, and we index these users from 0 to 499.

We assume there are 110 movies in total, indexed from 0 to 109.

We assume there are 100 tv shows in total, indexed from 0 to 99.

The index and the name of all the movies and shows are hardcoded in the [main.cpp](main.cpp), just so you do not need to parse more input files.

You are required to define a class named **RecommendationSystem**. The class definition goes to recommendation.h and the implementation of the class goes to [recommendation.cpp](recommendation.cpp), which is provided but is incomplete. Your class must have (at least) two member variables, one is named userMovieRatingsMatrix, the other is named userShowRatingsMatrix, both are two-dimenstional *int* pointers, i.e., int\*\*. Two member functions to your class are provided, and you can call but should not modify these two functions.

## Input Files

Two input files are provided: [movieRatings.txt](movieRatings.txt) and [showRatings.txt](showRatings.txt). The two files have the same format. For example, the following is the first few lines of the [movieRatings.txt](movieRatings.txt):

```console
(87,3) (11,1) (14,1) (31,4) (101,4) (21,2) (23,1) (3,4) (38,5) (100,2) (109,1) (80,4) (15,3) (71,5) (52,5) (67,2) (78,2) (69,3) (72,2) (93,4) (35,3) (102,4) (81,4) (107,4) (79,4) (58,1) (105,5) (90,2) (6,3) (9,3) (53,4) (59,2) (62,2) (94,2) (54,2) (85,3) (57,5) (5,4) (32,4) (39,2) (42,2) 
(6,1) (61,2) (109,2) (87,4) (28,4) (38,5) (22,4) (11,2) (59,4) (68,3) (33,5) (71,3) (72,4) (15,4) (49,3) (94,1) (55,1) 
(76,3) (33,1) (78,4) (65,4) (62,4) (73,5) (1,4) (105,2) (34,4) (18,4) (75,4) (99,4) (94,1) (83,3) (14,5) (85,2) (26,4) (15,4) (21,4) (69,1) (10,4) (81,1) (22,3) (61,2) (7,2) (25,2) (43,4) (70,2) (6,5) (0,2) (38,4) (95,5) (107,4) (72,4) (49,2) (90,2) (2,4) (88,3) (104,2) (23,3) (97,5) (56,4) (58,4) (57,5) (100,1) (37,4) (80,4) (96,4) (42,4) (77,5) (3,1) (46,1) (29,3) (19,5) (103,5) 
(26,4) (57,4) (84,5) (60,4) (70,2) (99,3) (87,5) (94,1) (81,4) (16,2) (67,2) (36,2) (103,4) (28,1) (97,4) (73,5) (45,1) (37,4) (13,2) (17,4) (11,5) (66,2) (10,4) (85,1) (51,5) (96,4) (4,4) (21,5) (9,2) (74,5) (50,3) (104,3) (15,2) (35,5) (101,1) (102,4) (77,5) (62,1) (34,4) (71,5) (20,5) (46,1) (44,1) (90,1) (49,1) (2,4) (80,3) (95,1) (24,5) (98,3) (8,3) (14,3) (47,1) (32,3) (29,1) (18,4) (63,4) (40,3) (59,2) (69,5) (100,1) (107,3) (55,4) (0,4) 
(69,4) (63,2) (32,5) (31,4) (74,2) (46,1) (99,4) (26,4) (90,4) (89,1) (58,1) (27,5) (29,2) (7,4) (65,3) (60,5) (23,1) (97,4) (53,4) (39,5) (87,5) (47,3) (8,4) (15,1) (102,3) (35,4) (106,4) (73,5) (98,4) (42,4) (66,5) (76,1) (104,2) (94,1) (77,1) (56,4) (109,4) (54,4) (103,2) (71,2) (25,4) (92,5) (24,4) (52,4) (34,4) (14,3) (55,2) (22,4) (80,2) (44,2) (4,4) (75,3) (13,4) (91,4) (61,3) (82,1) (84,3) (28,2) (51,3) (30,4) (85,5) (62,4) (86,4) (70,4) (43,5) (33,4) (107,2) (64,5) (108,4) (9,3) (88,3) (11,1) 
(10,4) (38,1) (0,4) (20,1) (41,3) (94,1) (64,5) (71,1) (22,4) (34,3) (96,1) (46,3) (50,5) (39,2) (109,4) (82,1) (65,5) (2,3) (37,4) (44,3) (69,1) (105,4) (30,4) (29,3) 
(11,4) (98,2) (76,2) (50,2) (35,3) (16,1) (18,5) (70,4) (30,5) (3,2) (90,2) (36,1) (83,4) (102,2) (105,4) (49,4) (94,1) (85,2) (20,3) (107,1) (28,1) (48,2) (12,2) (15,4) 
(67,3) (27,4) (58,2) (6,3) (42,5) (63,3) (0,5) (49,4) (53,4) (66,3) (17,2) (41,2) (90,1) (84,4) (83,4) (46,1) (22,4) (13,2) (15,1) (75,1) (11,4) (62,4) (102,4) (35,1) (5,5) (69,4) (81,3) (93,4) (44,1) (59,5) (31,4) (8,3) (47,5) (106,3) (7,1) (61,3) (51,3) (99,1) (54,1) (32,3) (78,4) (72,3) (24,1) (48,4) (40,4) (97,4) (74,2) (33,1) (26,3) (68,5) (95,4) (64,4) (4,3) (25,4) (103,3) (52,5) (65,5) (30,4) (28,2) (39,4) (18,2) (73,1) (105,3) (45,4) (38,2) (23,4) (16,2) (21,4) (2,4) (9,5) (77,2) (82,2) (19,3) 
(82,1) (83,4) (64,1) (98,3) (94,2) (4,1) (38,5) (90,5) (31,1) (2,5) (61,1) (102,3) (103,1) (45,4) (89,4) (1,2) (85,4) (63,2) (49,4) (77,4) (28,1) (91,4) (8,4) (53,5) (46,4) (23,4) (73,2) (104,5) (62,4) (66,4) (25,2) (44,4) (9,1) (30,1) (29,1) (108,1) (48,1) (52,4) (76,1) (92,4) (15,3) (101,4) (59,1) (32,4) (22,2) (33,3) (21,2) (35,4) (65,2) (109,1) (69,5) (27,4) 
(101,4) (37,2) (24,1) (0,4) (63,2) (71,5) (64,3) (2,4) (65,1) (45,4) (7,4) (50,2) (81,2) (93,1) (42,5) (83,4) (29,2) (21,2) (51,5) (86,4) (82,1) (108,2) (23,4) (40,2) (89,4) (88,3) (78,5) (107,4) (9,3) (56,5) (60,5) (46,5) (44,4) (67,3) (18,3) (10,4) (103,1) (8,5) (34,3) (12,5) (96,5) (35,2) (68,3) (61,1) (58,1) (20,3) (100,4) (97,4) (47,5) (95,1) (92,4) (32,5) (27,5) (52,4) (25,4) (5,4) (85,4) (57,2) (30,3) (76,4) (72,5) (1,5)
```

Each line is representing one user. Each user uses the Amazon star rating (as show in the following image) to rate a movie or a tv show (in the range of 1 to 5).

![alt text](images/starRatings.png "Amazon Star Rating")

The first line of [movieRatings.txt](movieRatings.txt) means, user 0 gives a rating of 3 to movie 83, gives a rating of 1 to movie 11, gives a rating of 1 to movie 14, gives a rating of 4 to moving 31, gives a rating of 4 to movie 101, gives a rating of 2 to movie 21, etc.

The second line of [movieRatings.txt](movieRatings.txt) means, user 1 gives a rating of 1 to movie 6, gives a rating of 2 to movie 61, gives a rating of 2 to movie 109, gives a rating of 4 to moving 87, gives a rating of 4 to movie 28, gives a rating of 5 to movie 38, etc.

The 3rd line descirbes ratings given by user 2, the 4th line describes ratings given by user 3, etc.

The file [showRatings.txt](showRatings.txt) can be interpreted in the same way. It is just ratings in that file are for tv shows.


## Commands to Support & Program Output

Your program only needs to support one command:

```console
nyrecommender.exe movieRatings.txt showRatings.txt output.txt userID numRecommendations
```

Here

- movieRatings.txt is the movie rating input file, already described above.
- showRatings.txt is the show rating input file, already described above.
- output.txt is where to print your output.
- userID specifies the ID of the user.
- numRecommendations specifies how many movies/shows your program will recommend to the user. For example, if numRecommendation is 5, then your program should try to print up to 5 movies and up to 5 tv shows.

When your program is executed, it produces up to numRecommendations recommended movies to the output file, and also produces up to numRecommendation recommended tv shows to the output file. Following is a sample output file:

```console
Prime: Movies we think you'll like:
Elvis
The Shawshank Redemption
The Godfather
Schindler's List
Forrest Gump
Prime: TV shows we think you'll like:
Little Women
Game of Thrones
The Simpsons
Friends
The Crown
```

Note that these recommendations are specifically for this user - as specified by the command line argument userID. Apparently your program will produce different recommendations for different users.

1. in the case where the number of command line argument is not 6, your program should use std::cerr to print the following message:

```console
Usage: nyrecommender.exe movieRatings.txt showRatings.txt output.txt userID numRecommendations

```

Nothing should be printed to the output file in such a case.

2. in the case where the userID command line argument is not in the range of 0-499, your program should use std::cerr to print the following error message:

```console
Invalid User ID.

```

Nothing should be printed to the output file in such a case.

3. in the case where the *numRecommendations* command line argument is 0, your program should produce the output file which contains the following message:

```console
Prime: Movies we think you'll like:
Prime: TV shows we think you'll like:

```

**Note**: all the expected files contain an empty line at the very end, to match with that, you just need to make sure all your print statements end with *std::endl;* (or just *endl;* if you don't use *std::*).

## Helper Functions

TBD.

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
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (Must use dynamic memory for the implementation.) (5 pts)
   - No credit (significantly incomplete implementation). (-5)
   - Does not define the RecommendationSystem class. (-5)
   - Does not use dynamic memory to store the movie rating matrix. (-5)
   - Does not use dynamic memory to store the show rating matrix. (-5)
   - Uses std::vector anywhere in the code. (-5)
   - Member variables are public. (-2)
<!-- - OUTPUT OPERATOR OVERLOADING (2 pts)
   - Does not overload the output (&lt;&lt;) operator. (-2)
   - Incorrect syntax (wrong return type, wrong arguments). (-1)
-->
