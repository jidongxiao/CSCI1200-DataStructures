# Lecture 6 --- Pointer and Dynamic Memory

- Different types of memory
- Dynamic allocation of arrays

## 6.1 Three Types of Memory

- Automatic memory: memory allocation inside a function when you create a variable. This allocates space for
local variables in functions (on the stack) and deallocates it when variables go out of scope. For example:
```cpp
int x;
double y;
```
- Static memory: variables allocated statically (with the keyword static). They are are not eliminated when
they go out of scope. They retain their values, but are only accessible within the scope where they are defined. For example:
```cpp
static int counter;
```
- Dynamic memory: explicitly allocated (on the heap) as needed. This is our focus for today.

## 6.2 Dynamic Memory

Dynamic memory is:
- created using the **new** operator,
- accessed through pointers, and
- removed through the **delete** operator.
 Here’s a simple example involving dynamic allocation of integers:

<table>
 <tr>
  <td>

 <pre>
int * p = new int;
*p = 17;
cout << *p << endl;
int * q;
q = new int;
*q = *p;
*p = 27;
cout << *p << " " << *q << endl;
int * temp = q;
q = p;
p = temp;
cout << *p << " " << *q << endl;
delete p;
delete q;
 </pre>

</td>
<td><img src="heap.png" alt="heap"</td>
</tr>
</table>

<!--[alt text](heap.png "heap")-->

- The expression *new int* asks the system for a new chunk of memory that is large enough to hold an integer
and returns the address of that memory. Therefore, the statement

```cpp
int * p = new int; 
```

allocates memory from the heap and stores its address in the pointer variable *p*.

- The statement

```cpp
delete p;
```

takes the integer memory pointed by *p* and returns it to the system for re-use.
- This memory is allocated from and returned to a special area of memory called the **heap**. By contrast, local
variables and function parameters are placed on the stack.
- In between the *new* and *delete* statements, the memory is treated just like memory for an ordinary variable,
except the only way to access it is through pointers. Hence, the manipulation of pointer variables and values is
similar to the examples covered in the pointers lecture except that there is no explicitly named variable for that memory
other than the pointer variable.
- Dynamic allocation of primitives like ints and doubles is not very interesting or significant. What’s more important is dynamic allocation of arrays and class objects.

## 6.3 Exercises

- [Leetcode problem 56: Merge Intervals](https://leetcode.com/problems/merge-intervals/). Solution: [p56_mergeintervals.cpp](../../leetcode/p56_mergeintervals.cpp)
- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 1929: Concatenation of Array
](https://leetcode.com/problems/concatenation-of-array/). Solution: [p1929_concatenationofarray.cpp](../../leetcode/p1929_concatenationofarray.cpp)
