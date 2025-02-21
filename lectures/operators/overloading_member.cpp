// Overloading the output stream operator as a member function.

#include <iostream>

class MyClass {
private:
	int value;

public:
	MyClass(int val) : value(val) {}

	// getter function to access private member
	int getValue() const {
		return value;
	}

	// overload the output stream operator as a non-member function
	std::ostream& operator<<(std::ostream& os) {
		os << "Value: " << value;
		return os;
	}

};

int main() {
	MyClass obj(42);

	// output the object using the overloaded operator
	obj << std::cout << std::endl;

	return 0;
}
