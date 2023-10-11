#include <iostream>
#include <cmath>
#include <list>

#include "dslist.h"

int main() {

  // =======================================
  // CHECKPOINT 1

  // create a list of the sqrt of the first 10 integers
  dslist<double> a;
  for (int i = 0; i < 10; ++i)
    a.push_back(sqrt(i));


  // print out details of the list
  assert (a.size() == 10);
  assert (a.front() == 0);
  assert (a.back() == 3);
  dslist<double>::iterator itr;
  std::cout << "Elements = ";
  for (itr = a.begin(); itr != a.end(); ++itr)
    std::cout << " " << *itr;
  std::cout << std::endl;

  // clear out the list
  a.clear();

  /*
  assert (a.size() == 0);
  */
  

  /*
  // simple tests of push_front, pop_front, and pop_back
  a.push_front(5);
  a.push_back(7);
  a.push_front(3);
  a.push_back(9);
  assert (a.size() == 4);

  assert (*(a.begin()) == 3);
  assert (*(++a.begin()) == 5);
  assert (*(++(++a.begin())) == 7);
  assert (*(++(++(++a.begin()))) == 9);
  
  std::cout << "Elements = ";
  for (itr = a.begin(); itr != a.end(); ++itr)
    std::cout << " " << *itr;
  std::cout << std::endl;

  a.pop_back();
  a.pop_front();
  assert (a.size() == 2);
  assert (*(a.begin()) == 5);
  assert (*(++a.begin()) == 7);
  
  std::cout << "Elements = ";
  for (itr = a.begin(); itr != a.end(); ++itr)
    std::cout << " " << *itr;
  std::cout << std::endl;

  a.pop_back();
  a.pop_front();
  assert (a.size() == 0);
  assert (a.begin() == a.end());
  */

  return 0;
}

