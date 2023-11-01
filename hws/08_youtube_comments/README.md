This README is still incomplete.

# Homework 8 — Managing Youtube Comments

In this assignment you will develop a program to manage youtube comments, let's call this program New York Comments. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice using tree data structures.

## Background

A reddit user complained about this: [Why are YouTube comments not threaded like reddit comments? Why is there only one level of nestedness?](https://www.reddit.com/r/youtube/comments/8uei3n/why_are_youtube_comments_not_threaded_like_reddit/).

The complaint is saying that on reddit you will get a nested comment chain like this:

```
A: This video is fake
    B: No, it's not!
        C: How can you be so dumb?
```

and it's clear that C is replying to B.

But on YouTube you will only get something like this:

```
A: This video is fake
    B: No, it's not!
    C: How can you be so dumb?
```

Now, is C replying to B or to A? In fact, on YouTube, even if C relies to B, you will still get something like this. The problem is, YouTube does manage their comments in trees, but they only allow the trees to have two levels: parent and children, but there are no grandchildren, and that's what this user refers to as "only one level of nestedness". In order to support multiple level of nestedness, we need to create trees with more than two levels, and that is what you do in this assignment, your goal is to write a program to make youtube display comments the better way, so users can see which comment is a reply to which comment.

If you are still not clear about this problem, try to reply to a comment on youtube, and make sure you reply to a comment which is already a reply to another comment.

## Supported Commands

Your program will be run like this:

```console
nycomments.exe input1.txt input2.txt output.txt
```

Here:

- *nycomments.exe* is the executable file name.
- input1.txt contains existing comments to a youtube video.
- input2.txt contains operations we want to perform. These operations include: 1. adding comments, 2. remove comments, 3. display comments.
- output.txt is where to print your output to.

## Format of input1.txt 

## Format of input2.txt 

## Output File Format

## Program Requirements & Submission Details

In this assignment, you are required to maintain the comments in tree nodes, each comment should be stored in one tree node. You are NOT allowed to use any data structures we have not learned so far, but feel free to use any data structures we have already learned, such as std::string, std::vector, std::list, std::map, std::set, std::pair. 

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 11/09/2023, Thursday, 23:59pm.

## Rubric

20 pts
 - README.txt Completed (2 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
 - IMPLEMENTATION AND CODING STYLE (Good class design, split into a .h and .cpp file.  Functions > 1 line are in .cpp file.  Organized class implementation and reasonable comments throughout. Correct use of const/const& and of class method const. ) (8 pts)
   - No credit (significantly incomplete implementation) (-8)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor variable names. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (5 pts)
   - Uses data structures which have not been covered in this class. (-5)
   - Member variables are public. (-2)
