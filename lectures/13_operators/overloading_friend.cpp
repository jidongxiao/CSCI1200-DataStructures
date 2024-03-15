// Overloading the output stream operator as a friend function.

#include <iostream>

class MyClass {
private:
	int value;

public:
	MyClass(int val) : value(val) {}
	friend std::ostream& operator<<(std::ostream& os, const MyClass& obj);

	// getter function to access private member
	int getValue() const {
		return value;
	}
};

// overload the output stream operator as a non-member function
std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
	os << "Value: " << obj.value;
	return os;
}

int main() {
	MyClass obj(42);

	// output the object using the overloaded operator
	std::cout << obj << std::endl;

	return 0;
}
