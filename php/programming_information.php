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
<h1>Helpful C++ Programming Information</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
  <ul class="sidebox">
<li><a href="programming_information.php" class="nav-row programming_information-selected sidebox">Helpful C++ Programming Information</a></li>
<li><a href="good_programming.php" class="nav-row">Good Programming Practices</a></li>
<li><a href="advice_TAs.php" class="nav-row">Programming Advice from the TAs</a></li>
</ul>
</div>
</td>
</table>

<p class=DS_P>
The following C++ programming details will helpful in completing the
initial homeworks for the course.
</p>

<h2>Command Line Arguments</h2>

<p class=DS_P>
Most of the programs we write will expect additional information from
the user when the program is launched.  We will do this by providing
this data on the command line:
</p>

<pre>
  ./my_program.exe blue 3.14159 my_input_data_file.txt my_output_data_file.txt
</pre>
</br>

<p class=DS_P>
In order for your program to receive arguments from the command line,
you will make use of the optional arguments to the <tt>main</tt>
function.  Here is the prototype:
</p>

<pre>
  int main(int argc, char* argv[])
</pre>
</br>

<p class=DS_P> The parameter <tt>argc</tt> contains the number of strings on the
command line, including the executable name.  For the example above,
<tt>argc = 5</tt>.  The array <tt>argv</tt> stores those C-style
strings.  You can access the executable name with
<tt>argv[0]</tt> and the arguments with <tt>argv[1]</tt>,
<tt>argv[2]</tt>, etc.  </p>

<p class=DS_P>
<em>Important Note:</em> To compare command line argument strings
using the <tt>==</tt> operator, you must cast this data to a
	     STL C++-style string:
</p>

<pre>
  if (std::string(argv[1]) == std::string("blue")) {
     std::cout << "my favorite color is blue too!" << std::endl;
  }
</pre>
</br>

<h2>Command Line Arguments in Visual Studio</h2>

<p class=DS_P>
You can also specify command line arguments when running the program
inside of the Visual Studio development environment.  Go to "Project"
&rarr; "Properties" &rarr; "Configuration Properties" &rarr; "Debugging" and in
"Command arguments" enter:
</p>

<pre>
  blue 3.14159 my_input_data_file.txt my_output_data_file.txt
</pre>
</br>

<p class=DS_P>
Note, that the default directory for files is the working directory.
</p>


<h2>Converting a C/C++ String to an Integer or Floating Point Value</h2>

<p class=DS_P>

This is done using the <tt>atoi</tt> (char-to-integer) and <tt>atof</tt>
(char-to-float) functions.  First, be sure to <tt>#include
&lt;cstdlib&gt;</tt>.  Then, to convert a C++-style STL
<tt>std::string</tt> variable to an <tt>int</tt>: </p>

<pre>
  std::string my_stl_string = "17";
  int x = atoi(my_stl_string.c_str());
</pre>
</br>

<p class=DS_P>
Alternatively, if you are compiling with C++11 (or greater) you can use
a similar C++ version of this function:
</o>

<pre>
  std::string my_stl_string = "17";
  int x = std::stoi(my_stl_string);
</pre>
</br>


<p class=DS_P>
And to convert C-style <tt>char</tt> array (C-style string) to a <tt>float</tt>:
</p>

<pre>
  char* my_char_string = argv[2];
  float y = atof(my_char_string);
</pre>
</br>

<p class=DS_P>
Or similarly, <tt>std::stof</tt>.
</p>


<h2>Reading From & Writing To Files</h2>

<p class=DS_P> The STL streams <tt>std::cin</tt> & <tt>std::cout</tt> are used to
read data from and write data to the "console".  Often, we would
rather read data from a file and/or write the output to a file.  We
can do this using the STL file stream library: </p>

<pre>
  #include &lt;fstream&gt;
</pre>
</br>

<p class=DS_P>
Here's an example fragment of code that attempts to open an input
file stream for a file name specified on the command line above:
</p>

<pre>
  std::ifstream in_str(argv[3]);
</pre>
</br>

<p class=DS_P>
It is good coding practice to verify that the input stream was
successfully opened:
</p>

<pre>
  if (!in_str.good()) {
    std::cerr << "Can't open " << argv[3] << " to read.\n";
    exit(1);
  }
</pre>
</br>

<p class=DS_P>
Likewise here's how to open a stream for output:
</p>

<pre>
  std::ofstream out_str(argv[4]);
  if (!out_str.good()) {
    std::cerr << "Can't open " << argv[4] << " to write.\n";
    exit(1);
  }
</pre>
</br>

<p class=DS_P>
Once the streams are created, you can use <tt>in_str</tt> &
<tt>out_str</tt> just like you use <tt>std::cin</tt> &
<tt>std::cout</tt>.
</p>

<p class=DS_P>
In general, for this course, we encourage you to use the stream
<tt>operator&gt;&gt;</tt> for all input parsing, rather than using
<tt>getline</tt>, <tt>eof</tt>, <tt>getc</tt>, etc.  We will not deduct
points for using the other methods of parsing, but we have designed
the assignment input format specifications for easy parsing with <tt>&gt;&gt;</tt>.
</p>

<p class=DS_P> Note that the following code has a bug.  If the input file ends
with one or more extra newlines, the inner loop will "do something"
with the last successfully read element twice.  It is important to
check the return value of each <tt>&gt;&gt;</tt> expression to be sure
the read was successful.
</p>

<pre>
  while (!in_str.eof()) {
    in_str >> my_variable;
    // do something with my_variable
  }
</pre>
</br>

<p class=DS_P>
A simpler and more robust way to write the same code is:
</p>

<pre>
  while (in_str >> my_variable) {
    // do something with my_variable
  }
</pre>
</br>

<h2>File Parsing Example with different data types</h2>

<p class=DS_P>
For example, if your input file contains family last name, number of children, and ages of the children:
</p>
<pre>
  Smith   3   4.5   6.0   8.1
  Jones   1  13.6
  Lee     2   1.5   4.2
</pre>
</br>

<p class=DS_P>
Here is code to read all of this data:
</p>

<pre>
  std::string last_name;
  int num_children;
  std::vector&lt;float&gt; ages;
  float tmp;
  while (in_str >> last_name) {
    in_str >> num_children;
    // error checking to make sure num_children is not negative
    assert (num_children >= 0);				  
    // clear out ages data from the last family
    ages.clear();  
    for (int i = 0; i < num_children; i++) {
       in_str >> tmp;
       ages.push_back(tmp);
    }				  
    // Do something interesting with the last_name and ages variables!
  }
</pre>
</br>

<p class=DS_P>
Note that we do not use getline or attempt to find a newline
character, so we are not relying on the newlines or spaces or tabs
being in specific places in the file.  We only assume that data is
consistent -- the number of children is non-negative and the number of
floats matches the specified number of children.  We could do more
error checking on each >> operation to make sure each read did not
fail, but most of the time in this course its ok to assume the input
won't be terribly broken.  If there is an error in the input, this
code will get confused and break or crash.  Robustly handling all
broken input is beyond the scope of this course.



<h2>Comparing Two Text Files</h2>

<p class=DS_P> To check the correctness of your program, you can compare your
output text file to the provided sample output text file using the
UNIX utility <tt>diff</tt> (available on Linux & WSL & MacOSX):
</p>

<pre>
  diff my_output.txt sample_output.txt
</pre>
</br>

<p class=DS_P> Any lines in the two files that are not identical (including
whitespace), will be printed to the console.  WinDiff is another
option for Windows users.  Please see a TA or the instructor in office
hours if you have a question about these programs.
</p>

<h2>Redirecting Input & Output</h2>

<p class=DS_P> What if you have an interactive program that uses
<tt>std::cin</tt> & <tt>std::cout</tt> to read from and write to the
"console", but you'd like to take the input from a file and you'd
rather not rewrite the program to use the input & output streams
described above?  This following trick is handy for repeated testing
and debugging an interactive program (you'd rather not have to
manually type in the same input test data many times).  Asking the
executable to read from a file instead of the console and/or write to
a file instead of the console is called I/O redirection.  </p>

<ul class=DS_UL>

<li class=DS_LI> <p class=DS_P>
First, create the <tt>input.txt</tt> file that contains input
which you would otherwise type at the console during program's execution.
</p>
</li>

<li class=DS_LI>
<p class=DS_P>
Then on the Linux/WSL/MacOSX command prompt simply type:  
</p>
</li>

<pre>
   program.exe < input.txt > output.txt
</pre>
</br>


<li class=DS_LI> <p class=DS_P> 
When the program has finished, look in the newly created file
<tt>output.txt</tt>.
</p>
</li>

<li class=DS_LI> <p class=DS_P>
NOTE: If your program is printing to both <tt>std::cout</tt> and <tt>std::cerr</tt> run your program like this to separately capture these streams:
</p>
</li>

<pre>
   program.exe < input.txt > output.txt 2> cerr_output.txt
</pre>
</br>

<p class=DS_P>
  <em>This is how we run all automated testing of student programs on Submitty!</em>
</p>

</ul>



<p class=DS_P>
You can do the same thing in Visual Studio.  (See section on "Command Line
Arguments in Visual Studio" above).  
</p>

</ol>

<?php include 'template_after.php'; ?>
