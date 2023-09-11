# Lecture 4 --- Pointers, Arrays, & Pointer Arithmetic

- Pointers store memory addresses.
- They can be used to access the values stored at their stored memory address.
- They can be incremented, decremented, added, and subtracted.
- Dynamic memory is accessed through pointers.
- Pointers are also the primitive mechanism underlying vector iterators, which we have used with std::sort and
will use more extensively throughout the semester.

## 4.1 Pointer Example

- Consider the following code segment:

```cpp
float x = 15.5;
float *p; /* equiv: float* p; or float * p; */
p = &x;
*p = 72;
if ( x > 20 )
cout << "Bigger\n";
else
cout << "Smaller\n";
```

The output is Bigger
because x == 72.0. What’s going on?

## 4.2 Exercises

- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 977: Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/). Solution: [p977_sortedsquare.cpp](../../leetcode/p977_sortedsquare.cpp)
- [Leetcode problem 1051: Height Checker](https://leetcode.com/problems/height-checker/). Solution: [p1051_heightchecker.cpp](../../leetcode/p1051_heightchecker.cpp)
