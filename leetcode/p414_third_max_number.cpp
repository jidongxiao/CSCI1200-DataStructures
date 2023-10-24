class Solution {
public:
    int thirdMax(vector<int>& nums) {
        std::set<int> set1;
        int size = nums.size();
        // create the set, the difference between set1 and nums is that elements in set1 is unique and is sorted.
        for(int i=0;i<size;i++){
            set1.insert(nums[i]);
        }

        std::set<int>::iterator itr1 = set1.end();
        int result;
        itr1--;
        result = *itr1; // store the max number
        // if 3rd max doesn't exist
        if(itr1==set1.begin()){
            return result;
        }
        itr1--;
        // still, if 3rd max doesn't exist
        if(itr1==set1.begin()){
            return result;
        }
        itr1--;
        // get the 3rd max
        result = *itr1;
        return result;
    }
};
