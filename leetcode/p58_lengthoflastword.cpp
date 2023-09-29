// demonstration of using an iterator to traverse a string

class Solution {
public:
    int lengthOfLastWord(string s) {
        string::iterator itr = s.begin();
        vector<string> words;
        string word = "";
        while(itr != s.end()){
            // skip leading spaces
            while(itr != s.end() && *itr == ' '){
                itr++;
            }

            // remember we still need to check whether itr reaches the end or not; if we don't check, we may get a stack buffer overflow issue.
            while(itr != s.end() && *itr != ' '){
                // append this letter to the end of the word
                word = word + *itr;
                itr++;
            }
            // word is now complete, store it in words.
            // caution: word may be empty because of the spaces at the end of s.
            if(!word.empty()){
                words.push_back(word);
                // reset word
                word = "";
            }
        }
        word = words.back();
        return word.length();
    }
};
