# Lab 3 — Testing, and Debugging

For this lab, you must use a terminal. Do not use IDEs for this lab.

## Checkpoint 1 & 2:

Checkpoints 1 and 2 are an introduction to using a command line debugger: **gdb** or **lldb**.

Testing and debugging are important steps in programming. Loosely, you can think of testing as verifying
that your program works and debugging as finding and fixing errors once you’ve discovered it does not.
Writing test code is an important (and sometimes tedious) step. Many software libraries have “regression
tests” which run automatically to verify that code is behaving the way it should.

Here are four strategies for testing and debugging:

1. When you write a class, write a separate “driver” main function that calls each member function,
providing input that produces a known, correct result. Output of the actual result or, better yet,
automatic comparison between actual and correct result allows for verifying the correctness of a class
and its member functions.

2. Carefully reading the code. In doing so, you must strive to read what the code actually says and does
rather than what you think and hope it will do. Although developing this skill isn’t necessarily easy, it
is important.

3. Using the debugger to (a) step through your program, (b) check the contents of various variables, and
(c) locate floating point exceptions and segmentation violations that cause your program to crash.

4. Judicious use of std::cout statements to see what the program is actually doing. This is useful for
printing the contents of a large data structure or class, especially when it is hard to visualize large
objects using the debugger alone.

## Points, Lines, and Slopes

The programming context for this lab is calculating and sorting lines by their slope. We could use information
in a map program that is plotting bicycle routes. Some users might want to pick routes that avoid the steepest
roads. Other users looking for a challenge might specifically seek out the biggest uphill sections!
Our program juggles a number of source code files that define two helper classes, a 3D Point and a Line
connecting two Points.

Please save the following source code files needed for this lab:

point.h

```cpp
#include <iostream>

// A simple 3D point class.  In this simple world, we'll follow the
// convention often used in Computer Graphics.  y is the vertical
// axes, "pointing" up.  The x and z axes define the ground plane.

class Point {
public:
  // CONSTRUCTOR
  Point(double x, double y, double z) : x_(x),y_(y),z_(z) {}
  // ACCESSORS
  double get_x() const { return x_; }
  double get_y() const { return y_; }
  double get_z() const { return z_; }  
private:
  // REPRESENTATION
  double x_,y_,z_;
};

// A helper function to print a Point.
std::ostream& operator<< (std::ostream &ostr, const Point &p);

// A helper function to compute the slope between two Points.
double compute_slope(const Point &a, const Point &b);
```

point.cpp

```cpp
#include <cmath>
#include <iomanip>
#include "point.h"

// A helper function to print a Point.
std::ostream& operator<< (std::ostream &ostr, const Point &p) {
  ostr << std::fixed << std::setprecision(1)
       << "<"
       << std::setw(5) << p.get_x() << ","
       << std::setw(5) << p.get_y() << ","
       << std::setw(5) << p.get_z() << ">";
  return ostr;
}

// A helper function to compute the slope between two Points.
double compute_slope(const Point &a, const Point &b) {
  double rise = b.get_y() - a.get_y();
  double run_x = b.get_x() - a.get_x();
  double run_z = b.get_z() - a.get_z();
  double run = sqrt(run_x*run_x + run_z*run_z);
  double answer = rise / run;
  return rise / run;
}
```

line.h

```cpp
#include "point.h"

// A simple line class.  In this simple world, we'll follow the
// convention often used in Computer Graphics.  y is the vertical
// axes, "pointing" up.  The x and z axes define the ground plane.

class Line {
public:
  Line(const Point &a_, const Point &b_) : a(a_),b(b_) {}
  const Point& get_a() const { return a; }
  const Point& get_b() const { return b; }
private:
  Point a,b;
};

// A helper function to print a Line.
std::ostream& operator<< (std::ostream &ostr, const Line &l);

// A helper function to gradient of a line.
double gradient(const Line &ln);

// A helper function to compare the gradient of two Lines.
// (That can be used to sort a collection of roads.)
bool steeper_gradient(const Line &m, const Line &n);
```

line.cpp

```cpp
#include "point.h"

// A simple line class.  In this simple world, we'll follow the
// convention often used in Computer Graphics.  y is the vertical
// axes, "pointing" up.  The x and z axes define the ground plane.

class Line {
public:
  Line(const Point &a_, const Point &b_) : a(a_),b(b_) {}
  const Point& get_a() const { return a; }
  const Point& get_b() const { return b; }
private:
  Point a,b;
};

// A helper function to print a Line.
std::ostream& operator<< (std::ostream &ostr, const Line &l);

// A helper function to gradient of a line.
double gradient(const Line &ln);

// A helper function to compare the gradient of two Lines.
// (That can be used to sort a collection of roads.)
bool steeper_gradient(const Line &m, const Line &n);
```

roads.cpp

```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <fstream>

#include "line.h"

// A helper function to parse a collection of files from an input file.
std::vector<Line>& load(std::ifstream &istr) {
  std::vector<Line> roads;
  float x1,y1,z1,x2,y2,z2;
  while (istr >> x1 >> y1 >> z1 >> x2 >> y2 >> z2) {
    roads.push_back(Line(Point(x1,y1,z1),Point(x2,y2,z2)));
  }
  return roads;
}

// A helper function to sort our road collection by gradient (steepest first).
void organize(std::vector<Line> &roads) {
  std::sort(roads.begin(),roads.end(), steeper_gradient);
}

// A helper function to print data about the collection of roads.
void print(const std::vector<Line> &roads) {

  // print each road in the current, sorted order (steepest first)
  for (int i = 0; i < roads.size(); i++) {
    std::cout << roads[i] << std::endl;
  }

  // count the number of roads with gradient less than 10%
  int count;
  for (unsigned int i = roads.size() - 1;
       i >= 0  && gradient(roads[i]) < 10.0;
       i--) {
    count++;
  }
  std::cout << "There are " << count << " road(s) with gradient less than 10%." << std::endl;
}

// This program expects a single argument, the name of the file containing our input data.
int main (int argc, char* argv[]) {

  // check the arguments and open the input file for reading
  if (argc != 2) {
    std::cerr << "ERROR: Usage: " << argv[0] << " <input_file>" << std::endl;
    return 1;
  }
  std::ifstream istr(argv[1]);
  if (!istr.good()) {
    std::cerr << "ERROR: the file " << argv[1] << " was not successfully opened for reading." << std::endl;
    return 1;
  }

  // load the data from the input file
  std::vector<Line> roads = load(istr);

  // sort the roads by gradient, and print information about the roads
  organize(roads);
  print(roads);
}
```

As well as the following data files:

input_a.txt

```text
0 0 0   10 2 0
0 0 0   15 1 0
0 0 0   10 0 0
0 0 0   20 3 0
```

input_b.txt

```text
0 2 0   30 1 0
40 1 0  0 0 0   
10 0 0  30 3 0
0 1 10  0 3 0
10 3 0  0 1 5   
1 1 0   30 0 0
0 2 0   30 2 0
```
  
input_c.txt

```text
0 0 0   30 1 0
0 0 0   10 3 10
0 0 0   20 3 20
0 0 0   30 3 0
0 0 0   0  3 0
0 0 0   10 3 20
0 0 0   0  3 20
```
  
input_d.txt

```text
0 2 0   30 1 0
40 1 0  0 0 0   
10 4 0  30 3 0
0 1 10  0 3 40
10 3 20  -25 1 5   
1 1 0   30 0 0
0 2 0   30 2 0
-20 2 0   30 1 0
40 1 0  10 0 0   
10 2 0  30 4 20
0 2 10  -20 3 30
10 3 0  0 2 15   
1 1 0   30 0 0
0 2 0   30 2 0
```
  
## Checkpoint 1

1. Examine the provided files briefly. How are the files related or dependent upon each other? 
Hint: Look at the #include statements. 
Read through the comments from the developer about the purpose of each class and function.
**Note**: We have intentionally placed a number of bugs in the program that 
  will cause problems when you attempt to compile and then run these programs.
  Even if you spot the problems, don’t fix them yet!

2. When you’re confident you understand what the original programmer was aiming to do, let’s compile
and run the program. Take careful step-by-step notes about every command you run, and every line
of the program you add or edit (and why you make that edit). Create a new README.txt file to
organize your notes. You’ll need to show these to your TA/mentor to get checked off for today’s lab.
3. What command line(s) are necessary to compile these files into an executable? Be sure to enable all
recommended warnings for the Data Structures course by using the **-Wall -Wextra** flags. 
Also use the **-g** flag which will include source code line numbers and other useful information for the debugger.
4. The program as provided may not compile without error. 
Perform the minimal edits to the source code files necessary to remove the compilation ERROR and produce an executable. 
**IMPORTANT: Do not fix any of the compilation WARNINGs yet.**
5. Run the program with each of the provided input data files.
Take notes on what appears to be working correctly and if anything looks buggy.
6. Now let’s examine those compilation warnings a little more closely.
Oftentimes programmers can get lazy and ignore compilation warnings
because these warnings aren’t necessarily showstoppers that prevent us from testing
and running our program on initial datasets. 
But some compilation warnings are actually very dangerous and can prevent the program from successfully handling all possible input
datasets or even from running at all!

Here’s a list of the categories for some of the more common compilation warnings we see in the Data Structures course. 
You should see all or most of these when you compile the provided code.

  - warning: expression result unused / expression has no effect 
  - warning: control reaches / may reach end of non-void function 
  - warning: variable is uninitialized when used here / in this function 
  - warning: comparison of integers of different signs: 'int' and 'unsigned int'
  - warning: returning reference to local temporary object /
reference to stack memory associated with a local variable returned 
  - warning: unused variable

7. Study the source code referenced by each specific compilation warning. Do you see the cause of the
warning? Some or all of these warnings might be actual logic or math bugs that will cause the problem
to crash or return bad data for some or all inputs. Do you see the problem? Do you know how to fix it?
**IMPORTANT: Don’t fix the problems yet**. And don’t worry if you don’t see the error – just
staring at the code is not the only debugging technique nor is it the most effective debugging technique
for large programs!

**To complete this checkpoint**, show a TA your detailed notes on compilation, the minimal edits necessary
to produce an executable, and the results of your preliminary testing. Be prepared to discuss your observations
and any logic or math bugs that you belive you have found (but not yet fixed!) in the code.

## Checkpoint 2

Now, we will practice using the debugger to find and fix errors. Today we’ll learn how to use the gcc/g++
command line debugger, gdb from the GNU/Linux/Ubuntu or MacOSX terminal. NOTE: On Mac OSX, you
are probably actually using the llvm/clang++ compiler, so you’ll use lldb instead of gdb in the instructions
below. If you didn’t already install gdb/lldb, 
review the installation instructions on the course webpage (see the Development Environment page).

And here’s a handy table mapping gdb commands to lldb commands:

https://lldb.llvm.org/use/map.html 

After today’s lab, you should be comfortable with the basics of command line debugging within your preferred
development environment. Keep practicing with the debugger on your future homeworks, and be prepared
to demonstrate debugger skills when you ask for help in office hours.
1. Identify a program and (as appropriate) a test dataset that has buggy behavior or output.
2. Getting started: When you plan to use the gdb (or lldb) debugger to investigate your program you
need to make sure you have linked the code with the -g option to add debug information (including,
source code line numbers!) to the executable.
For example (replacing file1.cpp file2.cpp with your source code):

```console
g++ -g -Wall -Wextra file1.cpp file2.cpp -o executable.exe
```

In order to start gdb, type (replacing executable.exe with your program):

```console
gdb executable.exe
```

NOTE: You can specify command line arguments to your executable on the gdb/lldb command line
OR you can specify those command line arguments a little bit later, when you run your executable
inside the debugger. Refer to documentation, e.g.: https://lldb.llvm.org/use/map.html

3. Now we’re inside the command-line debugger. Type *help* in order to see the list of commands.
There are several commands for setting breakpoints. You can set a breakpoint by specifying a function
name or a line number within a file. For example:

```console
break main
```

sets a breakpoint at the start of the main function. You can also set a breakpoint at the start of a
member function, as in:

```console
break Point::get_x
```

Finally, to set a breakpoint at a specific line number in a file, you may type:

```console
break line.cpp:31
```

Set a breakpoint at some point in your code just before (in order of execution!) you think the first error
might occur. Finally, in order to actually start running the program under control of the debugger,
you will need to type *run* at the gdb command line.  

4. Stepping through the program:
You can step through the code using the commands *next* (move to the next line of code), 
*step* (enter the function), and *finish* (leave the function). 
The command *continue* allows you to move to the next breakpoint.  

5. Examining the content of variables:
  - You can use *print* to see the values of variables and expressions.  
  - You can use the command *display* to see the contents of a particular variable or expression when the program is stopped.

6. Program flow:

The command *backtrace* can be used to show the contents of the call stack. This is particularly
important if your program crashes. Unfortunately, the crash often occurs inside C++ library code.
Therefore, when you look at the call stack the first few functions listed may not be your code.
This does not mean that the C++ library has an error! Instead it likely means that your code has
called the library incorrectly or passed the library bad data. Find the function on the stack that is the
nearest to the top of the stack that is actually your code. By typing *frame N*, where *N* is the index of
the function on the stack, you can examine your code and variables and you can see the line number
in your code that caused the crash. Type *info locals* and *info args* to examine the data in the
function. Type *list* to see the source code.

7. Breakpoint on Variable Change: The last powerful debugger feature we will try today is variable
monitoring. Add a new modifier member function to the *Point* class named *set_elevation* that changes the *y* coordinate of a *Point* instance. 
Create an instance of a *Point* object in the *main* function called *pt*.  
Use the *set_elevation* function on that instance.  
You can use the command *watch* to halt the program when a variable or expression changes.  
For example, type *watch pt.y*. You can try the the *rwatch* command which allows you to break on a read of the value (not just a change).  
NOTE: Students have recently (in the past term or two) reported difficulty getting watch points to work
inside their command line debuggers. So don’t worry if you also cannot get this feature to work today.

Continue to experiment with these different debugger operations. You can now start to fix the bugs in
the program that were hinted at by the compilation warnings. Remember to recompile the program and
re-launch the debugger after each change to the source code. Continue to take detailed notes on what edits
you make to the provided source code.
  
**When you feel comfortable showing off all these debugger features, put your name in the
queue for checkoff for this checkpoint.** The TA/mentor will be asking you to demonstrate these features
and discuss the compilation warnings and bugs in the provided code. You will also be asked questions about
the other steps in debugging.
  
## Checkpoint 3

This checkpoint is designed to demonstrate that you fully understand **your own homework code**.

1. Find a partner in the room and form a group of **two students**.
2. Each student should compile their own **hw1** code with debugging symbols enabled (`-g`).
3. Take turns performing the following steps:
   - Show your code to your partner.
   - Your partner selects a specific **line number** in your code.
   - Start **gdb** or **lldb** using your compiled executable.
   - Set a breakpoint at the specified line.
   - Your partner then proposes a **test case**.
   - You must **predict** whether the test case will trigger the breakpoint.
   - Run the program in **gdb** or **lldb** using the given test case and **verify your prediction**.

Repeat this process several times so that **both partners are comfortable with the workflow**.
If a prediction is incorrect, discuss it with your partner and work together to understand **why the breakpoint was or was not triggered**.

---

### To complete this checkpoint

You must now demonstrate the same process to a **TA or mentor**:

1. Show your **hw1** code to the TA/mentor.
2. The TA/mentor will choose:
   - A breakpoint **line number** in your code, and  
   - A **test case**.
3. You must **predict** whether the test case will trigger the breakpoint.
4. Set a breakpoint at the specified line.
5. Run the program in the debugger and **verify your prediction**.

- If your prediction is correct, explain to the TA/mentor why the breakpoint was or was not triggered, and you pass the checkpoint.
- If your prediction is **incorrect**, you are given **one additional attempt**:
  - The TA/mentor will choose a different line and a different test case.
  - You must again make a prediction and validate it.
- You pass the checkpoint only if your prediction is correct on either attempt and
  you can clearly explain why the breakpoint was or was not triggered.
- If both predictions are incorrect or you can't why the breakpoint was or was not triggered, 
  you will **not receive credit** for this checkpoint.
