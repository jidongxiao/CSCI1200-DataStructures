#include <iostream>
#include <list>

int main(){

	std::list<int> a;
	unsigned int i;
	for ( i=1; i<10; ++i ){
        	a.push_back( i*i );
	}
	
	std::list<int>::reverse_iterator ri;
	for( ri = a.rbegin(); ri != a.rend(); ++ri ){
		std::cout << *ri << std::endl;
	}

	return 0;
}
