# Lecture 9 --- Iterators & STL Lists

- Another vector operation: pop_back
- Erasing items from vectors is inefficient!
- Iterators and iterator operations
- STL lists are a different sequential container class.
- Returning references to member variables from member functions

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

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/lists/erase/index.html) to see why list is better than vector in terms of the erase operation.

## 9.4 Iterators

- Here’s the definition (from Koenig & Moo). An iterator:
  - identifies a container and a specific element stored in the container,
  - let us examine (and change, except for const iterators) the value stored at that element of the container,
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
defines two (uninitialized) iterator variables. An iterator is used to modify the elements of the container. A const_iterator is used when you want to traverse the elements of the container without modifying them.

- The dereference operator is used to access the value stored at an element of the container.

- We can use arrow and the dot operator like this:
```cpp
p->length();
(*p).length();
```

both of these two lines are using this iterator p to access the length() function of the std::string object pointed to by the iterator.

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

## 9.6 Iterator Operation Examples

- An iterator type is defined by each STL container class. For example:

```cpp
std::vector<double>::iterator v_itr;
std::list<std::string>::iterator l_itr;
std::string::iterator s_itr;
```

- An iterator is assigned to a specific location in a container. For example:

```cpp
v_itr = vec.begin() + i; // i-th location in a vector
l_itr = lst.begin(); // first entry in a list
s_itr = str.begin(); // first char of a string
```

*Note*: We can add an integer to vector and string iterators, but not to list iterators.

- The contents of the specific entry referred to by an iterator are accessed using the * dereference operator:
In the first and third lines, *v itr and *l itr are l-values. In the second, *s_itr is an r-value.

```cpp
*v_itr = 3.14;
cout << *s_itr << endl;
*l_itr = "Hello";
```

- Stepping through a container, either forward and backward, is done using increment (++) and decrement (--)
operators:

```cpp
++itr; itr++; --itr; itr--;
```

These operations move the iterator to the next and previous locations in the vector, list, or string. The
operations do not change the contents of container!

- Finally, we can change the container that a specific iterator is attached to as long as the types match.
Thus, if v and w are both std::vector<double>, then the code:

```cpp
v_itr = v.begin();
*v_itr = 3.14; // changes 1st entry in v
v_itr = w.begin() + 2;
*v_itr = 2.78; // changes 3rd entry in w
```

works fine because v_itr is a std::vector&lt;double&gt;::iterator, but if *a* is a std::vector&lt;std::string&gt; then

```cpp
v_itr = a.begin();
```

is a syntax error because of a type clash!

## 9.7 Additional Iterator Operations for Vector (& String) Iterators

- Initialization at a random spot in the vector:

```cpp
v_itr = v.begin() + i;
```
Jumping around inside the vector through addition and subtraction of location counts:

```cpp
v_itr = v_itr + 5;
```
moves p 5 locations further in the vector. These operations are constant time, O(1) for vectors.
- These operations are not allowed for list iterators (and most other iterators, for that matter) because of the
way the corresponding containers are built. These operations would be linear time, O(n), for lists, where n is
the number of slots jumped forward/backward. Thus, they are not provided by STL for lists.
- Students are often confused by the difference between iterators and indices for vectors. Consider the following
declarations:

```cpp
std::vector<double> a(10, 2.5);
std::vector<double>::iterator p = a.begin() + 5;
unsigned int i=5;
```

- Iterator p refers to location 5 in vector a. The value stored there is directly accessed through the * operator:

```cpp
*p = 6.0;
cout << *p << endl;
```

- The above code has changed the contents of vector a. Here’s the equivalent code using subscripting:

```cpp
a[i] = 6.0;
cout << a[i] << endl;
```

- Here’s another common confusion:

```cpp
std::list<int> lst; lst.push_back(100); lst.push_back(200);
lst.push_back(300); lst.push_back(400); lst.push_back(500);
```

```cpp
std::list<int>::iterator itr,itr2,itr3;
itr = lst.begin();// itr is pointing at the 100
++itr; // itr is now pointing at 200
*itr += 1; // 200 becomes 201
// itr += 1; // does not compile! can't advance list iterator like this
```
```cpp
itr = lst.end(); // itr is pointing "one past the last legal value" of lst
itr--; // itr is now pointing at 500;
itr2 = itr--; // itr is now pointing at 400, itr2 is still pointing at 500
itr3 = --itr; // itr is now pointing at 300, itr3 is also pointing at 300
```

```cpp
// dangerous: decrementing the begin iterator is "undefined behavior"
// (similarly, incrementing the end iterator is also undefined)
// it may seem to work, but break later on this machine or on another machine!
itr = lst.begin();
itr--; // dangerous!
itr++;
assert (*itr == 100); // might seem ok... but rewrite the code to avoid this!
```

## 9.8 A New Datatype: The list Standard Library Container Class

- Lists are our second standard-library container class. (Vectors were the first.) Both lists & vectors store
sequential data that can shrink or grow.
- However, the use of memory is fundamentally different. Vectors are formed as a single contiguous array-like block of memory. Lists are formed as a sequentially linked structure instead.
Although the interface (functions called) of lists and vectors and their iterators are quite similar, their implementations are VERY different. Clues to these differences can be seen in the operations that are NOT in common,
such as:
  - STL vectors / arrays allow “random-access” / indexing / [] subscripting. We can immediately jump to an arbitrary location within the vector / array.  
  - STL lists have no subscripting operation (we can’t use [] to access data). The only way to get to the middle of a list is to follow pointers one link at a time.  
  - Lists have push_front and pop_front functions in addition to the push_back and pop_back functions of vectors.  
  - erase and insert in the middle of the STL list is very efficient, independent of the size of the list. Both are implemented by rearranging pointers between the small blocks of memory. (We’ll see this when we discuss the implementation details next week).
  - We can’t use the same STL sort function we used for vector; we must use a special sort function defined by the STL list type.
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
  - push_back and resize invalidate ALL iterators in a vector.

The value of any associated vector iterator must be re-assigned / re-initialized after these operations.

### List Sort Example

The following [example](list_sort.cpp) demonstrates how to call the list sort function.

```cpp
#include <iostream>
#include <list>

int main() {
    // Create a list of integers
    std::list<int> numbers = {5, 2, 9, 3, 7};

    // Print the original list
    std::cout << "Original list: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Sort the list in ascending order
    numbers.sort();

    // Print the sorted list
    std::cout << "Sorted list: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### List Sort Example - Sorting Class Objects

The following [example](list_sort_objects.cpp) demonstrates how to call the list sort function to sort a list which contains class objects.

```cpp
#include <iostream>
#include <list>
#include <string>

// Define a simple class representing a person
class Person {
public:
    std::string name;
    int age;

    // Constructor
    Person(std::string name, int age) : name(name), age(age) {}
};

// Custom comparison function to sort Person objects by age
bool compareByAge(const Person& p1, const Person& p2) {
    return p1.age < p2.age;
}

int main() {
    // Create a list of Person objects
    std::list<Person> people = {
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 20}
    };

    // Print the original list
    std::cout << "Original list:" << std::endl;
    std::list<Person>::iterator itr = people.begin();
    while(itr != people.end()){
        std::cout << (*itr).name << " (" << (*itr).age << ")" << std::endl;
	++itr;
    }

    // Sort the list of Person objects using the custom comparison function
    people.sort(compareByAge);

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    itr = people.begin();
    while(itr != people.end()){
        std::cout << (*itr).name << " (" << (*itr).age << ")" << std::endl;
	++itr;
    }

    return 0;
}
```

### List Sort Example - Sorting Class Objects, via Overloading the Less Than Operator

The following [example](list_sort_objects2.cpp) also demonstrates how to call the list sort function to sort a list which contains class objects.

```cpp
#include <iostream>
#include <list>
#include <string>

// Define a simple class representing a person
class Person {
public:
    std::string name;
    int age;

    // Constructor
    Person(std::string name, int age) : name(name), age(age) {}

};

// Overload the < operator for sorting
bool operator<(const Person& p1, const Person& p2) {
      // Compare based on age
        return p1.age < p2.age;
}

int main() {
    // Create a list of Person objects
    std::list<Person> people = {
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 20}
    };

    // Print the original list
    std::cout << "Original list:" << std::endl;
    std::list<Person>::iterator itr = people.begin();
    while(itr != people.end()){
	// one way to use iterators
        std::cout << (*itr).name << " (" << (*itr).age << ")" << std::endl;
	++itr;
    }

    // Sort the list of Person objects
    people.sort();

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    itr = people.begin();
    while(itr != people.end()){
	// another way to use iterators
        std::cout << itr->name << " (" << itr->age << ")" << std::endl;
	++itr;
    }

    return 0;
}
```

## 9.9 Erase & Iterators

STL lists and vectors each have a special member function called erase. In particular, given list of ints s,
consider the example:

```cpp
std::list<int>::iterator p = s.begin();
++p;
std::list<int>::iterator q = s.erase(p);
```

 After the code above is executed:
- The integer stored in the second entry of the list has been removed.  
- The size of the list has shrunk by one.  
- The iterator p does not refer to a valid entry.  
- The iterator q refers to the item that was the third entry and is now the second.  

To reuse the iterator p and make it a valid entry, you will often see the code written:

```cpp
std::list<int>::iterator p = s.begin();
++p;
p = s.erase(p);
```

Even though the erase function has the same syntax for vectors and for list, the vector version is O(n), whereas
the list version is O(1). Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/lists/iterator/index.html) to see why.

## 9.10 Insert

- Similarly, there is an insert function for STL lists that takes an iterator and a value and adds a link in the
chain with the new value immediately before the item pointed to by the iterator.
- The call returns an iterator that points to the newly added element. Variants on the basic insert function are
also defined.

## 9.11 Leetcode Exercises

- [Leetcode problem 27: Remove Element](https://leetcode.com/problems/remove-element/). Solution: [p27_removeelement.cpp](../../leetcode/p27_removeelement.cpp)
- [Leetcode problem 58: Length of Last Word](https://leetcode.com/problems/length-of-last-word/). Solution: [p58_lengthoflastword.cpp](../../leetcode/p58_lengthoflastword.cpp)
- [Leetcode problem 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/). Solution: [p283_movezeroes.cpp](../../leetcode/p283_movezeroes.cpp)
