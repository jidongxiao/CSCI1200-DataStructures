#include <iostream>
#include <map>

int main() {
    const int N = 1000000;
    std::map<int, int> m;

    // fill the map with some values
    for (int i = 0; i < N; ++i) {
        m[i] = i;
    }

    // erase all elements using iterators
    for (std::map<int, int>::iterator itr = m.begin(); itr != m.end(); ) {
        itr = m.erase(itr); // erase using iterator and move to the next element
    }

    return 0;
}

