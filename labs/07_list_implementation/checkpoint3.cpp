#include <iostream>
#include <vector>

// prototype of the sorting function
std::vector<int> sortVector(std::vector<int>& nums);

// function to print the elements of a vector
void printVector(const std::vector<int>& nums) {
	for (int num : nums) {
		std::cout << num << " ";
	}
	std::cout << std::endl;
}

int main() {
	// test case 1
	std::vector<int> test1 = {5, 2, 9, 1, 5, 6};
	std::vector<int> result1 = sortVector(test1);
	std::cout << "Test Case 1: Original Vector: ";
	printVector(test1);
	std::cout << "Sorted Vector: ";
	printVector(result1);
	std::cout << std::endl;

	// test case 2
	std::vector<int> test2 = {3, 8, 2, 7, 4};
	std::vector<int> result2 = sortVector(test2);
	std::cout << "Test Case 2: Original Vector: ";
	printVector(test2);
	std::cout << "Sorted Vector: ";
	printVector(result2);
	std::cout << std::endl;

	return 0;
}

// merge two vectors which are already sorted
std::vector<int>& mergeVectors(std::vector<int>& v1, std::vector<int>& v2){
	int size1 = v1.size();
	int size2 = v2.size();
	std::vector<int> v(size1+size2, 0);
	int index1 = 0;
	int index2 = 0;
	int index = 0;
	// traverse v1 and v2 at the same time
	while(index1<size1 && index2<size2){
		// whoever is smaller goes to v
		if(v1[index1]<v2[index2]){
			v[index] = v1[index1];
			index1 = index1 + 1;
		}else{
			v[index] = v2[index2];
			index2 = index2 + 1;
		}
		index = index + 1;
	}

	// if v1 is done, let's now deal with v2 left overs
	if(index1>=size1){
		while(index2<size2){
			v[index] = v2[index2];
			index++;
			index2++;
		}
	}else{
		// else means v2 is done. let's now deal with v1 left overs
		while(index1<size1){
			v[index] = v1[index1];
			index++;
			index1++;
		}
	}
	return v;
}

// sort a vecotr of integers
std::vector<int> sortVector(std::vector<int>& nums) {
	int size = nums.size();
	// base case
	if(size==1){
		return nums;
	}
	// general case
	// split the vector into two halves.
	int mid = size/2;
	
	// nums1 to store the first half, and nums2 to store the second half.
	std::vector<int> nums1;
	std::vector<int> nums2;
	
	// copy the first half
	for(int i=0;i<mid;i++){
		nums1[i]=nums[i];
	}
	// copy the second half
	for(int i=mid;i<size;i++){
		nums2[i]=nums[i];
	}

	// make the recursive calls
	nums1 = sortVector(nums1);
	nums2 = sortVector(nums2);
	
	// now that the two vectors are already sorted, let's merge them
	return mergeVectors(nums1, nums2);
}

