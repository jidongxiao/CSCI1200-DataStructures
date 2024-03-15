#include <iostream>
using std::istream;
using std::ostream;

class Complex {
public:
  Complex(double x=0, double y=0) : real_(x), imag_(y) {}  // default constructor
  Complex(Complex const& old) : real_(old.real_), imag_(old.imag_) {}  // copy constructor
  Complex& operator= (Complex const& rhs); // Assignment operator
  double Real() const { return real_; }
  void SetReal(double x) { real_ = x; }
  double Imaginary() const { return imag_; }
  void SetImaginary(double y) { imag_ = y; }
  double Magnitude() const { return sqrt(real_*real_ + imag_*imag_); }
  Complex operator+ (Complex const& rhs) const;  
  Complex operator- () const; // unary operator- negates a complex number

  // Input and output stream operators can not be member functions.  They can be friends, 
  // or they can be non-member functions if their work can be accomplished through the 
  // public interface to the class.  Note that the complex object passed to the istream 
  // (>>) operator MUST be passed as a non-const reference.
  friend istream& operator>> (istream& istr, Complex& c);
private:
  double real_, imag_;
};

Complex operator- (Complex const& left, Complex const& right); // non-member function
ostream& operator<< (ostream& ostr, Complex const& c);  // non-member function

