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
<h1>Programming Advice from the TAs</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="programming_information.php" class="nav-row">Helpful C++ Programming Information</a></li>
<li><a href="good_programming.php" class="nav-row">Good Programming Practices</a></li>
<li><a href="advice_TAs.php" class="nav-row programming_information-selected sidebox">Programming Advice from the TAs</a></li>
</ul>
</div>
</td>
</table>




<ul class=DS_UL>

<li class=DS_LI><p class=DS_P>Read over the assignment in full before you begin coding.
</p>

<li class=DS_LI><p class=DS_P>Only code once you have at least a general idea of what your plan
of action is, and preferably only once you're sure of your data
structures and algorithms.
</p>

<li class=DS_LI><p class=DS_P>Once you start coding, make sure you compile after every 3 or 4
lines of code you write.  This way, if there is a compilation error,
you know exactly where it is occurring.
</p>

<li class=DS_LI><p class=DS_P>When you write a piece of functionality, test it fully
before you move on to the next one. Make sure every small piece of
code you write does what you want it to, and that way when things
aren't working later in your code you can assume the error is not in
the functionality you've already written and tested, but rather in
something new.
</p>

<li class=DS_LI><p class=DS_P>When compiling, always look at the first error, fix it, and
recompile.  Oftentimes, the first error causes several more.
</p>

<li class=DS_LI><p class=DS_P>Learn what the more common errors mean.  Nine times out of ten,
the same error is caused by the same mistake.
</p>

<li class=DS_LI><p class=DS_P>Comment the top of every function, because:
</p>
<ul class=DS_UL>
<li class=DS_LI><p class=DS_P>commenting is worth points, and 
</p>
<li class=DS_LI><p class=DS_P>it will help you remember what you were thinking when
you wrote that function when you have to edit it.
</p>
</ul>

<li class=DS_LI><p class=DS_P>Break code into logical small pieces; this allows easier debugging
and code re-use.
</p>

<li class=DS_LI><p class=DS_P>Learn how to use a debugger and take advantage of this tool.
</p>

<li class=DS_LI><p class=DS_P>Do not come to Thursday's (due date) office hours, download the
assignment in front of the TA, and expect help.  Start early, and come to
office hours with specific questions.
</p>

<li class=DS_LI><p class=DS_P>Do not submit code that does not compile.  If incomplete, submit
code that compiles with limited functionality.  (See earlier point
about compiling often.)
</p>

<li class=DS_LI><p class=DS_P>Read over the assignment again in full after you have finished
coding to make sure you haven't missed any requirements.
</p>

<li class=DS_LI><p class=DS_P>Backup your work before adding functionality or making major changes.
</p>

<li class=DS_LI><p class=DS_P>Proper formatting will make your code much more readable.
Learn how to control the indentation settings in your C++ development
environment so that it helps format and even auto-color your code for
you.
</p>

<li class=DS_LI><p class=DS_P>Install and learn how to compile & test your program on your
code with the same g++ compiler that the homework submission server
uses.
</p>

<li class=DS_LI><p class=DS_P>Get to know your graduate TAs and undergraduate programming
mentors by name ... they are invaluable resources.
</p>

<li class=DS_LI><p class=DS_P>When asking for help in person or sending email to your TA or
professor, be thorough and polite and remember that we receive
hundreds of emails each semester from students.  
</p>

</ul>

</p>



<?php include 'template_after.php'; ?>
