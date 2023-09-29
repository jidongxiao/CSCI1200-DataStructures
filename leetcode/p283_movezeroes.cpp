class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        vector<int>::iterator itr = nums.begin();
        // use itr2 to represent the "new" vector
        vector<int>::iterator itr2 = nums.begin();
        while(itr != nums.end()){
            // traverse the vector and store all non-zero elements in the "new" vector.
            if(*itr != 0){
                *itr2 = *itr;
                itr2++;
            }
            itr++;
        }
        // as we skipped zeroes above, we now fill them in.
        while(itr2!=nums.end()){
            *itr2 = 0;
            itr2++;
        }
    }
};
