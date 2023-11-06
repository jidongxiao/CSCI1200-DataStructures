// leetcode problem 1; hash table solution, fast, but harder to write the code.

// this table can have at most 1024 keys
#define TABLE_SIZE 1024

class Node {
public:
    int number;
    int index;
    Node* next;
};

// add this num-index mapping into the table
// this has to be Node** table, because it's not just one pointer, it's an array of pointers.
void add(int num, int index, Node** table){
    int key;
    key = abs(num%TABLE_SIZE);   // key will be something in between 0 and (TABLE_SIZE-1); num can be negative
    if(table[key]==NULL){
        // create the first node for this linked list
        Node* node;
        node = new Node;
        node->number = num;
        node->index = index;
        node->next = NULL;
        table[key] = node;
    }else{
        // insert a node to the beginning of this linked list
        Node* node;
        node = new Node;
        node->number = num;
        node->index = index;
        node->next = table[key];
        table[key] = node;
    }
}

// give me the number, return the index
int get(int num, Node** table){
    int key = abs(num%TABLE_SIZE);   // key will be something in between 0 and (TABLE_SIZE-1); num can be negative
    Node* node;
    node = table[key];
    while(node!=NULL){
        if(node->number == num){
            return node->index;
        }
        node = node->next;
    }
    // not found
    return -1;
}

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // initialize it to something invalid
        int index = -1;
        int size = nums.size();
        vector<int> ans;
        // an array of pointers, each pointer points to the first node of a linked list.
        Node* table[TABLE_SIZE];
        for(int i=0;i<TABLE_SIZE;i++){
            table[i]=NULL;
        }
        for(int i=0;i<size;i++){
           index = get(target-nums[i], table);
            // can't use the same element twice.
            if(index==i){
                continue;
            }
            if(index>=0){
                ans.push_back(i);
                ans.push_back(index);
            }
            // add an entry to the table
            add(nums[i], i, table);
        }
        return ans;
    }
};
