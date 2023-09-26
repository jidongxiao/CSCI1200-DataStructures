#include <iostream>
//#include <vector>

#include "vec.h"

int main(){

	// Vec is a template, not a type.
	Vec<std::string> teams;
	teams.push_back("rpi");
	teams.push_back("wpi");
	teams.push_back("yale");
	teams.push_back("brown");
	teams.push_back("cornell");
	teams.push_back("colgate");
	teams.push_back("miami");
	teams.push_back("colorado");
	teams.push_back("harvard");

	// we can use a type alias defined inside a class even if there is no object of that class. The type alias becomes part of the class's scope and can be used anywhere in your code where the class's scope is visible. although no object of Vec is created in this code, the type alias size_type is still accessible because it is part of the class's scope.
	for(Vec<int>::size_type i = 0; i < teams.size(); i++){
		std::cout << teams[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;
	teams.pop_back();
	for(Vec<int>::size_type i = 0; i < teams.size(); i++){
		std::cout << teams[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;

	//teams.erase(2);
	for(Vec<int>::size_type i = 0; i < teams.size(); i++){
		std::cout << teams[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;
	// have 4 doubles in this vector, each double has 0.0 as its value.
	Vec<double> v(4, 0.0);
	v[0] = 13.1;  v[2] = 3.14;
	// copy a vector - calls copy constructor.
	Vec<double> u(v);
	u[2] = 6.5;
	u[3] = -4.8;
	for (unsigned int i = 0; i < v.size(); ++i){
		std::cout << "u[" << i << "] is " << u[i] << " and v[" << i << "] is " << v[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;

	// equivalent to Vector<double> w(v), w is a copy of the elements in v.
	// we use the const keyword in front of a variable definition to indicate that the value of the variable cannot be changed after it is initialized.
	const Vec<double> w = v;
	for (unsigned int i = 0; i < v.size(); ++i){
		std::cout << "w[" << i << "] is " << w[i] << " and v[" << i << "] is " << v[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;
	v[3] = 2.6;
	// they should now be different.
	for (unsigned int i = 0; i < v.size(); ++i){
		std::cout << "w[" << i << "] is " << w[i] << " and v[" << i << "] is " << v[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;

	Vec<double> y;
        y = v;
	for (unsigned int i = 0; i < v.size(); ++i){
		std::cout << "y[" << i << "] is " << y[i] << " and v[" << i << "] is " << v[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;
	v[3] = 4.1;
	// they should now be different.
	for (unsigned int i = 0; i < v.size(); ++i){
		std::cout << "y[" << i << "] is " << y[i] << " and v[" << i << "] is " << v[i] << std::endl;
	}
	std::cout<<"========="<<std::endl;

	// two versions of the [] operator
	double x;
	x = w[2];
        std::cout << "x is " << x << std::endl;
	std::cout<<"========="<<std::endl;

	// out of bound access.
	u[6] = 2.2;
	std::cout << "u[6] is " << u[6] << std::endl;
	std::cout<<"========="<<std::endl;

	//std::cout << "w[10] is " << w[10] << std::endl;
        std::cout << "v[9] is " << v[9] << std::endl;
}
