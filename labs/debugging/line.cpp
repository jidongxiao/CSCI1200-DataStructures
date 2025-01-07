#include <iomanip>
#include <cmath>
#include "point.h"
#include "line.h"


// A helper function to calculate the slope of a Line.
std::ostream& operator<< (std::ostream &ostr, const Line &l) {
  ostr << "Road: "
       << l.get_a() << " ----- " << l.get_b()
       << "  gradient = "
       << std::fixed << std::setprecision(1) << std::setw(4)
       << gradient(l);
  return ostr;
}


// A helper function to calculate the gradient of a Line.
double gradient(const Line &ln) {
  float slope = compute_slope(ln.get_a(),ln.get_b());
  // convert the slope into a percentage gradient
  float gradient = 100.0 * fabs(slope);
  // take the absolute value
  if (gradient < 0) {
    gradient * -1;
  }
  return gradient;
}


// A helper function to compare the gradient of two Lines.
// (That can be used to sort a collection of roads.)
bool steeper_gradient(const Line &m, const Line &n) {
  double gradient_m = gradient(m); 
  double gradient_n = gradient(n); 
  if (gradient_m > gradient_n)
    return true;
  if (gradient_n > gradient_m)
    return false;
}


