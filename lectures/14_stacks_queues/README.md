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

## Other Announcement

- Resources will be dedicated to test grading and thus no office hours on Friday in test weeks. (week of test 1, week of test 2, week of test 3)
- Jidong's new office hours (effective after the spring break): Monday 2-4pm, Wednesday 1-3pm.

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

- Compile and run this simple functor [example](functor.cpp).

## 14.2 Why are Functors Useful?

- One example is the default 3rd argument for std::sort. We know that by default STL’s sort routines will use
the less than comparison function for the type stored inside the container. How exactly do they do that?
- First let’s define another tiny helper function:

```cpp
bool float_less(float x, float y) {
	return x < y;
}
```

- And then let's define a vector called *my_data*:

```cpp
std::vector<float> my_data = {1.1, 2.2, 3.3, 4.4, 5.5};
```

- Remember how we can sort the *my_data* vector defined above using our own homemade comparison function for sorting:

```cpp
std::sort(my_data.begin(),my_data.end(),float_less);
```

If we don't specify a 3rd argument:

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
	bool operator() (const T& x, const T& y) const {
		return x < y;
	}
};
```

- You can use this instance/object/functor as a function that expects exactly two arguments of type T (in this
example float) that returns a bool. That’s exactly what we need for std::sort! This ultimately does the
same thing as our tiny helper homemade compare function!

## 14.3 Another Functor Example

```cpp
#include <iostream>

// functor class
class MultiplyBy {
private:
	int factor;

public:
	// constructor
	MultiplyBy(int factor) : factor(factor) {}

	// overloaded function call operator
	int operator()(int x) const {
		return x * factor;
	}
};

int main() {
	// create an instance of the functor
	MultiplyBy multiplyByTwo(2);

	// use the functor as a function
	std::cout << "Result of multiplying 5 by 2: " << multiplyByTwo(5) << std::endl;

	return 0;
}
```

- You can compile and run this [example](multiply.cpp).

## 14.4 Additional STL Container Classes: Stacks

<!--We’ve studied STL vectors, lists, maps, and sets. These data structures provide a wide range of flexibility in
terms of operations. One way to obtain computational efficiency is to consider a simplified set of operations or
functionality.-->
<!-- For example, with a hash table we give up the notion of a sorted table and gain in find, insert, & erase efficiency.-->

- A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
- Stacks allow access, insertion and deletion from only one end called the top.
  - There is no access to values in the middle of a stack.
  - Stacks may be implemented efficiently in terms of vectors and lists, although vectors are preferable.
  - All stack operations are O(1).

### 14.4.1 Member functions of std::stack

- push(const T& value): Adds an element value to the top of the stack.  
- pop(): Removes the top element from the stack.  
- top(): Returns a reference to the top element of the stack without removing it.  
- empty(): Checks if the stack is empty. Returns true if the stack is empty, false otherwise.  
- size(): Returns the number of elements in the stack.  

### 14.4.2 Stack Example Program

- Following is an example program, remember to include the stack library.

```cpp
#include <iostream>
#include <stack>

int main() {
	std::stack<int> myStack;

	myStack.push(10);
	myStack.push(20);
	myStack.push(30);
	myStack.push(40);
	myStack.push(50);

	std::cout << "Size of stack: " << myStack.size() << std::endl;
	std::cout << "Top element: " << myStack.top() << std::endl;

	if (!myStack.empty()) {
		std::cout << "Stack is not empty" << std::endl;
	} else {
		std::cout << "Stack is empty" << std::endl;
	}

	myStack.pop();
	// What is the output of this next line?
	std::cout << "Top element after pop: " << myStack.top() << std::endl;

	return 0;
}
```

You can compile and run this above [program](stack.cpp).

## 14.5 Additional STL Container Classes: Queues

- A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
- Queues allow insertion at one end, called the back and removal from the other end, called the front.
  - There is no access to values in the middle of a queue.
  - Queues may be implemented efficiently in terms of a list. Using vectors for queues is also possible, but requires more work to get right.
  - All queue operations are O(1).

### 14.5.1 Member functions of std::queue

- push(const T& value): Adds an element value to the rear of the queue. This operation is also known as enqueue.  
- pop(): Removes the front element from the queue. This operation is also known as dequeue.  
- front(): Returns a reference to the front element of the queue without removing it.  
- empty(): Checks if the queue is empty. Returns true if the queue is empty, false otherwise.  
- size(): Returns the number of elements in the queue.  

### 14.5.2 Queue Example Program

- Following is an example program, remember to include the queue library.

```cpp
#include <iostream>
#include <queue>

int main() {
	std::queue<int> myQueue;

	myQueue.push(10);
	myQueue.push(20);
	myQueue.push(30);
	myQueue.push(40);
	myQueue.push(50);

	std::cout << "Size of queue: " << myQueue.size() << std::endl;
	std::cout << "Front element: " << myQueue.front() << std::endl;

	if (!myQueue.empty()) {
		std::cout << "Queue is not empty" << std::endl;
	} else {
		std::cout << "Queue is empty" << std::endl;
	}

	myQueue.pop();
	// What is the output of this next line?
	std::cout << "Front element after pop: " << myQueue.front() << std::endl;

	return 0;
}
```

You can compile and run this above [program](queue.cpp).

## 14.6 Leetcode Exercises

- [Leetcode problem 225: Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/). Solution: [p225_stack_using_queues.cpp](../../leetcode/p225_stack_using_queues.cpp).
- [Leetcode problem 232: Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/). Solution: [p232_queue_using_stacks.cpp](../../leetcode/p232_queue_using_stacks.cpp).
- [Leetcode problem 20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/). Solution: [p20_valid_parentheses.cpp](../../leetcode/p20_valid_parentheses.cpp)
- [Leetcode problem 71: Simplify Path](https://leetcode.com/problems/simplify-path/). Solution: [p71_simplify_path.cpp](../../leetcode/p71_simplify_path.cpp)
