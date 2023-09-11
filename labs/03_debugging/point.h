#include <iostream>


// A simple 3D point class.  In this simple world, we'll follow the
// convention often used in Computer Graphics.  y is the vertical
// axes, "pointing" up.  The x and z axes define the ground plane.

class Point {
public:
  // CONSTRUCTOR
  Point(double x, double y, double z) : x_(x),y_(y),z_(z) {}
  // ACCESSORS
  double get_x() const { return x_; }
  double get_y() const { return y_; }
  double get_z() const { return z_; }  
private:
  // REPRESENTATION
  double x_,y_,z_;
};



// A helper function to print a Point.
std::ostream& operator<< (std::ostream &ostr, const Point &p);


// A helper function to compute the slope between two Points.
double compute_slope(const Point &a, const Point &b);
