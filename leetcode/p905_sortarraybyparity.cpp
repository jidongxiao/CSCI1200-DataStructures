// the less than function
bool comp(int A, int B){
    if(A%2==0 && B%2!=0){
        return true;
    }else{
        return false;
    }
}

class Solution {
public:

    vector<int> sortArrayByParity(vector<int>& nums) {
        sort(nums.begin(),nums.end(),comp);
        return nums;
    }
};
