template <class T>
class TreeNode {
public:
	T key;
	TreeNode* left;
	TreeNode* right;
	// constructor
	TreeNode(const T& k) {
		key = k; 
		left = NULL;
		right = NULL;
	}
};

// internally it's a binary search tree
template <class T>
class ds_set {
public:
	ds_set(){
		root = NULL;
		m_size = 0;
	}
	int size() { return m_size; }
	bool find(const T& key){
		return find(key, root);
	}
	void insert(const T& key){ 
		if(insert(key, root)  == true){
			++m_size;
		}
	}
private: 
	TreeNode<T>* root;
	int m_size;
	bool find(const T& key, TreeNode<T>* root);
	bool insert(const T& key, TreeNode<T>*& root);
};

template <class T>
bool ds_set<T>::find(const T& key, TreeNode<T>* root){
	// base case (if root doesn't even exist)
	if(root == NULL){
		return false;
	}
	
	// general case
	if(key < root->key){
		return find(key, root->left);
	}else if(key > root->key){
		return find(key, root->right);
	}else{
		return true;
	}
}

template <class T>
bool ds_set<T>::insert(const T& key, TreeNode<T>*& root){
	// base case (if root doesn't even exist)
	if(root == NULL){
		// make the first node.
		root = new TreeNode<T>(key);
		return true;
	}
	
	// general case
	if(key < root->key){
		return insert(key, root->left);
	}else if(key > root->key){
		return insert(key, root->right);
	}else{
		return false;
	}
}
