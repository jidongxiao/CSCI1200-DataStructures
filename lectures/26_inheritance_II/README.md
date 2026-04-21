# Lecture 26 ---  C++ Inheritance and Polymorphism - Part III

---

## Exercise: Name Hiding

>**Question** Given this program, what will be printed?

```cpp
#include <iostream>

class Base {
public:
    int value = 10;
};

class Derived : public Base {
public:
    double value = 3.14;

    void printInt(int x) {
        std::cout << x << std::endl;
    }

    void test() {
        printInt(value);         
        printInt(Base::value);
    }
};

int main() {
    Derived d;
    d.test();
    return 0;
}
```

---

## Today’s Lecture

- Virtual Functions
- Polymorphism

---

## 1. Motivation: Why do we need virtual functions?

### Problem: base pointer calls wrong function

```cpp
#include <iostream>

class Base {
public:
    void f() {
        std::cout << "Base\n";
    }
};

class Derived : public Base {
public:
    void f() {
        std::cout << "Derived\n";
    }
};

int main() {
    Base* p = new Derived();
    p->f();  // Base, not Derived, what if we want to call the derive version?
}
```

### Issue:

- Function call is resolved using pointer type (Base*)
- Not the actual object type (Derived)

## 2. Solution: virtual functions

```cpp
#include <iostream>

class Base {
public:
    virtual void f() {
        std::cout << "Base\n";
    }
};

class Derived : public Base {
public:
    void f() override {
        std::cout << "Derived\n";
    }
};

int main() {
    Base* p = new Derived();
    p->f();  // same main function code, but now calling the Derived version.
}
```

- Virtual functions enable **runtime polymorphism**, meaning:

> The function that gets executed is determined by the actual object type at runtime, not the pointer type.

- This is called: Runtime polymorphism. Polymorphism means: “One interface, multiple implementations.”

  - In C++, it refers to the ability of the same function call to behave differently depending on the actual object type.

- The override keyword tells the compiler: "I intend to override a virtual function from the base class."

  - You don’t strictly need the override keyword here — the program will still work as expected because Base::f() is declared virtual, and Derived::f() has the same signature.
  - But using override is highly recommended: when override is used, and if you make a mistake, like mismatching the function signature (even by accident), the compiler will catch it. 
  - See the following example, where polymorphism silently broken due to a signature mismatch:

```cpp
#include <iostream>

class Base {
public:
    virtual void f() {
        std::cout << "Base::f" << std::endl;
    }
};

class Derived : public Base {
public:
    // This does NOT override Base::f because the signature is different
    void f(int) {
        std::cout << "Derived::f(int)" << std::endl;
    }
};

int main() {
    Base* p = new Derived();

    p->f();  // Calls Base::f, NOT Derived::f(int)

    return 0;
}
```

- Using the keyword override, we can avoid bugs like this.

---

## 3. How it works internally: vtable + vptr

C++ implements virtual functions using two key hidden mechanisms:

- **vtable (virtual table)**: a per-class table storing function pointers
- **vptr (virtual pointer)**: a hidden pointer inside each object pointing to its class’s vtable

### Conceptual model

Each object with virtual functions contains a hidden vptr that points to its class vtable.

The vtable stores function pointers for virtual functions, potentially pointing to overridden implementations in derived classes.

### Function call process

When a virtual function is called:

1. The program follows the object’s vptr
2. Accesses the corresponding vtable
3. Looks up the correct function entry
4. Invokes the function through the function pointer

## 4. sizeof an empty class

What is the size of an empty class?

```cpp
#include <iostream>

class Empty {};

int main() {
    Empty a;
    Empty b;

    std::cout << "sizeof(Empty): " << sizeof(Empty) << std::endl;

    std::cout << "&a: " << &a << std::endl;
    std::cout << "&b: " << &b << std::endl;

    return 0;
}
```

Typical result:
- Empty class size is usually 1 byte, as shown in this above program.

### Reason

- Every distinct object must have a unique memory address
- If size were zero, multiple objects would share the same address, which is invalid

---

## 5. What changes when virtual functions are added?

When a class has at least one virtual function:

- The object gains a hidden vptr
- This typically increases the size of the object by the size of a pointer

On a typical 64-bit system:
- Empty class: 1 byte
- Class with data members: size depends on members
- Class with virtual functions: +8 bytes (vptr overhead)

- Example code:

```cpp
#include <iostream>

class Empty {};

class WithInt {
public:
    int x;
};

class WithVirtual {
public:
    virtual void f() {}
};

int main() {
    std::cout << "sizeof(Empty): " << sizeof(Empty) << std::endl;
    std::cout << "sizeof(WithInt): " << sizeof(WithInt) << std::endl;
    std::cout << "sizeof(WithVirtual): " << sizeof(WithVirtual) << std::endl;

    return 0;
}
```

- The empty class’s 1 byte exists only when nothing else needs to occupy that space; once real members exist, the 1-byte overhead will be discarded,
because that one byte does not store any meaningful information.

---

## 6. Virtual function impact on memory

### Per object:
- One hidden vptr (typically 8 bytes on 64-bit systems)

### Per class:
- One shared vtable stored in static memory

### Summary of overhead:
- Runtime memory per object increases due to vptr
- Static memory increases due to vtable

```cpp
#include <iostream>

class OneVirtual {
public:
    virtual void f() {}
};

class ManyVirtuals {
public:
    virtual void f1() {}
    virtual void f2() {}
    virtual void f3() {}
    virtual void f4() {}
};

int main() {
    std::cout << "sizeof(OneVirtual): " << sizeof(OneVirtual) << std::endl;
    std::cout << "sizeof(ManyVirtuals): " << sizeof(ManyVirtuals) << std::endl;

    OneVirtual a;
    ManyVirtuals b;

    std::cout << "&a: " << &a << std::endl;
    std::cout << "&b: " << &b << std::endl;

    return 0;
}
```

>**Question** Same size or different size? And why?

---

## 7. Pure virtual functions

A pure virtual function is declared by assigning zero to a virtual function.

Meaning:
- The function has no implementation in the base class
- Derived classes must provide an implementation

```cpp
#include <iostream>

class Base {
public:
    virtual void f() = 0;  // pure virtual function
};

class Derived : public Base {
public:
    void f() override {
        std::cout << "Derived implementation\n";
    }
};
```

---

## 8. Abstract class

A class becomes abstract if it contains at least one pure virtual function.

### Properties of abstract classes:
- Cannot be instantiated directly
- Can only be used through pointers or references
- Serve as interfaces or base contracts

```cpp
#include <iostream>

class Base {
public:
    virtual void f() = 0;  // makes Base abstract
};

int main() {
    // Base b;  ERROR: cannot instantiate abstract class

    Base* p = nullptr;  // allowed (pointer/reference only)

    std::cout << "Abstract class cannot be instantiated directly\n";
}
```

---

## 9. Abstract class example

A common use case is defining a base “interface” class:

- The base class defines a required behavior
- Derived classes implement specific versions of that behavior

```cpp
#include <iostream>

// Abstract base class
class CollegeStudent {
public:
    virtual void major() = 0;
};

// CS student
class CSStudent : public CollegeStudent {
public:
    void major() override {
        std::cout << "CS student: debugging code at 3AM\n";
    }
};

// Math student
class MathStudent : public CollegeStudent {
public:
    void major() override {
        std::cout << "Math student: proving 0.999... = 1\n";
    }
};

int main() {
    CollegeStudent* s1 = new CSStudent();
    CollegeStudent* s2 = new MathStudent();

    s1->major();
    s2->major();

    delete s1;
    delete s2;

    return 0;
}
```

>**Question** Do we have memory leak here?

>**Question** Do we have memory leak in the following program?

```cpp
#include <iostream>

class Base {
public:
    ~Base() {
        std::cout << "Base destructor\n";
    }
};

class Derived : public Base {
private:
    int* data;

public:
    Derived() {
        data = new int[100];  // heap allocation
        std::cout << "Derived allocated memory\n";
    }

    ~Derived() {
        delete[] data;
        std::cout << "Derived freed memory\n";
    }
};

int main() {
    Base* p = new Derived();

    delete p;

    return 0;
}
```

---

## 10. Virtual destructor

When using polymorphism, destructors must be handled carefully.

### Problem:
- If a base-class destructor is not virtual
- Deleting a derived object through a base pointer results in incomplete destruction
- Derived destructor may not run, causing resource leaks

### Fix:
- Make the base-class destructor virtual
- This ensures correct destructor chaining from derived to base
- Re-write the Base class from the above program as this one:

```cpp
class Base {
public:
    virtual ~Base() {
        std::cout << "Base destructor\n";
    }
};
```

---

## 11. Important rule of thumb

If a class has any virtual function, its destructor should be marked as virtual.

Reason:
- Such classes are intended to be used polymorphically
- Polymorphic deletion must be safe

---

## 12. Summary mental model

Virtual functions work by replacing direct function calls with:

> pointer → vtable → function pointer → function call

---

## 13. Key takeaways

- Virtual functions enable runtime polymorphism: allow C++ to decide which function to execute at runtime based on the actual object type rather than the static pointer type.
- But a natural question is: why can’t the compiler just figure this out at compile time?
  - For example, your friend Jessica might say: “You already wrote the code. The compiler sees both Base and Derived. Why can’t it just decide which function will be called?”
  - Show her this program:

```cpp
#include <iostream>

class Base {
public:
    virtual void f() {
        std::cout << "Base::f\n";
    }
};

class Derived : public Base {
public:
    void f() override {
        std::cout << "Derived::f\n";
    }
};

// Runtime decision: return different objects based on user input
Base* getObjectFromUserInput() {
    int x;
    std::cout << "Enter 0 for Base, 1 for Derived: ";
    std::cin >> x;

    if (x == 0)
        return new Base();
    else
        return new Derived();
}

int main() {
    Base* p = getObjectFromUserInput();

    std::cout << "Calling p->f()\n";
    p->f();   // Compiler cannot know which version will run here

    delete p;

    return 0;
}
```
