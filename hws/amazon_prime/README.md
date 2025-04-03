# Homework 3 — Completing a Simple Amazon Prime Video Recommendation System

In this assignment you will complete the implementation of a simple recommendation system called New York Recommender. Your program will mimic some behaviors of the Amazon Prime Video Recommendation System. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice managing dynamic memory.
- Practice using two-dimensional arrays. 

**Note**: in this README, we use the term two-dimensional array and the term matrix interchangeably, as in this assignment, we assume these two terms have the same meaning.

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

You are required to define a class named **RecommendationSystem**. The class definition goes to recommendation.h and the implementation of the class goes to [recommendation.cpp](recommendation.cpp), which is provided but is incomplete. Your class must have (at least) two member variables, one is named userMovieRatingsMatrix, the other is named userShowRatingsMatrix, both are two-dimensional *int* pointers, i.e., int\*\*. Two member functions to your class are provided, and you can call but should not modify these two functions.

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

Each line is representing one user. Each user uses the Amazon star rating (as shown in the following image) to rate a movie or a tv show (in the range of 1 to 5).

![alt text](images/starRatings.png "Amazon Star Rating")

The first line of [movieRatings.txt](movieRatings.txt) means, user 0 gives a rating of 3 to movie 87, gives a rating of 1 to movie 11, gives a rating of 1 to movie 14, gives a rating of 4 to moving 31, gives a rating of 4 to movie 101, gives a rating of 2 to movie 21, etc.

The second line of [movieRatings.txt](movieRatings.txt) means, user 1 gives a rating of 1 to movie 6, gives a rating of 2 to movie 61, gives a rating of 2 to movie 109, gives a rating of 4 to moving 87, gives a rating of 4 to movie 28, gives a rating of 5 to movie 38, etc.

The 3rd line descirbes ratings given by user 2, the 4th line describes ratings given by user 3, etc.

The file [showRatings.txt](showRatings.txt) can be interpreted in the same way. It is just ratings in that file are for tv shows. In this assignment, your program should read these two input files and store the movie ratings in a matrix, and store the show ratings in another matrix.

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

1. in the case where the number of command line arguments is not 6, your program should use std::cerr to print the following message:

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

**Note**: All expected output files are provided in this repository. All the expected output files contain an empty line at the very end, to match with that, you just need to make sure all your print statements end with *std::endl;* (or just *endl;* if you don't use *std::*).

## Provided Code

Two cpp files are provided: [main.cpp](main.cpp) and [recommendation.cpp](recommendation.cpp). These two files are incomplete, and you should add your code into these two files. In addition, you should create the recommendation.h file, in which you define the **RecommendationSystem** class.

### Existing Code in [main.cpp](main.cpp)

A helper function named *process_one_line* is provided in the [main.cpp](main.cpp) file.

```cpp
void process_one_line(int** matrix, int i, std::string& line){
	std::istringstream iss(line);
	// process each (index, value) pair
        int index, value;
        char openParen, comma, closeParen;
	// when used with integers, it reads characters until it encounters a non-digit character or whitespace. However, when used with characters, it reads a single character.
        while (iss >> openParen >> index >> comma >> value >> closeParen) {
            matrix[i][index] = value;
        }
}
```

This function will help you to parse information from the input file, and update the matrix. This function takes three arguments, the first argument is a two-dimensional integer pointer, also known as the matrix pointer, which is expected to point to the beginning memory location of a two-dimensional array. This function assumes the caller allocates and reclaims memory for matrix - **it also assumes that every element of the matrix is initialized to 0**. The second argument is the index i, indicating which row of the matrix will be updated. The third argument is the string line, which represents one line of the input file.

To understand what this function does, let's take the first line of the [movieRatings.txt](movieRatings.txt) as an example.

```console
(87,3) (11,1) (14,1) (31,4) (101,4) (21,2) (23,1) (3,4) (38,5) (100,2) (109,1) (80,4) (15,3) (71,5) (52,5) (67,2) (78,2) (69,3) (72,2) (93,4) (35,3) (102,4) (81,4) (107,4) (79,4) (58,1) (105,5) (90,2) (6,3) (9,3) (53,4) (59,2) (62,2) (94,2) (54,2) (85,3) (57,5) (5,4) (32,4) (39,2) (42,2)
```

We know this first line represents movie ratings given by user 0. If this above line is stored in the *line* argument as an std::string, passed to the *process_one_line* function, then this function will set:

- matrix[0][87] to 3 // it's the first row, and that corresponds to matrix[0], and the rating to movie 87 is 3.
- matrix[0][11] to 1
- matrix[0][14] to 1
- matrix[0][31] to 4
- matrix[0][101] to 4
- matrix[0][21] to 2
- etc.

Let's present one more example, the following is the second line of the [movieRatings.txt](movieRatings.txt):

```console
(6,1) (61,2) (109,2) (87,4) (28,4) (38,5) (22,4) (11,2) (59,4) (68,3) (33,5) (71,3) (72,4) (15,4) (49,3) (94,1) (55,1) 
```

When feeding this line to the *process_one_line* function, it will set:

- matrix[1][6] to 1 // it's the second row, and that corresponds to matrix[1], and the rating to movie 6 is 1.
- matrix[1][61] to 2
- matrix[1][109] to 2
- matrix[1][87] to 4
- matrix[1][28] to 4
- matrix[1][38] to 5
- etc.

In addition to this *process_one_line* function, the [main.cpp](main.cpp) also defines two global arrays, one array is named movies, which stores the index and the name of all the movies; the other array is named tvShows, which stores the index and the name of all the tv shows.

### Existing Code in [recommendation.cpp](recommendation.cpp)

Two member functions of the **RecommendationSystem** class are provided in the [recommendation.cpp](recommendation.cpp) file. You can use these two functions without understanding the internal of these two functions, but we will go over the internal of these two functions in lecture, just to satisfy some students' curiosity of how movies and tv shows are actually recommended. More specifically, how does Amazon or Netflix know which movies or tv shows I like? The detailed answer to this question is beyond the scope of this course, but we will still discuss it in lecture. To complete this assignment, you just need to know how to call these two functions and what these two functions return.

The prototype of these two functions are:

```cpp
void RecommendationSystem::recommendMovies(int userId, int numRecommendations, int* recommendedMovies) const;
void RecommendationSystem::recommendShows(int userId, int numRecommendations, int* recommendedShows) const;
```

The first function returns an integer array, representd by its third argument - *int\* recommendedMovies*. Each element of this array is an index of a movie that will be recommended to the user. It is the caller's responsibility to allocate and reclaim memory for this array.

The second function returns an integer array, representd by its third argument - *int\* recommendedShows*. Each element of this array is an index of a tv show that will be recommended to the user. It is the caller's responsibility to allocate and reclaim memory for this array.

These two functions assume the **RecommendationSystem** class has these two member variables, 

```cpp
int** userMovieRatingsMatrix;
int** userShowRatingsMatrix;
```

where *userMovieRatingsMatrix* points to the memory location for the movie rating matrix, and *userShowRatingsMatrix* points to the memory location for the tv show rating matrix.

The first argument (*int userId*) of these two functions is the user id, which represents the user whom the movies or the shows will be recommended to.

The second argument (*int numRecommendations*) of these two functions is the number of recommendations, meaning how many movies or how many tv shows will be recommended to the user. The two functions are very similar, and here we will just describe the first function, i.e., *RecommendationSystem::recommendMovies*. The function *RecommendationSystem::recommendMovies* will use some algorithm to find movies which the user might like, it will then store the index of these movies in the array represented by *recommendedMovies*. Ideally, the size of this array is equal to *numRecommendations*, and by the time this function returns, every element of the array should contain a valid index. However, it is possible there are not enough number of movies which the algorithm thinks the user might like. In order to handle such a case, this function expects the caller to allocate memory for the array and also initialize every element of the array to be *-1*. And when this function returns, the caller should check which element's value is not *-1*, and only consider these elements as the valid index, and ignore the elements whose value is *-1*. You can assume all valid indices are stored at the beginning of the array, and all *-1*s (if any) are stored at the end of the array. For example, if *numRecommendations* is 5, but the algorithm only finds 3 movies the user might like, and if the index of these 3 movies are 20, 40, 60, respectively, then the array returned by this function will be:

```console
[20, 40, 60, -1, -1]
```

On the other hand, if *numRecommendations* is 5, but the algorithm finds 20 movies the user might like, the function would only return 5 indices. In other words, the function will never return more than *numRecommendations* indices.

In addition, the two functions also assume the **RecommendationSystem** class has defined the number of users, the number of movies, the number of tv shows as its member variables, named numUsers, numMovies, numShows, respectively.

## Program Requirements & Submission Details

In this assignment, **you are NOT allowed to use std::vector anywhere in your code**. You must use dynamic memory to store the movie rating matrix, and the show rating matrix.

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. 

**Due Date**: 02/08/2024, Thursday, 10pm.

## Rubric

18 pts

 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - OVERALL CLASS DECLARATION & IMPLEMENTATION AND CODING STYLE (8 pts)
   - No credit (significantly incomplete implementation) (-8)
   <!--- Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)-->
   - Improper uses or omissions of const and reference. (-1)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
 - DATA REPRESENTATION (Must use dynamic memory for the implementation.) (7 pts)
   - No credit (significantly incomplete implementation). (-7)
   - Does not define the RecommendationSystem class. (-5)
   - Does not use dynamic memory to store the movie rating matrix. (-5)
   - Does not use dynamic memory to store the show rating matrix. (-5)
   - Uses std::vector anywhere in the code. (-7)
   - Member variables are public. (-2)
<!-- - OUTPUT OPERATOR OVERLOADING (2 pts)
   - Does not overload the output (&lt;&lt;) operator. (-2)
   - Incorrect syntax (wrong return type, wrong arguments). (-1)
-->
