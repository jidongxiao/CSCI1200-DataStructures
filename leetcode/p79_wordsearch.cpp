class Solution {
public:
    // search word[index] at locations (i,j)
    bool search(vector<vector<char>>& board, string word, int i, int j, int index){
        // base case
        if(index>=word.length()){
            // when index is equal to word length, it means our search job is done.
            // and in this case, we don't care if i or j is out of bounds of not.
            return true;
        }

        // boundary checking
        if(i<0 || i>=board.size()){
            return false;
        }
        if(j<0 || j>=board[0].size()){
            return false;
        }

        // if not equal, then this is not the path we are looking for.
        if(board[i][j] != word[index]){
            return false;
        }

        char c = board[i][j];
        // if it's found, we change it to '0' so we can guarantee to not reuse it while we are still on this path.
        board[i][j]='0';

        // general case
        // if search job is still incomplete, then let's continue searching letter i in all four directions, and if we can find the word in any of these four directions, then we are good.
        if( (search(board, word, i, j+1, index+1) ||
            search(board, word, i, j-1, index+1) ||
            search(board, word, i-1, j, index+1) ||
            search(board, word, i+1, j, index+1) ) == true ){
                return true;
        }else{
            // restore board[i][j] to its original value
            board[i][j] = c;
            return false;
        }
    }

    bool exist(vector<vector<char>>& board, string word) {
        int m=board.size();
        int n=board[0].size();
        // find the first letter of this word
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                // if it's true, return true; if not, continue search at next (i,j)
                if(search(board, word, i, j, 0) == true){
                    return true;
                }
            }
        }
        // if we reach here, then the word can't be found.
        return false;
    }
};
