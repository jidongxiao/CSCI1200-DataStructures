# Lecture 14 --- Stack and Queue

## Today’s Lecture

- STL Queue and STL Stack

<!-- ## 14.0 Some Special Syntax

The following program demonstrates some special syntax about C++ constructors.

```cpp
#include <iostream>

// custom class definition
class MyClass {
public:
	// constructor
	MyClass() {
		std::cout << "Constructor called" << std::endl;
	}
    
	// destructor
	~MyClass() {
		std::cout << "Destructor called" << std::endl;
	}
};

int main() {
	MyClass();

	MyClass A;
	MyClass B;
	return 0;
}
```

What is the output of this program?

You can compile and run the [program](constructor.cpp).

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
	// surprising: the object itself can be used like it's a function.
	std::cout << "Result of multiplying 5 by 2: " << multiplyByTwo(5) << std::endl;

	return 0;
}
```

- You can compile and run this [example](multiply.cpp).
-->

## 14.1 Additional STL Container Classes: Stacks

<!--We’ve studied STL vectors, lists, maps, and sets. These data structures provide a wide range of flexibility in
terms of operations. One way to obtain computational efficiency is to consider a simplified set of operations or
functionality.-->
<!-- For example, with a hash table we give up the notion of a sorted table and gain in find, insert, & erase efficiency.-->

- A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
- Stacks allow access, insertion and deletion from only one end called the top.
  - There is no access to values in the middle of a stack.
  - Stacks may be implemented efficiently in terms of vectors and lists, although vectors are preferable.
  - All stack operations are O(1).

### 14.1.1 Member functions of std::stack

- push(const T& value): Adds an element value to the top of the stack.  
- pop(): Removes the top element from the stack.  
- top(): Returns a reference to the top element of the stack without removing it.  
- empty(): Checks if the stack is empty. Returns true if the stack is empty, false otherwise.  
- size(): Returns the number of elements in the stack.  

### 14.1.2 Stack Example Program

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

### 14.1.3 Stack Implementation

We have the stack implementation and test code here: [stack.h](stack.h), [stack_test.cpp](stack_test.cpp).

## 14.2 Additional STL Container Classes: Queues

- A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
- Queues allow insertion at one end, called the back and removal from the other end, called the front.
  - There is no access to values in the middle of a queue.
  - Queues may be implemented efficiently in terms of a list. Using vectors for queues is also possible, but requires more work to get right.
  - All queue operations are O(1).

### 14.2.1 Member functions of std::queue

- push(const T& value): Adds an element value to the rear of the queue. This operation is also known as enqueue.  
- pop(): Removes the front element from the queue. This operation is also known as dequeue.  
- front(): Returns a reference to the front element of the queue without removing it.  
- empty(): Checks if the queue is empty. Returns true if the queue is empty, false otherwise.  
- size(): Returns the number of elements in the queue.  

### 14.2.2 Queue Example Program

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

## 14.3 Leetcode Exercises

- [Leetcode problem 225: Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/). Solution: [p225_stack_using_queues.cpp](../../leetcode/p225_stack_using_queues.cpp).
- [Leetcode problem 232: Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/). Solution: [p232_queue_using_stacks.cpp](../../leetcode/p232_queue_using_stacks.cpp).
- [Leetcode problem 20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/). Solution: [p20_valid_parentheses.cpp](../../leetcode/p20_valid_parentheses.cpp)
- [Leetcode problem 71: Simplify Path](https://leetcode.com/problems/simplify-path/). Solution: [p71_simplify_path.cpp](../../leetcode/p71_simplify_path.cpp)
