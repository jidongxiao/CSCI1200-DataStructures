#include <iostream>
#include <string>

class Human {
private:
    std::string name;
    int age;
    int sleep_hours;

public:
    Human(std::string n, int a, int s) : name(n), age(a), sleep_hours(s) {}

    void introduce() {
        std::cout << "Hello, I am " << name << ", and I am " << age << " years old.\n";
    }

    void sleep() {
        std::cout << name << " is " << age << " years old who sleeps " << sleep_hours << " hours a night.\n";
    }
};

int main() {
    // Creating instances of each class with member variables
    Human h("Alice", 30, 8);

    // Introducing Humans
    std::cout << "--- Human introducing ---\n";
    h.introduce();  // Output: Hello, I am Alice, and I am 30 years old.
    
    // Showing sleep behavior
    std::cout << "--- Human sleep ---\n";
    h.sleep();  // Output: Alice is 30 years old and sleeps 8 hours a night.

    return 0;
}
