#include <iostream>

class Base {
public:
    Base(int x) {
        std::cout << "Base constructor: " << x << std::endl;
    }
};

class Derived : public Base {
public:
    Derived(int x) { // member initializer list calls Base constructor
        Base(x);
        std::cout << "Derived constructor" << std::endl;
    }
};

int main(){
}
