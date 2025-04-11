#include <iostream>

// diamond inheritance
// Address of A in B, in C, in D are the same, because there is only one copy.

class A
{
public:
	A(int a) : a(a) {}
protected:
	int a;
};

// virtual inheritance: declare A as the virtual base class
// in virtual inheritance, B contains a pointer to the shared instance of A
class B: virtual public A
// class B: public A
{
public:
	B(int a) : A(a) {}
	void print(){
		std::cout << "Address of A in B: " << reinterpret_cast<void*>(static_cast<A*>(this)) << std::endl;
	}
};

// virtual inheritance: declare A as the virtual base class
// in virtual inheritance, C contains a pointer to the shared instance of A
class C: virtual public A
// class C: public A
{
public:
	C(int a) : A(a) {}
	void print(){
		std::cout << "Address of A in C: " << reinterpret_cast<void*>(static_cast<A*>(this)) << std::endl;
	}
};

// D has a single shared instance of the virtual base class (A), regardless of how many times it appears in the hierarchy.
// Due to virtual inheritance, there is a single shared instance of A within the D object.
// This helps in avoiding the "diamond problem" and ensures that there is only one copy of the shared base class.
class D: public B, public C
{
public:
	D(int a): B(a), C(a), A(123) {}
	// D(int a): B(a), C(a), A(a) {}

	void print(){
		// reference to ‘a’ is ambiguous
		std::cout << "a is " << a << std::endl;
		// std::cout << "a is " << C::a << std::endl;
		//
		B::print();
		C::print();
		std::cout << "Address of A in D: " << reinterpret_cast<void*>(static_cast<A*>(this)) << std::endl;
		std::cout << "Address of B in D: " << reinterpret_cast<void*>(static_cast<B*>(this)) << std::endl;
		std::cout << "Address of C in D: " << reinterpret_cast<void*>(static_cast<C*>(this)) << std::endl;
	}
};

int main(){
	D* dObject_p = new D(1);
	dObject_p->print();

	D dObject(2);
	std::cout << sizeof(int) << std::endl;
	// size of dObject = 4 (A) + 8 (pointer in B)+ 8 (pointer in C) + padding
	std::cout << sizeof(dObject) << std::endl;

	// release memory
	delete dObject_p;

	// Print sizes and addresses
	std::cout << "Size of A: " << sizeof(A) << " bytes" << std::endl;
	std::cout << "Size of B: " << sizeof(B) << " bytes" << std::endl;
	std::cout << "Size of C: " << sizeof(C) << " bytes" << std::endl;
	std::cout << "Size of D: " << sizeof(D) << " bytes" << std::endl;

	return 0;
}
