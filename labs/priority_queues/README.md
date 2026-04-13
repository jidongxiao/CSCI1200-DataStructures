# Lab 12 — Priority Queues

In lecture, we learned the following heap sort program, and watched the [video](https://drive.google.com/file/d/1Ks1EOV_mgOU8n9uh37AvuyTIJ-jlXZCJ/view?usp=drive_link). 

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

/* The heapify function is designed to ensure that a subtree rooted at a given index i
 * in an array representation of a min heap maintains the heap property.
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

    // after the above, smallest basically will either stay the same, 
    // or will be either left or right, depending on nums[left] is smaller or nums[right] is smaller. 
    // smallest stays the same if it is already smallest than its two children.
    // if smallest is changed, then we do need to swap.
    if(smallest != i){
        std::swap(nums[i], nums[smallest]);
        heapify(nums, n, smallest);
    }
}

// heap sort: O(nlogn)
std::vector<int> sortArray(std::vector<int>& nums) {
    int n = nums.size();
    // build the heap, starting from the last non-leaf node.
    // why we start from the last non-leaf node? 
    // because leaf nodes inherently satisfy the heap property, as they have no children.
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

int main() {
    // Sample data to be sorted
    std::vector<int> nums = {42, 12, 13, 65, 98, 45, 97, 85, 76, 90};

    // Output the original array
    std::cout << "Original array:\n";
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

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

## Checkpoint 1

Read the code and watch the video, then:

- Identify the **similarities** between the code and the video.
- Identify the **differences** between the code and the video.

**To complete this checkpoint:** A TA or mentor will select a 30-second segment from the video. 
You will (1) explain which part of the code corresponds to that segment, and (2) describe the similarities and differences between the corresponding code and what is shown in that specific video segment.

## Checkpoint 2

Modify the program such that the program matches with the video.
More specifically, after modifying the program, your program should print exactly the same as this a.out program.
Hardcoding the output is **not allowed**—your solution must generate the output through correct program logic. Yes, you should modify the vector to {3 8 5 2 1 4 6 7}.

```console
$ ./a.out
Original array:
3 8 5 2 1 4 6 7

Original array in tree representation:
        3
       / \
      /   \
     /     \
    /       \
    8       5
   / \     / \
  /   \   /   \
  2   1   4   6
 /
 7

Initial Max Heap:
        8
       / \
      /   \
     /     \
    /       \
    7       6
   / \     / \
  /   \   /   \
  3   1   4   5
 /
 2

The heap when 7 is the root:
    7
   / \
  /   \
  3   6
 / \ / \
 2 1 4 5

The heap when 6 is the root:
    6
   / \
  /   \
  3   5
 / \ /
 2 1 4

The heap when 5 is the root:
    5
   / \
  /   \
  3   4
 / \
 2 1

The heap when 4 is the root:
    4
   / \
  /   \
  3   1
 /
 2

The heap when 3 is the root:
  3
 / \
 2 1

The heap when 2 is the root:
  2
 /
 1

The heap when 1 is the root:
 1

Sorted array:
1 2 3 4 5 6 7 8

Sorted array in tree representation:
        1
       / \
      /   \
     /     \
    /       \
    2       3
   / \     / \
  /   \   /   \
  4   5   6   7
 /
 8
```

**Note:** This table shows which printed output corresponds to each moment in the video.
                    
| Printed Message                             | Timestamp in the video  |
|---------------------------------------------|------------|
| Original array in tree representation       | 0:00:03    |
| Initial Max Heap                            | 0:00:56    |
| Heap when 7 is the root                     | 0:01:24    |
| Heap when 6 is the root                     | 0:01:44    |
| Heap when 5 is the root                     | 0:02:08    |
| Heap when 4 is the root                     | 0:02:23    |
| Heap when 3 is the root                     | 0:02:41    |
| Heap when 2 is the root                     | 0:02:52    |
| Heap when 1 is the root                     | 0:02:57    |
| Sort array in tree representation           | 0:03:00    |                                                                                
                                                                                
**To complete this checkpoint**: Show one of the TAs your new code and its output.

## Checkpoint 3

**To complete this checkpoint:** Stand in front of your lab section and give a brief (~1 minute) presentation answering the following question:

> If you were creating this video, how would you improve it?

You will receive credit regardless of how unconventional your idea is, as long as it is **unique** and has not already been mentioned by someone else in your lab section.
