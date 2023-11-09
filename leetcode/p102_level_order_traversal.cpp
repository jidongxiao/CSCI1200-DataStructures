/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> result;
        std::queue<TreeNode*> myQueue;
        if(root==nullptr){
            return {};
        }
        // initial setup of the queue
        myQueue.push(root);
        while(!myQueue.empty()){
            int size = myQueue.size();
            vector<int> current_level;
            // assume every node at the next lever is in the queue, visit them one by one.
            for(int i=0;i<size;i++){
                TreeNode* current = myQueue.front();
                myQueue.pop();
                if(current!=nullptr){
                    current_level.push_back(current->val);
                    // before we get to the next level, push every node of the next level into the queue.
                    if(current->left!=nullptr){
                        myQueue.push(current->left);
                    }
                    if(current->right!=nullptr){
                        myQueue.push(current->right);
                    }
                }
            }
            result.push_back(current_level);
        }
        return result;
    }
};
