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
    // get the subtree sum, update map1, and also update the maxFreq
    int helper(TreeNode* node, std::unordered_map<int, int>& map1, int& maxFreq){
        int sum;
        int freq;
        // base case
        if(node==nullptr){
            return 0;
        }else if(node->left==nullptr && node->right==nullptr){
            freq = (++map1[node->val]);
            if(freq>maxFreq){
                maxFreq = freq;
            }
            return node->val;
        }
        // general case
        sum = node->val + helper(node->left, map1, maxFreq) + helper(node->right, map1, maxFreq);
        freq = (++map1[sum]);
        if(freq>maxFreq){
            maxFreq = freq;
        }
        return sum;
    }

    vector<int> findFrequentTreeSum(TreeNode* root) {
        int sum = 0;
        int maxFreq = 0;
        vector<int> result;
        // sum and frequency
        std::unordered_map<int, int> map1;
        // find the tree sum of each subtree
        if(root!=nullptr){
            sum = helper(root, map1, maxFreq);
        }
        std::unordered_map<int, int>::iterator itr1 = map1.begin();
        while(itr1!=map1.end()){
            if(itr1->second == maxFreq){
                result.push_back(itr1->first);
            }
            itr1++;
        }
        return result;
    }
};
