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
	teams.push_back("cornell");
	teams.push_back("colgate");
	teams.push_back("miami");
	teams.push_back("colorado");
	teams.push_back("harvard");

	// we can use a type alias defined inside a class even if there is no object of that class. The type alias becomes part of the class's scope and can be used anywhere in your code where the class's scope is visible. although no object of dslist is created in this code, the type alias size_type is still accessible because it is part of the class's scope.
	dslist<std::string>::iterator itr;
	for(itr	= teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	teams.pop_back();

	for(itr = teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	itr = teams.begin();
	itr++;
	teams.erase(itr);

	for(itr = teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	teams.push_front("harvard");
	teams.push_front("princeton");

	for(itr = teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	teams.pop_front();
	for(itr = teams.begin(); itr != teams.end(); itr++){
		std::cout << *itr << std::endl;
	}
	std::cout<<"==============="<<std::endl;

	dslist<double> ll;
	ll.push_back(2.5);
	ll.push_back(3.4);
	int i = 0;
	dslist<double>::iterator itr2 = ll.begin();
	for (i=0, itr2 = ll.begin(); itr2 != ll.end(); itr2++, i++){
		std::cout << "ll[" << i << "] is " << *itr2 << std::endl;
	}

	// copy a list - calls copy constructor.
	dslist<double> u(ll);
	itr2 = u.begin();
	itr2++;
	u.insert(itr2, 6.5);
	u.insert(itr2, 4.8);
	for (i=0, itr2 = u.begin(); itr2 != u.end(); itr2++, i++){
		std::cout << "u[" << i << "] is " << *itr2 << std::endl;
	}

	// equivalent to list<double> w(v), w is a copy of the elements in v.
	// we use the const keyword in front of a variable definition to indicate that the value of the variable cannot be changed after it is initialized.
	dslist<double> w = ll;
	for (i=0, itr2 = w.begin(); itr2 != w.end(); itr2++, i++){
		std::cout << "w[" << i << "] is " << *itr2 << std::endl;
	}

}
