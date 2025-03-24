#include <iostream>
#include <vector>

class Node {
public:
    int value;
    Node* left;
    Node* right;

    // constructor to create a new node
    Node(int val) : value(val), left(NULL), right(NULL) {}
};

// bfs using vectors
void breadth_first_traverse(Node* root) {
    int level = 0;
    std::vector<Node*> current_level;
    std::vector<Node*> next_level;

    if (root == NULL) {
        return;
    }

    current_level.push_back(root);

    while (current_level.size() != 0) {
        std::cout << "level " << level << ":";
        for (unsigned i = 0; i < current_level.size(); i++) {
            if (current_level[i]->left != NULL) {
                next_level.push_back(current_level[i]->left);
            }
            if (current_level[i]->right != NULL) {
                next_level.push_back(current_level[i]->right);
            }
            std::cout << " " << current_level[i]->value;
        }
        current_level = next_level;
        level++;
        next_level.clear();
        std::cout << std::endl;
    }
}

int main() {
    // creating a simple binary tree
    //     1
    //   /   \
    //  2     3
    // / \   / \
    //4   5 6   7
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    // calling the breadth-first traversal function
    breadth_first_traverse(root);

    // cleaning up dynamically allocated memory
    delete root->left->left;
    delete root->left->right;
    delete root->right->left;
    delete root->right->right;
    delete root->left;
    delete root->right;
    delete root;

    return 0;
}
