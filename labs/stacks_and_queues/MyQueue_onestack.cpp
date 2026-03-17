#include <iostream>
#include <stack>
#include <cassert>

template <class T>
class MyQueueRecursive {
private:
    std::stack<T> s;

public:
    // complete the member functions here: push, pop, front, empty, size, add helper functions if needed.
};

int main() {
    MyQueueRecursive<int> q;

    q.push(10);
    q.push(20);
    q.push(30);

    std::cout << "Front (Recursive): " << q.front() << " (Expected 10)" << std::endl;
    assert(q.pop() == 10);
    
    q.push(40);
    
    std::cout << "Next Pop: " << q.pop() << " (Expected 20)" << std::endl;
    assert(q.size() == 2);

    std::cout << "Recursive Queue logic works!" << std::endl;
    return 0;
}
