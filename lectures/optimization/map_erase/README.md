# `erase by iterator` vs. `erase by key` in C++

## Overview

erasing by iterator in std::maps is typically faster than erasing by key.

## Erasing by Iterator:

- When you erase an element using an iterator, the map already has a direct reference to the node that contains the element to be erased.

- The iterator is a pointer to the element (node) in the underlying tree structure (which is usually a red-black tree for std::map).

## Erasing by Key:

- When you erase an element by key, std::map first has to search for the key.

- It does this by traversing the red-black tree to find the node that matches the key.

- After finding the node, it performs the same operation as erase(iterator), but since it had to perform a search to locate the key, this is slower than directly accessing the iterator.

## Benchmarks

Compile and run these 2 programs to see the performance difference.

[map_erase_slow.cpp](map_erase_slow.cpp) [map_erase_fast.cpp](map_erase_fast.cpp)

Both programs just create a map containing 1 millions integers, and then erase these 1 millions integers. As can be seen from the following results, erasing by iterators is much faster than erasing by key.

```console
$g++ map_erase_slow.cpp -o map_erase_slow
$g++ map_erase_fast.cpp -o map_erase_fast

$time ./map_erase_slow

real    0m0.640s
user    0m0.624s
sys     0m0.016s

$time ./map_erase_fast

real    0m0.406s
user    0m0.386s
sys     0m0.020s

$time ./map_erase_fast

real    0m0.382s
user    0m0.374s
sys     0m0.008s

$time ./map_erase_slow

real    0m0.629s
user    0m0.617s
sys     0m0.012s

$time ./map_erase_slow

real    0m0.632s
user    0m0.623s
sys     0m0.009s

$time ./map_erase_fast

real    0m0.383s
user    0m0.366s
sys     0m0.017s

```
