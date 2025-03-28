#include <iostream>

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int value) : val(value), left(NULL), right(NULL) {}
};

void inorderTraversal(TreeNode* root) {
        TreeNode *current=root;
        TreeNode *rightmost;
        while(current!=NULL){
            if(current->left!=NULL){
                rightmost=current->left;
                while(rightmost->right!=NULL && rightmost->right!=current){
                    rightmost=rightmost->right;
                }
                if(rightmost->right==NULL){ /* first time */
                    rightmost->right=current;
                    current=current->left;
                }else{  /* second time */
		    std::cout << current->val << " ";
                    rightmost->right=NULL;
                    current=current->right;
                }
            }else{  /* nodes which do not have left child */
		std::cout << current->val << " ";
                current=current->right;
            }
    }
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

    std::cout << "Inorder Traversal using Morris Traversal:\n";
    inorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
