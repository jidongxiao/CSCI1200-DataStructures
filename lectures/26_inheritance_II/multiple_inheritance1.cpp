#include <iostream>

class B
{
public:
	B(int b1):b(b1){}
protected:
	int b;
};

class C
{
public:
	C(int c1):c(c1){}
protected:
	int c;
};

class D: public B, public C
{
public:
	D(int b1, int c1):B(b1),C(c1),d(b1+c1){}

	void print(){
		std::cout << "d is " << d << std::endl;
	}
protected:
	int d;
};

int main(){
	D* dOjbect = new D(2,3);
	dOjbect->print();
	return 0;
}
