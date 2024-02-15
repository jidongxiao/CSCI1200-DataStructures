#include <iostream>
#include <list>

int main() {
    // Create a list of integers
    std::list<int> numbers = {5, 2, 9, 3, 7};

    // Print the original list
    std::cout << "Original list: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Sort the list in ascending order
    numbers.sort();

    // Print the sorted list
    std::cout << "Sorted list: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}

