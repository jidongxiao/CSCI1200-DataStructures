class Solution {
public:
/* The heapify function is designed to ensure that a subtree rooted at a given index i 
 * in an array representation of a heap maintains the heap property. 
 * While the function doesn't have an explicit base case like some recursive functions, 
 * it inherently terminates due to the following conditions:
 *  
 * Leaf Node Condition: If the node at index i is a leaf node (i.e., it has no children), 
 * the function reaches a point where both left and right indices are greater than or equal to n (the size of the heap). 
 * In this scenario, the conditions left < n and right < n in the if statements evaluating the children will both be false, 
 * preventing further recursive calls.
 * 
 * Heap Property Satisfaction: If the node at index i is greater than or equal to its children (or if it has no children), 
 * the heap property is already satisfied. Consequently, the variable largest remains equal to i, 
 * and the condition largest != i evaluates to false. 
 * This prevents the swap operation and the subsequent recursive call, leading to termination. 
 * In essence, the function will return when:
 * The node is a leaf node. 
 * The node's value is greater than or equal to its children's values, maintaining the heap property.
 * These implicit conditions ensure that the recursion does not continue indefinitely.
 * */
    void heapify(vector<int>& nums, int n, int i){
        int largest = i; // assuming i is the largest
        int left = 2*i+1;    // i's left child is at this location
        int right = 2*i+2;   // i's right child is at this location

        if(left<n && nums[left]>nums[largest]){
            largest = left;
        }

        if(right<n && nums[right]>nums[largest]){
            largest = right;
        }

        // after the above, largest basically will either stay the same, or will be either left or right, depending on nums[left] is larger or nums[right] is larger. largest stays the same if it is already larger than its two children.
        // if largest is changed, then we do need to swap.
        if(largest != i){
            std::swap(nums[i], nums[largest]);
            heapify(nums, n, largest);
        }
    }

    // heap sort: O(nlogn)
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        // build the heap, starting from the last non-leaf node.
	// why we start from the last non-leaf node? because leaf nodes inherently satisfy the heap property, as they have no children.
	// By beginning the heapify process from the last non-leaf node and moving upwards:
	// We ensure that when we heapify a node, its children are already heapified.
	// This bottom-up approach guarantees that each subtree satisfies the heap property before moving to the next node.
        for(int i=n/2-1; i>=0; i--){
            // heapify the subtree whose root is at i
            // i.e., build a max heap, with i being the root; and this heap contains nodes from i to n-1;
            heapify(nums, n, i);
        }

        // now the first one is the largest, swap it to the back
        // do this n-1 times.
        for(int i=0; i<(n-1); i++){
            // nums[0] is always the largest one
            std::swap(nums[0], nums[n-1-i]);
            // build the max heap again, with 0 being the root.
            // but only consider n-1-i elements, as the others are already in the right place.
            heapify(nums, n-1-i, 0);
        }

        return nums;
    }
};
