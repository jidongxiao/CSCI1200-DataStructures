#include <iostream>
#include <list>

int main() {
    std::list<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // iterate over the list and remove even numbers
    for (std::list<int>::iterator it = numbers.begin(); it != numbers.end(); ) {
        if (*it % 2 == 0) {  // if the element is even
            it = numbers.erase(it);  // erase returns the next valid iterator
        } else {
            ++it;  // move to the next element
        }
    }

    // print the modified list
    // range based for loop: all STL containers that provide begin() and end() member functions support range-based for loops (introduced in C++11).
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}
