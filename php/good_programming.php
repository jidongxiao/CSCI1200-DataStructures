<?php include 'global_colors.php'; ?>
<style>
.programming_information-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}

.programming_information-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<table>
<tr>
<td class="left-sidebox">
<h1>Good Programming Practices</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="programming_information.php" class="nav-row">Helpful C++ Programming Information</a></li>
<li><a href="good_programming.php" class="nav-row programming_information-selected sidebox">Good Programming Practices</a></li>
<li><a href="advice_TAs.php" class="nav-row">Programming Advice from the TAs</a></li>
</ul>
</div>
</td>
</table>


<h2>Good Programming Practices</h2>


<p class=DS_P>
Points for programming assignments are awarded for error-free
compilation, correct program output, and overall program
structure.  The program structure grade is an evaluation of the
quality of your code.  This includes the following:
</p>

<ul class=DS_UL>

<li class=DS_LI><p class=DS_P>
Your code should have a clear, logical organization.  Functions
should be written as appropriate to break up the program.  Don't put
all of your code in the main function.  In general, each function
should easily fit on a single screen and have a clear purpose.
</p>

<li class=DS_LI><p class=DS_P>Variable names and function names should be intuitive and
meaningful.  For example, if you need a variable to represent an
employee's salary, use the name <tt>salary</tt>, not <tt>x</tt>.
</p>

<li class=DS_LI><p class=DS_P>Use sufficient comments to describe functions and significant
sections of code.  These don't have to be long and involved.  Keep
them short and clear.  Remember, comments are your opportunity to
explain your logic to the TAs.  But comments are also a important
piece of documentation for all software, to help future developers
maintain and extend the code.  (See examples below.)
</p>

<li class=DS_LI><p class=DS_P>Use a consistent, logical method of indentation to make your
program easy to read.  For example, code inside a loop or if-else
condition should be indented all at the same level (until reaching the
inside of a nested loop or nested if-else construct).
</p>

<li class=DS_LI><p class=DS_P>Don't type lines of text that are too wide to fit a typical
text screen window (generally no more than 80-90 characters maximum).
Break statements cleanly across multiple lines as needed.
</p>

<li class=DS_LI><p class=DS_P>Avoid the use of global variables.  Global constants are
generally fine.
</p>

<li class=DS_LI><p class=DS_P>Follow all instructions for the specific assignment about data
structures required/not allowed, new class declarations, and use/modification of
provided code.
</p>

</ul>

<p class=DS_P> Use the example code given in class, in lab, and in the textbooks
as guidelines.  Programs that are unclear and do not compile will earn
little or no credit.
</p>

<p class=DS_P>
Program correctness will be determined by evaluating your program on a
series of test data sets.  We will make available some but not all of
this data, along with sample output, prior to the assignment due
date.  This will help you judge the quality of your program, but will
not guarantee correct results on all data.  You will need to ensure
this on your own by creating additional test cases.
</p>

See also:
<ul class=DS_UL>
<li class=DS_LI><a href="Good_Programming_Practices.pdf">Good Programming
Practices</a><br>Slides from an ALAC tutorial by Andrew Showers and
Salles Viana.
</p>
</ul>


&nbsp;<br>

<h2>Examples of Commenting</h2>

<p class=DS_P>
Most functions should have at least one comment (usually at the top)
explaining what the function does.  And functions of more than a
couple lines should have addtional comments explaining the logic
within the function body.  Of course, in some situations, a function
does not need comments (when the function's behaviour is obvious).
</p>

<p class=DS_P>
We suggest you avoid adding comments that do not help in the
understanding of the program. For example:
</p>

<pre>
  string getNameOfRecipe() { // function that gets the name of the recipe

  }
</pre>

<p class=DS_P>
The comment above is not useful (it is obvious
that <tt>getNameOfRecipe()</tt> is a function and it is obvious that
it returns the name of the recipe).  However, if the name of the
function was <tt>getNR()</tt> it would be useful to add comments explaining
that this function returns the name of the recipe. <em>NOTE: It is better to use
a descriptive name for the function than rely on comments!</em>
</p>

<p class=DS_P>
Another example:
</p>

<pre>
  double getRoot(double a,double b, double c) { // get root function
    double d; // declare d as a double
    d = b*b - 4*a*c;
    double root = (-b + sqrt( d ))/(2*a); // compute the root
    return root; // return the result
  }
</pre>

<p class=DS_P>
The comments above are also not useful (it is obvious that the return
statement returns something; it is obvious that this is the "get root
function").
</p>

<p class=DS_P>
Here is a much more informative commenting of the same code:
</p>

<pre>
  // This functions receives the coefficients of an equation in the form
  // ax2+bx+c=0 and returns one of its roots.
  // Attention:  We assume that the equation has at least one real root.
  double getRoot(double a,double b, double c) {
    double delta = b*b - 4*a*c;
    // We use Bhaskara's formula to compute one of the roots
    double root =  (-b + sqrt( delta ))/(2*a); 
    return root;
  }
</pre>

<p class=DS_P>
&nbsp;
</p>
<p class=DS_P>
See also the main <a href="grading.php">Course Grades</a> page, the
and the <a href="advice_TAs.php">Programming Advice from TAs</a> page for more
information.
</p>

<?php include 'template_after.php'; ?>
