<?php include 'global_colors.php'; ?>
<style>
.cpp-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
.cpp-selected .icon-title{
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<table>
<tr>
<td class="left-sidebox">
<h1>Using Windows Subsystem for Linux (WSL)</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="development_environment.php" class="nav-row">C++ Installation Choices for Your Operating System</a></li>
<li><a href="wsl.php" class="nav-row cpp-selected sidebox">Using Windows Subsystem for Linux (WSL)</a></li>
<li><a href="editors_ides.php" class="nav-row" id=nav-sidebar>Editors, Compilers, and IDEs</a></li>
<li><a href="memory_debugging.php" class="nav-row">Memory Debugging</a></li>
<li><a href="installation_test.php" class="nav-row">Test Your Installation</a></li>
</ul>
</div>
</td>
</table>

<p class=DS_P>
The instructions below apply only to those using Windows as their
primary operating system.  We recommend WSL over Cygwin or VirtualBox
or dual booting Linux &mdash; unless you already know how to do that!  See
<a href="development_environment.php">C++ Installation Choices for Your
Operating System</a>.
</p>
</br>

<ol class=DS_OL>

<li class=DS_LI> 
<p class=DS_P>
<b>You'll need Windows 10, Version 1709 (2017 Fall Creators Update) or later to use WSL</b><br>
You can check your version by going to Start Menu &rarr; Settings &rarr; System &rarr; About.<br>
And under the "Windows specification" section, look for the "Version".
</p>

<li class=DS_LI> 
<p class=DS_P>
<b>Turn on "Windows Subsystem for Linux":</b><br>
Start Menu &rarr; Settings &rarr; Search for "Turn Windows features on or off".<br>
From that menu, check the box next to "Windows Subsystem for Linux"<br>
Also, check the box next to "Virtual Machine Platform" and<br>
check the box next to "Windows Hypervisor Platform".
</p>

<li class=DS_LI> 
<p class=DS_P>
You'll need to reboot your computer now.
</p>

<li class=DS_LI> 
<p class=DS_P>
<b>Go to the Microsoft Store</b>, <a href="https://aka.ms/wslstore">https://aka.ms/wslstore</a>,
<br>
Click "Open" to launch the store.<br>
Choose the Ubuntu distribution, and press "Get" and "Install" to download.
</p>


<em>If you run into problems on this step, perhaps with errors about needing to update a kernel, you can try these steps manually:</em>
<ul class=DS_UL>
  <li class=DS_LI>Open an <b>Administrator Powershell</b> and type these commands:</li>
  <pre>
    wsl --shutdown
    wsl --set-default-version 2
    wsl --update
    wsl --shutdown
    wsl --install -d Ubuntu
  </pre>
</ul>


<li class=DS_LI> 
<p class=DS_P>
  After the download is finished, press "Launch" (or "Open").<br>
  This will <b>Open the WSL/Ubuntu terminal and Install Ubuntu on Windows</b>.<br>
  You will be asked to choose a username & password.
</p>

<li class=DS_LI> 
<p class=DS_P>
You will probably want to <b>"Pin" Ubuntu to your Start menu</b>.<br>
You can do this by searching for "Ubuntu" in your start menu,
and then right clicking on the icon.
</p>

<li class=DS_LI>
<p class=DS_P>
<b>Install Ubuntu updates</b><br>
Type these commands into your WSL terminal:</p>

<pre>
    sudo apt update
    sudo apt dist-upgrade
</pre>
</br>

<p class=DS_P>
And press 'y' to continue.
</p>

<p class=DS_P>
During the installation process, you may be asked for permission to
restart services on future upgrades without asking.  It should be safe to say "yes".
</p>

<li class=DS_LI>
<p class=DS_P>
<b>Install the necessary packages for this course:</b>
</p>

<pre>
    sudo apt install g++ clang gdb lldb zip valgrind
</pre>
</br>


<p class=DS_P>
And press 'y' to continue.
</p>

<!--
<li class=DS_LI><p class=DS_P>
<b>Ensure that we can properly terminate a runaway WSL program:</b><br>
(In case Ctrl-c does not work for you.)
</p>

<p class=DS_P>
<em>NOTE: Do not attempt to edit WSL system files from Windows.  The
permissions and filesystem will get messed up and you'll need to
reinstall everything to recover.</em>
</p>

<p class=DS_P>
From the WSL terminal (using <tt>vi</tt> to edit the file):
</p>

<pre>
    vi ~/.bashrc
</pre>
</br>

<p class=DS_P>
Press 'G' to go to the end of file.  Press 'A' to append to the end of the line.<br>
Press enter twice.  Then type:
</p>

<pre>
   stty intr \
</pre>
</br>

<p class=DS_P>
Then Ctrl-v, Ctrl-k.  And the last line of the file should now look like this:

<pre>
   stty intr \^K
</pre>
</br>

<p class=DS_P>
Then press escape, then press ':wq' and enter to save the file.<br>
To have the new command take effect, run:
</p>

<pre>
   source ~/.bashrc
</pre>
</br>

<p class=DS_P>
Now if you want to quit a running program, press Ctrl-k.<br>
(Ctrl-c might work for you too.)
</p>
-->

<li class=DS_LI><p class=DS_P>
<b>Install Dr. Memory for WSL:</b><br>

<a href="memory_debugging.php">Follow these instructions...</a>

<li class=DS_LI>
<p class=DS_P><b>Install a good code editor on Windows.</b> 
<br>If you don't already have a favorite, we recomend
<a href="https://www.sublimetext.com/">Sublime Text</a>.
</p>


<li class=DS_LI>
<p class=DS_P><b>Create a new directory for your work for this course on Windows.</b><br>
Save the sample files to this directory.</p>

<ul class=DS_UL>
<li class=DS_LI><a href="lectures/temperature.cpp">temperature.cpp</a>
<li class=DS_LI><a href="lectures/infinite_loop.cpp">infinite_loop.cpp</a>
<li class=DS_LI><a href="lectures/memory_bugs.cpp">memory_bugs.cpp</a>
</ul>

<p class=DS_P>
<em>NOTE: It's easier if you avoid spaces or other non-alphanumeric
characters (underscore is fine) in your file & directory
names.</em>
</p>

<li class=DS_LI>
In your WSL terminal, <b>go to your directory for the
course</b>.<br>  Windows paths are available in WSL from
the <tt>/mnt/</tt> mount point.<br>
For example, if you saved the file
here:<br>
<tt>C:\Users\myusername\Documents\DataStructures\temperature.cpp</tt><br>

<pre>    
    cd /mnt/c/Users/myusername/Documents/DataStructures/

    ls
</pre>
</br>

<p class=DS_P>
And you should see your file.
</p>

<p class=DS_P>
<em>NOTE: If you have spaces in your directory or file names, you'll need
to escape them with a backslash.  E.g., <tt>Data\ Structures</tt>.</em>
</p>

<p class=DS_P>
Now compile the file:
</p>


<pre>
    clang++ -g -o temperature.out temperature.cpp
</pre>
</br>


<p class=DS_P>
And then run it:
</p>


<pre>
    ./temperature.out
</pre>
</br>


<p class=DS_P>
Or to test it through the memory debugger:
</p>


<pre>
    drmemory -- ./temperature.out
</pre>
</br>

<p class=DS_P>
Or:
</p>

<pre>
    valgrind ./temperature.out
</pre>
</br>


<li class=DS_LI><p class=DS_P>
    <b>OPTIONAL:</b>
    <b>To disable the tab-complete bell in WSL terminal</b> (it quickly gets annoying):
  </p>

  <p class=DS_P>
  <em>CAUTION: Some students have reported problems with specific keys on their keyboard no longer working after attempting to follow these instructions.  If this happens to you, you may need to un-install and re-install WSL.</em></p>

<p class=DS_P>
<em>NOTE: Do not attempt to edit WSL system files from Windows.  The
permissions and filesystem will get messed up and you'll need to
reinstall everything to recover.</em>
</p>

<p class=DS_P>
From the WSL terminal (using <tt>vi</tt> to edit the file):
</p>

<pre>
    sudo vi /etc/inputrc
</pre>
</br>

<p class=DS_P>
Scroll down to the line:
</p>

<pre>
    # set bell-style none
</pre>
</br>

<p class=DS_P>
press 'x' twice to uncomment that line:
</p>

<pre>
    set bell-style none
</pre>
</br>

<p class=DS_P>
press ':wq' and enter to save the file.
</p>

<p class=DS_P>
You'll need to close and restart your WSL terminal for it to take effect.
</p>


<li class=DS_LI><p class=DS_P>
    <b>OPTIONAL:</b>
    <b>You may want to disable Ctrl Key Shortcuts</b> (personal preference):<br> 
With an Ubuntu terminal open, left-click the Ubuntu icon in the upper left, <br>
chose Properties, and make sure "Enable Ctrl key Shortcuts" is unchecked.   <br>
If you leave the box checked then Ctrl+D will not send EOF signals.  <br>
It's not critical for this course, but this change might be useful in a Python <br>
command line interface (CLI).  Note: the checkbox does NOT affect Ctrl+C or Ctrl+Z.
</p>




<li class=DS_LI><p class=DS_P>
    <b>OPTIONAL:</b>
    <b>Configure WSL to start in your home directory or Data Structures directory</b>.<br>
    From your WSL terminal, type:
  </p>

<pre>
  echo 'cd /mnt/c/Users/myusername/Documents/DataStructures/' >> ~/.bashrc
</pre>
<br>

  <p class=DS_P>
    Replacing <tt>/mnt/c/Users/myusername/Documents/DataStructures/</tt> with the
starting directory of your choice on your system.
  </p>

<p class=DS_P>
<em>NOTE: Do not attempt to edit WSL system files from Windows.  The
permissions and filesystem will get messed up and you'll need to
reinstall everything to recover.</em>
</p>

<p class=DS_P>
The next time you close and restart your WSL terminal, it will start in the directory you specified above.
</p>

</li>
  



<li class=DS_LI>
<p class=DS_P>
<b>Now, <a href="installation_test.php">Test Your Installation</a>.
</b>
</p>


</ol>

<?php include 'template_after.php'; ?>
