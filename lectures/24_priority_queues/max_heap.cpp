#include <iostream>
#include <queue>

int main() {
    std::priority_queue<int> maxHeap;

    maxHeap.push(3);
    maxHeap.push(4);
    maxHeap.push(3);
    maxHeap.push(1);
    maxHeap.push(5);

    while (!maxHeap.empty()) {
        std::cout << maxHeap.top() << " ";
        maxHeap.pop();
    }
    std::cout << std::endl;

    return 0;
}
