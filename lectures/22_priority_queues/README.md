# Lecture 22 --- Priority Queues

## Today’s Lecture

- Range Based for Loop
- Using STL’s for_each
- Definition of a Binary Heap
- What’s a Priority Queue?
- A Priority Queue as a Heap
- A Heap as a Vector

## 22.1 Range Based for Loop

- Executes a for loop over a range.

```cpp
for ( range_declaration : range_expression ) 
    loop_statement
```

- Example 1: pring every element in an integer array.

```cpp
int a[] = { 0, 1, 2, 3, 4, 5 }; 
for (int n : a) 
	std::cout << n << ' '; 
```

- Example 2: print each character of a string.

```cpp
std::string str = "The course instructor is terrible!"; 
    for (char c : str) 
        std::cout << c << ' '; 
```

- Example 3: iterating over a vector of integers.

```cpp
std::vector<int> vec1 = {1,2,3,4,5};
for (int val : vec1 ) {
	std :: cout << val << " ";
}
```

- Example 4: iterating over a vector&lt;vector&lt;int&gt;&gt;.

```cpp
// suppose result is a vector<vector<int>>
for (std::vector<int>& vec1 : result ) {
	for (int val : vec1 ) {
		std :: cout << val << " ";
	}
}
```

## 22.2 Using STL’s for_each

- First, here’s a tiny helper function:
```cpp
void float_print (float f) {
	std::cout << f << std::endl;
}
```
- Let’s make an STL vector of floats:
```cpp
std::vector<float> my_data;
my_data.push_back(3.14);
my_data.push_back(1.41);
my_data.push_back(6.02);
my_data.push_back(2.71);
```
- Now we can write a loop to print out all the data in our vector:
```cpp
std::vector<float>::iterator itr;
for (itr = my_data.begin(); itr != my_data.end(); itr++) {
	float_print(*itr);
}
```
- Alternatively we can use it with STL’s for_each function to visit and print each element:
```cpp
std::for_each(my_data.begin(), my_data.end(), float_print);
```
- Wow! That’s a lot less to type. Can I stop using regular for and while loops altogether?
- We can actually also do the same thing without creating & explicitly naming the float_print function. We create an anonymous function using lambda:
```cpp
std::for_each(my_data.begin(), my_data.end(), [](float f){ std::cout << f << std::end; });
```
Lambda is new to the C++ language (part of C++11). But lambda is a core piece of many classic, older programming languages including Lisp and Scheme. Python lambdas and Perl anonymous subroutines are similar. (In fact lambda dates back to the 1930’s, before the first computers were built!) You’ll learn more about lambda more in later courses like CSCI 4430 Programming Languages!

## 22.3 Priority Queue

- Priority queues are used in prioritizing operations. Examples include a personal “to do” list, what order to do homework assignments, jobs on a shop floor, packet routing in a network, scheduling in an operating system, or events in a simulation.
- Among the data structures we have studied, their interface is most similar to a queue, including the idea of a front or top and a tail or a back.
- Each item is stored in a priority queue using an associated “priority” and therefore, the top item is the one with the lowest value of the priority score. The tail or back is never accessed through the public interface to a priority queue.
- The main operations are insert or push, and pop (or delete_min).

## 22.4 Some Data Structure Options for Implementing a Priority Queue

- Vector or list, either sorted or unsorted
  – At least one of the operations, push or pop, will cost linear time, at least if we think of the container as a linear structure.
- Binary search trees
  – If we use the priority as a key, then we can use a combination of finding the minimum key and erase to implement pop. An ordinary binary-search-tree insert may be used to implement push.
  – This costs logarithmic time in the average case (and in the worst case as well if balancing is used).
- The latter is the better solution, but we would like to improve upon it — for example, it might be more natural if the minimum priority value were stored at the root.

## 22.5 Definition: Binary Heaps

- A binary heap is a complete binary tree such that at each internal node, p, the value stored is less than the value stored at either of p’s children.
  – A complete binary tree is one that is completely filled, except perhaps at the lowest level, and at the lowest level all leaf nodes are as far to the left as possible.
- Binary heaps will be drawn as binary trees, but implemented using vectors!
- Alternatively, the heap could be organized such that the value stored at each internal node is greater than the values at its children.

## 22.6 Exercise: Drawing Binary Heaps

- Draw two different binary heaps with these values: 52 13 48 7 32 40 18 25 4

- Draw several other trees with these values which are not binary heaps.

## 22.7 Implementing a Heap with a Vector (instead of Nodes & Pointers)

- The standard library (STL) priority_queue is implemented as a binary heap.

## 22.8 Leetcode Exercises

- [Leetcode problem 215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/). Solution: [p215_kth_largest_element.cpp](../../leetcode/p215_kth_largest_element.cpp).
- [Leetcode problem 373: Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/). Solution: [p373_k_pairs_smallest_sums.cpp](../../leetcode/p373_k_pairs_smallest_sums.cpp).
- [Leetcode problem 692:  Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/). Solution: [p692_top_k_frequent_words.cpp](../../leetcode/p692_top_k_frequent_words.cpp).
