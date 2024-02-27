#include <iostream>
#include <stack>

int main() {
	std::stack<int> myStack;

	myStack.push(10);
	myStack.push(20);
	myStack.push(30);
	myStack.push(40);
	myStack.push(50);

	std::cout << "Size of stack: " << myStack.size() << std::endl;
	std::cout << "Top element: " << myStack.top() << std::endl;

	if (!myStack.empty()) {
		std::cout << "Stack is not empty" << std::endl;
	} else {
		std::cout << "Stack is empty" << std::endl;
	}

	myStack.pop();
	std::cout << "Top element after pop: " << myStack.top() << std::endl;

	return 0;
}
