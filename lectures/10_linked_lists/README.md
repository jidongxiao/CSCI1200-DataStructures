# Lecture 10 --- Vector Iterators & Linked Lists

- Implementation of iterators in our homemade Vec class (from Lecture 7)
- Building our own basic linked lists:
  – Stepping through a list
  – Push back

## 10.1 Review: Iterators and Iterator Operations

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

works fine because v_itr is a std::vector<double>::iterator, but if a is a
std::vector<std::string> then

```cpp
v_itr = a.begin();
```

is a syntax error because of a type clash!

## 10.2 Additional Iterator Operations for Vector (& String) Iterators

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
std::list<int>::iterator itr,itr2,itr3;
itr = lst.begin();// itr is pointing at the 100
++itr; // itr is now pointing at 200
*itr += 1; // 200 becomes 201
// itr += 1; // does not compile! can't advance list iterator like this
itr = lst.end(); // itr is pointing "one past the last legal value" of lst
itr--; // itr is now pointing at 500;
itr2 = itr--; // itr is now pointing at 400, itr2 is still pointing at 500
itr3 = --itr; // itr is now pointing at 300, itr3 is also pointing at 300
// dangerous: decrementing the begin iterator is "undefined behavior"
// (similarly, incrementing the end iterator is also undefined)
// it may seem to work, but break later on this machine or on another machine!
itr = lst.begin();
itr--; // dangerous!
itr++;
assert (*itr == 100); // might seem ok... but rewrite the code to avoid this!
```

## 10.3 Working towards our own version of the STL list

- Our discussion of how the STL list&lt;T&gt; is implemented has been intuitive: it is a “chain” of objects.
- Now we will study the underlying mechanism — linked lists.
- This will allow us to build custom classes that mimic the STL list class, and add extensions and new features.

## 10.4 Objects with Pointers, Linking Objects Together

The two fundamental mechanisms of linked lists are:
– creating objects with pointers as one of the member variables, and
– making these pointers point to other objects of the same type.
 These mechanisms are illustrated in the following program:

```cpp
template <class T>
class Node {
public:
T value;
Node* ptr;
};
int main() {
Node<int>* ll; // ll is a pointer to a (non-existent) Node
ll = new Node<int>; // Create a Node and assign its memory address to ll
ll->value = 6; // This is the same as (*ll).value = 6;
ll->ptr = NULL; // NULL == 0, which indicates a "null" pointer
Node<int>* q = new Node<int>;
q->value = 8;
q->ptr = NULL;
// set ll's ptr member variable to
// point to the same thing as variable q
ll->ptr = q;
cout << "1st value: " << ll->value << "\n"
<< "2nd value: " << ll->ptr->value << endl;
}
```

## 10.5 Iterator Declarations and Operations

to be added soon.

## 10.6 Leetcode Exercises

- [Leetcode problem 27: Remove Element](https://leetcode.com/problems/remove-element/). Solution: [p27_removeelement.cpp](../../leetcode/p27_removeelement.cpp)
- [Leetcode problem 58: Length of Last Word](https://leetcode.com/problems/length-of-last-word/). Solution: [p58_lengthoflastword.cpp](../../leetcode/p58_lengthoflastword.cpp)
- [Leetcode problem 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/). Solution: [p283_movezeroes.cpp](../../leetcode/p283_movezeroes.cpp)
