#include <iostream>
#include <vector>

#include "priority_queue.h"


int main() {

  priority_queue<int> pq_int;

  std::cout << "****************\n"
            << "* Checkpoint 1 *\n"
            << "****************" << std::endl;
  
  std::vector<int> heap_vector, empty_vector, one_vector;
  one_vector.push_back( 4 );
  heap_vector.push_back( 2); heap_vector.push_back(11); heap_vector.push_back( 7);
  heap_vector.push_back(13); heap_vector.push_back(29); heap_vector.push_back( 8);
  heap_vector.push_back( 9); heap_vector.push_back(27); heap_vector.push_back(21);
  heap_vector.push_back(37); heap_vector.push_back(40); heap_vector.push_back(16);
  std::vector<int> non_heap_vector( heap_vector );
  non_heap_vector[5] = 23;  //  less than its parent

  std::cout << "Testing if check_heap works." << std::endl
            << "An empty vector is a heap.  check_heap = " << pq_int.check_heap(empty_vector) << std::endl
            << "A one-element vector is also a heap.  check_heap = "  
            << pq_int.check_heap(one_vector) << std::endl
            << "A manually constructed heap.  check_heap = " << pq_int.check_heap(heap_vector) << std::endl
            << "A change at one location creates a non-heap.  check_heap = " 
            << pq_int.check_heap(non_heap_vector) << std::endl;
  
  pq_int.push( 5 );
  pq_int.push( 13 );
  pq_int.push( 3 );
  pq_int.push( 11 );
  pq_int.push( 6 );
  pq_int.push( 23 );
  pq_int.push( 8 );
  pq_int.push( 12 );
  
  std::cout << "After 8 push operations the size is " << pq_int.size() << std::endl
            << "The top, which should be 3, is " << pq_int.top() << std::endl
            << "The call to pq.int.empty() returns " << pq_int.empty() << std::endl
            << "pq_int.check_heap() = " << pq_int.check_heap() << std::endl;

  std::cout << "\nHere is the actual heap.  Values should be 3, 6, 5, 12, 11, 23, 8, 13\n";
  pq_int.print_heap( std::cout );
  
  /*
  std::cout << "\n\n"
            << "****************\n"
            << "* Checkpoint 2 *\n"
            << "****************" << std::endl;
  
  pq_int.pop();
  std::cout << "After one pop, the size should be 7.  It is " << pq_int.size() << std::endl
            << "and the top value should be 5.  It is " << pq_int.top() << std::endl;
  pq_int.pop(); pq_int.pop();
  std::cout << "After two more pops, the size should be 5.  It is " << pq_int.size() << std::endl
            << "and the top value should be 8.  It is " << pq_int.top() << std::endl;
  pq_int.push( 1 );
  std::cout << "Another push should make the top value 1.  It is " << pq_int.top() << std::endl;
  pq_int.pop(); pq_int.pop();    pq_int.pop(); pq_int.pop();    pq_int.pop(); pq_int.pop(); 
  std::cout << "After six more pops, the pq should be empty.  pq_int.empty() = " << pq_int.empty() << std::endl;
  
  std::vector<float> v;
  priority_queue<float> pq_f(v);
  std::cout << '\n' << "Now we are trying construction from a vector.\n"
            << "When the vector is empty, here is the value of pq_f.empty() = " << pq_f.empty() << std::endl;

  v.push_back(13.5); v.push_back(11.1); v.push_back(11.1); v.push_back(-4);
  v.push_back(14.3); v.push_back(4.5);  v.push_back(8.5); v.push_back(27.6);
  v.push_back(2.3);  v.push_back(15.2); v.push_back(23.1); v.push_back(12.5);
  priority_queue<float> pq_float(v);
  std::cout << "After constructing from a 12-value vector, the size is " << pq_float.size() << std::endl
            << "the top, which should be -4 is " << pq_float.top() << std::endl
            << "and check_heap returns " << pq_float.check_heap() << std::endl;
  */

  /*
  std::cout << "\n\n"
            << "****************\n"
            << "* Checkpoint 3 *\n"
            << "****************" << std::endl;
  
  heap_sort( v );
  int order_errors = 0;
  for ( unsigned int i=0; i<v.size()-1; ++i )
    if ( v[i] > v[i+1] ) order_errors ++ ;

  std::cout << "After running heap sort, the size of the vector, which still should be 12 is " << v.size()
            << "\nand there are " << order_errors << " ordering errors\n"
            << "The resulting vector is\n";
  for ( unsigned int i=0; i<v.size(); ++i )
    std::cout << i << ": " << v[i] << '\n';

  std::cout << "\nRunning heap sort on an empty vector... " << std::endl;
  v.clear();
  heap_sort(v);
  std::cout << "produces a vector that is " << (v.empty() ? "empty" : "NOT empty") << std::endl;
  */
  
  return 0;
}
