class Solution {
public:
    bool search(vector<int>& nums, int low, int high, int target, int& index){
        // this is better than mid=(high+low)/2 because the latter might overflow when high and low are very large integers.
        // caution: if low = high - 1, then mid = low. and this could lead to an infinite loop situation. and because of this, we should never search the range [mid, high], because that actually means search the range of [low, high], which is a repeat of the existing call.
        int mid = low + (high-low)/2;
        // base case
        if(low>=high){
            index = low;
            return (target == nums[low]);
        }
        // general case
        if(target<=nums[mid]){
            // search the first half
            // and because now we need to pass the range, we have to write another function.
            return search(nums, low, mid, target, index);
        }else{
            // search the second half
            return search(nums, mid+1, high, target, index);
        }
    }

    int search(vector<int>& nums, int target) {
        int index;
        int size = nums.size();
        // code below should go into the other search() function, but I write the code like this so as to help you to see how the idea of creating the other search() function was formed.
        int mid = size/2;
        if(size == 1){
            if(target == nums[0]){
                return 0;
            }else{
                return -1;
            }
        }
        if(target<=nums[mid]){
            // search the first half
            // because now we need to pass the range, we have to write another function.
            if(search(nums, 0, mid, target, index) == true){
                return index;
            }else{
                return -1;
            }
        }else{
            // search the second half
            if(search(nums, mid+1, size-1, target, index) == true){
                return index;
            }else{
                return -1;
            }
        }
    }
};
