#include <iostream>

// multiple-level inheritance

class A
{
public:
	A(int a):a(a){}
	int a;
};
class B:public A
{
public:
	B(int a, int b):b(b),A(a){}
	int b;
};
class C:public B
{
public:
	C(int a, int b, int c):B(a, b),c(c){}
	int c;

};
class D:public C
{
public:
	D(int a, int b, int c, int d):C(a,b,c),d(d){}
	void print(){
		std::cout << a << ":" << b << ":" << c << ":" << d << std::endl;
	}
	int d;
};

int main(){
	D dObject(1,2,3,4);
	dObject.print();
	return 0;
}
