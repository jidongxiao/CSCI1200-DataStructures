// Program:  date_main.cpp
// Purpose:  Demonstrate use of the Date class.

#include <iostream>
#include "date.h"

int main() {
  std::cout << "Please enter today's date.\n"
	    << "Provide the  month, day and year: ";
  int month, day, year;
  std::cin >> month >> day >> year;
  Date today(month, day, year);

  //Let's show what happens if we try to use today.month (private member variable)
  Date tomorrow(today.getMonth(), today.getDay(), today.getYear());
  tomorrow.increment();
  
  std::cout << "Tomorrow is ";
  tomorrow.print();
  std::cout << std::endl;

  Date Sallys_Birthday(9,29,1995);  
  if (sameDay(tomorrow, Sallys_Birthday)) {
    std::cout << "Hey, tomorrow is Sally's birthday!\n";
  }

  std::cout << "The last day in this month is " << today.lastDayInMonth() << std::endl;
  return 0;
}
