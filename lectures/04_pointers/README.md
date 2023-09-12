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

![alt text](pointer_init.pdf "pointer_init")

## 4.2 Pointer Variables and Memory Access

- x is an ordinary float, but p is a pointer that can hold the memory address of a float variable. The difference
is explained in the picture above.
- Every variable is attached to a location in memory. This is where the value of that variable is stored. Hence,
we draw a picture with the variable name next to a box that represents the memory location.
- Each memory location also has an address, which is itself just an index into the giant array that is the computer
memory.
- The value stored in a pointer variable is an address in memory. The statement p = &x; takes the address
of x’s memory location and stores it (the address) in the memory location associated with p.
- Since the value of this address is much less important than the fact that the address is x’s memory location,
we depict the address with an arrow.
- The statement: *p = 72; causes the computer to get the memory location stored at p, then go to that
memory location, and store 72 there. This writes the 72 in x’s location.

Note: *p is an l-value in the above expression.

## 4.3 Defining Pointer Variables

- In the example below, p, s and t are all pointer variables (pointers, for short), but q is NOT. You need the *
before each variable name.
```cpp
int * p, q;
float *s, *t;
```
- There is no initialization of pointer variables in this two-line sequence, so the statement below is dangerous,
and may cause your program to crash! (It won’t crash if the uninitialized value happens to be a legal address.)
```cpp
*p = 15;
```

## 4.4 Operations on Pointers

- The unary (single argument/operand) operator * in the expression *p is the “dereferencing operator”. It means
“follow the pointer” *p can be either an l-value or an r-value, depending on which side of the = it appears on.
- The unary operator & in the expression &x means “take the memory address of.”
- Pointers can be assigned. This just copies memory addresses as though they were values (which they are).
Let’s work through the example below (and draw a picture!). What are the values of x and y at the end?
```cpp
float x=5, y=9;
float *p = &x, *q = &y;
*p = 17.0;
*q = *p;
q = p;
*q = 13.0;
```
- Assignments of integers or floats to pointers and assignments mixing pointers of different types are illegal.
Continuing with the above example:
```cpp
int *r;
r = q; // Illegal: different pointer types;
p = 35.1; // Illegal: float assigned to a pointer
```
- Comparisons between pointers of the form if ( p == q ) or if ( p != q ) are legal and very
useful! Less than and greater than comparisons are also allowed. These are useful only when the pointers are
to locations within an array.

## 4.5 Null Pointers

- Like the int type, pointers are not default initialized. We should assume it’s a garbage value, leftover from
the previous user of that memory.
- Pointers that don’t (yet) point anywhere useful are often explicitly assigned to NULL.
  – NULL is equal to the integer 0, which is a legal pointer value (you can store NULL in a pointer variable).
  – But NULL is not a valid memory location you are allowed to read or write. If you try to dereference or
follow a NULL pointer, your program will immediately crash. You may see a segmentation fault, a bus
error, or something about a null pointer dereference.
  – NOTE: In C++11, we are encouraged to switch to use nullptr instead of NULL or 0, to avoid some
subtle situations where NULL is incorrectly seen as an int type instead of a pointer. For this course we
will assume NULL and nullptr are equivalent.
  – We indicate a NULL or nullptr value in diagrams with a slash through the memory location box.
  - Comparing a pointer to NULL is very useful. It can be used to indicate whether or not a pointer variable is
pointing at a useable memory location. For example,
```cpp
if ( p != NULL )
cout << *p << endl.
```
tests to see if p is pointing somewhere that appears to be useful before accessing and printing the value stored
at that location.
- But don’t make the mistake of assuming pointers are automatically initialized to NULL

## 4.6 Arrays

- Here’s a quick example to remind you about how to use an array:
```cpp
const int n = 10;
double a[n];
int i;
for ( i=0; i<n; ++i )
a[i] = sqrt( double(i) );
```
- Remember: the size of array a is fixed at compile time. STL vectors act like arrays, but they can grow and
shrink dynamically in response to the demands of the application.

## 4.7 Sorting an Array

- Arrays may be sorted using std::sort, just like vectors. Pointers are used in place of iterators. For example, if a is an array of doubles and there are n values in the array, then here’s how to sort the values in the array into increasing order:

```cpp
std::sort( a, a+n );
```

## 4.8 Exercises

- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 977: Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/). Solution: [p977_sortedsquare.cpp](../../leetcode/p977_sortedsquare.cpp)
- [Leetcode problem 1051: Height Checker](https://leetcode.com/problems/height-checker/). Solution: [p1051_heightchecker.cpp](../../leetcode/p1051_heightchecker.cpp)
