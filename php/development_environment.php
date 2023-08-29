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
<h1>C++ Installation Choices for Your Operating System</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="development_environment.php" class="nav-row cpp-selected sidebox">C++ Installation Choices for Your Operating System</a></li>
<li><a href="wsl.php" class="nav-row">Using Windows Subsystem for Linux (WSL)</a></li>
<li><a href="editors_ides.php" class="nav-row" id=nav-sidebar>Editors, Compilers, and IDEs</a></li>
<li><a href="memory_debugging.php" class="nav-row">Memory Debugging</a></li>
<li><a href="installation_test.php" class="nav-row">Test Your Installation</a></li>
</ul>
</div>
</td>
</table>

<p class=DS_P>
Depending on the native operating system for your computer, you have
several different options for C++ development with GNU g++ or LLVM
clang++.  More information on each choice is below and on other pages.
</p>


<h2>Windows 10</h2>

<ul class=DS_UL>
<li class=DS_LI><a href="wsl.php">Windows Subsystem for Linux (WSL)</a>  <em>Recommended</em>
<li class=DS_LI>g++ or clang++ with Ubuntu/other GNU/Linux in VirtualBox
</ul>


<h2>MacOSX</h2>

<ul class=DS_UL>
<li class=DS_LI>clang++ in the Terminal or XCode IDE
<li class=DS_LI>g++ or clang++ with Ubuntu/other GNU/Linux in VirtualBox
</ul>

<p class=DS_ALERT>
Note: The memory debugging software has not yet be updated to run on the Mac M1/M2 ARM processors.
</p>

<h2>GNU/Linux</h2>

<ul class=DS_UL>
<li class=DS_LI>g++ or clang++
</ul>


</br>

<p class=DS_P>
NOTE: It is possible to run a true dual-boot on Windows or Mac by
partitioning your hard drive and installing a GNU/Linux distribution
there, but it requires a more complicated setup.  Only do this if you
really know what you're doing.  Instructions exist online for how to
do this, but it is possible to brick your machine this way and course
staff won't necessarily be able to help you with any issues you
encounter.
</p>

&nbsp;<br>


<h2>MacOSX XCode</h2>


<p class=DS_P>
If you're using a Mac, you'll need to install XCode, which is a free
download from the Apple App store.  XCode provides both a C++ compiler
(technically the LLVM <tt>clang++</tt> compiler) <em>and</em> an
integrated development environment (IDE) similar to Microsoft's Visual
Studio.  
</p>


<p class=DS_P>
Make sure to install XCode's "Command Line Tools" so that you can run
the compiler from the Terminal command line.  NOTE: Even if you plan
to use the XCode IDE for the bulk of your development & testing, in
lab & office hours we will usually ask you to demo your program from
the Terminal command line.
</p>


&nbsp;<br>



<h2>Ubuntu in VirtualBox</h2>

<p class=DS_P>
Here are some install instructions on installing Ubuntu in
VirtualBox. If you want a different operating system, you can
generally use the same instructions and just substitute the OS image
you have for the Ubuntu one referenced in the instructions.
</p>

<ul class=DS_UL>
<li class=DS_LI><b>Windows:</b>
<a href="http://www.psychocats.net/ubuntu/virtualbox">http://www.psychocats.net/ubuntu/virtualbox</a>

<li class=DS_LI><b>Mac:</b> 
<a href="http://www.simplehelp.net/2015/06/09/how-to-install-ubuntu-on-your-mac/">http://www.simplehelp.net/2015/06/09/how-to-install-ubuntu-on-your-mac/</a>
</ul>

&nbsp;<br>


<h2>g++ or clang++ on Ubuntu:</h2>

<p class=DS_P>
Installing g++ or clang++ on Ubuntu (and many other GNU/Linux
variants) is as simple as running the following
commands in a terminal:
</p>

<pre>
    sudo apt-get install g++ gdb
    sudo apt-get install clang-10 lldb
    sudo apt-get install gcc-multilib g++-multilib
</pre>
<br>

<p class=DS_P>
  <b><em>
      Be sure to click through the other pages linked in the upper right
      menu.
      </em></b>
</p>

<?php include 'template_after.php'; ?>
