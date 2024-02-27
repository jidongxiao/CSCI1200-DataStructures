#include <iostream>

// custom class definition
class MyClass {
public:
	// constructor
	MyClass() {
		std::cout << "Constructor called" << std::endl;
	}
    
	// destructor
	~MyClass() {
		std::cout << "Destructor called" << std::endl;
	}
};

int main() {
	/* 	creating a temporary object using constructor syntax. 
	      	It creates a temporary object that gets destructed immediately.
		Why? Because this line creates a temporary object of type MyClass using the constructor syntax, 
		but it does not associate the temporary object with any variable. 
		This temporary object is constructed and immediately destroyed in the same line of code, 
		as it is not stored in any variable. 
		This is often used when you need to perform a one-time action using a constructor without storing the object for later use.
	*/
	MyClass();

	MyClass A;
	MyClass B;
	return 0;
}

