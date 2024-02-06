template<class T>
class Vec{
public:
    // default constructor
    Vec(){
        m_data = new T[2];
	m_size = 0;
	capacity = 2;
    }

    // other constructor
    Vec(int size, const T& val){
        m_data = new T[size];
	m_size = size;
	capacity = size;
	for(int i=0;i<size;i++){
	    m_data[i] = val;
	}
    }

    // copy constructor
    /*Vec(const Vec& other){
        capacity = other.capacity;
	m_size = other.m_size;
        m_data = new T[capacity];
	for(unsigned int i=0;i<m_size;i++){
            m_data[i] = other.m_data[i];
	}
    }*/

    // destructor
    ~Vec(){
        delete [] m_data;
    }

    // assignment operator
    Vec<T>& operator=(const Vec& other){
        if(this != &other){
            capacity = other.capacity;
	    m_size = other.m_size;
	    m_data = new T[m_size];
	    for(unsigned int i=0;i<m_size;i++){
                m_data[i] = other.m_data[i];
	    }
	}
	return *this;
    }

    // [] operator
    T& operator[](int i){
	return m_data[i];
    }

    unsigned int size(){
	    return m_size;
    }

    void push_back(const T& val){
	    if(m_size >= capacity){
                capacity = capacity * 2;
		// allocate memory for the new array and move content of m_data to the new array.
                T* temp = new T[capacity];
		for(unsigned int i=0;i<m_size;i++){
                    temp[i] = m_data[i];
		}
		delete [] m_data;
		m_data = temp;
	    }
	    m_data[m_size] = val;
            m_size++;
    }
    void pop_back(){
        m_size--;
    }
private:
    int capacity;
    int m_size;
    T* m_data;
};
