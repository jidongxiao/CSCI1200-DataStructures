class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        std::vector<std::vector<std::string> > result;
        int size = strs.size();
        // create a map, key is the word, value is the anagram group.
        std::map<std::string, std::vector<std::string> > map1;
        for(int i=0; i<size; i++){
            std::string s = strs[i];
            // ate, eat, tea will be the same word after sorting.
            sort(s.begin(), s.end());
            // the most tricky line, this is the magic of [] in map.
            map1[s].push_back(strs[i]);
        }
        // use the map
        std::map<std::string, std::vector<std::string> >::iterator itr;
        itr = map1.begin();
        while(itr != map1.end()){
            // question: do you understand why we do this push_back?
            result.push_back(itr->second);
            itr++;
        }
        return result;
    }
};
