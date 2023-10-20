class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        int size = nums.size();
        // create the map, map key is the value of the vector element, map value is the index of that element in the vector.
        map<int,int> map1;
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
};
