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
	int d;
};

int main(){
	return 0;
}
