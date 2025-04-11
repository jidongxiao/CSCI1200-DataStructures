#include <iostream>
#include <string>

class Human {
// change this to protect so that these variables can be accessed by the derived class.
protected:
    std::string name;
    int age;
    int sleep_hours;

public:
    Human(std::string n, int a, int s) : name(n), age(a), sleep_hours(s) {}
    ~Human(){
	    std::cout << "Human Destructor" << std::endl;
    }

    void introduce() {
        std::cout << "Hello, I am " << name << ", and I am " << age << " years old.\n";
    }

    void sleep() {
        std::cout << name << " is " << age << " years old who sleeps " << sleep_hours << " hours a night.\n";
    }
};

class Student : public Human {
public:
    Student(std::string n, int a, int s) : Human(n, a, s) {}
    ~Student(){
	    std::cout << "Student Destructor" << std::endl;
    }
    
    void introduce() {
        std::cout << "Hello, I am " << name << ", and I am " << age << " years old. I’m majoring in 'How did I get here?' with a minor in 'It sounded easier when I signed up.'\n";
    }

    void sleep() {
        std::cout << name << " is a college student who sleeps " << sleep_hours << " hours a night, and sleep 2 hours during boring lectures.\n";
    }
};

class CSStudent : public Student {
public:
    // note that CSStudent constructor needs to call Student constructor.
    CSStudent(std::string n, int a, int s) : Student(n, a, s) {}
    ~CSStudent(){
	    std::cout << "CS Student Destructor" << std::endl;
    }

    void introduce() {
        std::cout << "I am a CS student. My name is " << name << ", and I am " << age << " years old.\n";
    }

    void sleep() {
        std::cout << name << " is a CS student who sleeps " << sleep_hours << " hours a night. "
                  << "Or maybe, just a few minutes if the code compiles!\n";
    }
};

int main() {
    // Creating instances of each class with member variables
    Human h("Alice", 30, 8);
    Student s("Bob", 20, 5);
    CSStudent cs("Charlie", 22, 2);

    // Introducing Humans
    std::cout << "--- Human introducing ---\n";
    h.introduce();  // Output: Hello, I am Alice, and I am 30 years old.
    
    std::cout << "--- Student introducing ---\n";
    s.introduce();  // Output: I am a student. My name is Bob, and I am 20 years old.

    std::cout << "--- CS Student introducing ---\n";
    cs.introduce();  // Output: I am a CS student. My name is Charlie, and I am 22 years old.

    // Showing sleep behavior
    std::cout << "--- Human sleep ---\n";
    h.sleep();  // Output: Alice is 30 years old and sleeps 8 hours a night.

    std::cout << "--- Student sleep ---\n";
    s.sleep();  // Output: Bob is a student, and they sleep 5 hours a night.

    std::cout << "--- CS Student introducing ---\n";
    cs.sleep();  // Output: I am a CS student. My name is Charlie, and I am 22 years old.

    return 0;
}

