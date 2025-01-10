# Lecture 2 --- STL Strings & Vectors

- STL Strings, char arrays (C-style Strings), & converting between these two types
- L-values vs. R-values
- STL Vectors as “smart arrays”

## 2.1 Character Arrays and String Literals	

- In the line below "Hello!" is a string literal and it is also an array of characters (with no associated variable
name).
```cpp
cout << "Hello!" << endl;
```
- A char array can be initialized as:
```c
char h[] = {'H', 'e', 'l', 'l', 'o', '!', '\0'};
```
or as: 
```c
char h[] = "Hello!";
```
In either case, array h has 7 characters, the last one being the null character.
- The C language provides many functions for manipulating these “C-style strings”. We don’t study them much
anymore because the “C++ style” STL string library is much more logical and easier to use. If you want
to find out more about functions for C-style strings look at the cstdlib library http://www.cplusplus.com/
reference/cstdlib/.
- One place we do use them is in file names and command-line arguments, which you will use in Homework 1.

## 2.2 Conversion Between Standard Strings and C-Style String Literals

- We regularly convert/cast between C-style & C++-style (STL) strings. For example:

```cpp
std::string s1( "Hello!" );
std::string s2( h );
```

where h is as defined above.
- You can obtain the C-style string from a standard string using the member function c_str, as in s1.c_str().

## 2.3	STL Vectors: a.k.a. “C++-Style”, “Smart” Arrays

- Standard library “container class” to hold sequences.
- A vector acts like a dynamically-sized, one-dimensional array.  
 Capabilities:  
  – Holds objects of any type.  
  – Starts empty unless otherwise specified.  
  – Any number of objects may be added to the end — there is no limit on size.  
  – It can be treated like an ordinary array using the subscripting operator.  
  – A vector knows how many elements it stores! (unlike C arrays)  
  – There is NO automatic checking of subscript bounds.  

 Here’s how we create an empty vector of integers (let's say we create a vector called *scores* which will be used to store students' scores):
```cpp
std::vector<int> scores;
```
- Vectors are an example of a templated container class. The angle brackets < > are used to specify the type of object (the “template type”) that will be stored in the vector.
- push_back is a vector function to append a value to the end of the vector, increasing its size by one. <!--This is an O(1) operation (on average).-->
- There is NO corresponding push_front operation for vectors.
- size is a function defined by the vector type (the vector class) that returns the number of items stored in the vector.
- After vectors are initialized and filled in, they may be treated just like arrays.
- In the line
```cpp
sum += scores[i];
```
scores[i] is an “r-value”, accessing the value stored at location i of the vector.

- We could also write statements like
```cpp
scores[4] = 100;
```
to change a score. Here scores[4] is an “l-value”, providing the means of storing 100 at location 4 of the vector.
- It is the job of the programmer to ensure that any subscript value i that is used is legal —- at least 0 and strictly less than scores.size().

## 2.4 Initializing a Vector — The Use of Constructors
Here are several different ways to initialize a vector:
- This “constructs” an empty vector of integers. Values must be placed in the vector using push_back.
```cpp
std::vector<int> a;
```

or, 

```cpp
std::vector<int> a{};
```

Here, in C++, a pair of curly braces is used to initialize an empty container. Vector is a type of container, and we will learn other containers later this semester. Interesting trick: if you have a function which has a return type of vector, and in your function body, you want to return an empty vector without specifying a vector name, you can do:

```cpp
return {};
```

- This constructs a vector of 100 doubles, each entry storing the value 3.14. New entries can be created using
push_back, but these will create entries 100, 101, 102, etc.
```cpp
int n = 100;
std::vector<double> b( 100, 3.14 );
```
- This constructs a vector of 10,000 ints, but provides no initial values for these integers. Again, new entries can
be created for the vector using push_back. These will create entries 10000, 10001, etc.
```cpp
std::vector<int> c( n*n );
```
- This constructs a vector that is an exact copy of vector b.
```cpp
std::vector<double> d( b );
```
- This is a compiler error because no constructor exists to create an int vector from a double vector. These are
different types.
```cpp
std::vector<int> e( b );
```

## 2.5	Passing Vectors (and Strings) As Parameters

The following outlines rules for passing vectors as parameters. The same rules apply to passing strings.
- If you are passing a vector as a parameter to a function and you want to make a (permanent) change to the
vector, then you should pass it by reference.
- What if you don’t want to make changes to the vector or don’t want these changes to be permanent?
  – The answer we’ve learned so far is to pass by value.
  – The problem is that the entire vector is copied when this happens! Depending on the size of the vector,
this can be a considerable waste of memory.
- The solution is to pass by constant reference: pass it by reference, but make it a constant so that it can not
be changed.
median grade.
- As a general rule, you should not pass a container object, such as a vector or a string, by value because of the
cost of copying.

## 2.6 Exercises

- [Leetcode problem 8: String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
- [Leetcode problem 211: Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [Leetcode problem 1662: Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/) Solution: [p1662_check_two_strings.cpp](../../leetcode/p1662_check_two_strings.cpp)
