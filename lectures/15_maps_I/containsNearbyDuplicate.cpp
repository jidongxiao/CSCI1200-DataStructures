#include <iostream>
#include <vector>
#include <map>

bool containsNearbyDuplicate(std::vector<int>& nums, int k) {
        int size = nums.size();
        // create the map, map key is the value of the vector element, map value is the index of that element in the vector.
	std::map<int,int> map1;
        for(int i=0;i<size;i++){
            // if already exists
            if(map1.find(nums[i])!=map1.end()){
                if(i-map1[nums[i]]<=k){
                    return true;
                }
            }
            map1[nums[i]]=i;
        }
        return false;
}

int main() {
     std::vector<std::vector<int>> testCases = {
        {1, 2, 3, 1},       // Expected: true (nums[0] == nums[3], abs(0-3) <= k)
        {1, 0, 1, 1},       // Expected: true (nums[2] == nums[3], abs(2-3) <= k)
        {1, 2, 3, 4, 5},    // Expected: false (no duplicates)
        {1, 2, 3, 4, 1},    // Expected: true if k >= 4
        {99, 99},           // Expected: true if k >= 1
        {1, 2, 3, 4, 5, 6}, // Expected: false (no duplicates)
    };

    std::vector<int> kValues = {3, 1, 2, 4, 1, 2}; // Corresponding k values for test cases

    for (size_t i = 0; i < testCases.size(); i++) {
        std::cout << "Test Case " << i + 1 << ": ";
        bool result = containsNearbyDuplicate(testCases[i], kValues[i]);
        std::cout << (result ? "true" : "false") << std::endl;
    }

    return 0;
}
