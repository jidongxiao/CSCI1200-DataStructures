# Lecture 5 ---  Classes II: Sort, Non-member Operators

- Classes in C++;
- Non-member operators

## 5.1 C++ Classes

- Nuances to remember

  - Within class scope (within the code of a member function) member variables and member functions of
that class may be accessed without providing the name of the class object.  
  - Within a member function, when an object of the same class type has been passed as an argument, direct
access to the private member variables of that object is allowed (using the ’.’ notation).

## 5.2 Exercises

- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 977: Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/). Solution: [p977_sortedsquare.cpp](../../leetcode/p977_sortedsquare.cpp)
- [Leetcode problem 1051: Height Checker](https://leetcode.com/problems/height-checker/). Solution: [p1051_heightchecker.cpp](../../leetcode/p1051_heightchecker.cpp)
