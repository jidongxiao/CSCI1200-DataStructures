# `emplace_back` vs. `push_back` in C++

## Overview

Both `push_back` and `emplace_back` are member functions of C++ standard library containers (e.g., `std::vector`, `std::deque`) used to add elements to the end of the container. However, they differ in how they construct and insert these elements.

## `push_back`

The `push_back` function adds an existing object to the end of the container. It requires the object to be constructed before being passed to the function.

**Usage:**

```cpp
std::vector<MyClass> vec;
MyClass obj(args);
vec.push_back(obj); // Adds a copy of 'obj' to the vector
```

If the object is movable, push_back can utilize move semantics:

```cpp
vec.push_back(std::move(obj)); // Moves 'obj' into the vector
```

## `emplace_back`

The emplace_back function constructs a new element in place at the end of the container. It forwards the provided arguments to the constructor of the element, eliminating the need for a temporary object.

**Usage:**

```cpp
std::vector<MyClass> vec;
vec.emplace_back(args); // Constructs 'MyClass' directly in the vector
```

This approach can improve performance by avoiding unnecessary copy or move operations, especially for complex objects.

## Key Differences

- **Object Construction:**
  - `push_back`: Requires a fully constructed object.
  - `emplace_back`: Constructs the object in place using provided arguments.

- **Performance:**
  - `push_back`: May involve copy or move operations, depending on whether the object is passed by value or moved.
  - `emplace_back`: Potentially more efficient for complex objects, as it avoids extra copy or move operations.

## When to Use

- **Use `push_back`** when you have an existing object that you want to add to the container.

- **Use `emplace_back`** when you want to construct a new object directly in the container, especially if the object's construction is complex or resource-intensive.

## Example

```cpp
#include <vector>
#include <string>

class MyClass {
public:
    MyClass(int id, const std::string& name) : id_(id), name_(name) {}
private:
    int id_;
    std::string name_;
};

int main() {
    std::vector<MyClass> vec;

    // Using push_back
    MyClass obj(1, "Object1");
    vec.push_back(obj); // Adds a copy of 'obj'

    // Using emplace_back
    vec.emplace_back(2, "Object2"); // Constructs 'MyClass(2, "Object2")' in place

    return 0;
}
```

In this example, emplace_back constructs the MyClass object directly within the vector, potentially reducing overhead compared to push_back, which adds a copy of an existing object.

For a visual explanation and further insights, consider watching the following video: [![C++ From Scratch: push_back vs. emplace_back](https://img.youtube.com/vi/BbPWrkgj1I4/0.jpg)](https://www.youtube.com/watch?v=BbPWrkgj1I4)

