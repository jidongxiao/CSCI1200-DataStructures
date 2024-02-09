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
};

// Custom comparison function to sort Person objects by age
bool compareByAge(const Person& p1, const Person& p2) {
    return p1.age < p2.age;
}

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

    // Sort the list of Person objects using the custom comparison function
    people.sort(compareByAge);

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    for (const auto& person : people) {
        std::cout << person.name << " (" << person.age << ")" << std::endl;
    }

    return 0;
}

