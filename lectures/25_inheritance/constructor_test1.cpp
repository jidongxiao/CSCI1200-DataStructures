#include <iostream>

class Base {
public:
    Base(int x) {
        std::cout << "Base constructor: " << x << std::endl;
    }
};

class Derived : public Base {
public:
    Derived(int x) : Base(x) { // member initializer list calls Base constructor
        std::cout << "Derived constructor" << std::endl;
    }
};

int main(){
}
