<?php include 'global_colors.php'; ?>
<style>
.syllabus-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000 !important;
}
.syllabus-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000 !important;
}
</style>

<?php include 'template_before.php'; ?>

<table>
<tr>
<td class="left-sidebox">
<h1>Syllabus</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="syllabus.php" class="nav-row syllabus-selected sidebox">Syllabus</a></li>
<li><a href="grading.php" class="nav-row">Course Grades</a></li>
<li><a href="lecture_polls.php" class="nav-row">Submini Lecture Polls</a></li>
<li><a href="homework_policies.php" class="nav-row">Homework Policies</a></li>
</ul>
</div>
</td>
</table>


<h2>Course Description</h2>

<p class=DS_P>
This course covers fundamental data structures and their use in
programming.  This includes both class design and features of the C++
programming language.  Much of our discussion will be built around the
design and use of the C++ standard library (STL).  By using the
standard library, students will be able to write reasonably
sophisticated programs quickly.
</p>

<h2>Learning Outcomes</h2>

<p class=DS_P>
Students who have successfully completed this course will be able to:
</p>

<ul class=DS_UL>

<li class=DS_LI>
Demonstrate strong problem solving skills in constructing
complete C++ programs to tackle exercises inspired by real-world
problems.


<li class=DS_LI>
Analyze the performance of algorithms and data structures.


<li class=DS_LI>
Select and use the most appropriate data structure from the C++
standard library (STL) for a particular programming task.


<li class=DS_LI>
Design and implement efficient customized data structures.


</ul>

<h2>Prerequisites</h2>

<p class=DS_P>
CSCI 1100 Computer Science I, equivalent university credit,
or a 5 on the AP Computer Science A Exam is the required (as of Spring 2023)
pre-requisite for this course.  Here are the concepts that we assume
you have learned prior to taking CSCI 1200 Data Structures:
</p>

<ul class=DS_UL>
<li class=DS_LI><b>Programming:</b></li>

<ul class=DS_UL>
<li class=DS_LI>Arithmetic expressions, if/else statements</li>

<li class=DS_LI>Writing your own functions, including the following:</li>
<ul class=DS_UL>
<li class=DS_LI>Passing arguments to the function from the calling function</li>
<li class=DS_LI>Reference variables (call by value vs. call by reference)</li>
<li class=DS_LI>Returning a value from a function to the calling function</li>
<li class=DS_LI>Scope and lifetime of variables, local vs. global variables</li>
</ul>

<li class=DS_LI>One and two dimensional arrays and/or vectors</li>
<li class=DS_LI><tt>while</tt> and <tt>for</tt> loops, including nested loops</li>
<li class=DS_LI>Reading data from files, and writing data to files</li>
<li class=DS_LI>Some basic understanding and use of classes</li>
<ul class=DS_UL>
<li class=DS_LI>Creating your own simple classes</li>
<li class=DS_LI>Calling member functions</li>
</ul>
</ul>

<li class=DS_LI><b>Problem Solving:</b>
Given a problem you should be able to design an algorithm or
algorithms to solve the problem, and implement and debug an efficient
solution.  You should have written a number of programs of 100 lines
or more consisting of several different functions.  Some examples:
</li>
<ul class=DS_UL>
<li class=DS_LI>Count the number of times each letter appears in a file</li>
<li class=DS_LI>Find the maximum value in an array or vector</li>
<li class=DS_LI>Insert a new element into a sorted array in its correct place</li>
<li class=DS_LI>Find the value closest to the average in a vector</li>
<li class=DS_LI>Find the two closest values in a vector</li>
</ul>

<li class=DS_LI><b>Algorithmic concepts:</b></li>
You should have seen and have a basic understanding of the following
concepts:

<ul class=DS_UL>
<li class=DS_LI>Recursion</li>
<li class=DS_LI>Run time analysis of algorithms (big O notation)</li>
<li class=DS_LI>Elementary searching and sorting algorithms</li>
</ul>


</ul>

<h3>Programming Languages: C++ vs. Java vs. Python</h3>

<p class=DS_P>
The language used in this course is C++ but you do not need to know
C++ before taking this class.  
</p>

<p class=DS_P>
The Computer Science I class at RPI is taught in the Python
programming language.  Transitioning a solid foundation in problem
solving, computational thinking, and implementation to a new
programming language is an important skill for all computer
scientists.  Once you are comfortable with your new programming
environment (code editor, compiler/interpreter, reference material,
etc.) you will soon be busily and productively coding again!
</p>

<p class=DS_P>
Similarly, many students enter this course having studied Java in
their high school AP Computer Science class.  If you are a reasonably
proficient Java programmer, you should easily adapt to the differences
between the C++ and Java.
</p>

<p class=DS_P>
See also: <a href="crash_course_cpp_syntax.php">Crash Course in C++ Syntax</a>
</p>


<h3>Warning</h3> 

<p class=DS_P>
This course moves at a rapid pace and will likely be substantially
more difficult than your previous programming classes.  The homework
assignments are challenging and students should start the assignments
as soon as they are posted, so there is plenty of time to ask the
instructor and TAs questions on the <a href="https://submitty.cs.rpi.edu/courses/f23/csci1200/forum">Discussion Forum</a> and in office hours.  <em>Students
should not get behind at any point in the semester.</em> Students
should work practice problems and study examples from lecture.
Working with other students and working with tutors and TAs are both
encouraged, but students need to be certain they understand the
material and can do problems on their own.
</p>

<p class=DS_P>
See also advice from 
<a href="advice_S14.php">
Spring 2014 CSCI 1200 Data Structures students</a>.
</p>

<p class=DS_P>
  <b><em>
      Be sure to click through the other pages linked in the upper right
      menu.
      </em></b>
</p>

<?php include 'template_after.php'; ?>
