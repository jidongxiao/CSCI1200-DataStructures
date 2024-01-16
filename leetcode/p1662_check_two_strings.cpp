class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        std::string s1="";
        std::string s2="";
        unsigned int size = word1.size();
        // traverse word1 and concatenate all strings
        // save it in s1
        for(unsigned int i=0;i<size;i++){
            s1 = s1 + word1[i];
        }
        size = word2.size();
        // traverse word2 and concatenate all strings
        // save it in s2
        for(unsigned int i=0;i<size;i++){
            s2 = s2 + word2[i];
        }
        // if they are equivanent
        if(s1==s2){
            return true;
        }else{
            return false;
        }
    }
};
