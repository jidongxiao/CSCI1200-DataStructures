#include <iostream>

class A
{
public:
	void print(){
		std::cout << "A" << std::endl;
	}
};

class B: public A
{
public:
	// virtual void print(){
	void print(){
		std::cout << "B" << std::endl;
	}
};

class C: public B
{
public:
	void print(){
		std::cout << "C" << std::endl;
	}
};

class D: public C
{
public:
	void print(){
		std::cout << "D" << std::endl;
	}
};

int main(){
	// initialize base class pointer with a derived class object.
	A* pA = new B;
	// which print is getting called?
	// if no virtual, decide by pointer type.
	pA->print();

	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	B* pB = new C;
	pB->print();
	// which print is getting called?
	// pointer and object same type, just call its local member function.
	pB = new B;
	pB->print();
	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	C c;
	pB = &c;
	pB->print();

	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	// also, virtual can be inheritated, even if the derived one doesn't use the virtual keyword.
	C* pC = new D;
	pC->print();

	return 0;
}
