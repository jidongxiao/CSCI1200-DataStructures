#include <iostream>
#include <vector>
#include <unordered_set>

    // Question: why is this an O(n) solution when we have a nested loop? Because the inner while loop will only be used if *itr1 is the beginning of the sequence, which means each element will only be visited 2 or 3 times.
    int longestConsecutive(std::vector<int>& nums) {
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
                if(x-*itr1>len){
                    len = x-*itr1;
                }
            }
            itr1++;
        }
        return len;
    }

int main() {
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2};
	std::vector<int> nums = {0,3,7,2,5,8,4,6,0,1};
	//std::vector<int> nums = {100, 4, 200, 201, 202, 203, 205, 204, 1, 3, 2};
	int size = nums.size();
	std::cout<< "for vector {";
	for(int i=0;i<size-1;i++){
		std::cout<< nums[i] << ",";
	}
	std::cout<< nums[size-1] << "}" <<std::endl;
	int length = longestConsecutive(nums);
	std::cout << "The length of the longest consecutive sequence is: " << length << std::endl;
	return 0;
}
