#include <iostream>
#include <list>
#include <string>

// Define a simple class representing a person
class Person {
public:
    std::string name;
    int age;

    // Constructor
    Person(std::string name, int age) : name(name), age(age) {}

    // Overload the < operator for sorting
    bool operator<(const Person& other) const {
        // Compare based on age
        return age < other.age;
    }
};

int main() {
    // Create a list of Person objects
    std::list<Person> people = {
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 20}
    };

    // Print the original list
    std::cout << "Original list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    // Sort the list of Person objects
    people.sort();

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    return 0;
}
