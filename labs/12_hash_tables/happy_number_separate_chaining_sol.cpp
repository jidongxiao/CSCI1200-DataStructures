// Solve the problem using separate chaining.

#include <iostream>

// this table can have at most 1024 keys
#define TABLE_SIZE 1024

class Node {
public:
    int number;
    Node* next;
};

// search the hash table and see if we can find this num.
bool identify(int num, Node** table){
	int key = abs(num%TABLE_SIZE);
	// search num in table[key];
	Node* node = table[key];
	while(node!=NULL){
		if(node->number == num){
			return true;
		}
		node = node->next;
	}
	// if not found, return false;
	return false;
}

// add num into the hash table
void add(int num, Node** table){
	int key = abs(num%TABLE_SIZE);
	Node* node = new Node;
	// insert num and index into table[key]
	// if this is the first node
	if(table[key]==NULL){
		node->number = num;
		node->next = NULL;
		table[key] = node;
	}else{
		// if this is not the first node
		node->number = num;
		node->next = table[key];
		table[key] = node;
	}
}

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
	Node* hash_table[TABLE_SIZE];
	for(int i=0;i<TABLE_SIZE;i++){
		hash_table[i]=NULL;
	}
	while(1){
		newN = replace(newN);
		if(newN==1){
			return true;
		}else{
			// if we can find it, this is going to be an infinite loop
			if(identify(newN, hash_table)){
				return false;
			}
			// can't find it, push it in the map first
			add(newN, hash_table);
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
