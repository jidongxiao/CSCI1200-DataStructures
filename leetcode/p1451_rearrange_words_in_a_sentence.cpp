// solution to leetcode 1451

class Solution {
    public:
        static bool cmp(std::pair<string,int> p1, std::pair<string,int> p2){
        //bool cmp(string p1, string p2){
            int len1 = p1.first.length();
            int len2 = p2.first.length();
            if(len1==len2){
                // keep the original order
                return (p1.second<p2.second);
            }else{
                return (len1<len2);
            }
        }

        string arrangeWords(string text) {
            string ans;
            // store all words and its index.
            vector<std::pair<string, int>> v1;
            string word;
            int index;
            char c;
            c=tolower(text[0]);
            text[0]=c;
            // store the words and its index into v1.
            stringstream ss(text);
            while(ss >> word){  // if there are n words, O(n)
                v1.push_back({word, index});
                index++;
            }
            std:sort(v1.begin(), v1.end(), cmp);
            int size;
            size = v1.size();
            for(int i=0;i<size-1;i++){  // if there are n words, O(n)
                ans += v1[i].first;    // step 1. call operator+()
                                            // step 2. call operator=(),
                                            // step 3. call operator+=();
                ans += ' ';
            }
            ans = ans + v1[size-1].first;
            c=toupper(ans[0]);
            ans[0]=c;
            return ans;
        }
};
