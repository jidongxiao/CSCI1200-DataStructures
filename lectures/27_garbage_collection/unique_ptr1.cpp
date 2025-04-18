#include <iostream>
#include <memory>

int main(){
	// Question: is this valid or invalid syntax?
	// std::unique_ptr<std::string> s1("test1");
	
	std::unique_ptr<std::string> s1(new std::string("test1"));

	std::cout << *s1 << std::endl;
	// Question: can we do this: std::cout << s1.size() << std::endl;
	std::cout << s1->size() << std::endl;

	std::unique_ptr<std::string> s2(std::move(s1));

	// Question: which one of the following two lines will trigger a seg fault?
	// std::cout << "s1:" << *s1 << std::endl;
	// std::cout << "s2:" << *s2 << std::endl;

	return 0;
}
