**This homework is still not ready!**

# Homework 9 — Online Shopping

In this assignment you will develop a program to manage the products for an online shopping platform, let's call this program New York Shopping. Please read the entire handout before starting to code the assignment.

It is highly recommended that before you begin coding, you practice constructing a couple of trees by hand and then checking your work with [this online visualization tool](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html).

## Learning Objectives

- Practice implementing and using B+ tree data structures.

## Supported Commands

Your program will be run like this:

```console
nyshopping.exe input.json output.txt min max
```

Here:

- nyshopping.exe is the executable file name.
- input.json contains products information from Amazon. In this README we will refer to this file as the json file.
- output.txt is where to print your output to.
- min and max indicates a price range.

When running the above command, your program should print all products whose prices fall into the [min,max] range. The [min, max] range concept is similar to the following box you see on Amazon.

![alt text](amazon_price_range.png "amazon price range")

For all products fall into that price range, sort them based on the rating in a descending order - products with a higher rating being displayed first. If there is a tie, break the tie by prices - products with a lower price being displayed first. If there is still a tie, i.e. two products have the same rating, and have the same price, break the tie by comparing the title of the products, i.e., apply the less than operator (<) to the two titles - both are std::strings, the product whose title is less than the title of the other product should be displayed first.

## Program Requirements & Submission Details

In this assignment, you are required to manage products using a B+ tree. There is no other requirement on what data structures you can use and what data structures you can not use. 

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 04/11/2024, Thursday, 10pm.

## Rubric

15 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - IMPLEMENTATION AND CODING STYLE (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (BPlusTree representation and functions are reasonable.) (6 pts)
   - Does not implement or use a B+ tree. (-6)
   - Incomplete B+ tree implementation (e.g. failed to reasonably implement find or insert) (-3)
