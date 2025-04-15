# Lecture 26 ---  C++ Inheritance and Polymorphism

## 26.1 Multiple Inheritance

- Multiple inheritance allows a class to inherit from more than one base class.

- See [example 1](multiple_inheritance1.cpp) and [example 2](multiple_inheritance2.cpp).

  Note:

  ![alt text](Note_multipleInheritance.png "MultipleInheritance_note")

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

Polymorphism means "many forms". In C++, it allows objects of different classes to be treated through a common interface — usually a base class pointer or reference.

- Functions that are common, at least have a common interface, are in Polygon.
- Some of these functions are marked virtual, which means that when they are redefined by a derived class, this new definition will be used, even for pointers to base class objects.
- Some of these virtual functions, those whose declarations are followed by = 0 are pure virtual, which means
they must be redefined in a derived class.  
  – Any class that has pure virtual functions is called “abstract”.  
  – Objects of abstract types may not be created — only pointers to these objects may be created.  
- Functions that are specific to a particular object type are declared in the derived class prototype.

## 26.4 A Polymorphic List of Polygon Objects

- Now instead of two separate lists of polygon objects, we can create one “polymorphic” list:

```cpp
std::list<Polygon*> polygons;
```

- Objects are constructed using new and inserted into the list:

```cpp
Polygon *p_ptr = new Triangle( .... );
polygons.push_back(p_ptr);
p_ptr = new Quadrilateral( ... );
polygons.push_back(p_ptr);
Triangle *t_ptr = new Triangle( .... );
polygons.push_back(t_ptr);
```

Note: We’ve used the same pointer variable (p_ptr) to point to objects of two different types.

## 26.5 Accessing Objects Through a Polymorphic List of Pointers

- Let’s sum the areas of all the polygons:

```cpp
double area = 0;
for (std::list<Polygon*>::iterator i = polygons.begin(); i!=polygons.end(); ++i){
	area += (*i)->Area();
}
```

Which Area function is called? If *i points to a Triangle object then the function defined in the Triangle
class would be called. If *i points to a Quadrilateral object then Quadrilateral::Area will be called.

- Here’s code to count the number of squares in the list:

```cpp
int count = 0;
for (std::list<Polygon*>::iterator i = polygons.begin(); i!=polygons.end(); ++i){
	count += (*i)->IsSquare();
}
```

If Polygon::IsSquare had not been declared virtual then the function defined in Polygon would always be
called! In general, given a pointer to type T we start at T and look “up” the hierarchy for the closest function
definition (this can be done at compile time). If that function has been declared virtual, we will start this
search instead at the actual type of the object (this requires additional work at runtime) in case it has been
redefined in a derived class of type T.

- To use a function in Quadrilateral that is not declared in Polygon, you must “cast” the pointer. The pointer
*q will be NULL if *i is not a Quadrilateral object.

```cpp
for (std::list<Polygon*>::iterator i = polygons.begin(); i!=polygons.end(); ++i) {
	Quadrilateral *q = dynamic_cast<Quadrilateral*> (*i);
	if (q) std::cout << "diagonal: " << q->LongerDiagonal() << std::endl;
}
```

## 26.6 Exercise

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

## 26.7 Exercise

What is the output of the following [program](virtual.cpp)?

## 26.8 Memory Usage of Virtual Functions

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

### 26.8.1 Empty Class

- An empty C++ class takes one byte because the C++ standard requires that each distinct object has a unique address in memory.

- If an empty class had size 0, then multiple instances of that class could end up having the same memory address, which would break basic assumptions in C++ like this:

```cpp
class Empty {};

Empty a, b;
std::cout << (&a == &b);  // This should be false!
```

- To make sure that &a != &b, the compiler gives each object at least one byte of storage, even if the class doesn’t contain any data.

### 26.8.2 Class CSStudent: Total size breakdown

- int age

Size: 4 bytes

- Virtual function (print)

  - This makes the class polymorphic, so the compiler adds a vptr (virtual table pointer, also know as vtable pointer).

  - On a 64-bit machine, a pointer is 8 bytes.

- Padding/alignment

  - The compiler aligns data to certain boundaries for performance.

  - Typical alignment for a class with a pointer is 8 bytes, so the 4-byte int is padded with 4 extra bytes.

### 26.8.3 Static Dispatch vs Dynamic Dispatch

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
