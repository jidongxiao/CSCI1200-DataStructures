Compile and Run these two programs to see the performance difference, note that the two programs have the same main function.

Here are the results:

```console
$ g++ matrix_fast.cpp -o matrix_fast
$ g++ matrix_slow.cpp -o matrix_slow
$ time ./matrix_fast

real    0m1.134s
user    0m1.130s
sys     0m0.004s
$ time ./matrix_fast

real    0m1.138s
user    0m1.134s
sys     0m0.004s
$ time ./matrix_fast

real    0m1.139s
user    0m1.139s
sys     0m0.000s
$ time ./matrix_slow

real    0m2.159s
user    0m2.159s
sys     0m0.000s
$ time ./matrix_slow

real    0m2.161s
user    0m2.157s
sys     0m0.004s
$ time ./matrix_slow

real    0m2.207s
user    0m2.200s
sys     0m0.000s
```

As can be seen, the fast version is much faster than the slow version, this is because it avoids many memory allocations/deallocations.
