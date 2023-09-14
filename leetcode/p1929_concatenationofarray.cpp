// basic approach: use two loops to generate the first half and the second half
/*
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        // use the default constructor
        vector<int> ans;
        int size = nums.size();
        for(int i=0;i<size;i++){
            ans.push_back(nums[i]);
        }
        // do it one more time
        for(int i=0;i<size;i++){
            ans.push_back(nums[i]);
        }

        return ans;
    }
};
*/

// approach 2: use the copy constructor

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        // use the copy constructor
        vector<int> ans(nums);
        int size = nums.size();
        // copy the second half
        for(int i=0;i<size;i++){
            ans.push_back(nums[i]);
        }

        return ans;
    }
};
