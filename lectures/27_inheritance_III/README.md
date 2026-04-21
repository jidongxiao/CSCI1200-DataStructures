# Lecture — C++ Inheritance and Polymorphism - Part III
Instructor: Jidong Xiao, RPI

---

## 0. Review: Virtual Function and Virtual Pointer (vptr)

>**Question** What is the memory size of this CSStudent class on a 64-bit computer?

```cpp
class CSStudent {
        int age;
        virtual void print(){
                std::cout << "I am a CS student." << std::endl;
        }
        virtual void print2(){
                std::cout << "I am still a CS student." << std::endl;
        }
        virtual void print3(){
                std::cout << "I am still a CS student." << std::endl;
        }
};
```

### Alignment Requirements of Basic Data Types (Typical 64-bit System)

> Note: Exact values are platform/ABI dependent (e.g., x86-64 System V ABI is most common on Linux/macOS). The values below are the typical modern 64-bit alignment rules.

---

### Key Idea

Each data type has:
- **Size** → how many bytes it occupies
- **Alignment requirement** → the address must be a multiple of this value

---

### Basic Types

| Data Type        | Typical Size | Alignment Requirement |
|------------------|-------------|------------------------|
| `char`           | 1 byte      | 1 byte                |
| `bool`           | 1 byte      | 1 byte                |
| `short`          | 2 bytes     | 2 bytes               |
| `int`            | 4 bytes     | 4 bytes               |
| `float`          | 4 bytes     | 4 bytes               |
| `double`         | 8 bytes     | 8 bytes               |
| `long long`      | 8 bytes     | 8 bytes               |
| pointer (`T*`)   | 8 bytes     | 8 bytes               |

- Most types are aligned to their own size

---

#### Struct alignment rule

A struct’s alignment = **maximum alignment of its members** (This rule applies to classes as well).

Example:

```cpp
struct Example {
    char c;     // 1-byte alignment
    int x;      // 4-byte alignment
    double d;   // 8-byte alignment
};
```

Given this above example, the struct alignment = 8 bytes.

#### Padding Rule

The compiler ensures:

- Each member starts at a valid alignment boundary  
- Struct size is a multiple of its alignment requirement  

This introduces:
- **internal padding** (between members)  
- **tail padding** (at the end of struct)  

#### Layout in memory:

```txt
Offset 0:   c (1 byte)
Offset 1-3: padding (3 bytes)
Offset 4-7: x (4 bytes)
Offset 8-15: d (8 bytes)
```

- Total size is 16 bytes

What happens if we reorder members?

Reordered struct:

```cpp
struct Example2 {
    char c;     // 1 byte
    double d;   // 8 bytes
    int x;      // 4 bytes
};
```

#### Layout in memory:

```txt
Offset 0:     c (1 byte)
Offset 1-7:   padding (7 bytes)   // to align double to 8-byte boundary
Offset 8-15:  d (8 bytes)
Offset 16-19: x (4 bytes)
Offset 20-23: padding (4 bytes)   // to make struct size multiple of 8
```

- Total size is 24 bytes

>Conclusion: the order of struct/class members affects the memory size of the struct/class object.

---

## 1. Multiple Inheritance

- Multiple inheritance allows a class to inherit from more than one base class.

- The following program is an example:

```cpp
#include <iostream>

class B
{
public:
	B(int b1):b(b1){}
protected:
	int b;
};

class C
{
public:
	C(int c1):c(c1){}
protected:
	int c;
};

class D: public B, public C
{
public:
	D(int b1, int c1):B(b1),C(c1),d(b1+c1){}

	void print(){
		std::cout << "d is " << d << std::endl;
	}
protected:
	int d;
};

int main(){
	D* dOjbect = new D(2,3);
	dOjbect->print();
	return 0;
}
```

>**Question** What does this program print?

## 2. The Diamond Problem

- The Diamond Problem occurs in multiple inheritance when two classes inherit from the same base class, and a fourth class inherits from both of those.

```
        Human
        /  \
   Student  Worker
        \  /
         TA
```

- Both Student and Worker inherit from Human.

```cpp
class Human {
public:
    void speak();
};

class Student : public Human {};
class Worker : public Human {};

class TA : public Student, public Worker {};
```

- TA inherits from both Student and Worker.

- Compiler sees two Human base classes.

- This leads to duplicate data and ambiguous member resolution.

```cpp
TA ta;
ta.speak(); // Ambiguous: which Human::speak()?
```

### Solution: Virtual Inheritance

- Use the virtual keyword when inheriting the common base class.

```cpp
class Student : virtual public Human {};
class Worker  : virtual public Human {};
class TA : public Student, public Worker {};
TA ta;
ta.speak(); // No ambiguity
```

- How it works:

  - Compiler ensures only one shared instance of Human.

  - Student and Worker do not create their own copies of Human.

  - Memory layout uses pointers behind the scenes to share the base.

### Constructor Order with Virtual Inheritance

```cpp
#include <iostream>

class Human {
public:
    Human(int age) {
        std::cout << "Human constructed with age = " << age << "\n";
    }
};

class Student : virtual public Human {
public:
    Student() : Human(0) {
        std::cout << "Student constructor\n";
    }
};

class CSStudent : public Student {
public:
    CSStudent() : Human(21), Student() {
        std::cout << "CSStudent constructor\n";
    }
};

int main() {

    std::cout << "=== Case 1: Construct Student directly ===\n";
    Student s;

    std::cout << "\n=== Case 2: Construct CSStudent ===\n";
    CSStudent cs;

    return 0;
}
```

- When virtual inheritance is involved:
  - Most derived class is responsible for calling the base constructor.

#### Case 1: Constructing `Student` directly

```cpp
Student s;
```

- Student is the most derived class
  - It is responsible for constructing the virtual base Human
  - Its initializer Human(0) is used

#### Case 2: Constructing CSStudent

```cpp
CSStudent cs;
```

- CSStudent is the most derived class
- It is responsible for constructing the virtual base Human
- Its initializer Human(21) is used
- The initializer Human(0) inside Student is ignored

### 3. Virtual Functions in Multi-level Inheritance

- virtual functions are automatically inherited in C++, even if you don't repeat the virtual keyword in the derived class.

```cpp
#include <iostream>

class Base {
public:
    virtual void greet() {
        std::cout << "Base greet\n";
    }
};

class Mid : public Base {
public:
    void greet() { // still virtual, even without saying "virtual"
        std::cout << "Mid greet\n";
    }
};

class Derived : public Mid {
public:
    void greet() override {
        std::cout << "Derived greet\n";
    }
};

int main() {
    Base* obj = new Derived();
    obj->greet(); // prints "Derived greet"
}
```

## 4. Exercise

What is the output of the following program?

```cpp
#include <iostream>

class Base {
public:
	Base() {}
	virtual void A() { std::cout << "Base A "; }
	void B() { std::cout << "Base B "; }
};

class One : public Base {
public:
	One() {}
	void A() { std::cout << "One A "; }
	void B() { std::cout << "One B "; }
};
class Two : public Base {
public:
	Two() {}
	void A() { std::cout << "Two A "; }
	void B() { std::cout << "Two B "; }
};

int main() {
	Base* a[3];
	a[0] = new Base;
	a[1] = new One;
	a[2] = new Two;
	for (unsigned int i=0; i<3; ++i) {
		a[i]->A();
		a[i]->B();
	}
	std::cout << std::endl;
	return 0;
}
```

## 5. Exercise

What is the output of the following virtual.cpp program?

```cpp
// virtual.cpp
#include <iostream>

class A
{
public:
	void print(){
		std::cout << "A" << std::endl;
	}
};

class B: public A
{
public:
	// virtual void print(){
	void print(){
		std::cout << "B" << std::endl;
	}
};

class C: public B
{
public:
	void print(){
		std::cout << "C" << std::endl;
	}
};

class D: public C
{
public:
	void print(){
		std::cout << "D" << std::endl;
	}
};

int main(){
	// initialize base class pointer with a derived class object.
	A* pA = new B;
	// which print is getting called?
	// if no virtual, decide by pointer type.
	pA->print();

	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	B* pB = new C;
	pB->print();
	// which print is getting called?
	// pointer and object same type, just call its local member function.
	pB = new B;
	pB->print();
	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	C c;
	pB = &c;
	pB->print();

	// which print is getting called?
	// if no virtual, decide by pointer type.
	// if base is marked as virtual, decide by object type.
	// also, virtual can be inheritated, 
    // even if the derived one doesn't use the virtual keyword.
	C* pC = new D;
	pC->print();

	return 0;
}
```

>**Questions** What will be printed? What if the print function in class A is virtual?
What if the print function in class B is virtual? What if the print function in class C is virtual?
What if the print function in class D is virtual?

## 6. Object Slicing

---

## Definition

> Object slicing happens when a derived class object is assigned to a base class object by value, causing the derived part of the object to be “cut off”.

Only the **base class portion** is copied, and the **derived-specific data is lost**.

---

## What gets stored?

### Derived object:

```
[ Base part | Derived part ]
   a = 10       b = 20
```

---

### After slicing:

```cpp
Base b = d;
```

We now have:

```
[ Base part only ]
   a = 10
```

The `b = 20` part is lost permanently.

### Why slicing happens

Because assignment like:

```cpp
Base b = d;
```

means:
- create a **new Base object**
- copy only Base subobject from Derived
- discard derived-specific fields

### Common bug scenario

- If a function takes a base object **by value**, and a derived object is passed in, slicing occurs inside the function parameter.

### Fix (conceptual)

Use:
- references (`Base&`)
- pointers (`Base*`)

instead of passing by value.

### Object Slicing Example

```cpp
#include <iostream>

class Base {
public:
    int a;

    virtual void print() {
        std::cout << "Base: a = " << a << "\n";
    }
};

class Derived : public Base {
public:
    int b;

    void print() override {
        std::cout << "Derived: a = " << a << ", b = " << b << "\n";
    }
};

// BUG: passed by value → object slicing occurs
void badFunction(Base obj) {
    std::cout << "[badFunction] ";
    obj.print();
    // Question: can we print b here?
}

// FIX: passed by reference → no slicing
void goodFunction(Base& obj) {
    std::cout << "[goodFunction] ";
    obj.print();
    // Question: can we print b here?
}

int main() {

    Derived d;
    d.a = 10;
    d.b = 20;

    std::cout << "=== Original Derived Object ===\n";
    d.print();

    std::cout << "\n=== Passing by value (SLICING OCCURS) ===\n";
    badFunction(d);

    std::cout << "\n=== Passing by reference (NO SLICING) ===\n";
    goodFunction(d);

    return 0;
}
```

>**Question** How to change the body of the goodFunction such that we can print the member variable b (which has the value of 20)?

- Solution: You can only access b if the object is actually a Derived, but this requires a downcast:

```cpp
void goodFunction(Base& obj) {
    std::cout << "[goodFunction] ";
    obj.print();
    Derived* d = (Derived*)(&obj);
    if (d) {
        std::cout << d->b << "\n";
    }
}
```

- There are 3 different ways to cast here:

```cpp
Derived* d = (Derived*)(&obj); // C-style cast (unsafe)
Derived* d = static_cast<Derived*>(&obj); // C++ cast (unsafe for downcast)
Derived* d = dynamic_cast<Derived*>(&obj); // safe runtime-checked cast
```

- dynamic_cast is the safe version here, as it checks the type at runtime, and returns nullptr is cast is not possible.
- For example, the obj is actually a Base type object, then it makes no sense to cast the pointer to a Derived type since obj does not have a Derived part.
- dynamic_cast requires the base class to be polymorphic (have at least one virtual function).
