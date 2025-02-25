#include <iostream>
#include <vector>
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

    // move constructor
    // marking functions as noexcept allows the compiler to make certain optimizations, 
    // knowing that the function won't emit exceptions. This can result in more efficient code generation.
    LargeObject(LargeObject&& other) noexcept {
	size_ = other.size_;
	data_ = other.data_;
        other.data_ = nullptr;
        other.size_ = 0;
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
    vec.reserve(numElements);

    for (size_t i = 0; i < numElements; ++i) {
        vec.emplace_back(dataSize);
    }

    return 0;
}
