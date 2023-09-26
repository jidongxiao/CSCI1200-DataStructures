// note: using template here is completely unnecessary. this is just a demonstration of how to define a templated function.

class Solution {
public:
    template <typename T>
    T removeElement(vector<T>& nums, T val) {
        int size = nums.size();
        int j = 0;
        for(int i=0;i<size;i++){
            if(nums[i] != val){
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
};
