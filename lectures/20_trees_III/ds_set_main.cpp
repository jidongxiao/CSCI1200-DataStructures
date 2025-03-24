#include <iostream>
#include "ds_set_ptrs.h"

int main() {
    // create a set of integers
    ds_set<int> numbers;

    // insert some values into the set
    numbers.insert(10);
    numbers.insert(5);
    numbers.insert(88);
    numbers.insert(20);
    numbers.insert(49);
    numbers.insert(15);
    numbers.insert(36);
    numbers.insert(5); // Duplicate value (won't be inserted)

    // print the elements of the set
    std::cout << "The elements in the set are:" << std::endl;
    for(ds_set<int>::iterator itr = numbers.begin(); itr != numbers.end(); ++itr){
        std::cout << *itr << " ";
    }
    std::cout << std::endl;

    // check if a specific value exists in the set
    int value = 15;
    if (numbers.find(value) != numbers.end()) {
        std::cout << value << " is found in the set." << std::endl;
    } else {
        std::cout << value << " is not found in the set." << std::endl;
    }

    // check if a specific value exists in the set
    value = 66;
    if (numbers.find(value) != numbers.end()) {
        std::cout << value << " is found in the set." << std::endl;
    } else {
        std::cout << value << " is not found in the set." << std::endl;
    }

    numbers.erase(10);
    numbers.erase(20);
    numbers.erase(36);
    
    // print the elements of the set
    std::cout << "After erasing 10, 20 and 36, the elements in the set are:" << std::endl;
    for(ds_set<int>::iterator itr = numbers.begin(); itr != numbers.end(); ++itr){
        std::cout << *itr << " ";
    }
    std::cout << std::endl;

    return 0;
}
