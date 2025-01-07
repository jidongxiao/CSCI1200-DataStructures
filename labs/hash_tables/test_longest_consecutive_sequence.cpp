#include <iostream>
#include <vector>

int longestConsecutive(std::vector<int>& nums) {
}

int main() {
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2};
	std::vector<int> nums = {100, 4, 200, 1, 3, 2, 2, 2, 2, 3};
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2, 5, 6};
	//std::vector<int> nums = {0,3,7,2,5,8,4,6,0,1};
	//std::vector<int> nums = {100, 4, 200, 201, 202, 203, 205, 204, 1, 3, 2};
	//std::vector<int> nums = {-3,0,1,2,3,-2,-1,-5};
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
