#include <iostream>

void func1() {
    int a = 42;
    std::cout << "a: " << a << std::endl;
}

void func2() {
    int* b = new int(42);  
    std::cout << "b: " << *b << std::endl;
    delete b;
}

int c = 42;
static int d = 42;

int main() {
    func1();
    func2();

    std::cout << "c: " << c << std::endl;
    std::cout << "d: " << d << std::endl;

    return 0;
}
