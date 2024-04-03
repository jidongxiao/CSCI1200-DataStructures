#include <iostream>

class MyFunctor {
public:
    int operator()(int x, int y) {
        return x + y;
    }
};

int main() {
    MyFunctor myFunc;
    int result = myFunc(3, 4);  // This calls the overloaded () operator.
    // result now holds the value 7.
    std::cout << "result is " << result << std::endl;
    return 0;
}

