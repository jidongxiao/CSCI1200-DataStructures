#include <iostream>
#include <unordered_set>

int replace(int n){
	int digit;
	int result=0;
	while(n>0){
		digit = (n%10);
		result += digit * digit;
		n = n/10;
	}
	return result;
}

bool isHappy(int n) {
	int newN = n;
	std::unordered_set<int> set1;
	while(1){
		newN = replace(newN);
		if(newN==1){
			return true;
		}else{
			// if we can find it, this is going to be an infinite loop
			if(set1.find(newN)!=set1.end()){
				return false;
			}
			// can't find it, insert it in the set first
			set1.insert(newN);
		}
	}
}

int main() {
	// Test cases
	// 2, 4, 5, 6, 17, 18, 20 are not happy numbers.
	// 1, 7, 10, 13, 19, 23, 28, 68 are not happy numbers.

    int testCases[] = {2,4,5,6,17,18,20,1,7,10,13,19,23,28,68};

    for (int n : testCases) {
        if (isHappy(n)) {
            std::cout << n << " is a happy number." << std::endl;
        } else {
            std::cout << n << " is not a happy number." << std::endl;
        }
    }

    return 0;
}

