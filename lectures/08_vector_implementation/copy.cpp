#include <iostream>
#include "vec_shallow_copy.h"

int main(){

	Vec<double> v(4, 0.0);
	v[0] = 13.1; v[2] = 3.14;
	Vec<double> u(v);
	u[2] = 6.5;
	u[3] = -4.8;
	for (unsigned int i=0; i<4; ++i){
		std::cout << u[i] << " " << v[i] << std::endl;
	}
}
