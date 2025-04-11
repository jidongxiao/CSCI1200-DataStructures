#include <iostream>

class A {
public:
    void func(int x) {
        std::cout << "A::func(int): " <<  x << "\n";
    }
};

class B : public A {
public:
    void func(double y) {
        std::cout << "B::func(double): " << y << "\n";
    }
};

int main() {
    B b;
    b.func(10);    // Calls B::func(double)
    b.func(10.5);  // Calls B::func(double)
    return 0;
}
