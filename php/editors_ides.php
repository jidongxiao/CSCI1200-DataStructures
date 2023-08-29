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
<h1>Editors, Compilers, and IDEs</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="development_environment.php" class="nav-row">C++ Installation Choices for Your Operating System</a></li>
<li><a href="wsl.php" class="nav-row">Using Windows Subsystem for Linux (WSL)</a></li>
<li><a href="editors_ides.php" class="nav-row cpp-selected sidebox" id=nav-sidebar>Editors, Compilers, and IDEs</a></li>
<li><a href="memory_debugging.php" class="nav-row">Memory Debugging</a></li>
<li><a href="installation_test.php" class="nav-row">Test Your Installation</a></li>
</ul>
</div>
</td>
</table>


<h2>Code (and Plaintext) Viewers/Editors</h2> 

<p class=DS_P>
Many different text/code editors are available for all of the
different operating systems.  You'll want to pick an helpful editor
that color-highlights your code and helps with indentation.  Also note
that use and display of "newlines" in plaintext files is not
standardized on UNIX/GNU Linux platforms vs. Windows.  There are several
characters that are used to represent end-of-line/carriage return.  We
will always use '<tt>\n</tt>' (newline) in this course. This is the UNIX/GNU Linux
way. Please do not use '<tt>\m</tt>' or '<tt>\r</tt>' in this course, it won't match the
output we are expecting on the homework submission server.  In order
to examine the provided code & sample output & your own output, you'll
want to make sure you find a text viewer/editor that correctly
displays newlines ('<tt>\n</tt>').
</p>


<p class=DS_P>
Some recommended code/text editor options:
</p>

<ul class=DS_UL>
<li class=DS_LI><a href="http://www.sublimetext.com/">Sublime Text</a>
<li class=DS_LI><a href="http://www.gnu.org/software/emacs">Emacs</a><br>
<li class=DS_LI><a href="http://www.vim.org/">VI/Vim
<li class=DS_LI><a href="http://notepad-plus-plus.org/">notepad++</a> (windows only)
<li class=DS_LI><a href="https://wiki.gnome.org/Apps/Gedit">Gedit</a>
<li class=DS_LI><a href="http://www.nano-editor.org/">Nano</a>
</ul>

<p class=DS_P>
Also, ask your graduate TAs & undergraduate programming mentors what
editor and/or integrated development environment (see below) they choose and why
it's their favorite.
</p>

&nbsp;<br>



<h2>C++ Compilers</h2>

<p class=DS_P> You may do your programming work for this course with
any C++ compiler and development environment you wish, but your
submitted homework code must compile and run on gcc/g++ 9.4 and
llvm/clang++ 10.0 on Ubuntu 20.04.  We understand that some of you may
choose to use another compiler and development environment (e.g.,
Microsoft Visual Studio) for most of your work.  We are asking you to
write portable code (for g++/clang++) because it is good programming
practice and it allows us to significantly streamline the grading
process for your TAs. This leaves more time for us to give
constructive feedback on programming style, individual tutoring, and
debugging help.  </p>

<p class=DS_P>
The good news is that the gcc/g++ and/or clang/clang++ compilers are
available for every
operating system, and you have a variety of different options for
development environments.  Note: Different 
gcc/g++ or clang/clang++
compiler version numbers are ok -- you will probably 
not notice any differences.  (Be sure to do a practice submit of 
your homework early enough each week to allow time to correct 
compilation issues.)
</p>

<p class=DS_P>
We recommend the 
<a href="http://clang.llvm.org/index.html">
   clang/LLVM compiler</a>, which has earned much praise for having
clear and concise compiler error messages that are especially helpful
for new C++ programmers.  Once setup on your system, you simply
substitute "<tt>clang++</tt>" for "<tt>g++</tt>" when you compile your
program.  
</p>

<p class=DS_P><b>Note on C++11/C++14/etc.: </b> Many cool new C++
language syntax features were introduced with C++11, C++14, and
beyond.  Not all operating systems/compilers support these new
features out of the box (it is ok if your development environment does
not support C++11 or C++14).  Similarly, many large long-term or legacy
open-source and commercial software projects cannot or choose not to use 
use some of the newest features.

We will avoid making use of these new features in most code
examples and homework assignments for the course.  Similarly, we ask
that students limit the use of these features on their homework and
tests to avoid portability issues or other confusion during grading.
Some advanced features will not be allowed; for example,
to demonstrate knowledge and mastery of types, students
should explicitly write the type and not use the <tt>auto</tt> keyword
when declaring variables.  Please ask on the
<a href="https://submitty.cs.rpi.edu/courses/s23/csci1200/forum">Discussion Forum</a>
if you are unsure about whether you can use a specific syntax or function.
</p>

<p class=DS_P>
We have organized alot of information on the<br>
<a href="development_environment.php">
C++ Installation Choices for Your Operating System</a>.
</p>

&nbsp;<br>

<h2>C++ IDEs (Integrated Development Environments)</h2> 

<p class=DS_P>
It's possible to do all of your work for this course with a simple
text editor and command line compilation & running in a terminal.  And
many of us on the teaching staff prefer to code like this even for
larger projects beyond this course!
</p>

<p class=DS_P>
Alternatively, you can do your work inside an Integrated Development
Environment (IDE).  Here are a few C++ development environments
(similar to Visual Studio) that can be used with the GNU g++ or LLVM
clang++ compilers.  Note that the teaching staff many not be familiar
with these specific tools and may not be able to help you if you get
stuck.
</p>


<ul class=DS_UL>
<li class=DS_LI><p class=DS_P>
<b>Eclipse</b><br>
<a href="http://www.eclipse.org/cdt/">http://www.eclipse.org/cdt/</a>
</p>


<li class=DS_LI><p class=DS_P><b>wxDev-C++</b><br>
<a href="http://wxdsgn.sourceforge.net/">http://wxdsgn.sourceforge.net/</a>
</p>


<li class=DS_LI><p class=DS_P><b>Code::Blocks</b><br>
<a href="http://www.codeblocks.org/">
http://www.codeblocks.org/</a>
</p>

<li class=DS_LI><p class=DS_P><b>XCode (MaxOSX only)</b><br>
<a href="https://developer.apple.com/xcode/">https://developer.apple.com/xcode/</a>

<li class=DS_LI><p class=DS_P><b>NetBeans</b><br>
<a href="http://www.netbeans.org/features/cpp/">
http://www.netbeans.org/features/cpp/</a><br>
</p>

<li class=DS_LI><p class=DS_P><b>Anjuta</b><br>
<a href="http://anjuta.sourceforge.net/">http://anjuta.sourceforge.net/</a>
</p>
</ul>


<?php include 'template_after.php'; ?>
