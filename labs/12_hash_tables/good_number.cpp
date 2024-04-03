#include <iostream>

bool isGood(int n) {
}

int main() {
	// Test cases
	// 2, 4, 5, 6, 17, 18, 20 are not good numbers.
	// 1, 7, 10, 13, 19, 23, 28, 68 are good numbers.

    int testCases[] = {2,4,5,6,17,18,20,1,7,10,13,19,23,28,68};

    for (int n : testCases) {
        if (isGood(n)) {
            std::cout << n << " is a good number." << std::endl;
        } else {
            std::cout << n << " is not a good number." << std::endl;
        }
    }

    return 0;
}

