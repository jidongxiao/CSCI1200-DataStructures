#include <iostream>
#include <queue>

class Node {
public:
    int value;
    Node* left;
    Node* right;

    // constructor to create a new node
    Node(int val) : value(val), left(NULL), right(NULL) {}
};

// the breadth-first traversal function using std::queue
void breadth_first_traverse(Node* root) {
    if (root == NULL) {
        return;
    }

    std::queue<Node*> node_queue; // queue to store nodes for BFS traversal
    node_queue.push(root);  // start by pushing the root node

    int level = 0;
    
    while (!node_queue.empty()) {
        int level_size = node_queue.size();  // number of nodes at the current level
        std::cout << "level " << level << ": ";

        for (int i = 0; i < level_size; i++) {
            Node* current_node = node_queue.front();  // get the front node
            node_queue.pop();  // remove the node from the queue

            std::cout << current_node->value << " ";  // print the value of the node

            // push the children of the current node to the queue (if they exist)
            if (current_node->left != NULL) {
                node_queue.push(current_node->left);
            }
            if (current_node->right != NULL) {
                node_queue.push(current_node->right);
            }
        }
	// after we finish the for loop, the only pointers in the queue, are the pointers pointing to nodes of the next level.

        std::cout << std::endl;
        level++;
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
