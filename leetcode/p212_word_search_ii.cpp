class TrieNode {
public:
    TrieNode(){
        is_word_complete = false;
        for(int i=0;i<26;i++){
            // initialize all 26 pointers to NULL
            // we can't do children[i] = NULL; here, because subscripting doesn't make sense until we add elements into the vector.
            children.push_back(nullptr);
        }
    }
    // so that we can use TrieNode's private members in Trie.
    friend class Trie;
//private:
    // also store the word itself
    string word;
    bool is_word_complete;
    // each node has 26 children, storing letters from 'a' to 'z'
    vector<TrieNode*> children;
};

class Trie {
public:
    Trie() {
        // root is just a pointer
        root = new TrieNode;
    }
    void insert(string word) {
        char c;
        int size = word.length();
        TrieNode* node = root;
        for(int i=0;i<size;i++){
            c = word[i];
            if(node->children[c-'a']==NULL){
                node->children[c-'a'] = new TrieNode;
            }
            node = node->children[c-'a'];
        }
        // store the word at this node
        node->word = word;
        node->is_word_complete = true;
    }
    
// private:
    // we do not store characters in root.
    TrieNode* root;
};

class Solution {
public:
    void search(vector<vector<char>>& board, int i, int j, TrieNode* node, vector<string>& ans){
        // if out of bounds
        if(i<0 || i>=board.size() || j<0 || j>=board[0].size()){
            return;
        }

        if(board[i][j]=='0'){
            return;
        }

        char c;
        // save board[i][j] in c.
        c = board[i][j];
        node = node->children[c-'a'];
        // if we reach this point, it means this is a wrong path.
        if(node==NULL){
            return;
        }
        if(node->is_word_complete){
            ans.push_back(node->word);
            // we have used this word, now we have to "remove" it from the trie.
            node->is_word_complete = false;
        }

        // so board[i][j] won't be reused by this current path.
        board[i][j] = '0';
        // this isn't a true or false search, so no matter what, we have to search all 4 directions
        search(board, i-1, j, node, ans);
        search(board, i+1, j, node, ans);
        search(board, i, j-1, node, ans);
        search(board, i, j+1, node, ans);
        // restore board[i][j]
        board[i][j] = c;
        return;
    }

    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        vector<string> ans;
        Trie trie;
        int index = 0;
        bool found = false;
        int size = words.size();
        // build the trie
        for(int i=0;i<size;i++){
            trie.insert(words[i]);
        }

        for(int i=0;i<board.size();i++){
            for(int j=0;j<board[0].size();j++){
                // search all words which are currently stored in the trie.
                search(board, i, j, trie.root, ans);
            }
        }
        return ans;
    }
};
