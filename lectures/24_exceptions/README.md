# Lecture 24 --- C++ Exceptions

## Today’s Lecture

- HW9 Discussion
- Error handling strategies
- Basic exception mechanisms: try/throw/catch (Leetcode 7: Reverse Integer)
- Functions & exceptions, constructors & exceptions
- STL exceptions

## 24.1 Error Handling Strategy A: Optimism (a.k.a. Na¨ıvet´e or Denial)

- Assume there are no errors. Command line arguments will always be proper, any specified files will always be available for read/write, the data in the files will be formatted correctly, numerical calculations will not attempt to divide by zero, etc.

```cpp
double answer = numer / denom;
```

- For small programs, for short term use, by a single programmer, where the input is well known and controlled, this may not be a disaster (and is often fastest to develop and thus a good choice).
- But for large programs, this code will be challenging to maintain. It can be difficult to pinpoint the source of an error. The symptom of a problem (if noticed at all) may be many steps removed from the source. The software system maintainer must be familiar with the assumptions of the code (which is difficult if there is a ton of code, the code was written some time ago, by someone else, or is not sufficiently commented... or all of the above!).

## 24.2 Error Handling Strategy B: Plan for the Worst Case (a.k.a. Paranoia)

- Anticipate every mistake or source of error (or as many as you can think of). Write lots of if statements everywhere there may be a problem. Write code for what to do instead, print out error messages, and/or exit when nothing seems reasonable.

```cpp
double answer;
// for some application specific epsilon (often not easy to specify)
double epsilon = 0.00001;
if (fabs(denom) < epsilon) {
	std::cerr << "detected a divide by zero error" << std::endl;
	// what to do now? (often there is no "right" thing to do)
	answer = 0;
} else {
	answer = numer / denom;
}
```

- Error checking & error handling generally requires a lot of programmer time to write all of this error code.
- The code gets bulkier and harder to understand/maintain.
- If a nested function call might have a problem, and the error needs to be propagated back up to a function
much earlier on the call stack, all the functions in between must also test for the error condition and pass the
error along. (This is messy to code and all that error checking has performance implications).
- Creating a comprehensive test suite (yes, error checking/handling code must be tested too!) that exercises all
the error cases is extremely time consuming, and some error situations are very difficult to produce.

## 24.3 Error Handling Strategy C: If/When It Happens We’ll Fix It (a.k.a. Procrastination)

- Again, anticipate everything that might go wrong and just call assert in lots of places. This can be somewhat less work than the previous option (we don’t need to decide what to do if the error happens, the program just exits immediately).

```cpp
double epsilon = 0.00001;
assert (fabs(denom) > epsilon);
answer = numer / denom;
```
- This can be a great tool during the software development process. Write code to test all (or most) of the assumptions in each function/code unit. Quickly get a prototype system up and running that works for the general, most common, non-error cases first.
- If/when an unexpected input or condition occurs, then additional code can be written to more appropriately
handle special cases and errors.
- However, the use of assertions is generally frowned upon in real-world production code (users don’t like to receive seemingly arbitrary & total system failures, especially when they paid for the software!).
- Once you have completed testing & debugging, and are fairly confident that the likely error cases are appropriately handled, then the gcc compile flag -DNDEBUG flag can be used to remove all remaining assert statements before compiling the code (conveniently removing any performance overhead for assert checking).

## 24.4 Error Handling Strategy D: The Elegant Industrial-Strength Solution

- Use exceptions. Somewhat similar to Strategy B, but in practice, code written using exceptions results in more efficient code (and less overall code!) and that code is less prone to programming mistakes.

```cpp
double epsilon = 0.00001;
try {
	if (fabs(denom) < epsilon) {
		throw std::string("divide by zero");
	}
	double answer = numer / denom;
	/* do lots of other interesting work here with the answer! */
}
catch (std::string &error) {
	std::cerr << "detected a " << error << " error" << std::endl;
	/* what to do in the event of an error */
}
```

## 24.5 Basic Exception Mechanisms: Throw

- When you detect an error, throw an exception. Some examples:

```cpp
throw 20;
throw std::string("hello");
throw Foo(2,5);
```
- You can throw a value of any type (e.g., int, std::string, an instance of a custom class, etc.)
- When the throw statement is triggered, the rest of that block of code is abandoned

## 24.6 Basic Exception Mechanisms: Try/Catch

- If you suspect that a fragment of code you are about to execute may throw an exception and you want to prevent the program from crashing, you should wrap that fragment within a try/catch block:

```cpp
try {
	/* the code that might throw */
}
catch (int x) {
	/* what to do if the throw happened
	(may use the variable x)
	*/
}
/* the rest of the program */
```
- The logic of the try block may throw more than one type of exception.
- A catch statement specifies what type of exception it catches (e.g., int, std::string, etc.)
- You may use multiple catch blocks to catch different types of exceptions from the same try block.
- You may use catch (...) { /* code */ } to catch all types of exceptions. (But you don’t get to use the
value that was thrown!)
- If an exception is thrown, the program searches for the closest enclosing try/catch block with the appropriate
type. That try/catch may be several functions away on the call stack (it might be all the way back in the main
function!).
- If no appropriate catch statement is found, the program exits, e.g.:

```console
terminate called after throwing an instance of 'bool'
Abort trap
```

## 24.7 Basic Exception Mechanisms: Functions

If a function you are writing might throw an exception, you can specify the type of exception(s) in the prototype.

```cpp
int my_func(int a, int b) throw(double,bool) {
	if (a > b)
		throw 20.3;
	else
		throw false;
}

int main() {
	try {
		my_func(1,2);
	}
	catch (double x) {
		std::cout << " caught a double " << x << std::endl;
	}
	catch (...) {
		std::cout << " caught some other type " << std::endl;
	}
}
```
- If you use the throw syntax in the prototype, and the function throws an exception of a type that you have
not listed, the program will terminate immediately (it can’t be caught by any enclosing try statements).
- If you don’t use the throw syntax in the prototype, the function may throw exceptions of any type, and they
may be caught by an appropriate try/catch block.

## 24.8 Comparing Method B (explicit if tests) to Method D (exceptions)

Here’s code using exceptions to sort a collection of lines by slope:

```cpp
class Point {
public:
Point(double x_, double y_) : x(x_),y(y_) {}
double x,y;
};
class Line {
public:
Line(const Point &a_, const Point &b_) : a(a_),b(b_) {}
Point a,b;
};
double compute_slope(const Point &a, const Point &b) throw(int) {
double rise = b.y - a.y;
double run = b.x - a.x;
double epsilon = 0.00001;
if (fabs(run) < epsilon) throw -1;
return rise / run;
}
double slope(const Line &ln) {
return compute_slope(ln.a,ln.b);
}
bool steeper_slope(const Line &m, const Line &n) {
double slope_m = slope(m);
double slope_n = slope(n);
return slope_m > slope_n;
}
void organize(std::vector<Line> &lines) {
std::sort(lines.begin(),lines.end(), steeper_slope);
}
int main () {
std::vector<Line> lines;
/* omitting code to initialize some data */
try {
organize(lines);
/* omitting code to print out the results */
} catch (int) {
std::cout << "error: infinite slope" << std::endl;
}
}
```

Specifically note the behavior if one of the lines has infinite slope (a vertical line).
- Note also how the exception propagates out through several nested function calls.
- Exercise: Rewrite this code to have the same behavior but without exceptions. Try to preserve the overall
structure of the code as much as possible. (Hmm... it’s messy!)

## 24.9 STL exception Class

STL provides a base class std::exception in the <exception> header file. You can derive your own exception
type from the exception class, and overwrite the what() member function

```cpp
class myexception: public std::exception {
virtual const char* what() const throw() {
return "My exception happened";
}
};
int main () {
myexception myex;
try {
throw myex;
}
catch (std::exception& e) {
std::cout << e.what() << std::endl;
}
return 0;
}
```
- The STL library throws several different types of exceptions (all derived from the STL exception class):

```console
bad alloc thrown by new on allocation failure
bad cast thrown by dynamic cast (when casting to a reference variable rather than a pointer)
bad exception thrown when an exception type doesn’t match any catch
bad typeid thrown by typeid
ios base::failure thrown by functions in the iostream library
```

## 24.10 Exceptions & Constructors

The only way for a constructor to fail is to throw an exception.
- A common reason that a constructor must fail is due to a failure to allocate memory. If the system cannot
allocate sufficient memory resources for the object, the bad alloc exception is thrown.

```cpp
try {
int* myarray= new int[1000];
}
catch (std::exception& e) {
std::cout << "Standard exception: " << e.what() << std::endl;
}
```
- It can also be useful to have the constructor for a custom class throw a descriptive exception if the arguments
are invalid in some way.

## 23.10 Leetcode Exercises

- [Leetcode problem 7: Reverse Integer](https://leetcode.com/problems/sort-an-array/). Solution: [p7_reverse_integers.cpp](../../leetcode/p7_reverse_integers.cpp).
