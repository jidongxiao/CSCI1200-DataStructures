# Lecture 21 --- Hash Tables, part II

## Today’s Lecture

- Function Objects
- Continuing with Hash Tables
- STL Queue and STL Stack

## 21.1 Function Objects, a.k.a. Functors

- In addition to the basic mathematical operators + - * / < > , another operator we can overload for our C++
classes is the function call operator.
 Why do we want to do this? This allows instances or objects of our class, to be used like functions. It’s weird
but powerful.
- Here’s the basic syntax. Any specific number of arguments can be used.

```cpp
class my_class_name {
public:
// ... normal class stuff ...
my_return_type operator() ( /* my list of args */ );
};
```

## 21.2 Why are Functors Useful?

- One example is the default 3rd argument for std::sort. We know that by default STL’s sort routines will use
the less than comparison function for the type stored inside the container. How exactly do they do that?
- First let’s define another tiny helper function:

```cpp
bool float_less(float x, float y) {
return x < y;
}
```

- Remember how we can sort the my_data vector defined above using our own homemade comparison function
for sorting:

```cpp
std::sort(my_data.begin(),my_data.end(),float_less);
```

If we don’t specify a 3rd argument:

```cpp
std::sort(my_data.begin(),my_data.end());
```

This is what STL does by default:

```cpp
std::sort(my_data.begin(),my_data.end(),std::less<float>());
```

- What is std::less? It’s a templated class. Above we have called the default constructor to make an instance
of that class. Then, that instance/object can be used like it’s a function. Weird!

- How does it do that? std::less is a teeny tiny class that just contains the overloaded function call operator.

```
template <class T>
class less {
public:
bool operator() (const T& x, const T& y) const { return x < y; }
};
```

- You can use this instance/object/functor as a function that expects exactly two arguments of type T (in this
example float) that returns a bool. That’s exactly what we need for std::sort! This ultimately does the
same thing as our tiny helper homemade compare function!

## 21.3 Another more Complicated Functor Example

Constructors of function objects can be used to specify internal data for the functor that can then be used
during computation of the function call operator! For example:

```cpp
class between_values {
private:
float low, high;
public:
between_values(float l, float h) : low(l), high(h) {}
bool operator() (float val) { return low <= val && val <= high; }
};
```

- The range between low & high is specified when a functor/an instance of this class is created. We might
have multiple different instances of the between_values functor, each with their own range. Later, when the
functor is used, the query value will be passed in as an argument. The function call operator accepts that
single argument val and compares against the internal data low & high.
- This can be used in combination with STL’s find_if construct. For example:

```cpp
between_values two_and_four(2,4);
if (std::find_if(my_data.begin(), my_data.end(), two_and_four) != my_data.end()) {
	std::cout << "Found a value greater than 2 & less than 4!" << std::endl;
}
```
 Alternatively, we could create the functor without giving it a variable name. And in the use below we also
capture the return value to print out the first item in the vector inside this range. Note that it does not print
all values in the range.

```cpp
std::vector<float>::iterator itr;
itr = std::find_if(my_data.begin(), my_data.end(), between_values(2,4));
if (itr != my_data.end()) {
	std::cout << "my_data contains " << *itr
	<< ", a value greater than 2 & less than 4!" << std::endl;
}
```

## 21.5 Using STL’s Associative Hash Table (Map)

- Using the default std::string hash function.
  - With no specified initial table size. (map a std::string type key to a class Foo type value)
```cpp
std::unordered_map<std::string,Foo> m;
```
  - Optionally specifying initial (minimum) table size.
```cpp
std::unordered_map<std::string,Foo> m(1000);
```
- Using a home-made std::string hash function. Note: We are required to specify the initial table size.
  - Manually specifying the hash function type.
```cpp
std::unordered_map<std::string,Foo,std::function<unsigned int(std::string)> > m(1000, MyHashFunction);
```
  - Using the decltype specifier to get the “declared type of an entity”.
```cpp
std::unordered_map<std::string,Foo,decltype(&MyHashFunction)> m(1000, MyHashFunction);
```
- Using a home-made std::string hash functor or function object.
  - With no specified initial table size.
```cpp
std::unordered_map<std::string,Foo,MyHashFunctor> m;
```
  - Optionally specifying initial (minimum) table size.
```cpp
std::unordered_map<std::string,Foo,MyHashFunctor> m(1000);
```

## 21.6 Additional STL Container Classes: Stacks

<!--We’ve studied STL vectors, lists, maps, and sets. These data structures provide a wide range of flexibility in
terms of operations. One way to obtain computational efficiency is to consider a simplified set of operations or
functionality.-->
<!-- For example, with a hash table we give up the notion of a sorted table and gain in find, insert, & erase efficiency.-->

- Stacks allow access, insertion and deletion from only one end called the top.
  - There is no access to values in the middle of a stack.
  - Stacks may be implemented efficiently in terms of vectors and lists, although vectors are preferable.
  - All stack operations are O(1).

## 21.7 Additional STL Container Classes: Queues

- Queues allow insertion at one end, called the back and removal from the other end, called the front
  - There is no access to values in the middle of a queue.
  - Queues may be implemented efficiently in terms of a list. Using vectors for queues is also possible,
but requires more work to get right.
  - All queue operations are O(1).

## 21.8 Leetcode Exercises

- [Leetcode problem 1451: Rearrange Words in a Sentence](https://leetcode.com/problems/rearrange-words-in-a-sentence/). Solution: [p1451_rearrange_words_in_a_sentence.cpp](../../leetcode/p1451_rearrange_words_in_a_sentence.cpp).
- [Leetcode problem 508: Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/). Solution: [p508_most_frequent_subtree_sum.cpp](../../leetcode/p508_most_frequent_subtree_sum.cpp).
- [Leetcode problem 225: Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/). Solution: [p225_stack_using_queues.cpp](../../leetcode/p225_stack_using_queues.cpp).
- [Leetcode problem 232: Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/). Solution: [p232_queue_using_stacks.cpp](../../leetcode/p232_queue_using_stacks.cpp).
- [Leetcode problem 102: Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/). Solution: [p102_level_order_traversal.cpp](../../leetcode/p102_level_order_traversal.cpp).
