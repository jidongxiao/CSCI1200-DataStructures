#include <iostream>
#include <stack>

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// in order traverse a binary tree, iteratively.
void inorderTraversal(TreeNode* root) {
    std::stack<TreeNode*> st;
    TreeNode* current = root;

    while (current != nullptr || !st.empty()) {
        while (current != nullptr) {  // reach leftmost node
            st.push(current);
            current = current->left;
        }

        current = st.top();  // process node
        st.pop();
        std::cout << current->val << " ";

        current = current->right;  // move to right subtree
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
    inorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
