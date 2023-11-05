// sliding window problem.
// O(n) solution
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double result = INT_MIN;
        double sum = 0.00;
        int size = nums.size();
        int low = 0;
        int high = 0;
        while(high<size){
            sum += nums[high];
            if(high-low+1 == k){
                if(sum > result){
                    result = sum;
                }
                // always make sure there are no more than k elements in this sum.
                sum -= nums[low];
                // slide the window
                low++;
            }
            // slide the window
            high++;
        }
        result = result/k;
        return result;
    }
};
