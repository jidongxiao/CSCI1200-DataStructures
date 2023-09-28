# Lecture 9 --- Iterators & STL Lists

- Another vector operation: pop_back
- Erasing items from vectors is inefficient!
- Iterators and iterator operations
- STL lists are a different sequential container class.
- Returning references to member variables from member functions
- Vec iterator implementation

## 9.1 Another STL vector operation: pop_back

- We have seen how push_back adds a value to the end of a vector, increasing the size of the vector by 1. There
is a corresponding function called pop_back, which removes the last item in a vector, reducing the size by 1.
- There are also vector functions called front and back which denote (and thereby provide access to) the first
and last item in the vector, allowing them to be changed. For example:

```cpp
vector<int> a(5,1); // a has 5 values, all 1
a.pop_back(); // a now has 4 values
a.front() = 3; // equivalent to the statement, a[0] = 3;
a.back() = -2; // equivalent to the statement, a[a.size()-1] = -2
```
## 9.2 Exercises

1. Write erase from vector. This function removes the value at index location i from a vector of strings. The
size of the vector should be reduced by one when the function is finished.

```cpp
// Remove the value at index location i from a vector of strings. The
// size of the vector should be reduced by one when the function is finished.
void erase_from_vector(unsigned int i, vector<string>& v) {



}
```

2. Give an order notation estimate of the average cost of
erase_from_vector, pop_back, and push_back.

## 9.3 What To Do About the Expense of Erasing From a Vector?

When items are continually being inserted and removed, vectors are not a good choice for the container.
- Instead we need a different sequential container, called a list.
  - This has a “linked” structure that makes the cost of erasing independent of the size.
- We will move toward a list-based implementation of the program in two steps:
  - Rewriting our classlist vec.cpp code in terms of iterator operations.
  - Replacing vectors with lists

## 9.4 Iterators

- Here’s the definition (from Koenig & Moo). An iterator:
  - identifies a container and a specific element stored in the container,
  - lets us examine (and change, except for const iterators) the value stored at that element of the container,
  - provides operations for moving (the iterators) between elements in the container,
  - restricts the available operations in ways that correspond to what the container can handle efficiently.
- As we will see, iterators for different container classes have many operations in common. This often makes the
switch between containers fairly straightforward from the programer’s viewpoint.
- Iterators in many ways are generalizations of pointers: many operators / operations defined for pointers are
defined for iterators. You should use this to guide your beginning understanding and use of iterators.

## 9.5 Iterator Declarations and Operations

- Iterator types are declared by the container class. For example,
```cpp
vector<string>::iterator p;
vector<string>::const_iterator q;
```
defines two (uninitialized) iterator variables.
- The dereference operator is used to access the value stored at an element of the container. The code:
```cpp
p = enrolled.begin();
*p = "012312";
```
changes the first entry in the enrolled vector.

- The dereference operator is combined with dot operator for accessing the member variables and member
functions of elements stored in containers. 
Notes:
  - This operation would be illegal if i had been defined as a const iterator because compute_averages is
a non-const member function.
  - The parentheses on the \*i are required (because of operator precedence).
- There is a “syntactic sugar” for the combination of the dereference operator and the dot operator, which is
exactly equivalent:

```cpp
vector<StudentRec>::iterator i = students.begin();
i->compute_averages(0.45);
```
- Just like pointers, iterators can be incremented and decremented using the ++ and -- operators to move to the
next or previous element of any container.
- Iterators can be compared using the == and != operators.
- Iterators can be assigned, just like any other variable.
- Vector iterators have several additional operations:
  - Integer values may be added to them or subtracted from them. This leads to statements like
enrolled.erase(enrolled.begin() + 5);
- Vector iterators may be compared using operators like <, <=, etc.
- For most containers (other than vectors), these “random access” iterator operations are not legal and
therefore prevented by the compiler. The reasons will become clear as we look at their implementations.

## 9.6 A New Datatype: The list Standard Library Container Class

- Lists are our second standard-library container class. (Vectors were the first.) Both lists & vectors store
sequential data that can shrink or grow.
- However, the use of memory is fundamentally different. Vectors are formed as a single contiguous array-like block of memory. Lists are formed as a sequentially linked structure instead.
Although the interface (functions called) of lists and vectors and their iterators are quite similar, their implementations are VERY different. Clues to these differences can be seen in the operations that are NOT in common,
such as:
- STL vectors / arrays allow “random-access” / indexing / [] subscripting. We can immediately jump to
an arbitrary location within the vector / array.
- STL lists have no subscripting operation (we can’t use [] to access data). The only way to get to the
middle of a list is to follow pointers one link at a time.
- Lists have push_front and pop_front functions in addition to the push_back and pop_back functions of
vectors.
- erase and insert in the middle of the STL list is very efficient, independent of the size of the list. Both
are implemented by rearranging pointers between the small blocks of memory. (We’ll see this when we
discuss the implementation details next week).
- We can’t use the same STL sort function we used for vector; we must use a special sort function defined
by the STL list type.
```cpp
std::vector<int> my_vec;
std::list<int> my_lst;
// ... put some data in my_vec & my_lst
std::sort(my_vec.begin(),my_vec.end(),optional_compare_function);
my_lst.sort(optional_compare_function);
```
Note: STL list sort member function is just as efficient, O(n log n), and will also take the same optional
compare function as STL vector.
- Several operations invalidate the values of vector iterators, but not list iterators:
  - erase invalidates all iterators after the point of erasure in vectors;
  - push_back and resize invalidate ALL iterators in a vector
The value of any associated vector iterator must be re-assigned / re-initialized after these operations.

## 9.7 Leetcode Exercises

- [Leetcode problem 27: Remove Element](https://leetcode.com/problems/remove-element/). Solution: [p27_removeelement.cpp](../../leetcode/p27_removeelement.cpp)
- [Leetcode problem 263: Ugly Number](https://leetcode.com/problems/ugly-number/). Solution: [p263_uglynumber.cpp](../../leetcode/p263_uglynumber.cpp)
