#include <iostream>
#include <vector>

class Node {
public:
    int val;
    std::vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, std::vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};

// make a helper function, since the original one doesn't take the vector as a parameter.
void postorder(Node* root, std::vector<int>& result){
        // base case
        if(root==NULL){
            return;
        }

        // children first
        int size = (root->children).size();
        for(int i=0; i<size; ++i){
            // call the same function to traverse children[i]
            postorder(root->children[i], result);
        }

        // then parent
        result.push_back(root->val);
    }

std::vector<int> postorder(Node* root) {
    std::vector<int> result;
    postorder(root, result);
    return result;
}

int main() {
    // create tree nodes
    //     1
    //  /  |  \
    // 2   3   4
    //    /  \
    //   5    6
    Node* node5 = new Node(5);
    Node* node6 = new Node(6);
    Node* node2 = new Node(2);
    Node* node3 = new Node(3, {node5, node6});
    Node* node4 = new Node(4);
    Node* root = new Node(1, {node2, node3, node4});

    // call preorder traversal
    std::vector<int> result = postorder(root);

    // print result
    std::cout << "Post-order traversal: ";
    for (int val : result) {
        std::cout << val << " ";
    }
    std::cout << std::endl;

    // free memory (optional but good practice)
    delete node5;
    delete node6;
    delete node2;
    delete node3;
    delete node4;
    delete root;

    return 0;
}

