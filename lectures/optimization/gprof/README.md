# C++ Profiling with `gprof`

## What is `gprof`?
`gprof` is a GNU profiler that helps analyze where a program spends most of its execution time. It provides function call counts and execution time details.

## Installing `gprof`
```sh
$ sudo apt-get install binutils
```

## Compiling a C++ Program for Profiling
To use `gprof`, compile your program with the `-pg` flag:
```sh
$ g++ -pg -o test test.cpp
```

## Example C++ Program
Create a file [test.cpp](test.cpp) with the following code:
```cpp
#include <iostream>

void heavyComputation() {
    volatile long long sum = 0;
    for (long long i = 0; i < 500000000; ++i) {
        sum += i;  // Simple but expensive loop
    }
}

void lightComputation() {
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
```

## Running and Profiling the Program
1. Compile the program:
   ```sh
   $ g++ -pg -o test test.cpp
   ```
2. Execute the program to generate `gmon.out`:
   ```sh
   $ ./test
   ```
3. Analyze the profiling data:
   ```sh
   $ gprof test gmon.out > profile.txt
   $ cat profile.txt
   ```

## Understanding the Output
- **Flat Profile**: Shows execution time spent in each function.
- **Call Graph**: Displays function call relationships and their execution time.

## Best Practices for Using `gprof`
- Use `-O2` optimizations but **avoid `-O3`**, which may inline functions and reduce profiling accuracy.
- Profile with realistic input data to get meaningful results.
- Optimize the slowest functions first based on the profiling report.

## Conclusion
`gprof` is a powerful tool for detecting performance bottlenecks in C++ programs. By identifying expensive functions, developers can make targeted optimizations.

# Why Use `volatile` in the above program?

## Compiler May Remove the Loops
When compiling a program, the compiler applies optimizations to make the code run faster. One such optimization is **dead code elimination**, where the compiler removes code that does **not affect the program's observable behavior**.

For example, consider this function:

```cpp
void heavyComputation() {
    long long sum = 0;
    for (long long i = 0; i < 500000000; ++i) {
        sum += i;
    }
}
```

- The compiler notices that `sum` is **never used outside the function**.
- Since the result is discarded, the compiler **may completely remove the loop**.
- This means `heavyComputation()` might do **nothing** at runtime, which ruins our profiling experiment.

---

## How Does `volatile` Help?
Declaring a variable as `volatile` tells the compiler:

"This variable might change in ways you cannot predict, so do not optimize it away."

For example:

```cpp
void heavyComputation() {
    volatile long long sum = 0;  // Mark sum as volatile
    for (long long i = 0; i < 500000000; ++i) {
        sum += i;
    }
}
```

- Now, **even if `sum` is never used**, the compiler **must** perform the loop.
- The `volatile` keyword prevents the compiler from assuming that `sum` is unimportant.
- This ensures that the loop actually runs during profiling.

---

## **Does `volatile` Affect Performance?**
Yes, but only slightly.
- **Without `volatile`**, the compiler can optimize the loop aggressively.
- **With `volatile`**, every read and write to `sum` is guaranteed to happen exactly as written, preventing some optimizations.

However, this small cost is **worth it for benchmarking**, because it ensures that the loops are not removed.
