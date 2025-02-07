template <class T>
class vec {
public:
	// default constructor
	vec(){
		m_size = 0;
		m_capacity = 2;
		m_data = new T[m_capacity];
		// std::cout << "calling default constructor" << std::endl;
	}

	// other constructor
	vec(int number, const T& value){
		m_size = number;
		m_capacity = m_size * 2;
		m_data = new T[m_capacity];
		for(int i=0; i<m_size; ++i){
			m_data[i] = value;
		}
	}

	// copy constructor
	vec(const vec& other){
		m_size = other.m_size;
		m_capacity = other.m_capacity;
		m_data = new T[m_capacity];
		for(int i=0; i<m_size; ++i){
			m_data[i] = other.m_data[i];
		}
	}

	// assignment operator
	// a = b = c; a = (b = c);
	// a = b;
	vec& operator=(const vec& other){
		// use this if statement here so as to avoid self-assignment.
		if(this != &other){
			m_size = other.m_size;
			m_capacity = other.m_capacity;
			m_data = new T[m_capacity];
			for(int i=0; i<m_size; ++i){
				m_data[i] = other.m_data[i];
			}
		}
		return *this;
	}

	// destructor
	~vec(){
		// std::cout << "calling destructor" << std::endl;
		delete [] m_data;
	}

	int size();
	/*int size(){
		return m_size;
	}*/

	T& operator[](int index){
		return m_data[index];
	}

	void push_back(const T& element){
		// if we have space
		if(m_size < m_capacity){
			m_data[m_size] = element;
		}else{
		// if we don't have space
			m_capacity = m_capacity* 2;
			T* new_data = new T[m_capacity];
			// copy the existing elements to new location
			for(int i=0; i<m_size; ++i){
				new_data[i] = m_data[i];
			}
			new_data[m_size] = element;
			delete [] m_data;
			m_data = new_data;
		}
		m_size++;
	}

	void pop_back(){
		m_size--;
	}
	// nested class
	class iterator {
		private:
			T* ptr;
		public:
			// constructor
			iterator(T* p){
				ptr = p;
			}
			// dereference operator
			T& operator*(){
				return *ptr;
			}
			T* operator->(){
				return ptr;
			}
			// pre-increment
			iterator& operator++(){
				++ptr;
				return *this;
			}
			// post-increment
			// special syntax here, we must write the int keyword here in the post-increment function.
			iterator operator++(int){
				iterator temp = *this;
				++ptr;
				return temp;
			}
			bool operator!=(const iterator& other){
				return (ptr != other.ptr);
			}
	};
	iterator begin();
	//iterator begin(){
		// we want to have an iterator pointing to the beginning of the vec container.
	//	return iterator(m_data);
	//}
	iterator end(){
		// we want to have an iterator pointing to the end.
		return iterator(m_data + m_size);
	}
private:
	T* m_data;
	int m_capacity;	// whole capacity
	int m_size;	// current size
};

// below we demonstrate that member functions can also be written outside of the templated class definition:

// why we need typename here: The compiler does not automatically assume that vec<T>::iterator is a type. 
// Instead, it first assumes that anything after :: is a member variable or function, not a type.
// To explicitly tell the compiler that vec<T>::iterator is a type, we must use the typename keyword:
template <class T>
typename vec<T>::iterator vec<T>::begin(){
	return vec<T>::iterator(m_data);
}

template <class T>
int vec<T>::size(){
	return m_size;
}
