#include <iostream>

class Human {
};

class Student {
	int age;
};

class CollegeStudent {
	int age;
	void print(){
		std::cout << "I am a college student." << std::endl;
	}
};

class CSStudent {
	int age;
	virtual void print(){
		std::cout << "I am a CS student." << std::endl;
	}
};

int main(){
	CSStudent cs;
	std::cout << "memory size of Human class is: " << sizeof(Human) << std::endl;
	std::cout << "memory size of Student class is: " << sizeof(Student) << std::endl;
	std::cout << "memory size of College Student class is: " << sizeof(CollegeStudent) << std::endl;
	std::cout << "memory size of CS Student class is: " << sizeof(CSStudent) << std::endl;
	return 0;
}
