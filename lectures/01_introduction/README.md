# Lecture 1 --- Introduction to C++, STL, Strings

- Brief Discussion of Website & Syllabus
- Crash Course in C++ Syntax
- Getting Started in C++ & STL, C++ Syntax, STL Strings

## Transitioning from Python to C++ (from CSCI-1100 Computer Science 1)

- Python is a great language to learn the power and flexibility of programming and computational problem solving.  This semester we will work in C++ and study lower level programming concepts, focusing on details including efficiency and memory usage.
- Outside of this class, when working on large programming projects, you will find it is not uncommon to use a mix of programming languages and libraries.  The individual advantages of Python and C++ (and Java, and Perl, and C, and UNIX bash scripts, and ... ) can be combined into an elegant (or terrifyingly complex) masterpiece.

## Compiled Languages vs. Interpreted Languages

- C/C++ is a *compiled language*, which means your code is processed
(compiled & linked) to produce a low-level machine language
executable that can be run on your specific hardware.  You must
re-compile & re-link after you edit any of the files -- although a
smart development environment or *Makefile* will figure out what
portions need to be recompiled and save some time (especially on large
programming projects with many lines of code and many files).  Also,
if you move your code to a different computer you will usually need to
recompile.  Generally the extra work of compilation produces an
efficient and optimized executable that will run fast.

- In contrast, many newer languages including Python, Java, and Perl are
*interpreted languages*, that favor incremental development where
you can make changes to your code and immediately run all or some of
your code without waiting for compilation.  However, an interpreted
program will often run slower than a compiled program.

- These days, the process of compilation is almost instantaneous for
simple programs, and in this course we encourage you to follow the
same incremental editing & frequent testing development strategy that
is employed with interpreted languages.

- Finally, many interpreted languages have a Just-In-Time-Compiler (JIT)
that can run an interpreted programming language and perform
optimization on-the-fly resulting in program performance that rivals
optimized compiled code.  Thus, the differences between compiled and
interpreted languages are somewhat blurry.

- You will practice the cycle of coding & compilation & testing during
Lab 1.  You are encouraged to try out different development
environments (code editor & compiler) and quickly settle on one that
allows you to be most productive.  Ask the your lab TAs & mentors
about their favorite programming environments!  The course website
includes many helpful links as well.

- C++ has more required punctuation than Python, and the syntax is more restrictive.  The compiler will
proofread your code in detail and complain about any mistakes you
make.  Even long-time C++ programmers make mistakes in syntax, and
with practice you will become familiar with the compiler's error
messages and how to correct your code.

## A Sample C++ Program: Find the Roots of a Quadratic Polynomial

```cpp
#include <iostream>   // library for reading & writing from the console/keyboard
#include <cmath>      // library with the square root function & absolute value
#include <cstdlib>    // library with the exit function


// Returns true if the candidate root is indeed a root of the polynomial a*x*x + b*x + c = 0
bool check_root(int a, int b, int c, float root) {
  // plug the value into the formula
  float check = a * root * root + b * root + c;
  // see if the absolute value is zero (within a small tolerance)
  if (fabs(check) > 0.0001) {
    std::cerr << "ERROR:  " << root << " is not a root of this formula." << std::endl;
    return false;
  } else {
    return true;
  }
}

/* Use the quadratic formula to find the two real roots of polynomial.   Returns
true if the roots are real, returns false if the roots are imaginary.  If the roots
are real, they are returned through the reference parameters root_pos and root_neg. */
bool find_roots(int a, int b, int c, float &root_pos, float &root_neg) {
  // compute the quantity under the radical of the quadratic formula
  int radical = b*b - 4*a*c;
  // if the radical is negative, the roots are imaginary
  if (radical < 0) {
    std::cerr << "ERROR:  Imaginary roots" << std::endl;
    return false;
  }
  float sqrt_radical = sqrt(radical);
  // compute the two roots
  root_pos = (-b + sqrt_radical) / float(2*a);
  root_neg = (-b - sqrt_radical) / float(2*a);
  return true;
}

int main() {
  // We will loop until we are given a polynomial with real roots
  while (true) {
    std::cout << "Enter 3 integer coefficients to a quadratic function: a*x*x + b*x + c = 0" << std::endl;
    int my_a, my_b, my_c;
    std::cin >> my_a >> my_b >> my_c;
    // create a place to store the roots
    float root_1, root_2;
    bool success = find_roots(my_a,my_b,my_c, root_1,root_2);
    // If the polynomial has imaginary roots, skip the rest of this loop and start over
    if (!success) continue;
    std::cout << "The roots are: " << root_1 << " and " << root_2 << std::endl;
    // Check our work...
    if (check_root(my_a,my_b,my_c, root_1) && check_root(my_a,my_b,my_c, root_2)) {
      // Verified roots, break out of the while loop
      break;
    } else {
      std::cerr << "ERROR:  Unable to verify one or both roots." << std::endl;
      // if the program has an error, we choose to exit with a
      // non-zero error code
      exit(1);
    }
  }
  // by convention, main should return zero when the program finishes normally
  return 0;
}
```

## Some Basic C++ Syntax

- Comments are indicated using // for single line comments and /* and */ for multi-line comments.
- #include asks the compiler for parts of the standard library and other code that we wish to use (e.g. the
input/output stream function std::cout).
- int main() is a necessary component of all C++ programs; it returns a value (integer in this case) and it
may have parameters.
- { }: the curly braces indicate to C++ to treat everything between them as a unit.
