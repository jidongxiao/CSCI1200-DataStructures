#include <iostream>

class A {
public:
    A() {
        std::cout << "A";
    }
    ~A() {
        std::cout << "A";
    }
};

class B : public A {
public:
    B() {
        std::cout << "B";
    }
    ~B() {
        std::cout << "B";
    }
};

int main() {
    {
        A a;
        B b;
    }
    std::cout << std::endl;
    return 0;
}

