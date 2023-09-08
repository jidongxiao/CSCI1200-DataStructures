class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int size = nums.size();
        vector<int> squares;
        // create the squares vector
        for(int i=0;i<size;i++){
            squares.push_back(nums[i]*nums[i]);
        }
        sort(squares.begin(),squares.end());
        return squares;
    }
};
