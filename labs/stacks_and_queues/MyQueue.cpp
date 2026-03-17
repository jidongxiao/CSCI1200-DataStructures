#include <iostream>
#include <stack>
#include <cassert>

template <class T>
class MyQueue {
private:
    std::stack<T> s_in;  // For pushing
    std::stack<T> s_out; // For popping/front

    // Helper function to transfer elements when s_out is empty
    void transfer() {
        if (s_out.empty()) {
            while (!s_in.empty()) {
                s_out.push(s_in.top());
                s_in.pop();
            }
        }
    }

public:
    // complete the member functions here: push, pop, front, empty, size.
};

int main() {
    MyQueue<int> q;

    std::cout << "--- Testing MyQueue (FIFO via Stacks) ---" << std::endl;

    q.push(1);
    q.push(2);
    q.push(3);

    std::cout << "Front: " << q.front() << " (Expected 1)" << std::endl;
    assert(q.front() == 1);

    std::cout << "Popping: " << q.pop() << " (Expected 1)" << std::endl;
    
    q.push(4); // Testing push after some pops

    std::cout << "Front: " << q.front() << " (Expected 2)" << std::endl;
    assert(q.front() == 2);

    q.pop(); // Pop 2
    q.pop(); // Pop 3
    
    std::cout << "Front after more pops: " << q.front() << " (Expected 4)" << std::endl;
    assert(q.front() == 4);

    assert(q.size() == 1);
    std::cout << "\nAll tests passed successfully!" << std::endl;

    return 0;
}
