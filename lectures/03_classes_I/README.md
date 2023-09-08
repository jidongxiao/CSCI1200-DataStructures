# Lecture 3 --- Classes

- Classes in C++; Types and defining new types; Example: A *Date* class;
  - [date.h](./date.h)
  - [date.cpp](./date.cpp)
  - [date_main.cpp](./date_main.cpp)

- Class declaration: member variables and member functions; Using the class member functions;
- Member function implementation; Class scope; Designing classes;
- Defining a custom sort of class instances.

## 3.1 Types and Defining New Types	

- Every C++ object has a type (e.g., integers, doubles, strings, and vectors, etc., including custom types); and a class is a custom data type, also known as a user-defined data type.
– The type tells us what the data means and what operations can be performed on the data.

## 3.2 C++ Classes

- A C++ class group together variables and functions that operate on those variables. We call these variables *member variables*, and we call these functions *member functions*.

- A C++ class consists of
  – a collection of member variables, usually private, and  
  – a collection of member functions, usually public, which operate on these variables.

- public member functions can be accessed directly from outside the class,
- private member functions and member variables can only be accessed indirectly from outside the class, through public member functions.

## 3.3 Class scope notation

In the *Date* class example as you saw in lab 2,

- **Date::** indicates that what follows is within the scope of the class.
- Within class scope, the member functions and member variables are accessible without the name of the object.

## 3.4 Constructors

These are special functions that initialize the values of the member variables. The constructor automatically get called when an object of the class is created. You have already used constructors for string and vector objects. As you have seen in the lab, constructors in C++ have the following characteristics:

- Constructors have the same name as the class they belong to.
- They do not have a return type, not even void.
- A class can have multiple constructors, and this is known as constructor overloading. The compiler determines which one to call based on the types of the arguments. When a new object is created, EXACTLY one constructor for the object is called.

## 3.5 Member Functions

- Member functions are like ordinary functions except:
  - They can access and modify the object’s member variables.
  - They can call the other member functions without using an object name.
  - Their syntax is slightly different because they are defined within class scope.

More on member functions:

- When the member variables are private, the only means of accessing them and changing them from outside the class is through member functions.
- If member variables are made public, they can be accessed directly. This is usually considered bad style and should not be used in this course.
- Functions that are not members of the *Date* class must interact with *Date* objects through the class public members (a.k.a., the “public interface” declared for the class). One example is the function *sameDay* which accepts two *Date* objects and compares them by accessing their day and month values through their public member functions.

## 3.6 Header Files (.h) and Implementation Files (.cpp)

The code for the *Date* example is in three files:
 - The header file, date.h, contains the class declaration.
 - The implementation file, date.cpp, contains the member function definitions. Note that date.h is #include’ed.
 - date_main.cpp contains the code outside the class. Again date.h again is #include’ed.
 - Different organizations of the code are possible, but not preferable. In fact, we could have put all of the code
from the 3 files into a single file main.cpp. In this case, we would not have to compile two separate files.
 - In many large projects, programmers establish follow a convention with two files per class, one header file and
one implementation file. This makes the code more manageable and is recommended in this course.
 - The files date.cpp and date_main.cpp are compiled separately and then linked to form the executable program.

First, we compile each source code .cpp file (which incorporate the .h file) and produce date.o and date_main.o:
```console
g++ -c -Wall date.cpp
g++ -c -Wall date_main.cpp
```
Then, we create the executable date.out:
```console
g++ -o date.out date.o date_main.o
```

Alternatively, we can do this all on one line (what we usually do for small programs in this course):

```console
g++ -Wall -o date.out date.cpp date_main.cpp
```

## 3.7 Constant member functions	

Member functions that do not change the member variables should be declared **const**.

- For example:
```cpp
bool Date::isEqual(const Date &date2) const;
```
- This must appear consistently in both the member function declaration in the class declaration (in the .h file)
and in the member function definition (in the .cpp file).
- **const** objects (usually passed into a function as parameters) can ONLY use const member functions. In general, pass all class objects by reference so
they aren’t copied, and by const reference if you don’t want/need them to change.
- While you are learning, you will probably make mistakes in determining which member functions should or should not be const. Be prepared for compiler warnings and errors, and read them carefully.
- Question: what is the difference between the two **const** in this above example?

## 3.8 Designing and implementing classes

Good software design requires a lot of practice, but here are some ideas to start from:
- Begin by outlining what the class objects should be able to do. This gives a start on the member functions.
- Outline what data each object keeps track of, and what member variables are needed for this storage.
- Write a draft class declaration in a .h file.
- Write code that uses the member functions (e.g., the main function). Revise the class .h file as necessary.
- Write the class .cpp file that implements the member functions.
In general, don’t be afraid of major rewrites if you find a class isn’t working correctly or isn’t as easy to use as you
intended. This happens frequently in practice!

## 3.9 Providing Comparison Functions to Sort

- If we make an STL vector of Date objects, can we sort them? Yes! How?

```cpp
std::vector<Date> dates;
dates.push_back(Date(tomorrow));
dates.push_back(Sallys_Birthday);
dates.push_back(Date(10,26,1985));
```

- If we used:

```cpp
std::sort(dates.begin(), dates.end());
```

the sort function would try to use the &lt; operator on *Date* objects to sort the dates, just as it uses the &lt; operator on ints or floats. However, this doesn’t work because there is no such operator on *Date* objects.
- Fortunately, the sort function can be called with a third argument, a comparison function. E.g.,:
```cpp
sort(dates.begin(), dates.end(), earlier_date);
```

Where earlier_date is a helper function we define in date.h and date.cpp that takes two const references to Date objects and returns true if and only if the first argument should be considered “less” than the second in the sorted order.
```cpp
bool earlier_date (const Date& a, const Date& b) {
    if (a.getYear() < b.getYear() || 
         (a.getYear() == b.getYear() && a.getMonth() < b.getMonth()) || 
         (a.getYear() == b.getYear() && a.getMonth() == b.getMonth() && a.getDay() < b.getDay()))
        return true;
    else
        return false;
}
```

## 3.11 Exercises

- [Leetcode problem 8: String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
- [Leetcode problem 211: Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [Leetcode problem 1662: Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)
