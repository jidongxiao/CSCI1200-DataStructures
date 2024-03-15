#include <iostream>

// functor class
class MultiplyBy {
private:
	int factor;

public:
	// constructor
	MultiplyBy(int factor) : factor(factor) {}

	// overloaded function call operator
	int operator()(int x) const {
		return x * factor;
	}
};

int main() {
	// create an instance of the functor
	MultiplyBy multiplyByTwo(2);

	// use the functor as a function
	// surprising: the object itself can be used like it's a function.
	std::cout << "Result of multiplying 5 by 2: " << multiplyByTwo(5) << std::endl;

	return 0;
}
