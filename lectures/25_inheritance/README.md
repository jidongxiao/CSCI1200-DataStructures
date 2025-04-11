# Lecture 25 ---  C++ Inheritance and Polymorphism

## 25.1 C++ Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (called a derived or child class) to acquire properties and behaviors (methods) from another class (called a base or parent class). This promotes code reusability and establishes a hierarchical relationship between classes.

## 25.2 Key Concepts

- Base Class: The class whose properties and methods are inherited.

- Derived Class: The class that inherits from the base class.

- Access Specifiers: Determine the accessibility of base class members in the derived class.

## 25.3 Types of Inheritance

### 25.3.1 Single Inheritance

A derived class inherits from one base class.

```cpp
class Base {
    // Base class members
};

class Derived : public Base {
    // Derived class members
};
```

### 25.3.2 Multiple Inheritance

A derived class inherits from more than one base class.

```cpp
class Base1 {
    // Base1 members
};

class Base2 {
    // Base2 members
};

class Derived : public Base1, public Base2 {
    // Derived class members
};
```

### 25.3.3 Multilevel Inheritance

A class is derived from a class which is also derived from another class.

```cpp
class Base {
    // Base class members
};

class Intermediate : public Base {
    // Intermediate class members
};

class Derived : public Intermediate {
    // Derived class members
};
```

### 25.3.4 Hierarchical Inheritance

Multiple classes are derived from a single base class.

```cpp
class Base {
    // Base class members
};

class Derived1 : public Base {
    // Derived1 members
};

class Derived2 : public Base {
    // Derived2 members
};
```

## 25.4 Access Specifiers in Inheritance: public, protected, and private

The access specifier used during inheritance affects the accessibility of base class members in the derived class. In C++, the access specifier used during inheritance (public, protected, or private) determines how the base class's members are accessible in the derived class and to external code. Understanding these distinctions is crucial for designing class hierarchies that enforce appropriate encapsulation and access control.

| Inheritance Type | Base Class `public` Members in Derived | Base Class `protected` Members in Derived | Base Class `private` Members in Derived |
|------------------|----------------------------------------|-------------------------------------------|-----------------------------------------|
| `public`         | `public`                               | `protected`                               | Not accessible                          |
| `protected`      | `protected`                            | `protected`                               | Not accessible                          |
| `private`        | `private`                              | `private`                                 | Not accessible                          |

```cpp
class Base {
public:
    int publicVar;
protected:
    int protectedVar;
private:
    int privateVar;
};

class PublicDerived : public Base {
    // publicVar is public
    // protectedVar is protected
    // privateVar is not accessible
};

class ProtectedDerived : protected Base {
    // publicVar is protected
    // protectedVar is protected
    // privateVar is not accessible
};

class PrivateDerived : private Base {
    // publicVar is private
    // protectedVar is private
    // privateVar is not accessible
};
```

### 25.4.1 Default Inheritance:

If no access specifier is provided:

- For class, inheritance is private by default.

- For struct, inheritance is public by default.

### 25.4.2 Access to Base Class Members:

private members of the base class are never accessible directly in the derived class, regardless of the inheritance type.

## 25.5 Constructors and Destructors

- Constructor Invocation: When a derived class object is created, the base class constructor is invoked first, followed by the derived class constructor.

- Destructor Invocation: When a derived class object is destroyed, the derived class destructor is invoked first, followed by the base class destructor.

- Explicit Constructor Call: If the base class constructor requires parameters, the derived class constructor must explicitly call it using an initializer list.

```cpp
class Base {
public:
    Base(int x) {
        // Constructor implementation
    }
};

class Derived : public Base {
public:
    Derived(int x) : Base(x) {
        // Derived class constructor implementation
    }
};
```

## 25.6 Example Programs:

We develop this student_test.cpp program.

### version 1

[student_test1.cpp](student_test1.cpp) In this version, there is only one class: class Human

### version 2

[student_test2.cpp](student_test2.cpp) In this version, there is the base class - Human, and the child class - Student, but the child class doesn't have its own member variables, and its only member function is the constructor.

### version 3

[student_test3.cpp](student_test3.cpp) In this version, the child class has its own member functions introduce() and sleep(); and because these functions need to access the parent class's member variables, so we changed the member variables from private to protected.

### version 4

[student_test4.cpp](student_test4.cpp) In this version, we added the destructor to both the child class and the parent class. This program shows that when the child class object is destroyed, first its own destructor gets called, and then its parent destructor gets called.

## 25.7 What will be printed when running this program?

#include <iostream>

class A {
public:
    A() {
        std::cout << "A";
    }
    ~A() {
        std::cout << "A";
    }
};

class B : public A {
public:
    B() {
        std::cout << "B";
    }
    ~B() {
        std::cout << "B";
    }
};

int main() {
    {
        A a;
        B b;
    }
    std::cout << std::endl;
    return 0;
}
