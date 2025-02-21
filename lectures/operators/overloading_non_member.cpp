// Overloading the output stream operator as a non-member function.

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
};

// overload the output stream operator as a non-member function
std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
	os << "Value: " << obj.getValue();
	return os;
}

int main() {
	MyClass obj(42);

	// output the object using the overloaded operator
	std::cout << obj << std::endl;

	return 0;
}
