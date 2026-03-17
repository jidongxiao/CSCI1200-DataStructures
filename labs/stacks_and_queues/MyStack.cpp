#include <iostream>
#include <queue>
#include <string>
#include <cassert>

template <class T>
class MyStack {
private:
    std::queue<T> q;

public:
    // complete the member functions here: push, pop, top, empty, size.
};

int main() {
    MyStack<int> s;

    std::cout << "--- Testing MyStack (LIFO via Queue) ---" << std::endl;

    // Test 1: Empty state
    std::cout << "Testing initial state... ";
    assert(s.empty() == true);
    assert(s.size() == 0);
    std::cout << "Passed!" << std::endl;

    // Test 2: Pushing elements
    std::cout << "Pushing 10, 20, 30..." << std::endl;
    s.push(10);
    assert(s.top() == 10);

    s.push(20);
    assert(s.top() == 20); // 20 was last in, should be at top

    s.push(30);
    assert(s.top() == 30);
    assert(s.size() == 3);
    std::cout << "Push and Top tests... Passed!" << std::endl;

    // Test 3: Popping elements (The LIFO check)
    std::cout << "Popping elements (expecting 30, then 20, then 10):" << std::endl;

    std::cout << "Top: " << s.top() << " (Expected 30)" << std::endl;
    assert(s.top() == 30);
    s.pop();

    std::cout << "Top: " << s.top() << " (Expected 20)" << std::endl;
    assert(s.top() == 20);
    s.pop();

    std::cout << "Top: " << s.top() << " (Expected 10)" << std::endl;
    assert(s.top() == 10);
    s.pop();

    // Test 4: Final state
    assert(s.empty() == true);
    assert(s.size() == 0);
    std::cout << "Pop and Final Empty tests... Passed!" << std::endl;

    // Test 5: Different data type (string)
    MyStack<std::string> stringStack;
    stringStack.push("First");
    stringStack.push("Second");
    assert(stringStack.top() == "Second");
    std::cout << "Template type test (string)... Passed!" << std::endl;

    std::cout << "\nAll tests passed successfully!" << std::endl;

    return 0;
}
