class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        int size = arr.size();
        // key: number, value: occurrence
        std::map<int, int> map1;
        std::set<int> set1;
        // create the map
        for(int i=0; i<size; i++){
            map1[arr[i]]++;
        }
        // use the map
        std::map<int, int>::iterator itr;
        itr = map1.begin();
        while(itr != map1.end()){
            // if this number of occurrence already exists
            if(set1.find(itr->second) != set1.end()){
                return false;
            }
            // otherwise, store it.
            set1.insert(itr->second);
            itr++;
        }
        return true;
    }
};
