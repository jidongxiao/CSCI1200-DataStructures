#include <iostream>

int main(int argc, char* argv[]){
	std::string line("Why not change the world? Because I don't know how, do you know?");

        int start = 0;
	// starting from the position start, and search the string variable line,
        // to find the first question mark.
        int end = line.find("?", start);
	int len = end - start;
	// go from start to end, but exclude the character at end.
	// when we use the substr(start, length) function on a std::string, 
	// the substring includes the character at the start position, 
	// and the length of the substring is length. 
	// It does not include the character at the position start + length.
        std::string myString = line.substr(start, len);

	// print myString to console.
	std::cout << myString << std::endl;
	
	start = end+1;
	// with an updated start position,
        // we now find the second question mark.
        end = line.find("?", start);
	len = end - start;
	// go from start to end, but exclude the character at end.
        myString = line.substr(start, len);

	// print myString to console.
	std::cout << myString << std::endl;

	return 0;
}
