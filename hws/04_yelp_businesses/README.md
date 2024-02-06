# Homework 4 — Implementing a Simple Yelp

In this assignment you will implement a simple business review and recommendation system called New York Businesses. Your program will mimic some behaviors of Yelp. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Get familiar with a commonly used data structure - linked lists.
- Practice using std::list.
- Practice using iterators.

## Background

Yelp is a popular online platform and mobile application that allows users to discover and review local businesses, particularly restaurants. It provides a platform for users to share their experiences and opinions about various businesses, including restaurants, bars, cafes, and other services. 

In this assignment, you will be implement a program which allows users to discover local businesses.


## Specification

## Input Files

## Commands to Support & Program Output

Your program only needs to support the following command:

```console
nybusninesses.exe input.json output.txt zipcode categories
```

Here

- input.json is the input file. In this assignment, we have several input files, but for each run of your program, it takes one input file.
- output.txt is where to print your output.
- zipcode indicates the zipcode of the area where the user is trying to search.
- categories indicate the categories of the businesses. This argument can be one or multiple of the following:

![alt text](images/yelp_categories.png "Yelp Categories")
![alt text](images/yelp_categories2.png "Yelp Categories")

Keep in mind that users can select multiple categories, in the above two screenshots, six categories were chosen, and they are:

- Pizza
- Sushi Bars
- Japanese
- Barbeque
- Indian
- Chinese

When your program is executed, it produces the businesses which fall into any of the chosen categories, and are located in this zipcode area. For each business, your program will print to the output something similar to what Yelp does. The following is an example:

![alt text](images/alibaba.png "Alibaba")

## Provided Code

## Program Requirements & Submission Details

In this assignment, **you must use std::list to store the businesses which match with what the user is searching for**. 

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file. 

**Due Date**: 02/15/2024, Thursday, 22:00pm.

## Rubric

