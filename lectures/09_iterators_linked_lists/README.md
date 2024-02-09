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
- The dereference operator is used to access the value stored at an element of the container. The code:
```cpp
p = enrolled.begin();
*p = "012312";
```
changes the first entry in the *enrolled* vector.

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

## 9.6 A New Datatype: The list Standard Library Container Class

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
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    // Sort the list of Person objects using the custom comparison function
    people.sort(compareByAge);

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
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

    // Overload the < operator for sorting
    bool operator<(const Person& other) const {
        // Compare based on age
        return age < other.age;
    }
};

int main() {
    // Create a list of Person objects
    std::list<Person> people = {
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 20}
    };

    // Print the original list
    std::cout << "Original list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    // Sort the list of Person objects
    people.sort();

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    return 0;
}
```

## 9.7 Erase & Iterators

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

## 9.8 Insert

- Similarly, there is an insert function for STL lists that takes an iterator and a value and adds a link in the
chain with the new value immediately before the item pointed to by the iterator.
- The call returns an iterator that points to the newly added element. Variants on the basic insert function are
also defined.

## 9.9 Leetcode Exercises

- [Leetcode problem 27: Remove Element](https://leetcode.com/problems/remove-element/). Solution: [p27_removeelement.cpp](../../leetcode/p27_removeelement.cpp)
- [Leetcode problem 58: Length of Last Word](https://leetcode.com/problems/length-of-last-word/). Solution: [p58_lengthoflastword.cpp](../../leetcode/p58_lengthoflastword.cpp)
- [Leetcode problem 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/). Solution: [p283_movezeroes.cpp](../../leetcode/p283_movezeroes.cpp)
