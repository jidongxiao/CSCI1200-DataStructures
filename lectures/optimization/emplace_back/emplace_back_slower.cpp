#include <iostream>
#include <vector>
#include <chrono>
#include <cstring>

class LargeObject {
public:
    // constructor allocating a large amount of memory
    LargeObject(int size) {
	size_ = size;
	data_ = new char[size_];
        // initialize data with some values
        std::memset(data_, 'A', size_);
    }

    // copy constructor
    LargeObject(const LargeObject& other) {
	size_ = other.size_;
	data_ = new char[size_];
        std::memcpy(data_, other.data_, size_);
    }

    // destructor
    ~LargeObject() {
        delete[] data_;
    }

private:
    size_t size_;
    char* data_;
};

int main() {
    int numElements = 1000000; // number of elements
    int dataSize = 1024;       // size of each LargeObject's data

    std::vector<LargeObject> vec;

    for (size_t i = 0; i < numElements; ++i) {
        vec.emplace_back(dataSize);	// copy constructor would get called here
					// when a std::vector exceeds its current capacity, 
					// it allocates a larger block of memory and copies existing elements to the new storage location. 
					// this reallocation process involves calling the copy constructor for each existing element.
    }

    return 0;
}
