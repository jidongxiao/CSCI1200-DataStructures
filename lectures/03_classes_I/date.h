// File:     date.h
// Purpose:  Header file with declaration of the Date class, including
//   member functions and private member variables.

class Date {
public:
  Date();
  Date(int aMonth, int aDay, int aYear);

  // ACCESSORS
  int getDay() const;
  int getMonth() const;
  int getYear() const;

  // MODIFIERS
  void setDay(int aDay);
  void setMonth(int aMonth);
  void setYear(int aYear);
  void increment();

  // other member functions that operate on date objects
  bool isEqual(const Date& date2) const;  // same day, month, & year?
  bool isLeapYear() const;     
  int lastDayInMonth() const;
  bool isLastDayInMonth() const;
  void print() const;                     // output as month/day/year

private:  // REPRESENTATION (member variables)
  int day;
  int month;
  int year;
};

// prototypes for other functions that operate on class objects are often
// included in the header file, but outside of the class declaration
bool sameDay(const Date &date1, const Date &date2); // same day & month?
