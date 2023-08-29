<?php include 'global_colors.php'; ?>
<style>
  .calendar-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
.calendar-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<?php include 'calendar_data.php'; ?>

<h1>Course Calendar</h1> 

<?php
/*<p class=DS_COVID>
IMPORTANT NOTE: Due to COVID-19, all aspects of RPI's Spring 2022 Data
Structures course will be
conducted <a href="remote_learning.php">online</a> for the first two weeks. After
that depends on RPI's decision, but hopefully labs and office hours will be in-person
when allowed.
</p>*/
?>

<p class=DS_COVID>
Lecture and lab topics are tentative and will be updated as the term progresses.
</p>

<p class=DS_P>
  <b>All times below are the
    <a href="https://www.google.com/search?q=america+newyork+time+zone">America/New York timezone</a>.</b>
</p>




<table border="1px" align="top" bgcolor="ffffff" width="100%" >
<table border="1px" cellpadding="5" cellspacing="0" width="100%">

  <tr>
    <td width="8%" class=calendar_white><b>Monday</b></td>
    <td width="23%" class=calendar_white><b>Tuesday</b></td>
    <td width="23%" class=calendar_white><b>Wednesday</b></td>
    <td width="23%" class=calendar_white><b>Thursday</b></td>
    <td width="23%" class=calendar_white><b>Friday</b></td>
  </tr>

<?php


/* ------------------------------------------------- */
print '<tr>';
makeday     ("Aug 28","First Day of Classes");
makelecture ("Aug 29");
makelab     ("Aug 30"); 
blank();
makelecture ("Sep 1"); 
print '</tr>';


print '<tr>';
makeday     ("Sep 4","Labor Day, No classes");
makeday     ("Sep 5", "Monday schedule");
//makelecture ("Sep 5");
makelab     ("Sep 6"); 
makehomework("Sep 7"); 
makelecture ("Sep 8"); 
print '</tr>';

print '<tr>';
blank();
makelecture ("Sep 12");
makelab     ("Sep 13"); 
makehomework("Sep 14");
makelecture ("Sep 15"); 
print '</tr>';


print '<tr>';
blank();
makelecture ("Sep 19");
makelab     ("Sep 20");
//makehomework("Feb 3"); 
maketest("Sep 21"); 
makelecture ("Sep 22"); 
print '</tr>';


print '<tr>';
blank();
makelecture ("Sep 26"); 
makelab     ("Sep 27"); 
makehomework("Sep 28"); 
makelecture ("Sep 29"); 
print '</tr>';

  
print '<tr>';
//makeday		("Feb 15");
blank();
makelecture ("Oct 3"); 
makelab     ("Oct 4"); 
makehomework("Oct 5"); 
//maketest    ("Feb 18"); 
makelecture ("Oct 6"); 
print '</tr>';


print '<tr>';
makeday     ("Oct 9", "Columbus Day, No classes");
//makeday     ("Oct 10", "Monday schedule");
makelecture ("Oct 10"); 
makelab     ("Oct 11"); 
makehomework("Oct 12"); 
makelecture ("Oct 13"); 
print '</tr>';


print '<tr>';
blank();
makelecture ("Oct 17");
makelab     ("Oct 18"); 
maketest("Oct 19"); 
//makelecture ("Mar 3","Last day to drop classes");
makelecture ("Oct 20");
//makeday("Oct 20","DS Lecture cancelled. Last day to drop classes");
print '</tr>';


/*print '<tr>';
//makeday		("Oct 12","No classes");
blank();
makelecture ("Mar 8"); 
makelab     ("Mar 9"); 
//makehomework("Mar 10"); 
maketest    ("Mar 10"); 
makelecture ("Mar 11"); 
print '</tr>';*/

//print '<tr>';
//makeday ("Mar 6-10","Spring Break",5);
//print '</tr>';

print '<tr>';
blank();
makelecture ("Oct 24"); 
makelab     ("Oct 25"); 
makehomework("Oct 26"); 
makelecture ("Oct 27");
print '</tr>';

//GM WEEK
print '<tr>';
blank       ();
makelecture ("Oct 31"); 
//makeday		("Mar 22", "DS Lecture cancelled");
makelab     ("Nov 1");
//makeday     ("Nov 1","GM Wednesday, no lab");
makehomework("Nov 2"); 
makelecture ("Nov 3");
//makeday		("Mar 25", "DS Lecture cancelled");
print '</tr>';

print '<tr>';
blank       (); 
makelecture ("Nov 7"); 
makelab     ("Nov 8"); 
makehomework("Nov 9"); 
makelecture ("Nov 10"); 
print '</tr>';


print '<tr>';
blank();
//makeday     ("Apr 4","Pass/No Credit Deadline");
makelecture ("Nov 14"); 
makelab     ("Nov 15"); 
maketest("Nov 16"); 
makelecture ("Nov 17"); 
print '</tr>';

print '<tr>';
blank       (); 
makelecture ("Nov 21"); 
//makelab     ("Nov 22");
//makehomework("Nov 23"); 
makeday ("Nov 22-24","Thanksgiving Break, no classes",3); 
//makelecture ("Nov 24","Pass/No Credit Deadline"); 
print '</tr>';

print '<tr>';
blank       (); 
makelecture ("Nov 28"); 
makelab     ("Nov 29"); 
makehomework("Nov 30"); 
makelecture ("Dec 1");

print '</tr>';

print '<tr>';
blank       (); 
makelecture ("Dec 5"); 
makelab     ("Dec 6");
//makelab     ("Dec 6","Last Day of Classes");
makehomework("Dec 7"); 
makelecture ("Dec 8"); 
//makeday     ("Dec 7-8","Reading Days",2);
print '</tr>';

print '<tr>';
makeday     ("Dec 11-13","Reading Days",3);
makeday	("Dec 14","Other RPI Final Exams",1,"grey");
maketest ("Dec 15");
//makelab     ("Dec 6","Last Day of Classes");
print '</tr>';

print '<tr>';
makeday	("Dec 18-20","Other RPI Final Exams",3,"grey");
//makeday ("May 1-5","RPI Final Exams",5,"grey");
print '</tr>';

/*
print '<tr>';
makeday     ("Dec 12-14","Reading Days",1);
makeday     ("Dec 15-16","Other RPI Final Exams",2,"grey");
maketest     ("Dec 17");
makeday     ("Dec 18","Other RPI Final Exams",1,"grey");
print '</tr>';

print '<tr>';
makeday     ("Dec 21","Other RPI Final Exams",1,"grey");
blank     (4); 
print '</tr>';
*/



?>


</table>

<?php include 'template_after.php'; ?>
