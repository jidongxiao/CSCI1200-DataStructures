#include <iostream>

class Human {
public:
    Human() { std::cout << "Human constructor\n"; }
};

// The virutal keyword tells the compiler: 
// "Hey, if this class is used in a diamond-like hierarchy, only one shared Human base should exist, no matter how many paths lead to it."
// The compiler then: Makes sure that only one instance of Human exists inside CSStudent.
class Student : virtual public Human {
public:
    Student() { std::cout << "Student constructor\n"; }
};

class Worker : virtual public Human {
public:
    Worker() { std::cout << "Worker constructor\n"; }
};

class CSStudent : public Student, public Worker {
public:
    CSStudent() { std::cout << "CSStudent constructor\n"; }
};

// problem with this program: Human constructor runs twice!
int main() {
    // CSStudent has two copies of Human, one via Student and one via Worker.
    // Ambiguity: If we try to access a Human member from CSStudent, the compiler doesn’t know which one we mean.
    CSStudent cs;
    return 0;
}
