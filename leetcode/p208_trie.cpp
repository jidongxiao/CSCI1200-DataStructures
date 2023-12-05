class TrieNode {
public:
    // initializing one node
    TrieNode(){
        is_word_complete = false;
        // each node can have at most 26 children: a to z.
        for(int i=0;i<26;i++){
            children.push_back(nullptr);
        }
    }
    // so that we can access private member variables.
    friend class Trie;
private:
    bool is_word_complete;
    std::vector<TrieNode*> children;
};

class Trie {
public:
    // initializing the prefix tree
    Trie() {
        // which basically is initializing the root
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
                TrieNode* node = new TrieNode;
                current->children[word[i]-'a'] = node;
                // after the insertion, update current
                current = current->children[word[i]-'a'];
            }else{
                // else, it means this node is already there, just update current
                // we make the code duplicated here, but this way it's easier to understand.
                current = current->children[word[i]-'a'];   
            }
        }
        // when we get out of the for loop, the whole word should have been inserted already, we mark this node as the end of a word.
        current->is_word_complete = true;
    }
    
    bool search(string word) {
        int len = word.length();
        // once again, starting from root
        TrieNode* current = root;
        for(int i=0; i<len; i++){
            // if this branch we are looking for doesn't exist
            if(current->children[word[i]-'a'] == nullptr){
                return false;
            }else{
                // else update current and keep checking never level
                current = current->children[word[i]-'a'];
            }
        }
        // when we get out of the for loop, the whole word is found, but we still need to make sure this node marks the end of a previously inserted word.
        if(current->is_word_complete == true){
            return true;
        }else{
            // else, it will be like, we are searching for app, but previously we inserted an apple.
            return false;
        }
    }
    
    bool startsWith(string prefix) {
        int len = prefix.length();
        // once again, starting from root
        TrieNode* current = root;
        for(int i=0; i<len; i++){
            // if this branch we are looking for doesn't exist
            if(current->children[prefix[i]-'a'] == nullptr){
                return false;
            }else{
                // else update current and keep checking never level
                current = current->children[prefix[i]-'a'];
            }
        }
        // since we are only searching for a prefix, when we get here, clearly we found it.
        return true;
    }
private:
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
