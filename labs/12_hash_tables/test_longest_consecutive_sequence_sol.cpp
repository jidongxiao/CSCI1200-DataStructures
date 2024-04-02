#include <iostream>
#include <vector>

#define TABLE_SIZE 1024

class Node{
public:
	int number;
	Node* next;
};

// insert num into table
void insert(int num, Node** table){
	int key;
	key = abs(num%TABLE_SIZE);   // key will be something in between 0 and (TABLE_SIZE-1); num can be negative
	if(table[key] == nullptr){
		// create the first node for this linked list
		Node* node;
		node = new Node;
		node->number = num;
		node->next = nullptr;
		table[key] = node;
	}else{
		// insert a node to the beginning of this linked list
		Node* node;
		node = new Node;
		node->number = num;
		node->next = table[key];
		table[key] = node;
	}
}

// search the hash table and see if we can find this num.
bool identify(int num, Node** table){
	int key = abs(num%TABLE_SIZE);
	// search num in table[key];
	Node* node = table[key];
	while(node != nullptr){
		if(node->number == num){
			return true;
		}
		node = node->next;
	}
	// if not found, return false;
	return false;
}

// Question: why is this an O(n) solution when we have a nested loop? Because the inner while loop will only be used if *itr1 is the beginning of the sequence, which means each element will only be visited 2 or 3 times.
int longestConsecutive(std::vector<int>& nums) {
	int len=0;
	Node* hash_table[TABLE_SIZE];
	// initialize the table
	for(int i=0;i<TABLE_SIZE;i++){
		hash_table[i] = nullptr;
	}
	int size = nums.size();
	if(size == 0){
		return 0;
	}
	// store unique elements in nums in set1
	for(int i=0;i<nums.size();i++){
		insert(nums[i], hash_table);
	}
	
	int i=0;
	Node* current = hash_table[i];
	// if we reach here, then there is at least one Node in the hash table.
	// find the first non-NULL Node.
	while(current == nullptr){
		i++;
		current = hash_table[i];
	}
	// traverse the hash table
	while(current!=nullptr){
		// if (current->num-1) can't be found
		if(!identify(current->number - 1, hash_table)){
			int x = current->number + 1;
			// now that current->num is the beginning of a sequence, how about current->num + 1?
			while(identify(x, hash_table)){
				x++;
			}
			// when we get out of the above while loop, it's time to update len, if needed.
			if( (x - current->number) > len){
				len = x - current->number;
			}
		}
		current = current->next;
		// we still need a while here, rather than an if.
		// so that we can find the next non-empty bucket.
		while(current == nullptr){
			i++;
			if(i<TABLE_SIZE){
				// move to the next bucket
				current = hash_table[i];
			}else{
				// this means we have visited every element in the whole hash table.
				break;
			}
		}
	}
	return len;
}

int main() {
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2};
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2, 2, 2, 2, 3};
	//std::vector<int> nums = {100, 4, 200, 1, 3, 2, 5, 6};
	//std::vector<int> nums = {0,3,7,2,5,8,4,6,0,1};
	//std::vector<int> nums = {100, 4, 200, 201, 202, 203, 205, 204, 1, 3, 2};
	std::vector<int> nums = {-3,0,1,2,3,-2,-1,-5};
	int size = nums.size();
	std::cout<< "for vector {";
	for(int i=0;i<size-1;i++){
		std::cout<< nums[i] << ",";
	}
	std::cout<< nums[size-1] << "}" <<std::endl;
	int length = longestConsecutive(nums);
	std::cout << "The length of the longest consecutive sequence is: " << length << std::endl;
	return 0;
}
