# Overview

In this lab, you will be writing your own C++ classes. <!--We have not covered C++ classes in the lecture, but according to last Friday's poll, everyone is this class has either experience in Java or experience in Python, so the concept of class is not new to you.--> To get familiar with the C++ syntax on classes, you are recommended to quickly review the following 3 files:

[date.h](../../lectures/03_classes_I/date.h)  
[date.cpp](../../lectures/03_classes_I/date.cpp)  
[date_main.cpp](../../lectures/03_classes_I/date_main.cpp)

Some notes about these 3 files:

- date.h and date.cpp are the implementation of a class called *date*.
- date_main.cpp is the program to test the *date* class, and therefore, only this file contains the *main* function.
- the file with the .h file name extension is called the header file, and the .cpp file is callled the implementation file. Note that in C++ the name of the header and implementation files are not required to exactly match the name of the class, but it is good coding style to do so.
<!--- in this lab, you're not required to use the keyword **const**, as we will cover more about it in lecture. For the same reason, for now, you can also ignore the keyword **const** that is used in the *date* class.-->
- typically in C++, we declare a class in the header file, and then define/implement this class in a .cpp file. The declaration of a class includes the prototype of its member functions, and it also includes the member variables of this class. As can be seen from *date.h* and *date.cpp*, the *date* class has 3 member variables:
```cpp
  int day;
  int month;
  int year;
```
 and it has several member functions. Take the *isLeapYear* function for example, we write its prototype in the header file as below:

```cpp
bool isLeapYear() const;  
```

 and we define it in the .cpp file as following:

```cpp
bool Date::isLeapYear() const {
  return (year%4 ==0 && year % 100 != 0) || year%400 == 0;
}
```

pay attention to the "Date::" right in front of the function name *isLeapYear*. The "Date::" defines the scope of this function, meaning that this function is a member function of the *Date* class.
- typically in C++, we declare member variables as *private*, and declare member functions as "public". Member functions allows user to operate on these member variables, which can not be accessed directly from outside the class, and that is the meaning of *private*.
- constructor: In C++ classes, there is a special member function called the *constructor*. When an object of the class is created, the constructor will be automatically called. In the constructor function, we usually initialize the member variables of the object (that is being created). Constructors in C++ have the following characteristics:
  - Constructors have the same name as the class they belong to.
  - They do not have a return type, not even *void*.
  - A class can have multiple constructors, and this is known as constructor overloading. Take the *Date* class as an example, it has the following two constructors:
```cpp
Date();
Date(int aMonth, int aDay, int aYear);
```

and their definitions are:
```cpp
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
```

typically, the constructor which does not take any arguments, is called the **default constructor**. When a user creates a Date object like this:
```cpp
Date a;
```

the default constructor will be called; but if a user creates a Date object like this:
```cpp
Date Sallys_Birthday(9,29,1995);
```

then the second constructor will be called. Therefore you can see, when multiple constructors are defined, which constructor will be called depends on how the object is created - if no arguments are provided, then the default constructor will be called.

## Checkpoint 1
*estimate: 15-25 minutes*

For the first checkpoint, you will be working in groups of 4 to design the Animal.h file for a new class.
Keep in mind that you should only put the class defintion in the header file, you are not writing the actual
implementation. Make sure that everyone in the group participates and understands the material - it is
possible that all of you will have to answer questions to get checked off!

Each instance of the Animal class will describe several characteristics about an animal. Every Animal must
have a name at all times. This is the only value that will be passed in when a new object is declared. It
should be possible to set the weight of the animal, if the animal can survive on land, if the animal can survive
in water, if the animal eats meat, and if the animal eats plants. All of these values (including the name)
should be accessible from outside the class as well. In addition, the class should be able to indicate if the
animal in question is an omnivore (eats both meat and plants) and if they are amphibious (can survive on
land and in water).

Make sure to explain the purpose of every function with a comment. Consider the return type, whether each
argument should be passed by value, reference. Be prepared to justify your choices. To get
checked off, show your completed header file and answer any questions asked by the TA/mentor.

<!-- or constant reference, and whether or not the function is a
constant member function (has const after the argument list). -->
<!-- we should not ask anything about the keyword constant, as that hasn't been thoroughly covered in class. -->

**Note:** Only Checkpoint 1 is a team exercise. For the rest of this lab, you will implement a simple
C++ class named Time. It represents all possible times in a 24-hour period, including hours, minutes and
seconds. An immediate representation issue is how to handle morning (am) and afternoon (pm) times. We
could have a separate bool indicating whether the time is am or pm. It is easier, however, to represent the
hours in military time. This means that the hours of the day are numbered from 0 to 23, with 13 being 1 pm,
14 being 2 pm, etc.

## Checkpoint 2:
*estimate: 30 minutes*

In the second checkpoint you will get started by implementing the initial class design, several member
functions, and a simple main program to test your class.

The instructions below describe how to build your executable from the command line using g++ or
clang++ using the WSL or UNIX terminal. Even if you plan to use Visual Studio or another IDE for the
bulk of your work this semester, you are required to also show that you can successfully build and run this
lab using g++ from a terminal on your own machine.

- We provide basic testing code in [main.cpp](./main.cpp). You’ll need to create 2 new empty code files named time.h and time.cpp.

- Begin work on time.h. Within the file, declare a class called Time. Follow the form and syntax of the Date class. Read the syntax carefully (such as the semi-colon at the end of the class declaration). Add private member variables for the hour, minute and second. In the public area of the class, declare two constructors: one, the default constructor, should initialize each of the member variables to 0; the other, having three arguments, accepts initial values for the hour, minute and second as function call arguments. Declare member functions to access the values of the hour, the minute and the second (three different member functions). Don’t write the body of any of the functions in the time.h file. Save all the implementation for the time.cpp file.
<!-- It will be crucial for Checkpoint 3 to make these const. (Recall: a const member function can not change the member variables.) -->

- Review the provided main.cpp. Note that we must #include "time.h" in addition to including #include &lt;iostream&gt;. (Note: We use angle brackets for standard library includes and double quotes for our custom header files in the working directory.) The main program creates multiple Time objects, using the two different constructors and uses the functions that access the values of hour, minute and second by printing the two times.

Note: There is a common confusion when creating a new variable using the default constructor:

```cpp
Time t1(5,30,59); // calls the non-default constructor w/ 3 integer arguments
Time t2(); // COMPILE ERROR - a buggy attempt to call the default constuctor
Time t3; // the *correct* way to call the default constructor
```

Now implement all of the class constructors and member functions in the file time.cpp. Don’t forget to
add the line to #include "time.h". Any file that uses or implements Time functionality must include
the Time class header file.

Now, compile your program and remove errors. Here’s where the difference between compiling and
linking matters.

When compiling using g++ on the command line, the two separate command lines:

```console
g++ -c main.cpp -Wall -Wextra
g++ -c time.cpp -Wall -Wextra
```

compile the source code to create two object code files called main.o and time.o separately. The -c
means “compile only”. Compiler errors will appear at this point. If there are errors in main.cpp (or
time.cpp), then the files main.o (or time.o) will not be created. Use the *ls* command to check.

**Important Note**: We only compile .cpp files. We do not directly compile header files. Header files are
compiled only indirectly when included in a .cpp file.

Once you have driven out all of the compiler errors, you can “link” the program using the command:

```console
g++ main.o time.o -o time_test.exe
```

to create the executable called time_test.exe. If you have not defined all of the necessary member
functions in the Time class, then you would see “linking” errors at this point. You can combine all
three command lines (compiling each of the 2 .cpp files to 2 object files and linking all object files) with this command:

```console
g++ main.cpp time.cpp -o time_test.exe -Wall -Wextra
```

Which is more similar to what we did last lab. Equivalently, if those are the only two .cpp files in the
current directory, you can compile and link using the command line wildcard:

```console
g++ *.cpp -o time_test.exe -Wall -Wextra
```

Note that this will not create the intermediate .o files and will only proceed to the linking step if the two files compile cleanly.

**To complete this checkpoint**: Show compilation of the program using g++/clang++ within the
WSL or UNIX terminal, with all compiler errors removed and demonstrate correct execution of your
program. Yes, please show us you can compile from the terminal with g++, even if you plan to primarily
use Visual Studio or another IDE for the rest of the semester.

## Checkpoint 3
*estimate: 20-30 minutes*

Create and test a few more member functions. This will require modifications to all three of the files. You should uncomment the provided tests in main.cpp as you work, and add your own tests.
- *setHour, setMinute, setSecond*. Each should take a single integer argument and change the appropriate
member variable. For now, do not worry about illegal values of these variables (such as setting the
hour to 25 or the minute to -15). Assume whoever calls the functions does the right thing. In general,
this is a bad assumption, but we will not worry about it here.
- *PrintAmPm* prints time in terms of am or pm, so that 13:24:39 would be output as 1:24:39 pm. This
member function should have no arguments. Note that this requires some care so that 5 minutes and
4 seconds after 2 in the afternoon is output as 2:05:04 pm. The output should be to std::cout.

<!--- Finally, let’s create a vector of times, sort it, and output the final order. You’ll need to create a
non-member function called IsEarlierThan which has the prototype:
bool IsEarlierThan(const Time& t1, const Time& t2);
It is very important that the two time objects are passed by constant reference. The prototype should
be in time.h (in the file, but outside of the class declaration) and the implementation should be in
time.cpp. It should return true if t1 is earlier in the day than t2. The tough part, from the logic
viewpoint, is being able to compare two times that have the same hour or even the same hour and the
same minute. Test your function IsEarlierThan.

If your IsEarlierThan function is correct, sorting becomes very easy. You just need to pass the
function to the sorting routine (make sure to #include <algorithm>). Be sure to study the output
and convince yourself things are debugged before asking a TA/mentor for checkoff.
sort(times.begin(), times.end(), IsEarlierThan);

**Importance of const and reference**: After you have debugged and tested this checkpoint, experiment
with const and pass-by-reference on the argument types for the function IsEarlierThan. Change them
from const pass-by-reference to pass-by-reference w/o the const. Use the -Wall compiler flag to enable
all warnings.

You may see compiler errors/warnings with some OS/compilers. The problem is that the compiler
expects the parameters of the comparison function (the 3rd argument to the sort function) to be in
a certain form and complains that it can not find the function when the parameters are not in this
form. Basically the STL sort function doesn’t want to sort a collection of data if that data is changing
during/because of the sorting process!

Note: Make sure to try this with the g++ compiler as the Visual Studio compiler may not be as
strict with const type checking. Also, try IsEarlierThan with pass-by-value parameters. What’s the
difference? Switch the function back to const pass-by-reference parameters before asking for a checkoff.
-->

**To complete this checkpoint**: Show a TA your tested and debugged extensions. Be prepared to
discuss your implementation. <!--and const and pass-by-reference.-->

## Checkpoint 4: File IO
*estimate: 5-10 minutes*

In homework 2 and future homeworks, you will see input files which has a unique format: every line of the file has a fixed number of fields, and all these fields are separated by one or more spaces. For input files like this, we encourage you to use the stream operator>> for all input parsing, rather than using the getline() function.

Following is an example, which is the content of [this input file](input.txt).

```console
Lisa 25 Female 318-125-5013 Undisclosed Undisclosed 41.5833 -83.9274
Daniel 27 Male 210-612-4370 Athlete University_of_Pennsylvania 39.0742 -75.9063
Brandon 29 Male 580-492-5098 Anesthesiologist University_of_Georgia 42.7252 -72.7156
Edward 32 Male 778-799-8211 Firefighter University_of_California_Western_Islands 38.9078 -70.4912
Pedro 27 Male 639-312-6466 Undisclosed University_of_California_Desert 40.306 -84.6312
Rebecca 30 Female 878-162-8033 Electrician University_of_Kansas 39.6714 -80.2924
Isla 33 Female 884-822-9387 Dental_Hygienist Undisclosed 41.2521 -74.7712
Brandon 56 Male 357-422-7135 Undisclosed University_of_Chicago 43.5828 -75.3686
Isaac 36 Male 446-205-6456 Chemist University_of_Colorado_Boulder 42.8806 -81.55
Timothy 46 Male 600-635-3948 Biomedical_Engineer Undisclosed 38.154 -71.3301
```

Each line of this file represents one user from an online dating app. Each line has 8 fields. And these 8 fields are:

- User's name
- User's age
- User's gender
- User's phone number
- User's profession: A user can choose not to disclose their profession, and if so, this field will be Undisclosed.
- User's school: A user can choose not to disclose his/her school, and if so, this field will be Undisclosed.
- User's current latitude
- User's current longitude

Write a C++ program to read this file and print each user's name and phone number in an output file, the name and the phone number should be separated by a comma. Your output file must be identical as this [sample output file](output.txt).

You can use the following code snippet. Try to understand the code snippet before you use it.

```cpp
	std::ifstream inputFile(filename);

	if (!inputFile.is_open()) {
		std::cerr << "Failed to open the user data file." << std::endl;
		exit(1);
	}

	std::string name, gender, number, profession, school;
	int age;
	double latitude, longitude;
	while(inputFile >> name
		>> age
		>> gender
		>> number
		>> profession
		>> school
		>> latitude
		>> longitude){

			// do something with any of these 8 fields.
		}
```
