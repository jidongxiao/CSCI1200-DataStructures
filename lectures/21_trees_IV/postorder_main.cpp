#include <iostream>

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int value) : val(value), left(NULL), right(NULL) {}
};

// function to reverse the right-edge path of a subtree
TreeNode* reverse(TreeNode* head) {
    TreeNode* prev = nullptr;
    TreeNode* next = nullptr;

    while (head != nullptr) {
        next = head->right;
        head->right = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// function to traverse and collect nodes along a reversed right edge
void reverseTraverseRightEdge(TreeNode* head) {
    TreeNode* tail = reverse(head);
    TreeNode* current = tail;

    while (current != nullptr) {
        std::cout << current->val << " ";
        current = current->right;
    }
    reverse(tail); // restore the original tree structure
}

// Morris Postorder Traversal
void postorderTraversal(TreeNode* root) {
    TreeNode* current = root;
    TreeNode* rightmost;

    while (current != nullptr) {
        if (current->left != nullptr) {
            rightmost = current->left;
            while (rightmost->right != nullptr && rightmost->right != current) {
                rightmost = rightmost->right;
            }

            if (rightmost->right == nullptr) { 
                rightmost->right = current;
                current = current->left;
            } else {  
                rightmost->right = nullptr;
                reverseTraverseRightEdge(current->left);
                current = current->right;
            }
        } else {  
            current = current->right;
        }
    }
    
    reverseTraverseRightEdge(root); // traverse the final right edge
    return;
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

    std::cout << "Postorder Traversal using Morris Traversal:\n";
    postorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
