#include <iostream>
#include <map>

int main() {
    const int N = 1000000;
    std::map<int, int> m;

    // fill the map with some values
    for (int i = 0; i < N; ++i) {
        m[i] = i;
    }

    // erase by key
    for (int i = 0; i < N; ++i) {
        m.erase(i);
    }

    return 0;
}

