# Lecture 14 --- Stack and Queue

## Test 2 Information

- Test 2 will be held Thursday, February 29th, 2024 from 6-7:50pm.
  - No make-ups will be given except for pre-approved absence or illness, and a written excuse from the Dean of Students or the Student Experience office or the RPI Health Center will be required.
  - If you have a letter from Disability Services for Students and you have not already emailed it to ds_instructors@cs.rpi.edu, please do so ASAP. Shianne Hulbert will be in contact with you about your accommodations for the test.
- Student’s assigned test room, row, and seat assignments will be re-randomized. If you don’t have a seating assignment when you log onto Submitty, let us know via the ds_instructors list.
- Coverage: Lectures 1-14, Labs 1-7, HW 1-5.
- OPTIONAL: you are allowed to bring two physical pieces of 8.5x11” paper, that’s four “sides”. We will check at the start of the exam that you do not have more than two pieces of paper for your notes!
- All students must bring their Rensselaer photo ID card.
- Bring pencil(s) & eraser (pens are ok, but not recommended).
- Computers, cell-phones, smart watches, calculators, music players, etc. are not permitted.
- Practice problems from previous tests are available on the [course materials](https://submitty.cs.rpi.edu/courses/s24/csci1200/course_materials) page on Submitty.

## Today’s Lecture

- Function Objects
- STL Queue and STL Stack

## 14.1 Function Objects, a.k.a. Functors

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

- See and run this simple functor [example](functor.cpp).

## 14.2 Why are Functors Useful?

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

## 14.3 Another more Complicated Functor Example

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

## 14.4 Additional STL Container Classes: Stacks

<!--We’ve studied STL vectors, lists, maps, and sets. These data structures provide a wide range of flexibility in
terms of operations. One way to obtain computational efficiency is to consider a simplified set of operations or
functionality.-->
<!-- For example, with a hash table we give up the notion of a sorted table and gain in find, insert, & erase efficiency.-->

- Stacks allow access, insertion and deletion from only one end called the top.
  - There is no access to values in the middle of a stack.
  - Stacks may be implemented efficiently in terms of vectors and lists, although vectors are preferable.
  - All stack operations are O(1).

## 14.5 Additional STL Container Classes: Queues

- Queues allow insertion at one end, called the back and removal from the other end, called the front.
  - There is no access to values in the middle of a queue.
  - Queues may be implemented efficiently in terms of a list. Using vectors for queues is also possible, but requires more work to get right.
  - All queue operations are O(1).

## 14.6 Leetcode Exercises

- [Leetcode problem 1451: Rearrange Words in a Sentence](https://leetcode.com/problems/rearrange-words-in-a-sentence/). Solution: [p1451_rearrange_words_in_a_sentence.cpp](../../leetcode/p1451_rearrange_words_in_a_sentence.cpp).
- [Leetcode problem 508: Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/). Solution: [p508_most_frequent_subtree_sum.cpp](../../leetcode/p508_most_frequent_subtree_sum.cpp).
- [Leetcode problem 225: Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/). Solution: [p225_stack_using_queues.cpp](../../leetcode/p225_stack_using_queues.cpp).
- [Leetcode problem 232: Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/). Solution: [p232_queue_using_stacks.cpp](../../leetcode/p232_queue_using_stacks.cpp).
- [Leetcode problem 102: Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/). Solution: [p102_level_order_traversal.cpp](../../leetcode/p102_level_order_traversal.cpp).
  - Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/trees/level_order/index.html) to see how the level order traversal works.

- [Leetcode problem 20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/). Solution: [p20_valid_parentheses.cpp](../../leetcode/p20_valid_parentheses.cpp)
