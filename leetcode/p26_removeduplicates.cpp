class Solution {
public:
    /* // just use vectors
    int removeDuplicates(vector<int>& nums) {
        int size = nums.size();
        if(size == 0){
            return 0;
        }
        if(size == 1){
            return 1;
        }
        // nums has at least 2 elements
        int j = 1;
        for(int i=0;i<size-1;i++){
            if(nums[i+1]!=nums[i]){
                // meaning nums[i+1] is a new number, we should store it in nums[j]
                nums[j] = nums[i+1];
                j++;
            }
        }
        return j;
    }*/

    /* // use C arrays
    int removeDuplicates(vector<int>& nums) {
        int size = nums.size();
        int array[size];
        for(int i=0;i<size;i++){
            array[i] = nums[i];
        }
        if(size == 0){
            return 0;
        }
        if(size == 1){
            return 1;
        }
        // nums has at least 2 elements
        int j = 1;
        for(int i=0;i<size-1;i++){
            if(array[i+1]!=array[i]){
                // meaning nums[i+1] is a new number, we should store it in nums[j]
                array[j] = array[i+1];
                j++;
            }
        }
        for(int i=0;i<j;i++){
            nums[i] = array[i];
        }
        return j;
    }*/

    // use c arrays with pointer arithmetic
    int removeDuplicates(vector<int>& nums) {
        int size = nums.size();
        int array[size];
        for(int i=0;i<size;i++){
            *(array+i) = nums[i];
        }
        if(size == 0){
            return 0;
        }
        if(size == 1){
            return 1;
        }
        // nums has at least 2 elements
        int j = 1;
        for(int i=0;i<size-1;i++){
            if(*(array+i+1)!=*(array+i)){
                // meaning nums[i+1] is a new number, we should store it in nums[j]
                *(array+j) = *(array+i+1);
                j++;
            }
        }
        for(int i=0;i<j;i++){
            nums[i] = *(array+i);
        }
        return j;
    }
};
