# Lecture 24 --- Priority Queues, part II

## Today’s Lecture

- Building a Heap
- Heap Sort

## 24.1 Implementing Pop (a.k.a. Delete Min)

- The value at the top (root) of the tree is replaced by the value stored in the last leaf node. This has echoes of the erase function in binary search trees.
- The last leaf node is removed. QUESTION: But how do we find the last leaf ? Ignore this for now...
- The value now at the root likely breaks the heap property. We use the percolate_down function to restore the heap property. This function is written here in terms of tree nodes with child pointers (and the priority stored as a value), but later it will be written in terms of vector subscripts.

```cpp
percolate_down(TreeNode<T> * p) {
	while (p->left) {
		TreeNode<T>* child;
		// Choose the child to compare against
		if (p->right && p->right->value < p->left->value)
			child = p->right;
		else
			child = p->left;
		if (child->value < p->value) {
			swap(child, p); // value and other non-pointer member vars
			p = child;
		}
		else
			break;
	}
}
```

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/heap/pop/index.html) to see how the pop works.

## 24.2 Implementing Push (a.k.a. Insert)

- To add a value to the heap, a new last leaf node in the tree is created to store that value.
- Then the percolate_up function is run. It assumes each node has a pointer to its parent.
```cpp
percolate_up(TreeNode<T> * p) {
	while (p->parent) {
		if (p->value < p->parent->value) {
			swap(p, parent); // value and other non-pointer member vars
			p = p->parent;
		}
		else
			break;
	}
}
```

- Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/heap/push/index.html) to see how the push works.

## 24.3 Push (Insert) and Pop (Delete-Min) Usage Exercise

- Suppose the following operations are applied to an initially empty binary heap of integers. Show the resulting heap after each delete_min operation. (Remember, the tree must be complete!)

```console
push 5, push 3, push 8, push 10, push 1, push 6,
pop,
push 14, push 2, push 4, push 7,
pop,
pop,
pop
```

## 24.4 Heap Operations Analysis

- Both percolate_down and percolate_up are O(log n) in the worst-case. Why?

<!-- - But, percolate_up (and as a result push) is O(1) in the average case. Why? -->

## 24.5 Implementing a Heap with a Vector (instead of Nodes & Pointers)

- In the vector implementation, the tree is never explicitly constructed. Instead the heap is stored as a vector,
and the child and parent “pointers” can be implicitly calculated.
- To do this, number the nodes in the tree starting with 0 first by level (top to bottom) and then scanning across
each row (left to right). These are the vector indices. Place the values in a vector in this order.
- As a result, for each subscript, i,

  – The parent, if it exists, is at location &lfloor;(i − 1)/2&rfloor;.

  – The left child, if it exists, is at location 2i + 1.

  – The right child, if it exists, is at location 2i + 2.

- For a binary heap containing n values, the last leaf is at location n − 1 in the vector and the first node with less than two children is at location &lfloor;(n − 1)/2&rfloor;.
- The standard library (STL) priority_queue is implemented as a binary heap.

## 24.6 Heap as a Vector Exercises

- Draw a binary heap with values: 52 13 48 7 32 40 18 25 4, first as a tree of nodes & pointers, then in vector representation.
- Starting with an initially empty heap, show the vector contents for the binary heap after each delete min operation.

```console
push 8, push 12, push 7, push 5, push 17, push 1,
pop,
push 6, push 22, push 14, push 9,
pop,
pop,
```

## 24.7 Building A Heap

- In order to build a heap from a vector of values, for each index from &lfloor;(n−1)/2&rfloor; down to 0, run percolate_down.
Show that this fully organizes the data as a heap and requires at most O(n) operations.

- If instead, we ran percolate_up from each index starting at index 0 through index n-1, we would get properly
organized heap data, but incur a O(n log n) cost. Why?

## 24.8 Heap Sort

- Heap Sort is a simple algorithm to sort a vector of values: Build a heap and then run n consecutive pop operations, storing each “popped” value in a new vector.
- It is straightforward to show that this requires O(n log n) time.
- Heap sort is an in-place sort. An in-place algorithm uses only the memory holding the input data – a separate large temporary vector is not needed.
- The following is the sort algorithm with a main function to test it; the code makes a min heap.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

/* The heapify function is designed to ensure that a subtree rooted at a given index i
 * in an array representation of a min heap maintains the heap property.
 * 
 * Why Not Just Heapify Once? A single call to heapify on the entire array
 * wouldn't suffice because heapify is designed to correct violations of
 * the heap property starting from a specific node, assuming its subtrees are already heaps.
 * Initially, the array doesn't have this structure, so multiple calls are necessary to build the initial min-heap.
 * Similarly, during the sorting phase, each extraction disrupts the heap structure, necessitating a call to heapify to restore order.
 */
void heapify(std::vector<int>& nums, int n, int i){
    int smallest = i; // assuming i is the smallest
    int left = 2*i+1;    // i's left child is at this location
    int right = 2*i+2;   // i's right child is at this location

    if(left<n && nums[left]<nums[smallest]){
        smallest = left;
    }

    if(right<n && nums[right]<nums[smallest]){
        smallest = right;
    }

    // after the above, smallest basically will either stay the same, or will be either left or right, depending on nums[left] is larger or nums[right] is larger. largest stays the same if it is already larger than its two children.
    // if largest is changed, then we do need to swap.
    if(smallest != i){
        std::swap(nums[i], nums[smallest]);
        heapify(nums, n, smallest);
    }
}

// heap sort: O(nlogn)
std::vector<int> sortArray(std::vector<int>& nums) {
    int n = nums.size();
    // build the heap, starting from the last non-leaf node.
    // why we start from the last non-leaf node? because leaf nodes inherently satisfy the heap property, as they have no children.
    // By beginning the heapify process from the last non-leaf node and moving upwards:
    // We ensure that when we heapify a node, its children are already heapified.
    // This bottom-up approach guarantees that each subtree satisfies the heap property before moving to the next node.
    for(int i=n/2-1; i>=0; i--){
        // heapify the subtree whose root is at i
        // i.e., build a min heap, with i being the root; and this heap contains nodes from i to n-1;
        heapify(nums, n, i);
    }

    // now the first one is the smallest, swap it to the back
    // do this n-1 times.
    for(int i=n-1; i>0; i--){
        // build the min heap again, with 0 being the root.
        // but only consider i elements, as the others are already in the right place.
	std::swap(nums[0], nums[i]);     // move smallest to the end
        heapify(nums, i, 0);
    }

    // reverse to get ascending order
    std::reverse(nums.begin(), nums.end());

    return nums;
}

// Assuming the heapify and sortArray functions are defined above or included from another file
int main() {
    // Sample data to be sorted
    std::vector<int> nums = {42, 12, 13, 65, 98, 45, 97, 85, 76, 90};

    // Output the original array
    std::cout << "Original array:\n";
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Sort the array using your sortArray function
    std::vector<int> sortedNums = sortArray(nums);

    // Output the sorted array
    std::cout << "\nSorted array:\n";
    for (int num : sortedNums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

The above program prints the following:

```console
$ g++ heap_sort.cpp
$ ./a.out
Original array:
42 12 13 65 98 45 97 85 76 90 

Sorted array:
12 13 42 45 65 76 85 90 97 98 
```

## 24.9 Summary Notes about Vector-Based Priority Queues

- Priority queues are conceptually similar to queues, but the order in which values / entries are removed (“popped”) depends on a priority.
- Heaps, which are conceptually a binary tree but are implemented in a vector, are the data structure of choice for a priority queue.
<!--- In some applications, the priority of an entry may change while the entry is in the priority queue. This requires that there be “hooks” (usually in the form of indices) into the internal structure of the priority queue. This is an implementation detail we have not discussed.-->

## 24.10 Leetcode Exercises

In addition to the above solution, there are also other variations of the heap sort:

- [Leetcode problem 912: Sort an Array](https://leetcode.com/problems/sort-an-array/).  
  - Solution: [p912_heapsort_array.cpp](../../leetcode/p912_heapsort_array.cpp).  
  - Solution 2: - max heap: [p912_heapsort_array_heapify.cpp](../../leetcode/p912_heapsort_array_heapify.cpp).  
    - Play this [animation](https://jidongxiao.github.io/CSCI1200-DataStructures/animations/heap/sort/index.html) to see how this sort works.
  - Solution 3: - min heap: [p912_heapsort_array_min_heap.cpp](../../leetcode/p912_heapsort_array_min_heap.cpp).  
  - Solution 4: - min heap, with functor: [p912_heapsort_array_functor.cpp](../../leetcode/p912_heapsort_array_functor.cpp).
