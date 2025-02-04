#include <iostream>
#include <utility> // For std::move

class Matrix {
private:
	int rows, cols;
	int* data;	// intentionally make this as an int* pointer, instead of int** pointer,
			// so as to distinguish this example from the homework matrix class.

public:
	// default constructor
	Matrix(){
		rows = 0;
		cols = 0;
		data = nullptr;
	}

	// constructor
	Matrix(int r, int c) : rows(r), cols(c) {
		data = new int[r * c]; // allocate memory
		// std::cout << "Constructor: Allocating memory\n";
	}

	// move assignment operator
	// noexcept: this keyword tells the compiler and optimizer that this function will never throw an exception.
	// The compiler may optimize code differently if it knows that the function will not throw exceptions.
	Matrix& operator=(Matrix&& other) noexcept {
		// std::cout << "Move Assignment Operator Invoked\n";
		if (this != &other) {
			delete[] data; // free old memory
			data = other.data;
			rows = other.rows;
			cols = other.cols;
            
			// leave `other` in a safe state
			other.data = nullptr;
			other.rows = 0;
			other.cols = 0;
		}
		return *this;
	}

	// destructor
	~Matrix() {
		delete[] data;
		// std::cout << "Destructor: Freeing memory\n";
	}
};

int main() {
	// these lines mimic what is used in the BatchTest function.
	Matrix* m_arr = new Matrix[5];
	for(int i=0; i<10000; i++){
		for(int j=0; j<10000; j++){
			m_arr[3] = Matrix(4,4);
		}
	}
	delete [] m_arr;
}
