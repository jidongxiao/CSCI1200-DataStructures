class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int ans;
        int size = nums.size();
        std::priority_queue<int> pq;
        for(int i=0;i<size;i++){
            // maintain a max heap
            pq.push(nums[i]);
        }
        while(k>1){
            // pop out k-1 times
            pq.pop();
            k--;
        }
        ans = pq.top();
        return ans;
    }
};
