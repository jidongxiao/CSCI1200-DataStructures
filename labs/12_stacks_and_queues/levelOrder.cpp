#include <iostream>
#include <vector>
#include <queue>

// Definition for a binary tree node.
class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

std::vector<std::vector<int>> levelOrderTraversal(TreeNode* root) {
	std::vector<std::vector<int>> result;

	if (root == nullptr) {
		return result;
	}

	std::queue<TreeNode*> myQueue;
	myQueue.push(root);

	while (!myQueue.empty()) {
		int size = myQueue.size();
		std::vector<int> current_level;

		for (int i = 0; i < size; i++) {
			TreeNode* current = myQueue.front();
			myQueue.pop();
			std::cout << current->val << " ";

			if (current != nullptr) {
				current_level.push_back(current->val);

				if (current->left != nullptr) {
					myQueue.push(current->left);
				}
				if (current->right != nullptr) {
					myQueue.push(current->right);
				}
			}
		}

		result.push_back(current_level);
	}

	return result;
}

int main() {
	/* test case 1
	*    1
	*   2 3
	* 4 5 6 7
	*/
	TreeNode* root1 = new TreeNode(1);
	root1->left = new TreeNode(2);
	root1->right = new TreeNode(3);
	root1->left->left = new TreeNode(4);
	root1->left->right = new TreeNode(5);
	root1->right->left = new TreeNode(6);
	root1->right->right = new TreeNode(7);

	std::cout << "Level Order Traversal: ";
	levelOrderTraversal(root1);
	std::cout << std::endl;

	/* test case 2
	*    1
	*   2 3
	* 4 5 6 7
	*      8 9
	*/
	TreeNode* root2 = new TreeNode(1);
	root2->left = new TreeNode(2);
	root2->right = new TreeNode(3);
	root2->left->left = new TreeNode(4);
	root2->left->right = new TreeNode(5);
	root2->right->left = new TreeNode(6);
	root2->right->right = new TreeNode(7);
	root2->right->right->left = new TreeNode(8);
	root2->right->right->right = new TreeNode(9);
    
	std::cout << "Level Order Traversal: ";
	levelOrderTraversal(root2);
	std::cout << std::endl;

	/* test case 3
	*     1
	*    2 3
	*  4 5 6 7
	* 8
	*/
	TreeNode* root3 = new TreeNode(1);
	root3->left = new TreeNode(2);
	root3->right = new TreeNode(3);
	root3->left->left = new TreeNode(4);
	root3->left->right = new TreeNode(5);
	root3->right->left = new TreeNode(6);
	root3->right->right = new TreeNode(7);
	root3->left->left->left = new TreeNode(8);

	std::cout << "Level Order Traversal: ";
	levelOrderTraversal(root3);
	std::cout << std::endl;

	return 0;
}

