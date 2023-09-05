// File:    date.cpp
// Purpose: Implementation file for the Date class.

#include <iostream>
#include "date.h"

// array to figure out the number of days, it's used by the auxiliary function daysInMonth
const int DaysInMonth[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

Date::Date() {	//default constructor
  day = 1;
  month = 1;
  year = 1900;
}

Date::Date(int aMonth, int aDay, int aYear) { // construct from month, day, & year
  month = aMonth;
  day = aDay;
  year = aYear;
}


int Date::getDay() const {
  return day;
}

int Date::getMonth() const {
  return month;
}
	
int Date::getYear() const {
  return year;
}

void Date::setDay(int d) {
  day = d;
}

void Date::setMonth(int m) {
  month = m;
}

void Date::setYear(int y) {
  year = y; 
}

void Date::increment() {
  if (!isLastDayInMonth()) {
    day++; 
  } else {
    day = 1;
    if (month == 12) {  // December
      month = 1;
      year++;
    } else {
      month++;
    }
  }
}

bool Date::isEqual(const Date& date2) const {
  return day == date2.day && month == date2.month && year == date2.year;
}

bool Date::isLeapYear() const {
  return (year%4 ==0 && year % 100 != 0) || year%400 == 0;
}

int Date::lastDayInMonth() const {
  if (month == 2 && isLeapYear())
    return 29;
  else
    return DaysInMonth[ month ];    
}

bool Date::isLastDayInMonth() const {
  return day == lastDayInMonth();   // uses member function
}

void Date::print() const {
  std::cout << month << "/" << day << "/" << year;
}

bool sameDay(const Date& date1, const Date& date2) {
  return date1.getDay() == date2.getDay() && date1.getMonth() == date2.getMonth();
}
