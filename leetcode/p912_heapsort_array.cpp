class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        vector<int> result;
        priority_queue<int> pq;
        int size = nums.size();
        // build the priority queue, which by default is a max heap
        for(int i=0;i<size;i++){
            pq.push(nums[i]);
        }
	// pop out the largest element size times
        for(int i=0;i<size;i++){
            result.push_back(pq.top());
            pq.pop();
        }
	// sort data in ascending order
        reverse(result.begin(),result.end());
        return result;
    }
};
