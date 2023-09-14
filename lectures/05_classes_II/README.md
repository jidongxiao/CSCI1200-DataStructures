# Lecture 5 ---  Classes II: Sort, Non-member Operators

- Classes in C++;
- Non-member operators

## 5.1 C++ Classes

- Nuances to remember

  - Within class scope (within the code of a member function) member variables and member functions of
that class may be accessed without providing the name of the class object.  
  - Within a member function, when an object of the same class type has been passed as an argument, direct
access to the private member variables of that object is allowed (using the ’.’ notation).

## 5.2 Operator Overloading

- When sorting objects of a custom class, we can provide a third argument to the sort function, and this third argument is a comparison function.
- What if we do not want to provide this third argument? The answer is: define a function that creates a < operator for Date objects! At first, this seems a bit weird, but it is extremely useful.
- Let’s start with syntax. The expressions a < b and x + y are really function calls!
Syntactically, they are equivalent to operator< (a, b) and operator+ (x, y) respectively.
- When we want to write our own operators, we write them as functions with these weird names.
- For example, if we write:

```cpp
bool operator< (const Date& a, const Date& b) {
return (a.getYear() < b.getYear() ||
(a.getYear() == b.getYear() && a.getMonth() < b.getMonth()) ||
(a.getYear() == b.getYear() && a.getMonth() == b.getMonth() && a.getDay() < b.getDay()));
}
```
then the statement

```cpp
sort(dates.begin(), dates.end());
```
will sort Date objects into chronological order.
- Really, the only weird thing about operators is their syntax.
- We will have many opportunities to write operators throughout this course. Sometimes these will be made class member functions, but more on this in a later lecture.

## 5.3 Non-member Operators

## 5.4 Exercises

- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 977: Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/). Solution: [p977_sortedsquare.cpp](../../leetcode/p977_sortedsquare.cpp)
- [Leetcode problem 1051: Height Checker](https://leetcode.com/problems/height-checker/). Solution: [p1051_heightchecker.cpp](../../leetcode/p1051_heightchecker.cpp)
