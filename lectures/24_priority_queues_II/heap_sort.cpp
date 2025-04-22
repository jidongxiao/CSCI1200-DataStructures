#include <iostream>
#include <vector>
#include <algorithm>

/* The heapify function is designed to ensure that a subtree rooted at a given index i 
 * in an array representation of a min heap maintains the heap property. 
 * While the function doesn't have an explicit base case like some recursive functions, 
 * it inherently terminates due to the following conditions:
 *  
 * Leaf Node Condition: If the node at index i is a leaf node (i.e., it has no children), 
 * the function reaches a point where both left and right indices are greater than or equal to n (the size of the heap). 
 * In this scenario, the conditions left < n and right < n in the if statements evaluating the children will both be false, 
 * preventing further recursive calls.
 * 
 * Heap Property Satisfaction: If the node at index i is less than or equal to its children (or if it has no children), 
 * the heap property is already satisfied. Consequently, the variable smallest remains equal to i, 
 * and the condition smallest != i evaluates to false. 
 * This prevents the swap operation and the subsequent recursive call, leading to termination. 
 * In essence, the function will return when:
 * The node is a leaf node. 
 * The node's value is less than or equal to its children's values, maintaining the heap property.
 * These implicit conditions ensure that the recursion does not continue indefinitely.
 *
 * Why Not Just Heapify Once? A single call to heapify on the entire array 
 * wouldn't suffice because heapify is designed to correct violations of 
 * the heap property starting from a specific node, assuming its subtrees are already heaps. 
 * Initially, the array doesn't have this structure, so multiple calls are necessary to build the initial min-heap. 
 * Similarly, during the sorting phase, each extraction disrupts the heap structure, necessitating a call to heapify to restore order.
 * */

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

    // after the above, smallest basically will either stay the same, or will be either left or right, depending on nums[left] is smaller or nums[right] is smaller. smallest stays the same if it is already smallest than its two children.
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
