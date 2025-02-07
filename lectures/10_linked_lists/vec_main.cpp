#include <iostream>
//#include <vector>
#include "vec.h"

int main(){
	vec<std::string> teams;
	teams.push_back("rpi");
	teams.push_back("wpi");
	teams.push_back("yale");
	teams.push_back("brown");
	teams.push_back("cornell");
	teams.push_back("colgate");
	teams.push_back("miami");
	teams.push_back("colorado");
	teams.push_back("harvard");
	std::cout << "==== teams ==== " << std::endl;
	int size = teams.size();
	for(int i=0; i<size; ++i){
		std::cout << teams[i] << std::endl;
	}

	// this line calls the other constructor.
	vec<double> v(4, 0.0);
	v[0] = 13.1; v[2] = 3.14;

	vec<double>::iterator itr = v.begin();
	std::cout << "the first element of v is: " << *itr << std::endl;
	std::cout << "printing elements in v: " << std::endl;
	while(itr != v.end()){
		std::cout << "print " << *itr << std::endl;
		++itr;
	}
}
