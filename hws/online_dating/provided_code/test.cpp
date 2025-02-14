#include <iostream>
#include <sstream>	// include this so that we can use stringstream

int main(){

	std::string longString = "663-979-6253_953-451-3708_410-750-5502_750-260-3152_688-574-6330_915-954-4073";
	// create a stringstream to tokenize the long string
	std::istringstream iss(longString);
	std::string phoneNumber;

	// tokenize the long string using the underscore delimiter
	while (std::getline(iss, phoneNumber, '_')) {
		std::cout << phoneNumber << std::endl;
	}
	return 0;
}
