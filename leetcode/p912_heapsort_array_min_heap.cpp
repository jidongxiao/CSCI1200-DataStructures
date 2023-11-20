class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        vector<int> result;
        priority_queue<int, vector<int>, std::greater<int>> pq;
        int size = nums.size();
        // build the priority queue, which is now a min heap
        for(int i=0;i<size;i++){
            pq.push(nums[i]);
        }
	// pop out the smallest element size times
        for(int i=0;i<size;i++){
            result.push_back(pq.top());
            pq.pop();
        }
        // now data is sorted in an ascending order
        return result;
    }
};
