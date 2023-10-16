# Lecture 14 --- Problem Solving Techniques

- Operators as non-member functions, as member functions, and as friend functions.

## 14.1 Complex Numbers — A Brief Review

- Complex numbers take the form z = a + bi, where i =
√
−1 and a and b are real. a is called the real part, b is
called the imaginary part.
- If w = c + di, then
– w + z = (a + c) + (b + d)i,
– w − z = (a − c) + (b − d)i, and
– w × z = (ac − bd) + (ad + bc)i
- The magnitude of a complex number is √
a
2 + b
2

## 14.2 Complex Class declaration (complex.h)

```cpp
class Complex {
public:
Complex(double x=0, double y=0) : real_(x), imag_(y) {} // default constructor
Complex(Complex const& old) : real_(old.real_), imag_(old.imag_) {} // copy constructor
Complex& operator= (Complex const& rhs); // Assignment operator
double Real() const { return real_; }
void SetReal(double x) { real_ = x; }
double Imaginary() const { return imag_; }
void SetImaginary(double y) { imag_ = y; }
double Magnitude() const { return sqrt(real_*real_ + imag_*imag_); }
Complex operator+ (Complex const& rhs) const;
Complex operator- () const; // unary operator- negates a complex number
friend istream& operator>> (istream& istr, Complex& c);
private:
double real_, imag_;
};
Complex operator- (Complex const& left, Complex const& right); // non-member function
ostream& operator<< (ostream& ostr, Complex const& c); // non-member function
```

## 14.3 Implementation of Complex Class (complex.cpp)

```cpp
// Assignment operator
Complex& Complex::operator= (Complex const& rhs) {
real_ = rhs.real_;
imag_ = rhs.imag_;
return *this;
}
// Addition operator as a member function.
Complex Complex::operator+ (Complex const& rhs) const {
double re = real_ + rhs.real_;
double im = imag_ + rhs.imag_;
return Complex(re, im);
}
// Subtraction operator as a non-member function.
Complex operator- (Complex const& lhs, Complex const& rhs) {
return Complex(lhs.Real()-rhs.Real(), lhs.Imaginary()-rhs.Imaginary());
}
// Unary negation operator. Note that there are no arguments.
Complex Complex::operator- () const {
return Complex(-real_, -imag_);
}
// Input stream operator as a friend function
istream& operator>> (istream & istr, Complex & c) {
istr >> c.real_ >> c.imag_;
return istr;
}
// Output stream operator as an ordinary non-member function
ostream& operator<< (ostream & ostr, Complex const& c) {
if (c.Imaginary() < 0) ostr << c.Real() << " - " << -c.Imaginary() << " i ";
else ostr << c.Real() << " + " << c.Imaginary() << " i ";
return ostr;
}
```

## 14.4 Operators as Non-Member Functions and as Member Functions

- We have already written our own operators, especially operator<, to sort objects stored in STL containers
and to create our own keys for maps.
- We can write them as non-member functions (e.g., operator-). When implemented as a non-member function,
the expression: z - w is translated by the compiler into the function call: operator- (z, w)
- We can also write them as member functions (e.g., operator+). When implemented as a member function, the
expression: z + w is translated into: z.operator+ (w)
This shows that operator+ is a member function of z, since z appears on the left-hand side of the operator.
Observe that the function has only one argument!
There are several important properties of the implementation of an operator as a member function:
  – It is within the scope of class Complex, so private member variables can be accessed directly.
  – The member variables of z, whose member function is actually called, are referenced by directly by name.
  – The member variables of w are accessed through the parameter rhs.
  – The member function is const, which means that z will not (and can not) be changed by the function.
- Also, since w will not be changed since the argument is also marked const.
- Both operator+ and operator- return Complex objects, so both must call Complex constructors to create these
objects. Calling constructors for Complex objects inside functions, especially member functions that work on
Complex objects, seems somewhat counter-intuitive at first, but it is common practice!
