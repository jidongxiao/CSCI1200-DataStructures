#include <utility> // for std::pair

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
  tree_iterator() : ptr_(NULL) {}
  tree_iterator(TreeNode<T>* p) : ptr_(p) {}
  tree_iterator(const tree_iterator& old) : ptr_(old.ptr_) {}
  ~tree_iterator() {}
  tree_iterator& operator=(const tree_iterator& old) { ptr_ = old.ptr_;  return *this; }
  // operator* gives constant access to the value at the pointer
  const T& operator*() const { return ptr_->key; }
  // comparison operators are straightforward
  bool operator== (const tree_iterator& rgt) { return ptr_ == rgt.ptr_; }
  bool operator!= (const tree_iterator& rgt) { return ptr_ != rgt.ptr_; }
  // increment & decrement operators
  tree_iterator<T> & operator++() { 
    // if i have right subtree, find left most element of those
    if (ptr_->right != NULL) {
      ptr_ = ptr_->right;
      while (ptr_->left != NULL) {
        ptr_ = ptr_->left;
      }
    } else {
      // keep going up as long as I'm my parent's right child
      while (ptr_->parent && ptr_->parent->right == ptr_) {
        ptr_ = ptr_->parent;
      }
      // go up one more time
      ptr_ = ptr_->parent;
    }
    return *this;
  }
  tree_iterator<T> operator++(int) {  tree_iterator<T> temp(*this);  ++(*this);  return temp;  }
  tree_iterator<T> & operator--() { /* implementation omitted */ }
  tree_iterator<T> operator--(int) {  tree_iterator<T> temp(*this);  --(*this);  return temp;  }

private:
  // representation
  TreeNode<T>* ptr_;
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
		return find(key, root);
	}
	std::pair<iterator, bool> insert(const T& key){ 
		std::pair<iterator, bool> temp;
		temp = insert(key, root, NULL);
	        if(temp.second	== true){
			++m_size;
		}
		return temp;
	}
	// ITERATORS
	tree_iterator<T> begin() const {
		if (!root) return tree_iterator<T>(NULL);
		TreeNode<T>* p = root;
		while (p->left) {
			p = p->left;
		}
		return tree_iterator<T>(p);
	}
	tree_iterator<T> end() const { return tree_iterator<T>(NULL); }
private: 
	TreeNode<T>* root;
	int m_size;
	iterator find(const T& key, TreeNode<T>* root);
	// as there are multiple templated classes involved, writing this function outside of the class definition may be too complicated.
	std::pair<iterator, bool> insert(const T& key, TreeNode<T>*& node, TreeNode<T>* parent) {
		// base case
		if (node == nullptr) {
			node = new TreeNode<T>(key);
			node->parent = parent;
			return { iterator(node), true };
		}
		if (key < node->key) {
			return insert(key, node->left, node);
		} else if (key > node->key) {
			return insert(key, node->right, node);
		} else {
			// key already exists
			return { iterator(node), false };
		}
	}
};

template <class T>
typename ds_set<T>::iterator ds_set<T>::find(const T& key, TreeNode<T>* root){
	// base case (if root doesn't even exist)
	if(root == NULL){
		return end();
	}
	
	// general case
	if(key < root->key){
		return find(key, root->left);
	}else if(key > root->key){
		return find(key, root->right);
	}else{
		return tree_iterator(root);
	}
}

