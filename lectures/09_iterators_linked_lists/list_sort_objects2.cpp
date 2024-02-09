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

// Overload the < operator for sorting
bool operator<(const Person& p1, const Person& p2) {
      // Compare based on age
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
    std::list<Person>::iterator itr = people.begin();
    while(itr != people.end()){
	// one way to use iterators
        std::cout << (*itr).name << " (" << (*itr).age << ")" << std::endl;
	++itr;
    }

    // Sort the list of Person objects
    people.sort();

    // Print the sorted list
    std::cout << "\nSorted list:" << std::endl;
    itr = people.begin();
    while(itr != people.end()){
	// another way to use iterators
        std::cout << itr->name << " (" << itr->age << ")" << std::endl;
	++itr;
    }

    return 0;
}
