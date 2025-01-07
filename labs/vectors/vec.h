#ifndef Vec_h_
#define Vec_h_
// Simple implementation of the vector class, revised from Koenig and Moo.  This 
// class is implemented using a dynamically allocated array (of templated type T).  
// We ensure that that m_size is always <= capacity and when a push_back or resize 
// call would violate this condition, the data is copied to a larger array.

template <class T> class Vec {

public:   
  // TYPEDEFS
  typedef T* iterator;
  typedef const T* const_iterator;

  // CONSTRUCTORS, ASSIGNMNENT OPERATOR, & DESTRUCTOR
  Vec() { this->create(); }
  Vec(int n, const T& t = T()) { this->create(n, t); }
  Vec(const Vec& v) { copy(v); }
  Vec& operator=(const Vec& v); 
  ~Vec() { delete [] m_data; }

  // MEMBER FUNCTIONS AND OTHER OPERATORS
  T& operator[] (int i) { return m_data[i]; }
  const T& operator[] (int i) const { return m_data[i]; }
  void push_back(const T& t);
  iterator erase(iterator p);
  void resize(int n, const T& fill_in_value = T());
  void clear() { delete [] m_data;  create(); }
  bool empty() const { return m_size == 0; }
  int size() const { return m_size; }

  // ITERATOR OPERATIONS
  iterator begin() { return m_data; }
  const_iterator begin() const { return m_data; }
  iterator end() { return m_data + m_size; }
  const_iterator end() const { return m_data + m_size; }

private:  
  // PRIVATE MEMBER FUNCTIONS
  void create();
  void create(int n, const T& val);
  void copy(const Vec<T>& v); 

  // REPRESENTATION
  T* m_data;         // Pointer to first location in the allocated array
  int m_size;  // Number of elements stored in the vector
  int capacity; // Number of array locations allocated,  m_size <= capacity
};

// Create an empty vector (null pointers everywhere).
template <class T>  void Vec<T>::create() {
  m_data = NULL;
  m_size = capacity = 0;  // No memory allocated yet
}

// Create a vector with size n, each location having the given value
template <class T> void Vec<T>::create(int n, const T& val) {
  m_data = new T[n];
  m_size = capacity = n;
  for (T* p = m_data; p != m_data + m_size; ++p)
    *p = val;
}

// Assign one vector to another, avoiding duplicate copying.
template <class T> Vec<T>& Vec<T>::operator=(const Vec<T>& v) {
  if (this != &v) {
    delete [] m_data;
    this -> copy(v);
  }
  return *this;
}

// Create the vector as a copy of the given vector. 
template <class T> void Vec<T>::copy(const Vec<T>& v) {
  this->capacity = v.capacity;
  this->m_size = v.m_size;
  this->m_data = new T[this->capacity];
  
  // Copy the data
  for (int i = 0; i < this->m_size; ++i)
    this -> m_data[ i ] = v.m_data[ i ];
}

// Add an element to the end, resize if necesssary. 
template <class T> void Vec<T>::push_back(const T& val) {
  if (m_size == capacity) { 
    // Allocate a larger array, and copy the old values

    // Calculate the new allocation.  Make sure it is at least one.
    capacity *= 2;
    if (capacity < 1) capacity = 1;
    
    // Allocate and copy the old array
    T* new_data = new T[capacity];
    for (int i=0; i<m_size; ++i)
      new_data[i] = m_data[i];
    
    // Delete the old array and reset the pointers
    delete [] m_data;
    m_data = new_data;
  }

  // Add the value at the last location and increment the bound
  m_data[m_size] = val;
  ++ m_size;
}

// Shift each entry of the array after the iterator. Return the iterator, 
// which will have the same value, but point to a different element.
template <class T> typename Vec<T>::iterator Vec<T>::erase(iterator p) {
  // remember iterator and T* are equivalent
  for (iterator q = p; q < m_data+m_size-1; ++q)
    *q = *(q+1);
  m_size --;
  return p;
}

// If n is less than or equal to the current size, just change the size.  If n is 
// greater than the current size, the new slots must be filled in with the given value. 
// Re-allocation should occur only if necessary.  push_back should not be used.
template <class T> void Vec<T>::resize(int n, const T& fill_in_value) {
  if (n <= m_size)
    m_size = n;
  else {
    // If necessary, allocate new space and copy the old values
    if (n > capacity) {
      capacity = n;
      T* new_data = new T[capacity];
      for (int i=0; i<m_size; ++i)
	new_data[i] = m_data[i];
      delete [] m_data;
      m_data = new_data;
    }
    
    // Now fill in the remaining values and assign the final size.
    for (int i = m_size; i<n; ++i)
      m_data[i] = fill_in_value;
    m_size = n;
  }
}
#endif
