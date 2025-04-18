#include <iostream>
#include <memory>

int main(){
	std::shared_ptr<int> age(new int(40));
	std::cout << "age is " << *age << std::endl;

	// you can never do this, which is assigning a smarter pointer to a raw pointer.
	// int * temp = age;
	
	{
		std::shared_ptr<int> temp = age;
		std::cout << "age is " << *temp << std::endl;
		std::cout << "the use count is : " << age.use_count() << std::endl;
	}
	std::cout << "the use count is : " << age.use_count() << std::endl;

	if(age.unique()){
		std::cout << "Congratulations! I am yours!" << std::endl;
	}

	// give up my ownership, it decreases the reference count of the managed object by one.
	// if that shared pointer was the last owner (i.e., reference count becomes zero), the object is deleted. 
	// the shared_ptr itself is now empty (i.e., it holds nullptr).
	age.reset();
	std::cout << "the use count is : " << age.use_count() << std::endl;

	// question: what happens if we print age here: 
	// std::cout << "age is " << *age << std::endl;
	
	return 0;
}
