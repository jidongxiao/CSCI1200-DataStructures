template <class T>
class Node {
	public:
		T value;
		Node* next;
		Node* prev;
	private:
};

// A "forward declaration" of this class is needed
template <class T> class dslist;

template <class T>
class list_iterator {
	public:
		// default constructor
		list_iterator(){
			ptr = NULL;
		}
		list_iterator(Node<T>* p) {
			ptr = p;
		}
		// assignment constructor
		list_iterator& operator=(const list_iterator& other){
			this->ptr = other.ptr;
			return (*this);
		}
		// derefencing operator
		T& operator*(){
			return (ptr->value);
		}
		// pre-increment
		list_iterator& operator++(){
			this->ptr = this->ptr->next;
			return (*this);
		}
		// post-increment
		list_iterator operator++(int){
			list_iterator temp = (*this);
			this->ptr = this->ptr->next;
			return temp;
		}
		// operator ==
		bool operator==(const list_iterator& other){
			return (this->ptr == other.ptr);
		}
		// operator !=
		bool operator!=(const list_iterator& other){
			return (this->ptr != other.ptr);
		}

		// the dslist class needs access to the private ptr_ member variable
		friend class dslist<T>;
	private:
		Node<T>* ptr;
};

template <class T>
class dslist {
	public:
		typedef list_iterator<T> iterator;
		typedef unsigned int size_type;
		// default constructor
		dslist(){
			head = nullptr;
			tail = nullptr;
			size_ = 0;
		}

		// copy constructor
		dslist(const dslist<T>& other){
			// here we must initialize head and tail, because we will use them in push_back().
			head = nullptr;
			tail = nullptr;
			size_ = other.size_;
			iterator itr = other.begin();
			while(itr != other.end()){
				this->push_back(*itr);
				itr++;
			}
		}

		// x=(w=v)
		dslist<T>& operator=(const dslist<T>& other){
			head = nullptr;
			tail = nullptr;
			size_ = other.size_;
			iterator itr = other.begin();
			while(itr != other.end()){
				this->push_back(*itr);
				itr++;
			}
		}

		~dslist(){
			iterator itr = this->begin();
			while(itr != this->end()){
				iterator itr2 = itr;
				itr2++;
				delete itr.ptr;
				itr = itr2;
			}
		}

		size_type size(){
			return size_;
		}

		void push_back(const T& value){
			Node<T> *temp = new Node<T>;
			temp->value = value;
			temp->next = NULL;
			temp->prev = tail;
			// if the list was originally empty
			if(head == nullptr){
				head = temp;
				tail = temp;
			}else{
				tail->next = temp;
				tail = temp;
			}
			size_ = size_ + 1;
		}

		void pop_back();

		// just like push_back(), it just takes a value as its parameter.
		void push_front(const T& value){
			Node<T> *temp = new Node<T>;
			temp->value = value;
			temp->next = head;
			temp->prev = nullptr;
			if(head == nullptr){
				head = temp;
				tail = temp;
			}else{
				head->prev = temp;
				head = temp;
			}
			size_ = size_ + 1;
		}

		void pop_front();

		/* iterator implementation */
		void erase(iterator itr){
                        dslist<T>::iterator itr2 = itr;
                        itr2++;
			// Question: is this right?
                        while (itr2 != this->end()) {
                                *itr = *itr2;
                                itr++;
                                itr2++;
                        }
                        this->pop_back();
                }
		
		void insert(iterator itr, const T& value){
			Node<T>* temp = new Node<T>;
			temp->value = value;
			temp->next = itr.ptr->next;
			temp->prev = itr.ptr;
			itr.ptr->next = temp;
			// if inserting after the last element
			if(itr.ptr->next != nullptr){
				itr.ptr->next->prev = temp;
			}
		}

		iterator begin() const {
			return list_iterator(head);
		}

		iterator end() const {
			return list_iterator((Node<T>*)nullptr);
			//return list_iterator((Node<T>*)NULL);
			//return list_iterator(NULL);
		}

	private:
		// pointing to head node and tail node.
		Node<T>* head;
		Node<T>* tail;

		unsigned int size_;	// current size

};

// TODO: handle the case where the list is empty, i.e., tail==nullptr and can't be dereferenced.
template <class T>
void dslist<T>::pop_back(){
	Node<T> * temp = tail;
	tail = tail->prev;
	tail -> next = NULL;
	// delete the original tail.
	delete temp;
	size_ = size_ - 1;
}

// TODO: handle the case where the list is empty, i.e., head==nullptr and can't be dereferenced.
template <class T>
void dslist<T>::pop_front(){
	Node<T> * temp = head;
	head = head->next;
	head->prev = nullptr;
	// delete the original head.
	delete temp;
	size_ = size_ - 1;
}
