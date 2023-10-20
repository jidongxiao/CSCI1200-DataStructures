class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
       vector<int> ans;
       int size = nums.size();
       // 1. create the map
       // key: number; value: index;
       map<int,int> map1;
       for(int i=0;i<size;i++){
           map1[nums[i]] = i;
       }
       // 2. use the map
       // nums[i]==3 and target=6
       for(int i=0;i<size;i++){
           // if target-nums[i] also exists.
           if(map1.find(target-nums[i])!=map1.end() && i!=map1[target-nums[i]]){
                ans.push_back(i);
                ans.push_back(map1[target-nums[i]]);
                break;
           }
       }

       return ans;
    }
};
