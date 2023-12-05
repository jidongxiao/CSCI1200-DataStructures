class TrieNode {
public:
    // initializing one node
    TrieNode(){
        count = 0;
        // each node can have at most 26 children: a to z.
        // and when accessing child, always remember do that -'a'
        for(int i=0;i<26;i++){
            children.push_back(nullptr);
        }
    }
    // so that we can access private member variables.
    friend class Trie;
// private:
    // count how many words use this node
    int count;
    std::vector<TrieNode*> children;
};

class Trie {
public:
    // initializing the prefix tree
    Trie() {
        // which basically is initializing the root
        // and we guarantee that the root always exists
        root = new TrieNode;
    }
    
    void insert(string word) {
        int len = word.length();
        TrieNode* current = root;
        for(int i=0; i<len; i++){
            // inserting a node at the branch of [word[i]-'a'], as the children of current
            // if no one has inserted here yet
            if(current->children[word[i]-'a'] == nullptr){
                // create a node
                current->children[word[i]-'a'] = new TrieNode;
                current->children[word[i]-'a']->count++;
                // after the insertion, update current
                current = current->children[word[i]-'a'];
            }else{
                // else, it means this node is already there, just update current
                // we make the code duplicated here, but this way it's easier to understand.
                current->children[word[i]-'a']->count++;
                current = current->children[word[i]-'a'];   
            }
        }
    }
    
// private:
    // just like every tree, we should have a root.
    TrieNode* root;
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int size = strs.size();
        std::string result;
        Trie trie;
        TrieNode* current = trie.root;
        // step 1, insert every word in trie
        for(int i=0;i<size;i++){
            trie.insert(strs[i]);
        }
        // step 2, search prefix
        int len = strs[0].length();
        // the common prefix can never be longer than the length of strs[0].
        for(int i=0;i<len;i++){
            if(current && (current->children[strs[0][i]-'a']!=nullptr)){
                // std::cout << current->children[strs[0][i]-'a']->count << ":" << size << std::endl;
            }
            if(current && (current->children[strs[0][i]-'a']!=nullptr) && current->children[strs[0][i]-'a']->count == size){
                result.push_back(strs[0][i]);
                // once it's pushed back, update current so as to move on to the next level.
                current = current->children[strs[0][i]-'a'];
            }else{
                break;
            }
        }
        return result;
    }
};
