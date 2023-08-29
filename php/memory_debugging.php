<?php include 'global_colors.php'; ?>
<style>
.cpp-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}

.cpp-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<table>
<tr>
<td class="left-sidebox">
<h1>Memory Debugging</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="development_environment.php" class="nav-row">C++ Installation Choices for Your Operating System</a></li>
<li><a href="wsl.php" class="nav-row">Using Windows Subsystem for Linux (WSL)</a></li>
<li><a href="editors_ides.php" class="nav-row" id=nav-sidebar>Editors, Compilers, and IDEs</a></li>
<li><a href="memory_debugging.php" class="nav-row cpp-selected sidebox">Memory Debugging</a></li>
<li><a href="installation_test.php" class="nav-row">Test Your Installation</a></li>
</ul>
</div>
</td>
</table>

<p class=DS_P>
Segmentation faults and other memory bugs (reading uninitialized
memory, reading/writing beyond the bounds of an array, memory leaks,
etc.) can be hard to track down with a traditional debugger.  Memory
errors can be elusive, and may not cause the program to crash
immediately.  A program with memory errors may even appear to work
correctly on some datasets or on some machines.
</p>

<p class=DS_P> We recommend using a special debugger to find memory errors, for
example <a href="http://drmemory.org/">Dr. Memory</a> or
<a href="http://valgrind.org">Valgrind</a>.  Commercial
versions of these tools include <a
href="https://en.wikipedia.org/wiki/PurifyPlus">Purify</a> and
<a
href="http://www.parasoft.com/jsp/products/insure.jsp?itemId=63">Insure++</a>.
</p>

<p class=DS_P>We'll discuss the Dr. Memory and Valgrind memory debugging tools
and the memory error reports these tools produce at the end of Lecture
7 and during Lab 5.  You'll be expected to use one of these tools for
debugging starting with Homework 3.  The homework submission server
and the TAs will use these tools for grading your homework.

  <p class=DS_P><em>
    Note that running a program under Dr. Memory or Valgrind will slow the
    execution time significantly.  The final step to check for memory
    leaks is especially costly.  We recommend starting with the the
    smallest tests/input file, even if those appear to be working ok.
    Fix any memory errors or leaks that are found, then work your way
    to largest test cases, and be patient.
    </em>
  </p>

  
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<h2>Dr. Memory</h2>

<p class=DS_P>
<a href="http://drmemory.org/">Dr. Memory</a> is available for
GNU/Linux, Microsoft Windows, and MacOS operating systems.  For
questions, bug reports, and discussion, use the Dr. Memory Users
group:
<a href="http://groups.google.com/group/drmemory-users">
http://groups.google.com/group/drmemory-users</a>
</a>
</p>

<p class=DS_P>
Please report issues with Dr. Memory to the
<a href="http://groups.google.com/group/drmemory-users/">
Dr. Memory Users Group</a> by email:
<tt>drmemory-users@googlegroups.com</tt>.  Be sure to include details
about your operating system and the Dr. Memory version number.  Don't
send your full homework submission (it is a public mailing list).
</p>


<h3>Dr. Memory on GNU/Linux or Windows Subsystem for Linux (WSL)</h3>


<ol class=DS_OL>
<li class=DS_LI>
<p class=DS_P>
Obtain the most recent Dr. Memory <tt>tar.gz</tt> file for your operating system from:<br>
<a href="https://github.com/DynamoRIO/drmemory/releases/">https://github.com/DynamoRIO/drmemory/releases/</a>
</a>
</p>

<p>
In the example below, we assume
<a href="https://github.com/DynamoRIO/drmemory/releases/download/release_2.4.0/DrMemory-Linux-2.4.0-2.tar.gz">
  DrMemory-Linux-2.4.0-2.tar.gz
</a> is the most recent release.
</p>

<p>
Type these commands into your terminal:<br>&nbsp;
</p>

<pre>
  cd

  wget https://github.com/DynamoRIO/drmemory/releases/download/release_2.4.0/DrMemory-Linux-2.4.0-2.tar.gz

  tar -xvzf DrMemory-Linux-2.4.0-2.tar.gz
</pre>
<br>

<li class=DS_LI>
<p class=DS_P>
Build your application with debug information by using the <tt>-g</tt> option. For example:
</p>

<pre>
  g++ -g main.cpp foo_main.cpp foo_other.cpp -o foo.out
</pre>
<br>

<li class=DS_LI>
<p class=DS_P>
Run your program under Dr. Memory, replacing <tt>foo.out arg1 arg2</tt> with your executable name and any
 command line arguments:
</p>

<pre>
  ~/DrMemory-Linux-2.4.0-2/bin64/drmemory -brief -- foo.out arg1 arg2
</pre>
<br>

<li class=DS_LI>
<p class=DS_P>
Dr. Memory will report errors to the screen as it runs. It will print
a summary at the end of what it found.
</p>


<li class=DS_LI>
<p class=DS_P>
<b>OPTIONAL:</b>
Add Dr. Memory to your <tt>PATH</tt> by typing this at the WSL bash prompt:
</p>

<pre>
  echo 'PATH=$PATH:~/DrMemory-Linux-2.4.0-2/bin64' >> ~/.bashrc

  source ~/.bashrc
</pre>
<br>

<p class=DS_P>
<em>NOTE: Do not attempt to edit WSL system files from Windows.  The
permissions and filesystem will get messed up and you'll need to
reinstall everything to recover.</em>
</p>

<p class=DS_P>
After adding Dr. Memory to your PATH, you can simply type:
</p>

<pre>
  drmemory -brief -- foo.out arg1 arg2
</pre>
<br>

</ol>


<h3>Dr. Memory on MacOS</h3>

<p class=DS_ALERT>
Note: Dr. Memory has not yet been updated to run on the Mac M1/M2 ARM processors.
</p>

<ol class=DS_OL>
<li class=DS_LI>
<p class=DS_P>
Obtain the most recent Dr. Memory <tt>tar.gz</tt> file for your operating system from:<br>
<a href="https://github.com/DynamoRIO/drmemory/releases/">https://github.com/DynamoRIO/drmemory/releases/</a>
</a>
</p>

<p>
In the example below, we assume
<a href="https://github.com/DynamoRIO/drmemory/releases/download/release_2.4.0/DrMemory-MacOS-2.4.0-2.tar.gz">
  DrMemory-MacOS-2.4.0-2.tar.gz
</a> is the most recent release.
</p>

<li class=DS_LI><p class=DS_P>
Save the package to a directory of your choice.  Then untar the package by typing:
</p>
</li>

<pre>
  tar -xvzf DrMemory-MacOS-2.4.0-2.tar.gz
</pre>
<br>


<li class=DS_LI><p class=DS_P> Be sure to build your application with debug information, the <tt>-g</tt> option,
    so you get line numbers.  For example:
</p>
</li>

<pre>
  g++ -g main.cpp foo_main.cpp foo_other.cpp -o foo.out
</pre>
<br>


<li class=DS_LI><p class=DS_P>
Run your program under Dr. Memory, replacing <tt>foo.out arg1 arg2</tt>
with your executable name and any command line arguments:
</p>
</li>

<pre>
  ~/DrMemory-MacOS-2.4.0-2/bin64/drmemory -brief -- ./foo.out arg1 arg2
</pre>
<br>

<li class=DS_LI><p class=DS_P>Dr. Memory will report errors to the screen as it runs.  It will print a
   summary at the end of what it found.
  </p>


<li class=DS_LI><p class=DS_P>
    <b>OPTIONAL:</b> Edit
your <tt>~/.zshrc</tt> file to add the location of the DrMemory
    executable to your <tt>PATH</tt>.</p>

    <p class=DS_P>
    Open this file, or create an empty
file if you have none.  Edit your <tt>PATH</tt> variable to insert full path for the
DrMemory <tt>bin64</tt> directory.  The <tt>PATH</tt> is the sequence
    of directories (separated by ':') that are checked when you run a program.
For example:</p>

<pre>
  export PATH=$HOME/bin:/usr/local/bin:/Users/INSERT-YOUR-USERNAME/DrMemory-MacOS-2.4.0-2/bin64/
</pre>
<br>

<p class=DS_P>
Make sure to replace INSERT-YOUR-USERNAME and
DrMemory-YourOperatingSystem-VersionXX.  Close and re-open your
terminal.  Then you can simply type:
</p>

<pre>
  drmemory -brief -- foo.out arg1 arg2
</pre>
<br>
    


</ol>




<h3>Installing Dr. Memory on Windows (not Windows Subsystem for Linux (WSL))</h3>

<ol class=DS_OL>
<li class=DS_LI> <p class=DS_P> Obtain Dr. Memory.  To easily place it on the system path,
use the installer (the <tt>.msi</tt> file).  Alternatively, you can
instead obtain the .zip file for a local install.<br>
<a href="https://github.com/DynamoRIO/drmemory/wiki/Downloads">
https://github.com/DynamoRIO/drmemory/wiki/Downloads
</a>
</p>
   

<li class=DS_LI><p class=DS_P>
Double click on the <tt>.msi</tt> file to run the installer.  
Click Next.
</p>

<p class=DS_P>
Check the box to accept the license and click Next.
</p>


<p class=DS_P>
The default location for Dr. Memory installation is fine
(it's probably <tt>C:\Program Files (x86)\Dr. Memory\</tt> for 64-bit Windows).
Click Next.
</p>


<p class=DS_P>
Then click Install.  You'll be asked to confirm that you want to make
administrative changes to the machine.
</p>

<p class=DS_P>
After a quick installation, press Finish.
</p>

<li class=DS_LI> <p class=DS_P> 
Follow the instructions below to compile & run your program
using the Visual Studio IDE or the Visual Studio Command
Prompt.
</p>

</ol>

<h3>Dr. Memory and Visual Studio</h3>

<p class=DS_P>
You can use Dr. Memory with the Microsoft Visual Studio compiler:
</p>

<ol class=DS_OL>


<li class=DS_LI><p class=DS_P> Build your application as 32-bit with Visual Studio (32-bit is
the default).  Be sure to include debug information.  You can verify
that you are including debug information by looking at the properties
of your build target:
</p>
   
<p class=DS_P>Press Alt-F7 to bring up the configuration properties.  
Under "Configuration Properties | C/C++ | General", the "Debug
Information Format" entry should either say "Program Database (/Zi)"
or "Program Database for Edit and Continue (/ZI)". Additionally, under
"Configuration Properties | Linker | Debugging", the "Generate Debug
Info" entry should say "Yes (/DEBUG)".
For Visual Studio 2015, under "Configuration Properties | Linker |
Debugging", the "Generate Debug Info" entry should say "Optimize
for debugging (/DEBUG)" -- it should <em>not</em> say "Optimize
for faster linking (/DEBUG:FASTLINK)".
</p>

<li class=DS_LI> <p class=DS_P>Disable Runtime Checks: The Visual Studio compiler's
<tt>/RTC1</tt> flag can prevent Dr. Memory from reporting
uninitialized reads of local variables, and the <tt>/RTC1</tt> checks
for uninitialized reads themselves may not catch everything that
Dr. Memory finds. However, <tt>/RTC1</tt> does perform additional
stack checks that Dr. Memory does not, so for best results, your
application should be run under Dr. Memory without <tt>/RTC1</tt>, and
run natively (for development & testing without Dr. Memory) with
<tt>/RTC1</tt>.  </p>

<p class=DS_P> In the Visual Studio IDE, press Alt-F7 and then under
"Configuration Properties | C/C++ | Code Generation" ensure "Basic
Runtime Checks" says "Default".
</p>

<li class=DS_LI>
<p class=DS_P> The most recent Dr. Memory installer (for version 1.8 and later)
configures Dr. Memory as a Visual Studio "External Tool", which adds a
new menu item allowing you to run Dr. Memory within the IDE.
</p>

<p class=DS_P>
Now you can select the "Tools | Dr. Memory" menu item and Visual
Studio will run your application under Dr. Memory.  You can add
arguments to your application in the box that pops up immediately
after selecting the men item by adding them at the end, after "$(TargetPath)".
</p>

<li class=DS_LI> <p class=DS_P> The output of Dr. Memory (along with your program) will be
printed to the Visual Studio Output Window.  Dr. Memory will report
errors to the screen as it runs.  It will print a summary at the end
of what it found.  You can double-click on a source file on any
error's callstack frame in order to automatically open up that file to the
line number indicated.  </p>

</ol>


<h3>Using the Visual Studio compiler without the Visual Studio Integrated
Development Environment (IDE)</h3>


<ol class=DS_OL>

<li class=DS_LI> 
<p class=DS_P>
Launch the Visual Studio Command Prompt.  From the Start menu,
under All Programs, find your Visual Studio version (e.g., 2010) and
expand it.  Then expand Visual Studio Tools.  Select the "Visual
Studio 2010 Command Prompt".  (You don't want the x64 or Cross Tools
versions.)
<em>Note: this is not the Cygwin shell.</em>
</p>

<p class=DS_P> This Command Prompt is a cmd shell in which a batch file that
comes with Visual Studio has been executed.  This batch file is called
<tt>vcvars.bat</tt> and it sets up the path and environment variables
needed to run the compiler from the command line.
  </p>

<p class=DS_P>  
Note: You can extract the environment variables from the batch file and set them
up in your <tt>.bashrc</tt> so you can build from a shell.
</p>

<li class=DS_LI> <p class=DS_P> At the command line, change to the directory containing your
source files.
  </p>

<li class=DS_LI><p class=DS_P>
 Run the compiler, which is called "cl".  This will build
<tt>hw.exe</tt> from all .cpp files in the current directory:
</p> 
</li>

<pre>
  cl /Zi /MT /EHsc /Oy- /Ob0 /Fehw.exe *.cpp
</pre>
<br>
  
<li class=DS_LI>
<p class=DS_P>
 If you installed Dr. Memory before you opened the Command Prompt, you
 can run drmemory from the same prompt.
  Run this command, replacing <tt>foo.exe arg1 arg2</tt>
  with your executable name and any command line arguments:
</p>
</li>

<pre>
  drmemory -brief -batch -- foo.exe arg1 arg2
</pre>
<br>

<p class=DS_P>
If you don't see any extra output from Dr. Memory as your program
runs, remove the <tt>-batch</tt> flag and the Dr. Memory output will be sent to
a file and notepad will launch automatically to display this file.
</p>
</li>

<pre>
  drmemory -brief -- foo.exe arg1 arg2
</pre>
<br>

<li class=DS_LI> <p class=DS_P>
Dr. Memory will print a summary at the end of what errors it found.
</p>

</ol>


<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<h2>Valgrind</h2>

<p class=DS_P>
<a href="http://valgrind.org">Valgrind</a> only works on Unix-based
systems (e.g., GNU/Linux, FreeBSD, and WSL).

<p class=DS_P>
Unfortunately, <em>Valgrind does not work on more recent versions
of MacOS</em> (it only runs on MacOS 10.12 or earlier).</em>

<p class=DS_P>
<em>Valgrind does not work on Cygwin</em> because Cygwin
emulates UNIX at the library layer, but Valgrind operates at the
system call layer and the Windows system calls are significantly
different than UNIX system calls.
</p>

<p class=DS_P>
To use Valgrind...
</p>


<ol class=DS_OL>

<li class=DS_LI> 
<p class=DS_P>
Valgrind is installed by default on most Linux distributions.
</p>

<li class=DS_LI><p class=DS_P> Your program should be compiled with debug information enabled
  by specifying the <tt>-g</tt> flag.  For example:
</p>
</li>

<pre>
  g++ -g main.cpp foo_main.cpp foo_other.cpp -o foo.out 
</pre>
<br>

<li class=DS_LI><p class=DS_P> Then run the program by adding Valgrind to the beginning of
your command line (replace <tt>foo.out arg1 arg2</tt> with your
program name and any command line arguments for your program):
</p>
</li>

<pre>
  valgrind --leak-check=full --show-reachable=yes ./foo.out arg1 arg2
</pre>
<br>

<p class=DS_P>
If that example run of your program contains any memory errors
Valgrind will output information to help you track down the error.
Note that using Valgrind can significantly slow down execution time as
it inspects every memory action.  You may need to craft a smaller test
case that exhibits the same bug you would like to solve.
</p>
 
</ol>

<p class=DS_P>
<em>Note:</em> Because some STL classes (including string) use their
own allocators (and do other optimization tricks), there may be a
warning about memory that is ``still reachable'' even though you've
deleted all your dynamically allocated memory.  The newer versions of
Valgrind automatically suppresses some of these common false positive
errors, so you may see this listed as a ``suppressed leak''.
</p>



<h3>Suppression of False Positives in Valgrind</h3>

<p class=DS_P>
If you see false positive error messages in Valgrind, you will 
probably want to create an error suppression file to allow you to focus on your actual errors.
</p>

<ol class=DS_OL>
<li class=DS_LI><p class=DS_P>Add the <tt>--gen-suppressions=all</tt> option to the valgrind command line:</p>
</li>

<pre>
  valgrind --leak-check=full --gen-suppressions=all ./foo.out arg1 arg2
</pre>
<br>

<li class=DS_LI>
<p class=DS_P>
   For each false positive (an error not obviously pointing at your
   code), copy-paste the suppression text (a block of text in curly
   braces) into a new file containing your custom suppressions, let's
   call it <tt>my_suppressions.txt</tt>.<p class=DS_P>

<li class=DS_LI>Use that suppression file every time you run Valgrind:
</li>
<pre>
  valgrind --leak-check=full --suppressions=my_suppressions.txt ./foo.out arg1 arg2
</pre>
<br>

<li class=DS_LI><p class=DS_P> You may need to add to that file in the future, when you use
additional library functions that cause different false positive errors.</p>

</ol>

<p class=DS_P>
Read more about Valgrind suppressions here:<br>
<a href="http://valgrind.org/docs/manual/manual-core.html#manual-core.suppress">
http://valgrind.org/docs/manual/manual-core.html#manual-core.suppress</a>
</p>



<?php include 'template_after.php'; ?>
