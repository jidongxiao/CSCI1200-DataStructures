#include <iostream>
#include <vector>
#include <algorithm>
#include <cassert>

#include "time.h"

int main() {

  std::cout << "testing constructors" << std::endl;
  Time a;
  Time b(13,24,39);
  Time c(2,5,4);

  std::cout << "testing accessors" << std::endl;
  std::cout << "a: " << a.getHour() << " " << a.getMinute() << " " << a.getSecond() << std::endl;
  std::cout << "b: " << b.getHour() << " " << b.getMinute() << " " << b.getSecond() << std::endl;
  std::cout << "c: " << c.getHour() << " " << c.getMinute() << " " << c.getSecond() << std::endl;
  std::cout << std::endl;
  assert (b.getHour() == 13);
  assert (c.getMinute() == 5);
  assert (c.getSecond() == 4);

  // UNCOMMENT THESE TESTS AS YOU WORK THROUGH CHECKPOINT 3
  
  /*
  std::cout << "testing print" << std::endl;
  a.PrintAMPM();
  b.PrintAMPM();
  c.PrintAMPM();
  std::cout << std::endl;
  */

  /*
  std::cout << "testing modifiers" << std::endl;
  a.setHour(4);
  a.setMinute(32);
  a.setSecond(1);
  std::cout << "a: " << a.getHour() << " " << a.getMinute() << " " << a.getSecond() << std::endl;
  assert (a.getHour() == 4);
  assert (a.getMinute() == 32);
  assert (a.getSecond() == 1);
  a.PrintAMPM();
  std::cout << std::endl;
  */

  /*
  std::cout << "more testing print" << std::endl;
  Time noon(12,0,0);
  Time midnight(0,0,0);
  Time midnight2(0,0,0);
  std::cout << "noon      ";
  noon.PrintAMPM();
  std::cout << "midnight  ";
  midnight.PrintAMPM();
  std::cout << "midnight2 ";
  midnight2.PrintAMPM();
  std::cout << std::endl;
  */


  /*
  std::vector<Time> times;

  times.push_back(Time(0,0,1));
  times.push_back(Time(12,59,59));
  times.push_back(Time(23,59,59));
  times.push_back(Time(1,1,1));
  times.push_back(Time(22,22,22));
  times.push_back(Time(12,0,1));
  times.push_back(Time(11,59,59));
  times.push_back(Time(12,0,0));
  times.push_back(Time(23,23,23));
  times.push_back(Time(0,0,0));
  times.push_back(Time(13,13,13));
  times.push_back(Time(10,10,10));
  times.push_back(Time(2,2,2));
  times.push_back(Time(14,14,14));
  times.push_back(Time(3,3,3));
  
  for (int i = 0; i < times.size(); i++) {
    times[i].PrintAMPM();
  }
  */
  
}
