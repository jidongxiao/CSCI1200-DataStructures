#include <iostream>
#include <string>
#include <utility>
#include <cassert>

#include "ds_set.h"

int main() {

  // build a set
  ds_set<std::string> set1;
  
  std::pair< ds_set<std::string>::iterator, bool > insert_result;
  std::string to_insert = std::string("hello");
  insert_result = set1.insert(to_insert);
  assert(insert_result.second);

  insert_result = set1.insert(std::string("good-bye"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("friend"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("abc"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("puppy"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("zebra"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("daddy"));
  assert(insert_result.second);

  insert_result = set1.insert(std::string("puppy"));
  assert(!insert_result.second && * insert_result.first == std::string("puppy"));

  ds_set<std::string>::iterator p = set1.begin();
  assert(p != set1.end() && *p == std::string("abc"));


  // visualize the set
  std::cout << "The set size is " << set1.size()
	    << "\nHere are the elements: \n" << set1 << std::endl;

  p = set1.find("foo");
  if (p == set1.end())
    std::cout << "\"foo\" is not in the set\n";
  else
    std::cout << "\"foo\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;

  p = set1.find("puppy");
  if (p == set1.end())
    std::cout << "\"puppy\" is not in the set\n";
  else
    std::cout << "\"puppy\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;

  p = set1.find("daddy");
  if (p == set1.end())
    std::cout << "\"daddy\" is not in the set\n";
  else
    std::cout << "\"daddy\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;

  std::cout << "\nHere is the tree, printed sideways.\n"
	    << "The indentation is proportional to the depth of the node\n"
	    << "so that the value stored at the root is the only value printed\n"
	    << "without indentation.  Also, for each node, the right subtree\n"
	    << "can be found above where the node is printed and indented\n"
	    << "relative to it\n\n";
  set1.print_as_sideways_tree(std::cout);


  /*
  //  Needed for checkpoint 2, part 2
  ds_set<std::string> set2(set1);
  std::cout << "set1.size() = " << set1.size() << ", set2.size() = " << set2.size() << std::endl;
  std::cout << "\nHere is set2 printed sideways:\n";
  set2.print_as_sideways_tree(std::cout);
  
  //  Now add more stuff to set2. 
  insert_result = set2.insert(std::string("a"));
  assert(insert_result.second);
  insert_result = set2.insert(std::string("b"));
  assert(insert_result.second);
  std::cout << "\nAfter two inserts:\n"
	    << "set1.size() = " << set1.size() << ", set2.size() = " << set2.size() << "\n"
	    << "\nThe contents of set2:\n" << set2 << std::endl;

  */
     
  return 0;
}
