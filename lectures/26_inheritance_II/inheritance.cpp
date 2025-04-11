#include <iostream>

class Parent
{
public:
	Parent(){
		std::cout << "Parent default constructor" << std::endl;
	}
	Parent(std::string name, int age) : name(name), age(age){
		std::cout << "Parent other constructor" << std::endl;
	}
	void print(){
		std::cout << "Parent: " << name << ":" << age << std::endl;
	}
protected:
	std::string name;
	int age;
private:
	int id;
};

// public inheritance
class Child: public Parent
{
public:
	Child(){
		std::cout << "Child default constructor" << std::endl;
	}
	Child(std::string name, int age): Parent(name, age) {
		std::cout << "Child other constructor" << std::endl;
	}
	void printChild(){
		std::cout << "Child: " << name << ":" << age << std::endl;
		// std::cout << "id:" << id << std::endl;
	}
protected:
};

int main(){
	Parent parent("bob", 30);
	parent.print();
	Child child;
	Child child2("james", 10);

	return 0;
}
