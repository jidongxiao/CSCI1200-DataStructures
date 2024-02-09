#include <list>
#include <iostream>
#include <cassert>

int main(){

	std::list<int> lst;
	lst.push_back(150);
	lst.push_back(250);
	lst.push_back(350);
	lst.push_back(450);
	
	std::list<int>::iterator itr;
	itr = lst.begin();
	++itr;
	*itr += 5;

	std::list<int>::iterator itr2 = lst.begin();
	while(itr2 != lst.end()){
		std::cout << *itr2 << std::endl;
		itr2++;
	}
	
}
