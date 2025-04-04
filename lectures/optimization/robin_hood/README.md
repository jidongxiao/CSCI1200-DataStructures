# `robin_hood::unordered_map` — Fast Hash Map for C++

`robin_hood::unordered_map` is a high-performance hash table implementation designed as a faster alternative to `std::unordered_map`, with better cache locality and reduced memory overhead.

---

## Key Features

- **Faster lookups** and insertions compared to `std::unordered_map`
- **Robin Hood hashing**: minimizes probe length differences to keep performance stable
- **Header-only**: easy to integrate
- **Memory efficient**: lower memory usage due to compact internal representation
- **Supports custom hash and equality functions**

---

## Installation

Include the header file in your project:

```cpp
#include "robin_hood.h"
```

You can get the header from:

GitHub: https://github.com/martinus/robin-hood-hashing

## Benchmarks

Compile and run this [program](robin_hood_test.cpp) to see the performance difference; you will need to both [robin_hood_test.cpp](robin_hood_test.cpp) and [robin_hood.h](robin_hood.h).

The program performs 2 millions times of insert and lookup on an std::unordered_map container; and then performs 2 million times of insert and lookup on a robin_hood::unordered_map container. As can be seen, the robin hood test runs much faster.

```console
$g++ -o robin_hood_test robin_hood_test.cpp
$./robin_hood_test
[std::unordered_map] Time: 1145 ms. Sum: -1455759936
[robin_hood::unordered_map] Time: 918 ms. Sum: -1455759936
```
