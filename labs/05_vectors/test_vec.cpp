#include <iostream>
#include <cmath>
using namespace std;

#include "vec.h"

int main() {

  // ---------------------------------------------------
  // initialize v1 with 10 values...  the multiples of 5
  Vec<int> v1( 10, 0 );
  Vec<int>::size_type i;
  for ( i = 0; i < v1.size(); i++) {
    v1[i] = 5 * i;
  }
  cout << "v1.size() = " << v1.size() << ".  Should be 10.\n";
  cout << "Contents of v1 (multiples of 5):";
  for ( i = 0; i<v1.size(); ++i ) {
    cout << " " << v1[i];
  }
  cout << endl;

  // --------------------------------------------------------------------------
  // make v2 be a copy of v1, but then overwrite the 2nd half with the 1st half
  Vec<int> v2( v1 );
  v2[ 9 ] = v2[ 0 ];
  v2[ 8 ] = v2[ 1 ];
  v2[ 7 ] = v2[ 2 ];
  v2[ 6 ] = v2[ 3 ];
  v2[ 5 ] = v2[ 4 ];
  cout << "Contents of v1 (still multiples of 5):";
  for ( i = 0; i<v1.size(); ++i )
    cout << " " << v1[i];
  cout << endl;
  cout << "Contents of v2 (now palindrome):";
  for ( i = 0; i<v2.size(); ++i )
    cout << " " << v2[i];
  cout << endl;

  // ------------------------------------------
  // make v3 be a copy of v2, but then clear it
  Vec<int> v3;
  v3 = v2;
  v3.clear();
  cout << "\nAfter copying v2 to v3 and clearing v3,  v2.size() = "
       << v2.size() << " and v3.size() = " << v3.size() << endl;
  cout << "Contents of v2 (should be unchanged):";
  for ( i = 0; i<v2.size(); ++i ) {
    cout << " " << v2[i];
  }
  cout << endl;

  // --------------
  // test push back
  cout << "\nNow testing push_back.  Adding 3, 6, 9 to v2:\n";
  v2.push_back( 3 );
  v2.push_back( 6 );
  v2.push_back( 9 );
  cout << "v2 is now: \n";
  for ( i = 0; i<v2.size(); ++i ) {
    cout << " " << v2[i];
  }
  cout << endl;

  // -----------
  // test resize
  v1.resize(20,100);
  cout << "\nNow testing resize.  Resizing v1 to have 20 elements and v2 to have 2 elements\n";
  cout << "v1 is now (should have 100s at the end): \n";
  for ( i = 0; i<v1.size(); ++i )
    cout << " " << v1[i];
  cout << endl;
  v2.resize(2,100);
  cout << "v2 is now: \n";
  for ( i = 0; i<v2.size(); ++i )
    cout << " " << v2[i];
  cout << endl;

  // ------------------------
  // test of a vec of doubles
  cout << "\nStarting from an empty vector, z,  of doubles and doing\n"
       << "5 push_backs\n";
  Vec<double> z;
  for ( i = 0; i<5; ++i )
    z.push_back( sqrt( double(10*(i+1)) ));
  cout << "Contents of vector z: ";
  for ( Vec<double>::size_type j = 0; j < z.size(); j++ )
    cout << " " << z[j];
  cout << endl;



  // ADD MORE TEST CASES HERE

    
  return 0; 
}
