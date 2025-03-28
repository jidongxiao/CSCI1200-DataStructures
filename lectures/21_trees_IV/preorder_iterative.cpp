#include <iostream>
#include <stack>

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// pre order traverse a binary tree, iteratively.
void preorderTraversal(TreeNode* root) {
    if (root == nullptr) return;

    std::stack<TreeNode*> st;
    st.push(root);

    while (!st.empty()) {
        TreeNode* current = st.top();
        st.pop();
        std::cout << current->val << " ";

        if (current->right) st.push(current->right);  // push right first
        if (current->left) st.push(current->left);    // then push left
    }
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->left->right->left = new TreeNode(6);
    root->left->right->right = new TreeNode(7);
    root->right->right = new TreeNode(8);
    root->right->right->left = new TreeNode(9);

    std::cout << "Inorder Traversal: ";
    preorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
