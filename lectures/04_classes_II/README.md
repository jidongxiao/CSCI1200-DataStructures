<!--# Test 1 Information
– Students will be randomly assigned to a test room and seating zone – will be on Submitty Wednesday
morning.
  – If you haven’t filled out the “Left or Right Handed” gradeable by Tuesday night, we will assume you are
right handed. This is used for seating assignments.
- Test 1 will be held **Thursday, 09/21/2023 from 6-7:50pm**.  
  – No make-ups will be given except for pre-approved absence or illness, and a written excuse from the Dean
of Students or the Student Experience office or the RPI Health Center will be required.  
  – If you have a letter from Disability Services for Students and you have not already emailed it to
ds_instructors@cs.rpi.edu, please do so ASAP. Shianne Hulbert will be in contact with you about
your accommodations for the test.
- Coverage: Lectures 1-6, Labs 1-3, and Homeworks 1-2.
  – Practice problems from previous exams are available on the course website (Friday morning). Solutions
to the problems will be posted Monday morning. The best way to prepare is to completely work through
and write out your solution to each problem, before looking at the answers.
- OPTIONAL: you are allowed two physical pieces of 8.5x11” paper, that’s four “sides”. We will not collect these electronically and we will not pre-print them, you will have to bring these notes pages yourself if you want them. We will check at the start of the exam that you do not have more than two pieces of paper for your notes!
- OPTIONAL: Prepare a 2 page, black & white, 8.5x11”, portrait orientation .pdf of notes you would like to
have during the exam. This may be digitally prepared or handwritten and scanned or photographed. The file
may be no bigger than 2MB. You will upload this file to Submitty (“Test 1 Notes Upload”) before Wednesday
night @11:59pm. We will print this and attach it to your exam. Make sure you get credit for test case 2 and
that you view the details to verify your sheet looks correct. You cannot bring your own cribsheet, you must
submit one electronically.
IMPORTANT: Using third party websites to make a PDF may generate an invalid PDFs that prints weird. Your
word processor’s -> save as/export to PDF, or Google Docs -> Download -> PDF should be safe.
- Bring to the exam room:  
  – Your Rensselaer photo ID card.  
  – Pencil(s) & eraser (pens are ok, but not recommended). The exam will involve handwriting code on paper (and other short answer problem solving). Neat legible handwriting is appreciated. We will be somewhat forgiving to minor syntax errors – it will be graded by humans not computers.  
  – Computers, cell-phones, smart watches, calculators, music players, etc. are not permitted. Please do not bring your laptop, books, backpack, etc. to the exam room – leave everything in your dorm room. Unless you are coming directly from another class or sports/club meeting.
– Do not bring your own scratch paper. We will provide scratch paper. -->

# Lecture 4 ---  Classes II: Copy Constructor, Assignment Operator, Destructor, and Non-member Operators

<!--- Classes in C++;
- Non-member operators

## 4.1 C++ Classes

- Nuances to remember

  - Within class scope (within the code of a member function) member variables and member functions of
that class may be accessed without providing the name of the class object.  
  - Within a member function, when an object of the same class type has been passed as an argument, direct
access to the private member variables of that object is allowed (using the ’.’ notation).

## 4.2 Operator Overloading

- When sorting objects of a custom class, we can provide a third argument to the sort function, and this third argument is a comparison function.
- What if we do not want to provide this third argument? The answer is: define a function that creates a < operator for objects of that class! At first, this seems a bit weird, but it is extremely useful.
- Let’s start with syntax. The expressions a < b and x + y are really function calls!
Syntactically, they are equivalent to operator< (a, b) and operator+ (x, y) respectively.
- When we want to write our own operators, we write them as functions with these weird names.
- For example, if we write:

```cpp
bool operator< (const Date& a, const Date& b) {
return (a.getYear() < b.getYear() ||
(a.getYear() == b.getYear() && a.getMonth() < b.getMonth()) ||
(a.getYear() == b.getYear() && a.getMonth() == b.getMonth() && a.getDay() < b.getDay()));
}
```
then the statement

```cpp
sort(dates.begin(), dates.end());
```
will sort Date objects into chronological order.
- Really, the only weird thing about operators is their syntax.
- We will have many opportunities to write operators throughout this course. Sometimes these will be made class member functions, but more on this in a later lecture.

## 4.3 Questions

- Can you solve leetcode problem 905 with an overloaded operator &lt;, and make this overloaded operator &lt; a non-member function?
- Can you solve leetcode problem 905 with an overloaded operator &lt;, and make this overloaded operator &lt; a member function?
- Can you solve leetcode problem 905 with an overloaded operator &lt;, and make this overloaded operator &lt; a member function, plus make the definition of this member function outside of the class definition?
-->
## 4.1 Member Initializer List in C++

A **member initializer list** is a special syntax in C++ that allows class members to be initialized directly before the constructor body executes. It is used in the constructor definition, right after the parameter list and before the body of the constructor.

### Syntax
```cpp
ClassName(parameter_list) : member1(value1), member2(value2), ... {
    // Constructor body (optional, can be empty)
}
```

### Example

```cpp
#include <iostream>
#include <string>

class MyClass {
private:
    std::string name;

public:
    // Constructor with member initializer list
    MyClass(const std::string& initName) : name(initName) {}
    
    void display() const {
        std::cout << "Name: " << name << std::endl;
    }
};

int main() {
    MyClass obj("Alice");
    obj.display(); // Output: Name: Alice
    return 0;
}
```

## 4.2 Copy Constructor

- A copy constructor is a constructor which is used to create a new object as a copy of an existing object of the same class.
<!-- - Copy constructors are automatically generated by the compiler if you do not provide one explicitly. However, if your class uses dynamic memory (which will be covered in next lecture), and you want a copy constructor, then you must write your own copy constructor.-->
- Copy constructors get called when you create a new object by copying an existing object using the assignment operator (=), or when you pass an object by value to a function.

### Copy Constructor Syntax

```cpp
ClassName(const ClassName& other);
```

### Copy Constructor Example

```cpp
#include <iostream>

class MyClass {
private:
    int value;

public:
    // Constructor
    MyClass(int val) : value(val) {}

    // Copy Constructor
    MyClass(const MyClass& other) {
        value = other.value;
        std::cout << "Copy Constructor Called!" << std::endl;
    }

    void display() const {
        std::cout << "Value: " << value << std::endl;
    }
};

int main() {
    MyClass obj1(10);
    MyClass obj2 = obj1; // Copy constructor is called here

    obj2.display(); // Output: Value: 10
    return 0;
}
```

## 4.3 Assignment Operator

- The assignment operator (=) is used to copy the values from one object to another after both objects have been created.

### Assignment Operator Syntax:

```cpp
ClassName& operator=(const ClassName& other);
```

### Assignment Operator Example:

```cpp
#include <iostream>
#include <string>

class MyClass {
private:
    std::string name;
public:
    MyClass(const std::string& initName) : name(initName) {}

    MyClass& operator=(const MyClass& other) {
        name = other.name; // Copy data
        return *this;
    }

    void print() const { std::cout << "Name: " << name << std::endl; }
};

int main() {
    MyClass obj1("Object1");
    MyClass obj2("Object2");

    obj1 = obj2; // Assignment operator invoked
    obj1.print(); // Output: Name: Object2
    return 0;
}
```

All C++ class objects have a special pointer defined called **this** which simply points to the current class object, and the expression **this* is a reference to the class object.

Assignment operators of the form:
```cpp
obj1 = obj2;
```
are translated by the compiler as:
```cpp
obj1.operator=(obj2);
```
- Cascaded assignment operators of the form:
```cpp
obj1 = obj2 = obj3;
```
are translated by the compiler as:
```cpp
obj1.operator=(obj2.operator=(obj3));
```
- Therefore, the value of the assignment operator (obj2 = obj3) must be suitable for input to a second assignment operator. This in turn means the result of an assignment operator ought to be a reference to an object.

**Note**: In C++, the assignment operator is used for assignment after an object has already been created. And because of that, the following two code snippets behave differently.

```cpp
myClass A = B;
```

This one line will invoke the copy constructor, rather than the assignment operator. And this behavior is called copy initialization.

```cpp
myClass A;
A = B;
```

These two lines will: the first line creates the object A, and the second line invokes the assignment operator.

## 4.4 Destructor (the “constructor with a tilde/twiddle”)

A **destructor** is a special member function automatically called when an object goes out of scope or is explicitly deleted.
<!-- - The destructor is responsible for deleting the dynamic memory “owned” by the class.
- The syntax of the function definition is a bit weird. The ~ has been used as a bit-wise inverse or logic negation in other contexts.-->

### Destructor Syntax

```cpp
~ClassName();
```

### Destructor Example

```cpp
#include <iostream>

class MyClass {
public:
    MyClass() { std::cout << "Constructor called" << std::endl; }
    ~MyClass() { std::cout << "Destructor called" << std::endl; }
};

int main() {
    MyClass obj1; // Constructor called
    MyClass obj2; // Constructor called
    // Destructor will be called automatically at the end of scope
    return 0;
}
```

**Question**: in the above example, obj1's destructor or obj2's destructor, which one gets called first?

## 4.5 Overloading `operator<<` in C++

### Purpose
The `operator<<` is commonly overloaded to enable custom objects to be output using streams such as `std::cout`.

### Example
```cpp
#include <iostream>
#include <string>

class Person {
private:
    std::string name;
    int age;

public:
    // Constructor
    Person(const std::string& name, int age) : name(name), age(age) {}

    // Public getters
    std::string getName() const { return name; }
    int getAge() const { return age; }
};

// Non-member function
std::ostream& operator<<(std::ostream& os, const Person& person) {
    os << "Name: " << person.getName() << ", Age: " << person.getAge();
    return os;
}

int main() {
    Person p("Alice", 30);
    std::cout << p << std::endl; // Output: Name: Alice, Age: 30
    return 0;
}
```

**Question:** Can we overload this operator as a member function?

## 4.6 Exercises

- [Leetcode problem 56: Merge Intervals](https://leetcode.com/problems/merge-intervals/). Solution: [p56_mergeintervals.cpp](../../leetcode/p56_mergeintervals.cpp)
- [Leetcode problem 905: Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/). Solution: [p905_sortarraybyparity.cpp](../../leetcode/p905_sortarraybyparity.cpp)
- [Leetcode problem 1929: Concatenation of Array
](https://leetcode.com/problems/concatenation-of-array/). Solution: [p1929_concatenationofarray.cpp](../../leetcode/p1929_concatenationofarray.cpp)
