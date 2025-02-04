#include <iostream>

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

	// assignment operator
	Matrix& operator=(const Matrix& other) {
		// std::cout << "Assignment Operator Invoked\n";
		if (this != &other) {
			delete[] data; // free old memory
			rows = other.rows;
			cols = other.cols;
			data = new int[rows * cols];
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
