#include <iostream>

// size of memory available for this process
#define CAPACITY 16 
// first valid address for this process
#define OFFSET 100  
#define MY_NULL 0


typedef int Address;


// A helper class for the StopAndCopy memory system
class Node {
public:
  Node() { value='?'; left=-1; right=-1; } // initialized with "garbage" values
  char value;
  Address left;
  Address right;
};


// A simple implementation of the basic StopAndCopy garbage collector
class StopAndCopy { 
public:
  StopAndCopy() {
    root = MY_NULL;
    partition_offset = 0;
    next = 0; 
  }
  // Return the node corresponding to a particular address
  Node& operator[](Address addr);  
  // allocate a new node
  Address my_new(char v, Address l, Address r);
  // a print function for debugging
  friend std::ostream& operator<<(std::ostream &ostr, StopAndCopy &m);
  // force automatic memory management
  void collect_garbage();  
  // REPRESENTATION
public:
  // the user must set this value such that all useful memory is
  // reachable starting from root  (NOTE: publicly accessible)
  Address root;   
private:
  // total machine memory
  Node memory[CAPACITY];   
  // which half of the memory is active
  int partition_offset;    
  // next available node
  int next;                
  // a private helper function
  void copy_help(Address &old_address);
};
