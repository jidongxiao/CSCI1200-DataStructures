#include <iostream>
#include <unordered_map>
#include <chrono>
#include <string>
#include "robin_hood.h"

constexpr size_t NUM_ELEMENTS = 2'000'000;

void benchmark_std() {
    std::unordered_map<std::string, int> map;
    auto start = std::chrono::high_resolution_clock::now();

    // Insert
    for (size_t i = 0; i < NUM_ELEMENTS; ++i) {
        map["key" + std::to_string(i)] = i;
    }

    // Lookup
    int sum = 0;
    for (size_t i = 0; i < NUM_ELEMENTS; ++i) {
        sum += map["key" + std::to_string(i)];
    }

    auto end = std::chrono::high_resolution_clock::now();
    std::cout << "[std::unordered_map] Time: "
              << std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count()
              << " ms. Sum: " << sum << "\n";
}

void benchmark_robin() {
    robin_hood::unordered_map<std::string, int> map;
    auto start = std::chrono::high_resolution_clock::now();

    // Insert
    for (size_t i = 0; i < NUM_ELEMENTS; ++i) {
        map["key" + std::to_string(i)] = i;
    }

    // Lookup
    int sum = 0;
    for (size_t i = 0; i < NUM_ELEMENTS; ++i) {
        sum += map["key" + std::to_string(i)];
    }

    auto end = std::chrono::high_resolution_clock::now();
    std::cout << "[robin_hood::unordered_map] Time: "
              << std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count()
              << " ms. Sum: " << sum << "\n";
}

int main() {
    benchmark_std();
    benchmark_robin();
    benchmark_robin();
    benchmark_std();
    return 0;
}

