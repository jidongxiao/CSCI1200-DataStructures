# Lecture 8 --- Templated Classes & Vector Implementation

- Designing our own container classes:  
  – Mimic the interface of standard library (STL) containers  
  – Study the design of memory management.  
  – Move toward eventually designing our own, more sophisticated classes.
- Vector implementation
- Templated classes (including compilation and instantiation of templated classes)
- Copy constructors, assignment operators, and destructors

## 8.1 Vector Public Interface

In creating our own version of the STL vector class, we will start by considering the public interface:

```cpp
public:
// MEMBER FUNCTIONS AND OTHER OPERATORS
T& operator[] (size_type i);
const T& operator[] (size_type i) const;
void push_back(const T& t);
void resize(size_type n, const T& fill_in_value = T());
void clear();
bool empty() const;
size_type size() const;
```

- To implement our own generic (a.k.a. templated) vector class, we will implement all of these operations,
manipulate the underlying representation, and discuss memory management.

## 8.2 Templated Class Declarations and Member Function Definitions

- In terms of the layout of the code in [vec.h](vec.h), the biggest difference is that this is a
templated class. The keyword template and the template type name must appear before the class declaration:

```cpp
template <class T> class Vec
```

- Within the class declaration, T is used as a type and all member functions are said to be “templated over type
T”. In the actual text of the code files, templated member functions are often defined (written) inside the class
declaration.

- The templated functions defined outside the template class declaration must be preceded by the phrase:
template &lt;class T&gt; and then when Vec is referred to it must be as Vec&lt;T&gt;. For example, for member
function create (two versions), we write:

```cpp
template <class T> void Vec<T>::create(...
```

## 8.3 Syntax and Compilation

- Templated classes and templated member functions are not created/compiled/instantiated until they are
needed. Compilation of the class declaration is triggered by a line of the form: Vec&lt;int&gt; v1; with int
replacing T. This also compiles the default constructor for Vec&lt;int&gt; because it is used here. Other member
functions are not compiled unless they are used.
- When a different type is used with Vec, for example in the declaration: Vec&lt;double&gt; z; the template class
declaration is compiled again, this time with double replacing T instead of int. Again, however, only the
member functions used are compiled.
- This is very different from ordinary classes, which are usually compiled separately and all functions are compiled
regardless of whether or not they are needed.
- The templated class declaration and the code for all used member functions must be provided where they
are used. As a result, member functions definitions are often included within the class declaration or defined
outside of the class declaration but still in the .h file. If member function definitions are placed in a separate
.cpp file, this file must be #include-d, just like the .h file, because the compiler needs to see it in order to
generate code. (Normally we don’t #include .cpp files!).
Note: Including function definitions in the .h for ordinary non-templated classes may lead to compilation errors
about functions being “multiply defined”. Some of you have already seen these errors.

## 8.4 Member Variables

Now, looking inside the Vec&lt;T&gt; class at the member variables:
- m_data is a pointer to the start of the array (after it has been allocated). Recall the close relationship between
pointers and arrays.
- m_size indicates the number of locations currently in use in the vector. This is exactly what the size()
member function should return,
- m_alloc is the total number of slots in the dynamically allocated block of memory.
Drawing pictures, which we will do in class, will help clarify this, especially the distinction between m_size and m_alloc.

## 8.5 Typedefs

- Several types are created through typedef statements in the first public area of Vec. Once created the names
are used as ordinary type names. For example Vec&lt;int&gt;::size type is the return type of the size() function,
defined here as an unsigned int.

## 8.6 operator[]

Access to the individual locations of a Vec is provided through operator[]. Syntactically, use of this operator
is translated by the compiler into a call to a function called operator[]. For example, if v is a Vec&lt;int&gt;,
then:
```cpp
v[i] = 5;
```
translates into:
```cpp
v.operator[](i) = 5;
```
In most classes there are two versions of operator[]:
– A non-const version returns a reference to m_data[i]. This is applied to non-const Vec objects.
– A const version is the one called for const Vec objects. This also returns m_data[i], but as a const reference, so it can not be modified.

## 8.7 Default Versions of Assignment Operator and Copy Constructor Are Dangerous!

Before we write the copy constructor and the assignment operator, we consider what would happen if we didn’t write them.
- C++ compilers provide default versions of these if they are not provided. These defaults just copy the values
of the member variables, one-by-one. For example, the default copy constructor would look like this:
```cpp
template <class T>
Vec<T> :: Vec(const Vec<T>& v)
: m_data(v.m_data), m_size(v.m_size), m_alloc(v.m_alloc)
{}
```
In other words, it would construct each member variable from the corresponding member variable of v. This is
dangerous and incorrect behavior for the Vec class. We don’t want to just copy the m_data pointer. We really
want to create a copy of the entire array! Let’s look at this more closely...

## 8.8 Exercise

Suppose we used the default version of the assignment operator and copy constructor in our Vec&lt;T&gt; class. What
would be the output of the following program? Assume all of the operations except the copy constructor behave as
they would with a std::vector&lt;double&gt;.
```cpp
Vec<double> v(4, 0.0);
v[0] = 13.1; v[2] = 3.14;
Vec<double> u(v);
u[2] = 6.5;
u[3] = -4.8;
for (unsigned int i=0; i<4; ++i)
cout << u[i] << " " << v[i] << endl;
```
Explain what happens by drawing a picture
of the memory of both u and v.

## 8.9 Classes With Dynamically Allocated Memory

For Vec (and other classes with dynamically-allocated memory) to work correctly, each object must do its own
dynamic memory allocation and deallocation. We must be careful to keep the memory of each object instance
separate from all others.
- All dynamically-allocated memory for an object should be released when the object is finished with it or when
the object itself goes out of scope (through what’s called a destructor).
- To prevent the creation and use of default versions of these operations, we must write our own:
  – Copy constructor
  – Assignment operator
  – Destructor

## 8.10 The “this” pointer

All class objects have a special pointer defined called this which simply points to the current class object, and
it may not be changed.
- The expression \*this is a reference to the class object.
- The this pointer is used in several ways:
  - Make it clear when member variables of the current object are being used.
  - Check to see when an assignment is self-referencing.
  - Return a reference to the current object.

## 8.11 Copy Constructor

This constructor must dynamically allocate any memory needed for the object being constructed, copy the
contents of the memory of the passed object to this new memory, and set the values of the various member
variables appropriately.
- Exercise: In our Vec class, the actual copying is done in a private member function called copy. Write the
private member function copy.

## 8.12 Assignment Operator

Assignment operators of the form:
```cpp
v1 = v2;
```
are translated by the compiler as:
```cpp
v1.operator=(v2);
```
- Cascaded assignment operators of the form:
```cpp
v1 = v2 = v3;
```
are translated by the compiler as:
```cpp
v1.operator=(v2.operator=(v3));
```
- Therefore, the value of the assignment operator (v2 = v3) must be suitable for input to a second assignment
operator. This in turn means the result of an assignment operator ought to be a reference to an object.
- The implementation of an assignment operator usually takes on the same form for every class:  
  – Do no real work if there is a self-assignment.  
  – Otherwise, destroy the contents of the current object then copy the passed object, just as done by the
copy constructor. In fact, it often makes sense to write a private helper function used by both the copy
constructor and the assignment operator.  
  – Return a reference to the (copied) current object, using the this pointer.

**Note**: In C++, the assignment operator is used for assignment after an object has already been created. And because of that, the following two code snippets behave differently.

```cpp
myClass A = B;
```

This one line will invoke the copy constructor, rather than the assignment operator. And this behavior is called copy initialization.

```cpp
myClass A;
A = B;
```

These two lines will: the first line creates the object A, and the second line invokes the assignment operator.

## 8.13 Destructor (the “constructor with a tilde/twiddle”)

The destructor is called implicitly when an automatically-allocated object goes out of scope or a dynamically allocated object is deleted. It can never be called explicitly!
- The destructor is responsible for deleting the dynamic memory “owned” by the class.
- The syntax of the function definition is a bit weird. The ~ has been used as a bit-wise inverse or logic negation in other contexts.

## 8.14 Increasing the Size of the Vec

- push_back(T const& x) adds to the end of the array, increasing m_size by one T location. But what if the allocated array is full (m_size == m_alloc)?
1. Allocate a new, larger array. The best strategy is generally to double the size of the current array. Why?
2. If the array size was originally 0, doubling does nothing. We must be sure that the resulting size is at least 1.
3. Then we need to copy the contents of the current array.
4. Finally, we must delete current array, make the m_data pointer point to the start of the new array, and adjust the m_size and m_alloc variables appropriately.

- Only when we are sure there is enough room in the array should we actually add the new object to the back of the array.

## 8.15 Exercises

- Finish the definition of Vec::push_back.
- Write the Vec::resize function.
