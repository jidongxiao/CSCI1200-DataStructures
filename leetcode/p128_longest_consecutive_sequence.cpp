class Solution {
public:
    // Question: why is this an O(n) solution when we have a nested loop? Because the inner while loop will only be used if *itr1 is the beginning of the sequence, which means each element will only be visited 2 or 3 times.
    int longestConsecutive(vector<int>& nums) {
        int len=0;
        std::unordered_set<int> set1;
        int size = nums.size();
        // store unique elements in nums in set1
        for(int i=0;i<nums.size();i++){
            set1.insert(nums[i]);
        }
        std::unordered_set<int>::iterator itr1 = set1.begin();
        while(itr1!=set1.end()){
            // clearly *itr1 is in the set, because that's the meaning of iteration; and if *itr1-1 is not in the set, then we know *itr1 is the beginning of a sequence.
            if(!set1.count(*itr1-1)){
                int x = *itr1+1;
                // now that *itr1 is the beginning of a sequence, how about *itr1+1?
                while(set1.count(x)){
                    x++;
                }
		// when we get out this above while loop, it's time to update len, if needed.
                if(x-*itr1>len){
                    len = x-*itr1;
                }
            }
            itr1++;
        }
        return len;
    }
};
