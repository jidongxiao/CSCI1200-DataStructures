# Lecture 23 --- Priority Queues

## Today’s Lecture

<!--
- Range Based for Loop
- Using STL’s for_each
-->

- Definition of a Binary Heap
- What’s a Priority Queue?
- A Priority Queue as a Heap
- A Heap as a Vector

<!--
## 24.1 Range Based for Loop

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

## 24.2 Using STL’s for_each

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
-->

## 23.1 Priority Queue

- Priority queues are used in prioritizing operations. Examples include a personal “to do” list, what order to do homework assignments, jobs on a shop floor, packet routing in a network, scheduling in an operating system, or events in a simulation.
- Among the data structures we have studied, their interface is most similar to a queue, including the idea of a front or top and a tail or a back.
- Each item is stored in a priority queue using an associated “priority” and therefore, the top item is the one with the lowest value of the priority score. The tail or back is never accessed through the public interface to a priority queue.
- The main operations are insert or push, and pop (or delete_min).

## 23.2 Some Data Structure Options for Implementing a Priority Queue

- Vector or list, either sorted or unsorted

  – At least one of the operations, push or pop, will cost linear time, at least if we think of the container as a linear structure.
- Binary search trees
  
  – If we use the priority as a key, then we can use a combination of finding the minimum key and erase to implement pop. An ordinary binary-search-tree insert may be used to implement push.
  
  – This costs logarithmic time in the average case (and in the worst case as well if balancing is used).
- The latter is the better solution, but we would like to improve upon it — for example, it might be more natural if the minimum priority value were stored at the root.

## 23.3 Definition: Binary Heaps

- A binary heap is a complete binary tree such that at each internal node, p, the value stored is less than the value stored at either of p’s children.

  – A complete binary tree is one that is completely filled, except perhaps at the lowest level, and at the lowest level all leaf nodes are as far to the left as possible.
- Binary heaps will be drawn as binary trees, but implemented using vectors!
- Alternatively, the heap could be organized such that the value stored at each internal node is greater than the values at its children.

## 23.4 Exercise: Drawing Binary Heaps

- Draw two different binary heaps (Min Heap) with these values: 52 13 48 7 32 40 18 25 4

## 23.5 STL priority_queue

- The standard library (STL) priority_queue is implemented as a binary heap.
- The STL priority_queue is a max heap.
- You need to include &lt;queue&gt; in order to use the STL priority_queue. Below is a simple [example](max_heap.cpp):

```cpp
#include <iostream>
#include <queue>

int main() {
    std::priority_queue<int> maxHeap;

    maxHeap.push(3);
    maxHeap.push(4);
    maxHeap.push(3);
    maxHeap.push(1);
    maxHeap.push(5);

    while (!maxHeap.empty()) {
        std::cout << maxHeap.top() << " ";
        maxHeap.pop();
    }
    std::cout << std::endl;

    return 0;
}
```

- The above program will print:

```console
5 4 3 3 1
```

- You can use std::priority_queue as a min heap via using std::greater, as can be seen in this [example](min_heap.cpp):

```cpp
#include <iostream>
#include <queue>

int main() {
	std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;

	minHeap.push(3);
	minHeap.push(4);
	minHeap.push(3);
	minHeap.push(1);
	minHeap.push(5);

	while (!minHeap.empty()) {
		std::cout << minHeap.top() << " ";
		minHeap.pop();
	}
	std::cout << std::endl;

	return 0;
}
```

- This above program will print:

```console
1 3 3 4 5
```

## 23.6 Overloading operator()

- When using std::priority_queue to store class objects, oftentimes, you need to define a class and overload its function call operator.<!--; or use a lambda expression.-->
- This is because std::priority_queue by default uses std::less &lt;T&gt;, which means it tries to use operator< on the objects. However, if your class does not define operator< or you need a custom sorting order, you must explicitly provide a comparator.

### 23.6.1 Why Not Overload operator< Directly?

- Overloading operator< means the class has a default order.

- However, different uses of the class might need different orderings:

  - One priority queue might sort ascending (min-heap).

  - Another might sort descending (max-heap).

  - A third might sort by a completely different property.

- If we define operator<, we are locking in one specific ordering that affects all usages of the class.

### 23.6.2 operator() Allows Custom Comparisons

- Instead of modifying the class, we pass a comparator that defines how the priority queue orders elements.

- Example:

  - We can sort by viewCount in descending order.

  - Another priority queue might sort by title lexicographically.

  - Another might sort by uploadDate.

By overloading operator(), we can create multiple comparators and use them flexibly.

### 23.6.3 Example Code

```cpp
#include <iostream>
#include <queue>
#include <vector>

class Video {
public:
    std::string title;
    int viewCount;

    Video(std::string t, int v) : title(t), viewCount(v) {}
};

// Comparator for sorting by viewCount (descending)
// If Compare(a, b) returns true, it means a has a lower priority than b.
// Thus here, this comparator function means a has a lower priority if it has a lower viewCount.
// Therefore, the video with the highest viewCount stays on top of the heap, meaning this is a max heap.
struct CompareByViews {
    bool operator()(const Video& a, const Video& b) {
        return a.viewCount < b.viewCount;
    }
};

// Comparator for sorting by title (alphabetical order)
// If Compare(a, b) returns true, it means a has lower priority than b.
// Thus here, this comparator function means a has a lower priority if a's title goes after b's title.
// Therefore, this is a min heap.
struct CompareByTitle {
    bool operator()(const Video& a, const Video& b) {
        return a.title > b.title;  // Min-heap (A-Z)
    }
};

int main() {
    std::priority_queue<Video, std::vector<Video>, CompareByViews> pq_views;
    std::priority_queue<Video, std::vector<Video>, CompareByTitle> pq_titles;

    pq_views.push(Video("Video A", 500));
    pq_views.push(Video("Video B", 1000));
    pq_views.push(Video("Video C", 300));

    pq_titles.push(Video("Video A", 500));
    pq_titles.push(Video("Video B", 1000));
    pq_titles.push(Video("Video C", 300));

    std::cout << "Sorted by views:\n";
    while (!pq_views.empty()) {
        std::cout << pq_views.top().title << " (" << pq_views.top().viewCount << " views)\n";
        pq_views.pop();
    }

    std::cout << "\nSorted by title:\n";
    while (!pq_titles.empty()) {
        std::cout << pq_titles.top().title << "\n";
        pq_titles.pop();
    }

    return 0;
}
```

This above program, which is also [here](video_test.cpp), will print the following:

```console
$ g++ video_test.cpp -o video_test
$ ./video_test 
Sorted by views:
Video B (1000 views)
Video A (500 views)
Video C (300 views)

Sorted by title:
Video A
Video B
Video C
```

## 23.7 Leetcode Exercises

- [Leetcode problem 215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/). Solution: [p215_kth_largest_element.cpp](../../leetcode/p215_kth_largest_element.cpp).
- [Leetcode problem 373: Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/). Solution: [p373_k_pairs_smallest_sums.cpp](../../leetcode/p373_k_pairs_smallest_sums.cpp).
- [Leetcode problem 692:  Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/). Solution: [p692_top_k_frequent_words.cpp](../../leetcode/p692_top_k_frequent_words.cpp).
