#include <iostream>
#include <vector>
#include <unordered_map>
#include <set>
#include <string>
#include <ctime>

unsigned int badHash(const std::string& k, unsigned int N) {
    unsigned int value = 0;
    for (unsigned int i = 0; i < k.size(); ++i) {
        value += k[i]; // simple sum of ASCII values
    }
    return value % N;
}

unsigned int betterHash(const std::string& k, unsigned int N) {
    unsigned int value = 0;
    unsigned int prime = 31;
    for (unsigned int i = 0; i < k.size(); ++i) {
        value = value * prime + k[i]; // use multiplications which involve the position and value of the key; also uses prime for better distribution
    }
    return value % N;
}

// a good hash function should distribute values evenly across N buckets.
// note that function pointers are used here
void testCollisions(unsigned int (*hashFunc)(const std::string&, unsigned int), 
                    const std::vector<std::string>& testStrings, unsigned int N) {
    std::unordered_map<unsigned int, int> bucketCounts;
    
    for (const std::string& str : testStrings) {
        unsigned int hashValue = hashFunc(str, N);
        bucketCounts[hashValue]++;
    }

    // count how many buckets have collisions
    int collisions = 0;
    for (const std::pair<unsigned int, int> entry : bucketCounts) {
        if (entry.second > 1) {
            collisions += (entry.second - 1);
        }
    }

    std::cout << "Total Collisions: " << collisions << std::endl;
}

// generate many test strings and see how well they spread over N buckets.
std::vector<std::string> generateTestStrings(int count) {
    std::vector<std::string> testStrings;
    for (int i = 0; i < count; i++) {
        std::string str = "str" + std::to_string(i); // example: "str0", "str1"...
        testStrings.push_back(str);
    }
    return testStrings;
}

// note that function pointers are used here
void benchmark(unsigned int (*hashFunc)(const std::string&, unsigned int),
               const std::vector<std::string>& testStrings, unsigned int N) {
    clock_t start = clock();
    for (const std::string& str : testStrings) {
        hashFunc(str, N);
    }
    clock_t end = clock();
    double timeTaken = double(end - start) / CLOCKS_PER_SEC;
    std::cout << "Execution Time: " << timeTaken << " seconds" << std::endl;
}

int main() {
    unsigned int N = 1000; // hash table size
    std::vector<std::string> testStrings = generateTestStrings(5000);

    std::cout << "Testing badHash (Summing ASCII values):\n";
    testCollisions(badHash, testStrings, N);
    benchmark(badHash, testStrings, N);

    std::cout << "\nTesting betterHash (Multiplication by 31, a prime):\n";
    testCollisions(betterHash, testStrings, N);
    benchmark(betterHash, testStrings, N);

    return 0;
}

