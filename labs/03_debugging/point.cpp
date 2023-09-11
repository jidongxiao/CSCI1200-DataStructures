#include <cmath>
#include <iomanip>
#include "point.h"


// A helper function to print a Point.
std::ostream& operator<< (std::ostream &ostr, const Point &p) {
  ostr << std::fixed << std::setprecision(1)
       << "<"
       << std::setw(5) << p.get_x() << ","
       << std::setw(5) << p.get_y() << ","
       << std::setw(5) << p.get_z() << ">";
  return ostr;
}


// A helper function to compute the slope between two Points.
double compute_slope(const Point &a, const Point &b) {
  double rise = b.get_y() - a.get_y();
  double run_x = b.get_x() - a.get_x();
  double run_z = b.get_z() - a.get_z();
  double run = sqrt(run_x*run_x + run_z*run_z);
  double answer = rise / run;
  return rise / run;
}
