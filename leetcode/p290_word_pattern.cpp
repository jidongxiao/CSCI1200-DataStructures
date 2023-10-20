class Solution {
public:
    bool wordPattern(string pattern, string s) {
        map<char,string> map1;
        map<string,char> map2;
        vector<string> v1;
        // convert s to v1
        int len = s.length();
        string s1;
        // this loop converts string s into a vector<string>
        for(int i=0;i<len;i++){      
            if(s[i]!=' '){      
                s1.push_back(s[i]);
            }else{
                // every time we encounter a space, push the string s1 into v.
                cout<<s1<<endl;
                v1.push_back(s1);
                s1.clear();
            }
        }
        // one more string left, because there is not more space.
        cout<<s1<<endl;
        v1.push_back(s1);

        if(pattern.length()!=v1.size()){
            return false;
        }

        int len_p = pattern.length();
        // 1. create the maps
        for(int i=0;i<len_p;i++){
            map1[pattern[i]] = v1[i];
            map2[v1[i]] = pattern[i];
        }

        // 2. use the maps
        for(int i=0;i<len_p;i++){
            if(map1[pattern[i]]!=v1[i]){
                return false;
            }
            if((map2[v1[i]])!=pattern[i]){
                return false;
            }
        }
        return true;
    }
};
