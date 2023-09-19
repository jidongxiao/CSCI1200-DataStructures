// this is a very bad solution, in this problem we do not need to use dynamic memory, because std::vector automatically uses dynamic memory internally.
// the solution below therefore is just a demonstration of how to use the new and delete operator.

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int sum=0;
        vector<int> result;
        int size = nums.size();
        // because runningSum will have size elements, and runningSum[0] is the sum of one element, i.e., nums[0]. 
        for(int i=1;i<(size+1);i++){
            int *a = new int[i];
            // sum stores the sum from nums[0] to nums[i]
            for(int j=0;j<i;j++){
                a[j] = nums[j];
                sum = sum + a[j];
            }
            result.push_back(sum);
            // allocated memory for an array, and thus delete memory for an array
            delete [] a;
            // reset sum so as to reuse it.
            sum = 0;
        }
        return result;
    }
};
