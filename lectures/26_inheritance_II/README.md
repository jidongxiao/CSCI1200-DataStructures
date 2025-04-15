# Lecture 26 ---  C++ Inheritance and Polymorphism

## 26.1 Multiple Inheritance

- Multiple inheritance allows a class to inherit from more than one base class.

- The following [program](multiple_inheritance1.cpp) is an example:

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

## 26.2 The Diamond Problem

- The Diamond Problem occurs in multiple inheritance when two classes inherit from the same base class, and a fourth class inherits from both of those.

```
        Human
        /  \
   Student  Worker
        \  /
      CSStudent
```

- Both Student and Worker inherit from Human.

```cpp
class Human {
public:
    void speak();
};

class Student : public Human {};
class Worker : public Human {};

class CSStudent : public Student, public Worker {};
```

- CSStudent inherits from both Student and Worker.

- Compiler sees two Human base classes.

- This leads to duplicate data and ambiguous member resolution.

```cpp
CSStudent cs;
cs.speak(); // ❌ Ambiguous: which Human::speak()?
```

### Solution: Virtual Inheritance

- Use the virtual keyword when inheriting the common base class.

```cpp
class Student : virtual public Human {};
class Worker  : virtual public Human {};
class CSStudent : public Student, public Worker {};
CSStudent cs;
cs.speak(); // ✅ No ambiguity
```

- How it works:

  - Compiler ensures only one shared instance of Human.

  - Student and Worker do not create their own copies of Human.

  - Memory layout uses pointers behind the scenes to share the base.

### Constructor Order with Virtual Inheritance

When virtual inheritance is involved:

Most derived class (e.g., CSStudent) is responsible for calling the base (Human) constructor.

```cpp
class Human {
public:
    Human(int age) {}
};

class Student : virtual public Human {
public:
    Student() : Human(0) {} // ❌ Not allowed to call Human(int) here
};

class CSStudent : public Student {
public:
    CSStudent() : Human(21), Student() {} // ✅ Human constructor called here
};
```

## 26.3 Introduction to Polymorphism

- Polymorphism means "many forms". 

- Polymorphism allows one interface to be used for different data types or classes. In C++, it enables objects to be treated as instances of their base type while still calling derived class methods.

- A function marked with the virtual keyword in the base class allows derived classes to override it. At runtime, the correct version of the function is called based on the object type.

- Virtual functions only come into play with pointers or references to the base class.

### 26.3.1 Case 1: Direct Object (No Need for virtual)

```cpp
class Base {
public:
    void show() {
        std::cout << "Base\n";
    }
};

class Derived : public Base {
public:
    void show() {
        std::cout << "Derived\n";
    }
};

int main() {
    Derived d;
    d.show(); // ✅ "Derived" is printed. No virtual needed.
}
```

### 26.3.2 Case 2: Base Pointer or Reference (Needs virtual)

```cpp
class Base {
public:
    virtual void show() {
        std::cout << "Base\n";
    }
};

class Derived : public Base {
public:
    void show() override {
        std::cout << "Derived\n";
    }
};

int main() {
    Base* b = new Derived();
    b->show(); // ✅ "Derived" is printed because `show()` is virtual.
}
```

- Without virtual, Base::show() would be called, even though b points to a Derived.

- The override keyword tells the compiler: "I intend to override a virtual function from the base class."

- You don’t strictly need the override keyword here — the program will still work as expected because Base::show() is declared virtual, and Derived::show() has the same signature. But using override is highly recommended: when override is used, and if you make a mistake, like mismatching the function signature (even by accident), the compiler will catch it.

### 26.3.3 Virtual Functions in Multi-level Inheritance

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
    obj->greet(); // ✅ prints "Derived greet"
}
```

## 26.4 Exercise

What is the output of the following [program](exercise.cpp)?

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

## 26.5 Exercise

What is the output of the following [program](virtual.cpp)?

## 26.6 Memory Usage of Virtual Functions

Given the following [program](virtual2.cpp), what is the memory size of each class?

```cpp
#include <iostream>

class Human {
};

class Student {
        int age;
};

class CollegeStudent {
        int age;
        void print(){
                std::cout << "I am a college student." << std::endl;
        }
};

class CSStudent {
        int age;
        virtual void print(){
                std::cout << "I am a CS student." << std::endl;
        }
};

int main(){
        std::cout << "memory size of Human class is: " << sizeof(Human) << std::endl;
        std::cout << "memory size of Student class is: " << sizeof(Student) << std::endl;
        std::cout << "memory size of College Student class is: " << sizeof(CollegeStudent) << std::endl;
        std::cout << "memory size of CS Student class is: " << sizeof(CSStudent) << std::endl;
        return 0;
}
```

### 26.6.1 Empty Class

- An empty C++ class takes one byte because the C++ standard requires that each distinct object has a unique address in memory.

- If an empty class had size 0, then multiple instances of that class could end up having the same memory address, which would break basic assumptions in C++ like this:

```cpp
class Empty {};

Empty a, b;
std::cout << (&a == &b);  // This should be false!
```

- To make sure that &a != &b, the compiler gives each object at least one byte of storage, even if the class doesn’t contain any data.

### 26.6.2 Class CSStudent: Total size breakdown

- int age

Size: 4 bytes

- Virtual function (print)

  - This makes the class polymorphic, so the compiler adds a vptr (virtual table pointer, also know as vtable pointer).

  - On a 64-bit machine, a pointer is 8 bytes.

- Padding/alignment

  - The compiler aligns data to certain boundaries for performance.

  - Typical alignment for a class with a pointer is 8 bytes, so the 4-byte int is padded with 4 extra bytes.

### 26.6.3 Static Dispatch vs Dynamic Dispatch

- When you call a non-virtual member function like print() in the CollegeStudent class, the compiler resolves the call at compile time. This is known as static dispatch or early binding.

```cpp
CollegeStudent alice;
alice.print();
```

Here's what happens under the hood:

- At compile time, the compiler sees that alice is of type CollegeStudent.

- It knows the exact location of CollegeStudent::print() in the compiled binary (it's in the .text segment).

- So it generates a direct call to that specific memory address. Like *call 0x123456* where *0x123456* is the address of the print() function.

- This is why the object doesn’t need to store any pointer to the function — the compiler already knows which function to call!

- If print() were marked virtual, like in the CSStudent class, then the call would become runtime-resolved using a vtable. Then:

  - The object now gets a hidden pointer to a vtable (a lookup table of function pointers).

  - When you call print(), the program:

  - Looks up the function pointer in the vtable.

  - Calls the function via that pointer.

  - This is called dynamic dispatch or late binding.

Question: What if class CSStudent is defined as this, what would be the memory size of a CSStudent object?

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

To understand the problem, compile this [program](virtual3.cpp), and use the tool *pahole* to examine the memory information.

```console
$ g++ -g virtual3.cpp
$ pahole a.out
class CSStudent {
public:

        void ~CSStudent(class CSStudent *, int);

        void CSStudent(class CSStudent *, );

        void CSStudent(class CSStudent *, const class CSStudent  &);

        void CSStudent(class CSStudent *);

        int ()(void) * *           _vptr.CSStudent;      /*     0     8 */
        int                        age;                  /*     8     4 */
        virtual void print(class CSStudent *);

        virtual void print2(class CSStudent *);

        virtual void print3(class CSStudent *);

        /* vtable has 3 entries: {
           [0] = print((null)),
           [1] = print2((null)),
           [2] = print3((null)),
        } */
        /* size: 16, cachelines: 1, members: 2 */
        /* padding: 4 */
        /* last cacheline: 16 bytes */
};
```

The numbers "0     8" mean that the virtual table pointer starts at offset 0 of the class, and it has 8 bytes; the numbers "8     4" means that the variable *age* starts at offset 8 and it has 4 bytes.

## 26.7 Virtual Destructor 

- If the destructor of the base class is not virtual, deleting an object through a base pointer results in undefined behavior — most likely, the derived class’s destructor won’t be called, which leads to resource leaks.

### Example (Wrong: no virtual destructor)

```cpp
#include <iostream>

class Base {
public:
    ~Base() {
        std::cout << "Base destructor\n";
    }
};

class Derived : public Base {
public:
    ~Derived() {
        std::cout << "Derived destructor\n";
    }
};

int main() {
    Base* b = new Derived();
    delete b; // ⚠️ Only Base destructor is called!
}
```

- ❌ Derived's destructor is not called — this causes resource leaks if Derived manages any resources.

### ✅ Example (Correct: virtual destructor)

```cpp
#include <iostream>

class Base {
public:
    virtual ~Base() {
        std::cout << "Base destructor\n";
    }
};

class Derived : public Base {
public:
    ~Derived() override {
        std::cout << "Derived destructor\n";
    }
};

int main() {
    Base* b = new Derived();
    delete b; // ✅ Both destructors are called
}
```
