# Lecture — Priority Queues
Instructor: Jidong Xiao, RPI

---

## 0. Exercise: Tree Traversals

Given the in-order and pre-order traversals of a binary tree, determine the post-order traversal:

- In-order: `D B E A F C`  
- Pre-order: `A B D E C F`  

Post-order: `__________`

---

## Today’s Lecture

- Priority Queue
- Binary Heap
- STL priority_queue

## 1. Priority Queue

- A **priority queue** is a container used to manage elements with priorities.
- Examples include:
  - To-do lists  
  - Scheduling (OS, job queues)  
  - Packet routing in networks

- Conceptually similar to a queue:
  - Has a **top (front)** element  
  - Elements are inserted at the “back”  
  - But removal is based on **priority**, not arrival order  

- Each item has an associated **priority value**:
  - In a **min-priority queue**, the smallest priority is removed first  
  - In a **max-priority queue**, the largest priority is removed first  

- The main operations:
  - `push` (insert)  
  - `pop` (remove highest-priority element)  
  - `top` (access highest-priority element)  

- Note: The “back” of the queue is **not accessible** through the interface.

---

## 2. Binary Heap

- A **binary heap** is a **data structure** commonly used to implement a priority queue.

- It is a **complete binary tree**:
  - All levels are full except possibly the last  
  - The last level is filled **from left to right**

- It satisfies the **heap property**:
  - **Min-heap**: each node ≤ its children  
  - **Max-heap**: each node ≥ its children  

- Although drawn as a tree, a binary heap is:
  - **Implemented using a vector (array)**  
  - Efficient due to implicit indexing

---

## 3. Relationship Between Priority Queue and Binary Heap

- A **priority queue defines behavior** (what operations do)  
- A **binary heap provides an efficient implementation** (how operations are done)
- In practice: Most priority queues (including `std::priority_queue`) are implemented using **binary heaps**

---

## 4. Why Binary Heaps Are Used

Binary heaps provide efficient performance:

| Operation | Time Complexity |
|----------|----------------|
| `push`   | O(log n)       |
| `pop`    | O(log n)       |
| `top`    | O(1)           |

- They offer a **good balance** between insertion and removal
- More efficient than:
  - Sorted arrays (slow insert)  
  - Unsorted arrays (slow removal)  

---

## 5. Exercise: Drawing Binary Heaps

- Draw two different binary heaps (Min Heap) with these values: 52 13 48 7 32 40 18 25 4

## 6. STL priority_queue

- The Standard Template Library (STL) priority_queue is implemented as a binary heap.
- More specifically, the STL priority_queue is a max heap by default.
- You need to include &lt;queue&gt; in order to use the STL priority_queue. Below is a simple example:

```cpp
// max_heap.cpp
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

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/priority_queue/max_heap/index.html) to see how this program works.

- You can use std::priority_queue as a min heap via using std::greater, as can be seen in this example:

```cpp
// min_heap.cpp
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

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/priority_queue/min_heap/index.html) to see how this program works.

## 7. Overloading Operators for std::priority_queue

- When using std::priority_queue to store custom class objects, you need to tell C++ how to compare them. Two common ways are:
  - Overload operator< inside the class
  - Provide a comparator (functor) by overloading operator()
  
### 7.1 Approach 1: Overloading operator<

- You can define a default ordering directly inside the class.

- if we have a container storing some Youtube videos or Tiktok videos, and we want to sort the videos by viewCount.

```cpp
class Video {
public:
    std::string title;
    int viewCount;

    Video(std::string t, int v) : title(t), viewCount(v) {}

    // Default comparison (by viewCount)
    bool operator<(const Video& other) const {
        return viewCount < other.viewCount;
    }
};
```

- Then you can use:

```cpp
std::priority_queue<Video> pq;
```

### 7.2 Why operator< May Not Be Enough

- Overloading operator< means the class has a default order.

- However, different uses of the class might need different orderings:

  - One priority queue might sort ascending (min-heap).

  - Another might sort descending (max-heap).

  - A third might sort by a completely different property.

- If we define operator<, we are locking in one specific ordering that affects all usages of the class.

### 7.3 Approach 2: Overloading operator() (Custom Comparator)

- Instead of modifying the class, we pass a comparator that defines how the priority queue orders elements.

- Example, if we have a container storing some Youtube videos or Tiktok videos:

  - We can sort by viewCount in descending order.

  - Another priority queue might sort by title lexicographically.

  - Another might sort by uploadDate.

By overloading operator(), we can create multiple comparators and use them flexibly.

### 7.4 Example Code

```cpp
// video_test.cpp
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

This above program, will print the following:

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

## 7.5 Why operator() Is Powerful

- Allows multiple independent orderings
- Keeps the class unchanged
- Makes behavior explicit at usage site
- This is the preferred approach when:
  - You need different sorting criteria
  - You want to keep the class generic and reusable
