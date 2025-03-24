#include <utility> // for std::pair
#include <vector>

template <class T>
class TreeNode {
public:
	T key;
	TreeNode* left;
	TreeNode* right;
	// one way to allow implementation of iterator increment & decrement
	TreeNode* parent;
	// constructor
	TreeNode(const T& k) {
		key = k; 
		left = NULL;
		right = NULL;
	}
};

// -------------------------------------------------------------------
// TREE NODE ITERATOR CLASS
template <class T>
class tree_iterator {
public:
	// default constructor
	tree_iterator() = default; // including = default explicitly tells someone reading the code that 
				   // you intend for the compiler to generate the default constructor. 
				   // It makes your intent clearer.
	// constructor
	tree_iterator(std::vector<TreeNode<T>*> p) : ptrs(p) {}
	// copy constructor
	tree_iterator(const tree_iterator& other) : ptrs(other.ptrs) {}
	// destructor
	~tree_iterator() {}
	// assignment operator
	tree_iterator& operator=(const tree_iterator& other) { ptrs = other.ptrs;  return *this; }
	// operator* gives constant access to the value at the pointer
	const T& operator*() const { return (ptrs.back())->key; }
	// comparison operators are straightforward
	bool operator== (const tree_iterator& other) { return ptrs == other.ptrs; }
	bool operator!= (const tree_iterator& other) { return ptrs != other.ptrs; }
	// increment & decrement operators
	tree_iterator<T> & operator++() { 
		// prefix ++
		if (ptrs.empty()) return *this; // end() reached
		// ptrs.back() gives us the pointer points to the current node, i.e, that's where we are now.
		TreeNode<T>* curr = ptrs.back();
		// case 1: has right subtree
		if (curr->right) {
			curr = curr->right;
			ptrs.push_back(curr);
			// go as left as possible
			while (curr->left) {
				curr = curr->left;
				ptrs.push_back(curr);
			}
		}
		// case 2: no right subtree, go up
		else {
			TreeNode<T>* last = ptrs.back();
			ptrs.pop_back();
			// keep going up as long as I am (here I means last) the right child of my parent.
			while (!ptrs.empty() && ptrs.back()->right == last) {
				last = ptrs.back();
				ptrs.pop_back();
			}
			// if ptrs empty now, we hit end()
		}
		// when we return, ptrs.back() should point to the destination node.
		return *this;
	}
	tree_iterator<T> operator++(int) {  tree_iterator<T> temp(*this);  ++(*this);  return temp;  }
	tree_iterator<T> & operator--() { /* implementation omitted */ }
	tree_iterator<T> operator--(int) {  tree_iterator<T> temp(*this);  --(*this);  return temp;  }
private:
	// representation
	std::vector<TreeNode<T>*> ptrs;  // store pointers to every node which is on the path from root to current node
};

// internally it's a binary search tree
template <class T>
class ds_set {
public:
	ds_set(){
		root = NULL;
		m_size = 0;
	}
	typedef tree_iterator<T> iterator;
	int size() { return m_size; }
	iterator find(const T& key){
		std::vector<TreeNode<T>*> ptrs;
		return find(key, root, ptrs);
	}
	std::pair<iterator, bool> insert(const T& key){ 
		std::pair<iterator, bool> temp;
		std::vector<TreeNode<T>*> ptrs;
		temp = insertHelper(key, root, ptrs);
	        if(temp.second	== true){
			++m_size;
		}
		return temp;
	}
	void erase(const T& key){
		eraseHelper(key, root);
	}
	// ITERATORS
	// return an iterator to the first (leftmost) node of the binary search tree, 
	// which can be found by traversing to the leftmost node starting from the root.
	tree_iterator<T> begin() const {
		std::vector<TreeNode<T>*> ptrs;
		TreeNode<T>* p = root;
		while (p) {
			ptrs.push_back(p);
			p = p->left;  // go left
		}
		return tree_iterator<T>(ptrs);
	}
	tree_iterator<T> end() const { return tree_iterator<T>(); }
private: 
	TreeNode<T>* root;
	int m_size;
	iterator find(const T& key, TreeNode<T>* root, std::vector<TreeNode<T>*>& ptrs);
	// as there are multiple templated classes involved, writing this function outside of the class definition may be too complicated.
	// helper function to perform the insertion
	std::pair<iterator, bool> insertHelper(const T& key, TreeNode<T>*& node, std::vector<TreeNode<T>*>& ptrs) {
		// if node is nullptr, insert the key here
		if (!node) {
			node = new TreeNode<T>(key);
			ptrs.push_back(node);  // add the new node to the path
			return {iterator(ptrs), true};  // return an iterator to the new node, and true for success
		}

		// if key is already present in the tree, no insertion occurs
		if (key == node->key) {
			return {iterator(ptrs), false};  // return an iterator to the existing node, and false for failure
		}

		// add the current node to the path
		ptrs.push_back(node);

		// recursively insert into the left or right subtree
		if (key < node->key) {
			return insertHelper(key, node->left, ptrs);  // Traverse left
		} else {
			return insertHelper(key, node->right, ptrs);  // Traverse right
		}
	}
	// must pass root by reference here because we might change it.
	void eraseHelper(const T& key, TreeNode<T>*& root){
		if (root == NULL) return;
		if (root->key == key) {
			if (root->left == NULL && root->right == NULL){
				// no child, just delete
				delete root;
				root = NULL;
			} else if (root->left == NULL){
				// doesn't have a left, let the right child take over
				TreeNode<T>* temp = root;
				root = root->right;
				delete temp;
			} else if (root->right == NULL){
				// doesn't have a right, let the left child take over
				TreeNode<T>* temp = root;
				root = root->left;
				delete temp;
			} else {
				// has both left and right
				// let the leftmost node of the right subtree take over
				TreeNode<T>* tmp = root->right;
				while (tmp->left) {
					tmp = tmp->left;
				}
				root->key = tmp->key;
				// but then remove that leftmost node of the right subtree.
				eraseHelper(tmp->key, root->right);
			}
		} else if (root->key > key) {
			// search on the left subtree and erase
			eraseHelper(key, root->left);
		} else {
			// search on the right subtree and erase
			eraseHelper(key, root->right);
		}
	}

};

template <class T>
typename ds_set<T>::iterator ds_set<T>::find(const T& key, TreeNode<T>* root, std::vector<TreeNode<T>*>& ptrs){
	// base case (if root doesn't even exist)
	if(root == NULL){
		return end();
	}
	
	 // add current node to the path
        ptrs.push_back(root);
	// general case
	if(key < root->key){
		return find(key, root->left, ptrs);
	}else if(key > root->key){
		return find(key, root->right, ptrs);
	}else{
		return tree_iterator(ptrs);
	}
}

