/* This example demonstrates the usage of passing a pointer by reference.
 * It is needed when you want to modify the pointer.
 */

#include <iostream>

// function to modify the value of a pointer through reference
void modifyPointer(int* & ptr, int& newValue) {
    ptr = &newValue;     // assign the address of newValue to the pointer
}

int main() {
    int value = 42;
    int* ptr = &value;

    // print the original value of the pointer
    std::cout << "Original value of pointer: " << *ptr << std::endl;

    int newValue = 100;  // new value to assign to the pointer
    // pass the pointer by reference to the function, so that we can change the pointer
    modifyPointer(ptr, newValue);

    // print the modified value of the pointer
    std::cout << "Modified value of pointer: " << *ptr << std::endl;

    return 0;
}

