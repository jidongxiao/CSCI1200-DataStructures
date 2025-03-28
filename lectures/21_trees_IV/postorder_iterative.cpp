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
void postorderTraversal(TreeNode* root) {
    if (root == nullptr) return;

    std::stack<TreeNode*> st1, st2;
    st1.push(root);

    while (!st1.empty()) {
        TreeNode* current = st1.top();
        st1.pop();
        st2.push(current);

        if (current->left) st1.push(current->left);
        if (current->right) st1.push(current->right);
    }

    while (!st2.empty()) {
        std::cout << st2.top()->val << " ";
        st2.pop();
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
    postorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
