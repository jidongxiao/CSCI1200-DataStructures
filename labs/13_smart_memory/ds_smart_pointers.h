#include <cstdlib>

// ==============================================================================
// basic auto pointer implementation
// see also http://ootips.org/yonat/4dev/smart-pointers.html

template <class T>
class dsAutoPtr {
public:
  explicit dsAutoPtr(T* p = NULL) : ptr(p) {}  /* prevents cast/conversion */
  ~dsAutoPtr()      { delete ptr; }
  T& operator*()   { return *ptr; }
  T* operator->()  { return ptr; }
private:
  T* ptr;
};


// ==============================================================================
// basic reference counting pointer borrowed from:
// http://www.codeproject.com/Articles/15351/Implementing-a-simple-smart-pointer-in-c

class ReferenceCount {
public:
  ReferenceCount() { count = 0; }
  void addReference() { count++; }
  int releaseReference() { return --count; }
private:
  int count; 
};


template <class T> 
class dsSharedPtr {
public:
  dsSharedPtr(T* pValue = NULL) : pData(pValue) {
    // Create a new reference counter & increment the count
    reference = new ReferenceCount();
    reference->addReference();
  }
  dsSharedPtr(const dsSharedPtr<T>& sp) : pData(sp.pData), reference(sp.reference) {
    // use the same reference counter, increment the count
    reference->addReference();
  }
  dsSharedPtr<T>& operator= (const dsSharedPtr<T>& sp) {
    if (this != &sp) {
      // Decrement the old reference count
      // if reference become zero delete the old data
      if(reference->releaseReference() == 0) {
        delete pData;
        delete reference;
      }
      // Copy the data and reference pointer
      // and increment the reference count
      pData = sp.pData;
      reference = sp.reference;
      reference->addReference();
    }
    return *this;
  }
  // destructor
  ~dsSharedPtr() {
    if (reference->releaseReference() == 0) {
      delete pData;
      delete reference;
    }
  }
  bool operator== (const dsSharedPtr<T>& sp) { return pData == sp.pData; }
  T& operator* () { return *pData; }
  T* operator-> () { return pData; }
private:
  // REPRESENTATION
  T*    pData;  
  ReferenceCount* reference; 
};

// ==============================================================================
