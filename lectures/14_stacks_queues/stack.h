#include <iostream>
#include <vector>

template <class T>
class Stack {
private:
    std::vector<T> data; // Vector to store the stack elements

public:
    // Push element onto the stack
    void push(const T& value) {
        data.push_back(value);
    }

    // Pop element from the stack
    void pop() {
        if (!empty()) {
            data.pop_back();
        } else {
            std::cout << "Stack is empty, cannot pop!" << std::endl;
        }
    }

    // Get the top element of the stack
    int top() {
        if (!empty()) {
            return data.back();
        } else {
            std::cout << "Stack is empty!" << std::endl;
            return -1; // Or handle as needed
        }
    }

    // Check if the stack is empty
    bool empty() {
        return data.empty();
    }

    // Get the size of the stack
    int size() {
        return data.size();
    }
};
