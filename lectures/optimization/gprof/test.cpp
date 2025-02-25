#include <iostream>

void heavyComputation() {
    // The use of volatile prevents compiler optimizations that could remove the loops.
    volatile long long sum = 0;
    for (long long i = 0; i < 500000000; ++i) {
        sum += i;  // Simple but expensive loop
    }
}

void lightComputation() {
    // The use of volatile prevents compiler optimizations that could remove the loops.
    volatile int sum = 0;
    for (int i = 0; i < 100000; ++i) {
        sum += i;  // Lighter loop
    }
}

int main() {
    heavyComputation();  // Call heavy function once
    for (int i = 0; i < 1000; ++i) {
        lightComputation();  // Call light function many times
    }
    return 0;
}
