# Lecture 27 --- Garbage Collection & Smart Pointers

## Today’s Lecture

- What is Garbage?
- 3 Garbage Collection Techniques
- Smart Pointers

## 27.1 What is Garbage?

- Not everything sitting in memory is useful. Garbage is anything that cannot have any influence on the future
computation.
- With C++, the programmer is expected to perform explicit memory management. You must use delete when
you are done with dynamically allocated memory (which was created with new).
- In Java, and other languages with “garbage collection”, you are not required to explicitly de-allocate the
memory. The system automatically determines what is garbage and returns it to the available pool of memory.
Certainly this makes it easier to learn to program in these languages, but automatic memory management does
have performance and memory usage disadvantages.
- Today we’ll overview 3 basic techniques for automatic memory management.

## 27.2 The Node class

- For our discussion today, we’ll assume that all program data is stored in dynamically-allocated instances of the
following simple class. This class can be used to build linked lists, trees, and graphs with cycles:

```cpp
class Node {
public:
	Node(char v, Node* l, Node* r) :
	value(v), left(l), right(r) {}
	char value;
	Node* left;
	Node* right;
};
```

## 27.3 Garbage Collection Technique #1: Reference Counting

1. Attach a counter to each Node in memory.
2. When a new pointer is connected to that Node, increment the counter.
3. When a pointer is removed, decrement the counter.
4. Any Node with counter == 0 is garbage and is available for reuse.

## 27.4 Reference Counting Exercise

- Draw a “box and pointer” diagram for the following example, keeping a “reference counter” with each Node.

```cpp
Node *a = new Node('a', NULL, NULL);
Node *b = new Node('b', NULL, NULL);
Node *c = new Node('c', a, b);
a = NULL;
b = NULL;
c->left = c;
c = NULL;
```

- Is there any garbage?

## 27.5 Memory Model Exercise

- In memory, we pack the Node instances into a big array. In the toy example below, we have only enough room in memory to store 8 Nodes, which are addressed 100 -> 107. 0 is a NULL address.
- For simplicity, we’ll assume that the program uses only one variable, root, through which it accesses all of the
data. Draw the box-and-pointer diagram for the data accessible from root = 105.

| Address | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|
| Value   | a   | b   | c   | d   | e   | f   | g   | h   |
| Left    | 0   | 0   | 100 | 100 | 0   | 102 | 105 | 104 |
| Right   | 0   | 100 | 103 | 0   | 105 | 106 | 0   | 0   |

- What memory is garbage?

## 27.6 Garbage Collection Technique #2: Stop and Copy

1. Split memory in half (working memory and copy memory).
2. When out of working memory, stop computation and begin garbage collection.  
  (a) Place scan and free pointers at the start of the copy memory.  
  (b) Copy the root to copy memory, incrementing free. Whenever a node is copied from working memory, leave a forwarding address to its new location in copy memory in the left address slot of its old location.  
  (c) Starting at the scan pointer, process the left and right pointers of each node. Look for their locations in working memory. If the node has already been copied (i.e., it has a forwarding address), update the reference. Otherwise, copy the location (as before) and update the reference.  
  (d) Repeat until scan == free.  
  (e) Swap the roles of the working and copy memory.

## 27.7 Stop and Copy Exercise

Perform stop-and-copy on the following with root = 105:

```console
WORKING MEMORY
```

| Address | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|
| Value   | a   | b   | c   | d   | e   | f   | g   | h   |
| Left    | 0   | 0   | 100 | 100 | 0   | 102 | 105 | 104 |
| Right   | 0   | 100 | 103 | 0   | 105 | 106 | 0   | 0   |


```console
COPY MEMORY
```

| Address | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|
| Value   |     |     |     |     |     |     |     |     |
| Left    |     |     |     |     |     |     |     |     |
| Right   |     |     |     |     |     |     |     |     |

```console
root: 105
scan:
free:
```

## 27.8 Garbage Collection Technique #3: Mark-Sweep

1. Add a mark bit to each location in memory.
2. Keep a free pointer to the head of the free list.
3. When memory runs out, stop computation, clear the mark bits and begin garbage collection.
4. Mark  
  (a) Start at the root and follow the accessible structure (keeping a stack of where you still need to go).  
  (b) Mark every node you visit.  
  (c) Stop when you see a marked node, so you don’t go into a cycle.  
5. Sweep  
  (a) Start at the end of memory, and build a new free list.  
  (b) If a node is unmarked, then it’s garbage, so hook it into the free list by chaining the left pointers.

## 27.9 Mark-Sweep Exercise

Let’s perform Mark-Sweep on the following with root = 105:

| Address | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|
| Value   | a   | b   | c   | d   | e   | f   | g   | h   |
| Left    | 0   | 0   | 100 | 100 | 0   | 102 | 105 | 104 |
| Right   | 0   | 100 | 103 | 0   | 105 | 106 | 0   | 0   |
| Marks   |     |     |     |     |     |     |     |     |

```console
root: 105
free:
stack:
```

## 27.10 Garbage Collection Comparison

- Reference Counting:

  - \+ fast and incremental  
  - – can’t handle cyclical data structures!  
  - ? requires ∼33% extra memory (1 integer per node)  

- Stop & Copy:

  - \- requires a long pause in program execution  
  - \+ can handle cyclical data structures!  
  - – requires 100% extra memory (you can only use half the memory)  
  - \+ runs fast if most of the memory is garbage (it only touches the nodes reachable from the root)  
  - \+ data is clustered together and memory is “de-fragmented”

- Mark-Sweep:

  - \- requires a long pause in program execution  
  - \+ can handle cyclical data structures!  
  - \+ requires ∼1% extra memory (just one bit per node)  
  - \- runs the same speed regardless of how much of memory is garbage.  
    It must touch all nodes in the mark phase, and must link together all garbage nodes into a free list.

## 27.11 Practical Garbage Collection Methodology in C++: Smart Pointers

- Garbage collection looks like an attractive option both when we are quickly drafting a prototype system and
also when we are developing big complex programs that process and rearrange lots of data.
- Unfortunately, general-purpose, invisible garbage collection isn’t something we can just tack onto C++, an
enormous beast of a programming language (but that doesn’t stop people from trying!). So is there anything
we can do? Yes, we can use Smart Pointers to gain some of the features of garbage collection.

## 27.12 C++ Smart Pointers

- Smart pointers in C++ are objects that manage the lifetime of dynamically allocated memory, ensuring proper deallocation and preventing memory leaks.

- Available since C++11 in the &lt;memory&gt; header.

## 27.13 Why Smart Pointers

- Traditional pointers require manual memory management:

```cpp
int* ptr = new int(5);
// ...
delete ptr;
```

If not handled correctly, traditional pointers can lead to:

- Memory leaks

- Dangling pointers

- Double deletions

Smart pointers automate memory management and ensure exception safety and ownership clarity.

## 27.14 Types of Smart Pointers

### 27.14.1 std::shared_ptr

- Shared ownership — multiple smart pointers can own the same object.

- Uses reference counting to track owners.

- Object is deleted when the last owner is gone.

- Use Cases: When multiple parts of a program need access to the same object.

```cpp
#include <memory>

std::shared_ptr<int> p1 = std::make_shared<int>(20);
std::shared_ptr<int> p2 = p1; // shared ownership
```

- Reference Count: Use use_count() to check how many shared_ptrs refer to the object:

```cpp
p1.use_count(); // e.g., 2
```

Below is an std::shared_ptr example program:

```cpp
#include <iostream>
#include <memory>
#include <string>

class Pizza {
public:
    Pizza(const std::string& type) : type(type) {
        std::cout << type << " pizza is served! 🍕\n";
    }
    ~Pizza() {
        std::cout << type << " pizza is all gone! 😢\n";
    }
    std::string type;
};

void party() {
    std::shared_ptr<Pizza> pizza = std::make_shared<Pizza>("Pepperoni");

    std::shared_ptr<Pizza> alice = pizza;
    std::shared_ptr<Pizza> bob = pizza;

    std::cout << "Alice and Bob are enjoying the same " << pizza->type << " pizza! 🍴\n";
    std::cout << "Pizza has " << pizza.use_count() << " fans right now.\n";
}

int main() {
    party();  // All shared_ptrs go out of scope here
}
```

#### Member Functions and Operators of std::shared_ptr

- reset()	Releases ownership of the managed object. Can also assign a new object.

- use_count()	Returns the number of shared_ptrs sharing ownership of the object.

- unique()	Returns true if this shared_ptr is the only one owning the object (use_count() == 1).

- get()	Returns the raw pointer to the managed object.

- operator*()	Dereferences the pointer (*sp) to access the object.

- operator->()	Accesses a member of the object (sp-&gt;member).

- operator bool()	Checks whether the pointer is non-null (if (sp)).

### 27.14.2 std::unique_ptr

- Exclusive ownership of a dynamically allocated object.

- Cannot be copied, only moved.

- Deletes the object when it goes out of scope.

- Use Cases: 

  - When only one owner should exist.

  - Performance-sensitive code (no reference count overhead).

```cpp
#include <memory>

std::unique_ptr<int> ptr = std::make_unique<int>(10);
```

- Move Ownership:

```cpp
std::unique_ptr<int> ptr2 = std::move(ptr); // ptr is now null
```

Below is an std::unique_ptr example program:

```cpp
#include <iostream>
#include <memory>
#include <string>

class Girlfriend {
public:
    Girlfriend(const std::string& name) : name(name) {
        std::cout << name << " is now your loyal partner! 👧\n";
    }
    ~Girlfriend() {
        std::cout << name << " has broken up with you. 😭\n";
    }
    std::string name;
};

void takeCareOfHer(std::unique_ptr<Girlfriend> g) {
    std::cout << g->name << " is enjoying life with you!\n";
}

int main() {
    std::unique_ptr<Girlfriend> myGirl = std::make_unique<Girlfriend>("Taylor");

    // Uncommenting below would cause a compile error:
    // std::unique_ptr<Girlfriend> copy = myGirl; // ❌ can't copy

    takeCareOfHer(std::move(myGirl)); // Transfer ownership

    if (!myGirl) {
        std::cout << "You no longer have a girlfriend. 💔\n";
    }
}
```

### 27.14.3 other smart pointers

- std::weak_ptr: Use with shared_ptr. Memory is destroyed when no more shared_ptrs are pointing to object. So each time a weak_ptr is used you should first “lock” the data by creating a shared_ptr.

- std::scoped_ptr: (Boost) “Remembers” to delete things when they go out of scope. Alternate to auto_ptr. Cannot be copied.

## 27.15 Exercise

In the following program, the use count will be printed 3 times. What exact value will be printed each time?

```cpp
#include <iostream>
#include <memory>

int main(){
        std::shared_ptr<int> age(new int(40));
        std::cout << "age is " << *age << std::endl;

        // you can never do this, which is assigning a smarter pointer to a raw pointer.
        // int * temp = age;

        {
                std::shared_ptr<int> temp = age;
                std::cout << "age is " << *temp << std::endl;
                std::cout << "the use count is : " << age.use_count() << std::endl;
        }
        std::cout << "the use count is : " << age.use_count() << std::endl;

        // give up my ownership, it decreases the reference count of the managed object by one.
        // if that shared pointer was the last owner (i.e., reference count becomes zero), the object is deleted.
        // the shared_ptr itself is now empty (i.e., it holds nullptr).
        age.reset();
        std::cout << "the use count is : " << age.use_count() << std::endl;
}
```
