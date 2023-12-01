#include <iostream>

class Base {
public:
        Base() {}
        virtual void A() { std::cout << "Base A "; }
        void B() { std::cout << "Base B "; }
};

class One : public Base {
public:
        One() {}
        void A() { std::cout << "One A "; }
        void B() { std::cout << "One B "; }
};
class Two : public Base {
public:
        Two() {}
        void A() { std::cout << "Two A "; }
        void B() { std::cout << "Two B "; }
};

int main() {
        Base* a[3];
        a[0] = new Base;
        a[1] = new One;
        a[2] = new Two;
        for (unsigned int i=0; i<3; ++i) {
                a[i]->A();
                a[i]->B();
        }
        std::cout << std::endl;
        return 0;
}
