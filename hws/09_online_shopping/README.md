# Homework 9 — Online Shopping

In this assignment you will develop a program which implements and uses a B+ tree to manage the products for an online shopping platform, let's call this program New York Shopping. Please read the entire handout before starting to code the assignment.

It is highly recommended that before you begin coding, you practice constructing a couple of B+ trees by hand and then checking your work with [this online visualization tool](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html).

## Learning Objectives

- Practice implementing and using B+ tree data structures.

## Background

### Range-based Searches

Range-based searches refer to queries or searches where the desired result set encompasses a range of values within a certain criteria rather than just a single value. In other words, instead of searching for an exact match, range-based searches retrieve all values that fall within a specified range. For example, in an online shopping context, a range-based search might involve querying for all products (of some category) whose prices are within a specific range, such as between $50 and $100.

Range-based searches are commonly used in various applications such as databases, search engines, data analytics, and more, where it's necessary to retrieve a subset of data that meets certain criteria rather than a single specific value. Efficiently executing range-based searches is crucial for optimizing performance and scalability in many systems.

### Why B+ Trees?

B+ trees is a preferred choice for systems where range-based searches are common operations. This is due to two properties of B+ trees:

Ordered Structure: B+ trees maintain a sorted order of keys in their internal nodes. This property enables efficient range queries because adjacent keys are stored together, making it easy to find and traverse ranges of values.

Balanced Tree: B+ trees are balanced, meaning the height of the tree remains relatively low, leading to efficient search operations. This balance ensures that the time complexity for search, insert, and delete operations remains logarithmic with respect to the number of elements in the tree.

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

![alt text](images/amazon_price_range.png "amazon price range")

For all products fall into that price range, sort them based on the rating in a descending order - products with a higher rating being displayed first. If there is a tie, break the tie by prices - products with a lower price being displayed first. If there is still a tie, i.e. two products have the same rating, and have the same price, break the tie by comparing the title of the products, i.e., apply the less than operator (<) to the two titles - both are std::strings, the product whose title is less than the title of the other product should be displayed first.

## Output File Format

The output file should display products information similar to what Amazon does, but not exactly the same.

![alt text](images/amazon_ice_maker.png "amazon ice maker")

More specifically, your program should print to the output file: the title, the average rating, the number of ratings, the thumb url - a url which takes you to the thumbnail view image of this product, and the price. All of such information can be retrieved from the json file - each line of the json file contains information for one product. When one line contains multiple thumb urls, use the first one.

All sample output files are provided in the [sample_outputs](./sample_outputs) folder.

## Program Requirements & Submission Details

In this assignment, you are required to manage products using a B+ tree. There is no other requirement on what data structures you can use and what data structures you can not use. 

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read. You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 04/11/2024, Thursday, 10pm.

## FAQs

q1: on the lecture notes, it says nodes in B+ trees have up to b children. How shall I choose the b value for my program?

a1: It is your choice, choosing a different "b" may affect the performance of your program, and you should experiment with different "b"s. A larger "b" generally leads to fewer levels in the tree and faster operations, but it may increase the cost of splitting and merging nodes. You are recommended to start with a b=3. Once your program works, you can try different "b"s, but in general, b should be greater than 2.

## Rubric

20 pts
 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - IMPLEMENTATION AND CODING STYLE (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - At least one function is excessively long (i.e., more than 200 lines). (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (BPlusTree representation and functions are reasonable.) (11 pts)
   - Does not implement or use a B+ tree. (only storing products whose prices is in the search range is the incorrect usage of the B+ tree, as it violates the spirit of this assignment.) (-11)
   - Incomplete B+ tree implementation (e.g. failed to reasonably implement find or insert) (-6)
