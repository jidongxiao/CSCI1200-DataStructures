# Overview

Welcome to CSCI 1200 Data Structures lab!  Please listen carefully
when your graduate lab TA and undergraduate programming mentors
introduce themselves at the start of class.  They are here to answer
any questions about the course materials and work with you one-on-one
to master strong programming and debugging skills.  Also, introduce
yourself to the other students in your lab section.  You may ask your
fellow students questions about the lab.  This will help reduce the
burden on the TAs and will reduce your waiting time in lab. **Note: Each student must produce his/her own exercise solutions.**

There will be three graded "checkpoints" associated with each lab.
If you have a question or when you have completed each checkpoint,
raise your hand or put your name in the appropriate queue and your
graduate TA or one of the programming mentors will check your work.
Part of earning each checkpoint for the lab will involve answering
short questions about the material.  If you have done the checkpoint
and understood it, you should have no trouble earning this credit.  If
you have relied on help from other students too much, you may find the
questions hard to answer.

**Do not wait until the end of lab to be checked off for multiple
checkpoints.**  If there is a queue the TA/mentor will only check you
off for one checkpoint at a time and ask you to add your name to the
end of the queue for the next checkpoint.  Class ends 10 minutes
before the hour and no checkpoints may be earned after this time.

*IMPORTANT NOTE: No phones, no email, no texting, no social media,
  no web surfing, no game-playing, no distraction!  With the exception
  of downloading lab files provided by the instructor at the start of
  lab, and occasional use of online C++ reference material (e.g., to
  look up the the details of a particular built-in function or class),
  you are not allowed to use the internet during lab. Anyone
  caught using their cell phones, the internet, for activities not relevant to the lab will be given an immediate 0 for
  that lab and asked to leave.*

**Today we focus on using the terminal command line and g++ to
compile, run, and inspect the results of your program.**  After today's
lab you are welcome to explore other options for your C++ development
environment.  However, for the homework assignments, your code must
compile and run correctly under gcc/g++ 9.4 and/or llvm/clang++ 10.0 on
Ubuntu 20.04.  This streamlined grading process allows the TAs to
spend more time giving you constructive feedback on programming style,
individual tutoring, and debugging help.

## Checkpoint 1
*estimate: 30 minutes + installation delays??*

- The course website includes instructions to install and setup the necessary software for Windows, MacOSX, and GNU/Linux.  Windows users will need Windows Subsystem for Linux (WSL) to follow the instructions below.  Ask your TAs and mentors for advice and help if you get stuck.
   - [development_environment](http://www.cs.rpi.edu/academics/courses/spring24/csci1200/development\_environment.php)
   - [installation_test](http://www.cs.rpi.edu/academics/courses/spring24/csci1200/installation\_test.php)
- Create a directory (a.k.a. "folder") on your laptop to hold Data Structures files.  Create a sub-directory to hold the labs.  And finally, create a sub-directory named `lab1`. Please make sure to save your work frequently and periodically back-up all of your data.
- Using a web browser, copy the following files to your `lab1` directory: 
   - [quadratic.cpp](https://github.com/jidongxiao/CSCI1200-DataStructures/tree/master/labs/01_getting_started/quadratic.cpp)
   - [README.txt](https://github.com/jidongxiao/CSCI1200-DataStructures/tree/master/labs/01_getting_started/README.txt)
- **Open a shell/terminal/command prompt window**. *Please ask for help if you have problems installing WSL or finding your `bash` shell.*
- Within the terminal, navigate to your Data Structures Lab 1 directory and inspect the contents of your file system as you go using the “ls”, “cd”, and “pwd” commands. In doing so, remember that directory names are separated by a forward slash “/” and when you have a space in the name of the directory, you precede the blank with a backslash “\”. Thus, you may type something like this:

```console
cd /Users/username/My\ Documents/Data\ Structures/labs/lab1
```

- Confirm that the files quadratic.cpp and README.txt are in the current directory (use ls).

- First, let’s confirm that gcc is installed on your machine and check the version by typing:

```console
g++ -v
```

If you are not using Ubuntu 18.04 and gcc/g++ 7.3, you may notice slight differences between your compiler and the version on the homework submission server when we get to advanced topics. But don’t worry if you have a different version! We will primarily be using parts of C++ that have been stable and unchanged for many years. You may also try to compile using clang++ instead of g++. The LLVM/clang++ compiler has earned much praise for having clear and concise compiler error messages that are especially helpful for new C++ programmers.

- Now you are ready to attempt to compile/build the program for this lab by typing:

```console
g++ quadratic.cpp -o quadratic.exe -Wall
```

We have intentionally left a number of errors in this program so that it will not compile correctly to produce an executable program. Don’t fix them yet!

### "Submit" the buggy version of the lab code to Submitty:

Upload the quadratic.cpp and README.txt files to the Lab 1 practice gradeable on Submitty. After submitting the buggy code you should receive confirmation of your submission and be notified of the compile-time errors in the program. Note that all homeworks will require submission of both your code and README.txt file to receive full credit.

The compiler errors we have introduced are pretty simple to fix. Please do so, and then re-compile the program. Once you have removed all of the errors, you are ready to execute the program by typing:

```console
./quadratic.exe
```

After testing the program on your own machine with a variety of inputs and convincing yourself that everything looks good, then you can “Re-submit” the fixed version of the lab code to the homework server: Assuming your fixes are cross-platform compatible, the re-submission should successfully compile and run without error. Note that Submitty allows you to review the autograding results of all prior submissions.

### To complete Checkpoint 1: 
Show one of the TAs the compiler errors that you obtained in the g++/clang++ development environment on your machine and the response from the homework submission server indicating the same compiler errors. Also show the edits you made to the code to fix these problems both on your machine and on Submitty.

## Checkpoint 2:
*estimate: 30 minutes*

Now let's write a brand new C++ program to learn about command line
arguments.  First open up a brand new file named `silly.cpp`.
Include &lt;iostream&gt; at the top of the file.

Read this [Programming Information](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/programming_information.php) explaining command line arguments in C++. You may also want to refer to the lecture notes for array syntax.

- To start, let's write a program that expects only integers on the
command line, and it will print the product (multiplication) of those
numbers to the console (`std::cout`).

Compile and test your program:
```console
g++ -Wall -g -o silly.out silly.cpp
```

If we run:
```console
./silly.out 2 3 4
```

Then program will print:
```console
product of integers: 24
```

And if we run:
```console
./silly.out 3 -1 2 20 5
```

Then program will print:
```console
product of integers: -600
```

*Hint: Read the section of the course webpage on converting strings to integers.*

### To complete Checkpoint 2:
Show a TA or mentor your program. Be ready to demonstrate that your program works with other input requested by the TA or mentor.  

## Checkpoint 3: File IO
*estimate: 30 minutes*

In lecture we talked about how to use the STL file stream library fstream to read data from a file and/or write the output to a file. Let's do some exercises.

Write a C++ program which reads this [json file](users.json), and print all user names into an output file called output.txt. Your output file must be the same as this [sample output file](sample_output.txt). 

### To complete Checkpoint 3:
Show a TA or mentor your program. Your program must produce the right output and you must be able to explain your program.

## SPECIAL NOTE FOR FIRST WEEK OF CLASSES

Normally, all lab checkpoints must be earned during your mandatory study group time block.

However, these lab exercises involved installing new software (which
can cause unexpected delays and problems) and some students may have encountered scheduling problems.

Therefore, for the first lab only, we will allow students to *makeup* the lab checkpoints during office hours.  You may attend any office hour time block and be *checked off* by any TA or mentor. 
