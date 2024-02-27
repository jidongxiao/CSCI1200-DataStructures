#include <iostream>
#include <queue>

int main() {
	std::queue<int> myQueue;

	myQueue.push(10);
	myQueue.push(20);
	myQueue.push(30);
	myQueue.push(40);
	myQueue.push(50);

	std::cout << "Size of queue: " << myQueue.size() << std::endl;
	std::cout << "Front element: " << myQueue.front() << std::endl;

	if (!myQueue.empty()) {
		std::cout << "Queue is not empty" << std::endl;
	} else {
		std::cout << "Queue is empty" << std::endl;
	}

	myQueue.pop();
	std::cout << "Front element after pop: " << myQueue.front() << std::endl;

	return 0;
}
