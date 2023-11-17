class Solution {
public:
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
        // build the heap, starting from the last non-leaf node
        for(int i=n/2-1; i>=0; i--){
            // heapify the subtree whose root is at i
            // i.e., build a max heap, with i being the root.
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
