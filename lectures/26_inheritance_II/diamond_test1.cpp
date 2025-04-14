#include <iostream>

class Human {
public:
    Human() { std::cout << "Human constructor\n"; }
};

class Student : public Human {
public:
    Student() { std::cout << "Student constructor\n"; }
};

class Worker : public Human {
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
