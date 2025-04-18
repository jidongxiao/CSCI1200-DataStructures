#include <iostream>
#include <string>

template <class T>
class shared_ptr {
public:
	shared_ptr(T* ptr){
		ptr_ = ptr;
	}

	~shared_ptr(){
		if(ptr_ != nullptr){
			delete ptr_;
		}
	}
	T& operator*(){
		return *ptr_;
	}
	// operator->() is a unary operator — it only uses the left-hand operand (s1) to get access to the underlying object.
	T* operator->(){
		return ptr_;
	}
private:
	T* ptr_;
};

int main(){
	shared_ptr<int> age(new int(20));

	std::cout << "age is " << *age << std::endl;

	shared_ptr<std::string> s1(new std::string("test"));

	// compiler will interpret s1->length() as (s1.operator->())->length(), and that’s just how C++ handles overloaded operator->()
	// and s1.operator->() returns a std::string*
	// therefore we now have: (std::string*)->length(), which is just normal pointer behavior — calling length() on the string.
	std::cout << "length is " << s1->length() << std::endl;
	return 0;
}
