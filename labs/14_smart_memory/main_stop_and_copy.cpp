#include <iostream>
#include <cassert>
#include "stop_and_copy.h"


int main() {

  StopAndCopy m;
  std::cout << "TESTING StopAndCopy" << std::endl;
  std::cout << std::endl << "empty memory:" << std::endl << m;

  // create an interesting data structure
  m.root = m.my_new('a',MY_NULL,MY_NULL);
  m.my_new('b',MY_NULL,m.root);
  m.root = m.my_new('c',m.root,MY_NULL);
  m[m.root].right = m.my_new('d',m[m.root].left,MY_NULL);

  std::cout << std::endl << "4 cells allocated:" << std::endl << m;

  m.root = m.my_new('e',MY_NULL,m.root);
  m[m.root].right = m.my_new('f',m[m.root].right,MY_NULL);
  m[m[m.root].right].right = m.my_new('g',m[m.root].right,MY_NULL);
  m.root = m.my_new('h',m.root,MY_NULL);
  m.root = m[m[m.root].left].right;

  std::cout << std::endl << "8 cells allocated:" << std::endl << m;

  // force garbage collection
  m.collect_garbage();
  std::cout << std::endl << "after forced garbage collection:" << std::endl << m;

  // allocate more cells to force garbage collection
  m[m.root].left = m.my_new('i',m.root,MY_NULL);
  m.root = m.my_new('j',m.root,MY_NULL);
  m.root = m.my_new('k',m.root,MY_NULL);

  std::cout << std::endl << "after adding 3 more cells:" << std::endl << m;


  // Walk through the Stop And Copy garbage collection algorithm on
  // the memory at this point in the program.  Draw a pencil & paper
  // diagram to show your work.


  // UNCOMMENT THESE LINES AFTER YOU FINISH CHECKPOINT 1 (to check your work)
  /*
  m.root = m.my_new('l',m.root,MY_NULL);
  std::cout << std::endl << "adding another cell triggers automatic garbage collection:" << std::endl << m;

  // "forget" the root pointer
  m.root = MY_NULL;
  m.collect_garbage();
  std::cout << std::endl << "root set to null & forced garbage collection:" << std::endl << m;
  */

}

// ==============================================================================
