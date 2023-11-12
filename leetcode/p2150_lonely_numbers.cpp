class Solution {
public:
    vector<int> findLonely(vector<int>& nums) {
        int size = nums.size();
        std::vector<int> result;
        std::unordered_map<int, int> map1;
        // count how many times each number appears
        for(int i=0;i<size;i++){
            map1[nums[i]]++;
        }
        std::unordered_map<int, int>::iterator itr = map1.begin();
        while(itr != map1.end()){
            if(itr->second==1){
                // if neither adjacent number exists
                if(map1.find(itr->first-1)==map1.end() && map1.find(itr->first+1)==map1.end()){
                    result.push_back(itr->first);
                }
            }
            itr++;
        }
        return result;
    }
};
