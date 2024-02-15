#include <iostream>
//#include <list>

#include "list.h"

int main(){

	// dslist is a template, not a type.
	dslist<std::string> teams;
	teams.push_back("rpi");
	teams.push_back("wpi");
	teams.push_back("yale");
	teams.push_back("brown");
	teams.push_back("harvard");

	dslist<std::string>::iterator itr;
	for(itr	= teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	teams.pop_back();

	for(itr	= teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}

	return 0;
}
