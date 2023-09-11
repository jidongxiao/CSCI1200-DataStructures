#include "point.h"

// A simple line class.  In this simple world, we'll follow the
// convention often used in Computer Graphics.  y is the vertical
// axes, "pointing" up.  The x and z axes define the ground plane.

class Line {
public:
  Line(const Point &a_, const Point &b_) : a(a_),b(b_) {}
  const Point& get_a() const { return a; }
  const Point& get_b() const { return b; }
private:
  Point a,b;
};


// A helper function to print a Line.
std::ostream& operator<< (std::ostream &ostr, const Line &l);


// A helper function to gradient of a line.
double gradient(const Line &ln);


// A helper function to compare the gradient of two Lines.
// (That can be used to sort a collection of roads.)
bool steeper_gradient(const Line &m, const Line &n);


