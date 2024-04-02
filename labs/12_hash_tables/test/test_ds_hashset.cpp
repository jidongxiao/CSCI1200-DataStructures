#include <iostream>
#include <string>
#include <utility>
#include <cassert>

#include "ds_hashset.h"


// Wrapping a class around a function turns a function into a functor
// (We'll talk about this more in Lecture 21.  You can just ignore
// this wrapper part for now.)
class hash_string_obj {
public:

  // ----------------------------------------------------------
  // EXPERIMENT WITH THE HASH FUNCTION FOR CHECKPOINT 1, PART 2

  unsigned int operator() ( const std::string& key ) const {
    //  This implementation comes from 
    //  http://www.partow.net/programming/hashfunctions/
    //
    //  This is a general-purpose, very good hash function for strings.
    unsigned int hash = 1315423911;
    for(unsigned int i = 0; i < key.length(); i++)
      hash ^= ((hash << 5) + key[i] + (hash >> 2));
    return hash;
  }   
  
};


typedef ds_hashset<std::string, hash_string_obj> ds_hashset_type;


int main() {

  // ---------------------------------
  // CODE TO TEST CHECKPOINT 1, PART 1
  ds_hashset_type a;
  ds_hashset_type set1;
  std::pair< ds_hashset_type::iterator, bool > insert_result;

  std::string to_insert = std::string("hello");
  insert_result = set1.insert( to_insert );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("good-bye") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("friend") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("abc") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("puppy") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("zebra") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("daddy") );
  assert( insert_result.second );

  insert_result = set1.insert( std::string("puppy") );
  assert( !insert_result.second && * insert_result.first == std::string("puppy") );

  std::cout << "The set size is " << set1.size() << '\n'
	    << "Here is the table: \n";
  set1.print( std::cout );

  ds_hashset_type::iterator p;
  p = set1.find( "foo" );
  if ( p == set1.end() )
    std::cout << "\"foo\" is not in the set\n";
  else
    std::cout << "\"foo\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;

  p = set1.find("puppy");
  if ( p == set1.end() )
    std::cout << "\"puppy\" is not in the set\n";
  else
    std::cout << "\"puppy\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;

  p = set1.find("daddy");
  if ( p == set1.end() )
    std::cout << "\"daddy\" is not in the set\n";
  else
    std::cout << "\"daddy\" is in the set\n"
	      << "The iterator points to " << *p << std::endl;


  // ---------------------------------
  // CODE TO TEST CHECKPOINT 2, PART 1
  /*
  p = set1.begin();
  std::cout << "\nHere is the result of iterating: \n";
  for ( p = set1.begin(); p != set1.end(); ++p )
    std::cout << *p << '\n';
  */


  // ---------------------------------
  // CODE TO TEST CHECKPOINT 2, PART 2
  /*
  ds_hashset_type set2( set1 );
  std::cout << "set1.size() = " << set1.size() << ", set2.size() = " << set2.size() << std::endl;

  //  Now add more stuff to set2.  This should trigger a resize given the default settings.
  insert_result = set2.insert( std::string("ardvark") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("baseball") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("football") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("gymnastics") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("dance") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("swimming") );
  assert( insert_result.second );
  insert_result = set2.insert( std::string("track") );
  assert( insert_result.second );

  std::cout << "\nAfter seven more inserts:\n"
	    << "set1.size() = " << set1.size() << ", set2.size() = " << set2.size() << "\n"
	    << "\nThe contents of set2:" << std::endl;
  set2.print(std::cout);
  std::cout << "The results of iterating:\n";
  for ( p = set2.begin(); p != set2.end(); ++p )
    std::cout << *p << '\n';
  */

  // ---------------
  // OTHER TEST CODE
  /*  
  //  Now test erase
  int num = set2.erase( std::string("hello") );
  std::cout << "Tried erase \"hello\" and got num (should be 1) = " << num << std::endl;
  num = set2.erase( std::string("abc") );
  std::cout << "Tried erase \"abc\" and got num (should be 1) = " << num << std::endl;
  num = set2.erase( std::string("hello") );
  std::cout << "Tried erase \"hello\" and got num (should be 0) = " << num << std::endl;
  num = set2.erase( std::string("football") );
  std::cout << "Tried erase \"football\" and got num (should be 1) = " << num << std::endl;
  num = set2.erase( std::string("friend") );
  std::cout << "Tried erase \"friend\" and got num (should be 1) = " << num
	    << "\nHere are the final contents of set2:" << std::endl;
  set2.print(std::cout);
  */

  return 0;
}
